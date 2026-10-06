import { neon } from "@neondatabase/serverless";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadLocalEnv() {
  const envPath = path.join(ROOT, ".env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key]) continue;
    const value = rawValue.replace(/^["']|["']$/g, "");
    if (value.length > 0) process.env[key] = value;
  }
}

loadLocalEnv();

const CONNECTION_KEYS = ["POSTGRES_URL", "DATABASE_URL", "POSTGRES_PRISMA_URL"];
const connectionKey = CONNECTION_KEYS.find((key) =>
  (process.env[key] ?? "").trim(),
);
const url = connectionKey ? process.env[connectionKey].trim() : undefined;

if (!url) {
  console.error(
    `No database URL found. Set one of: ${CONNECTION_KEYS.join(", ")} (in .env locally, or in Vercel → Settings → Environment Variables).`,
  );
  process.exit(1);
}

const sql = neon(url);
const file = path.join(ROOT, "data", "posts.json");
const seedPosts = existsSync(file)
  ? JSON.parse(readFileSync(file, "utf8"))
  : [];

console.log(
  `Using ${connectionKey} (${url.split("@")[1]?.split("/")[0] ?? "connection"})`,
);

const [, , command, argument] = process.argv;

if (command === "--clear") {
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      slug text PRIMARY KEY,
      data jsonb NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `;
  const [{ count: before }] =
    await sql`SELECT count(*)::int AS count FROM posts`;
  await sql`DELETE FROM posts`;
  const [{ count: after }] =
    await sql`SELECT count(*)::int AS count FROM posts`;
  console.log(`Removed ${before - after} post(s). Posts in database: ${after}`);
  process.exit(0);
}

if (command === "--delete") {
  if (!argument) {
    console.error("Usage: npm run db:setup -- --delete <slug>");
    process.exit(1);
  }
  const deleted = await sql`
    DELETE FROM posts WHERE slug = ${argument} RETURNING slug
  `;
  console.log(
    deleted.length > 0
      ? `Deleted "${deleted[0].slug}"`
      : `No post with slug "${argument}"`,
  );
  process.exit(0);
}

await sql`
  CREATE TABLE IF NOT EXISTS posts (
    slug text PRIMARY KEY,
    data jsonb NOT NULL,
    updated_at timestamptz NOT NULL DEFAULT now()
  )
`;
console.log("Table ready: posts");

const [{ count }] = await sql`SELECT count(*)::int AS count FROM posts`;
console.log(`Posts in database: ${count}`);

if (count === 0 && seedPosts.length > 0) {
  for (const post of seedPosts) {
    await sql`
      INSERT INTO posts (slug, data, updated_at)
      VALUES (${post.slug}, ${JSON.stringify(post)}, now())
      ON CONFLICT (slug) DO UPDATE SET data = EXCLUDED.data, updated_at = now()
    `;
  }
  console.log(`Seeded ${seedPosts.length} post(s) from data/posts.json`);
}

const [{ db, usr }] =
  await sql`SELECT current_database() AS db, current_user AS usr`;
console.log(`Connected to ${db} as ${usr} — ready.`);
