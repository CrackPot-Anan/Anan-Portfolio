import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

import type { Post } from "@/lib/blog";

const CONNECTION_KEYS = ["POSTGRES_URL", "DATABASE_URL", "POSTGRES_PRISMA_URL"];

let client: NeonQueryFunction<false, false> | null | undefined;
let schemaReady = false;

function connectionString(): string | undefined {
  for (const key of CONNECTION_KEYS) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return undefined;
}

function getSql(): NeonQueryFunction<false, false> | null {
  if (client !== undefined) return client;
  const url = connectionString();
  if (!url) {
    client = null;
    return null;
  }
  try {
    client = neon(url);
  } catch (error) {
    console.error("[posts] database client failed:", describe(error));
    client = null;
  }
  return client;
}

function describe(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function ensureSchema(
  sql: NeonQueryFunction<false, false>,
): Promise<void> {
  if (schemaReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      slug text PRIMARY KEY,
      data jsonb NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS content_items (
      collection text NOT NULL,
      id text NOT NULL,
      data jsonb NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY (collection, id)
    )
  `;
  schemaReady = true;
}

export function dbEnabled(): boolean {
  return getSql() !== null;
}

export async function readPosts(): Promise<Post[] | null> {
  const sql = getSql();
  if (!sql) return null;
  try {
    await ensureSchema(sql);
    const rows =
      await sql`SELECT data FROM posts ORDER BY data->>'date' DESC, slug DESC`;
    return rows.map((row) => row.data as Post);
  } catch (error) {
    console.error("[posts] database read failed:", describe(error));
    return null;
  }
}

export async function writePost(post: Post): Promise<boolean> {
  const sql = getSql();
  if (!sql) return false;
  try {
    await ensureSchema(sql);
    await sql`
      INSERT INTO posts (slug, data, updated_at)
      VALUES (${post.slug}, ${JSON.stringify(post)}, now())
      ON CONFLICT (slug) DO UPDATE SET data = EXCLUDED.data, updated_at = now()
    `;
    return true;
  } catch (error) {
    console.error("[posts] database write failed:", describe(error));
    return false;
  }
}

export async function writePosts(posts: Post[]): Promise<boolean> {
  const sql = getSql();
  if (!sql) return false;
  if (posts.length === 0) return true;
  try {
    await ensureSchema(sql);
    for (const post of posts) {
      await sql`
        INSERT INTO posts (slug, data, updated_at)
        VALUES (${post.slug}, ${JSON.stringify(post)}, now())
        ON CONFLICT (slug) DO UPDATE SET data = EXCLUDED.data, updated_at = now()
      `;
    }
    return true;
  } catch (error) {
    console.error("[posts] database seed failed:", describe(error));
    return false;
  }
}

export async function deletePostRow(slug: string): Promise<boolean> {
  const sql = getSql();
  if (!sql) return false;
  try {
    await ensureSchema(sql);
    await sql`DELETE FROM posts WHERE slug = ${slug}`;
    return true;
  } catch (error) {
    console.error("[posts] database delete failed:", describe(error));
    return false;
  }
}

export async function readCollection(
  collection: string,
): Promise<Array<Record<string, unknown>> | null> {
  const sql = getSql();
  if (!sql) return null;
  try {
    await ensureSchema(sql);
    const rows = await sql`
      SELECT data FROM content_items
      WHERE collection = ${collection}
      ORDER BY id
    `;
    return rows.map((row) => row.data as Record<string, unknown>);
  } catch (error) {
    console.error(
      `[content] database read failed for ${collection}:`,
      describe(error),
    );
    return null;
  }
}

export async function writeCollectionItem(
  collection: string,
  id: string,
  data: unknown,
): Promise<boolean> {
  const sql = getSql();
  if (!sql) return false;
  try {
    await ensureSchema(sql);
    await sql`
      INSERT INTO content_items (collection, id, data, updated_at)
      VALUES (${collection}, ${id}, ${JSON.stringify(data)}, now())
      ON CONFLICT (collection, id)
      DO UPDATE SET data = EXCLUDED.data, updated_at = now()
    `;
    return true;
  } catch (error) {
    console.error(
      `[content] database write failed for ${collection}:`,
      describe(error),
    );
    return false;
  }
}

export async function deleteCollectionItem(
  collection: string,
  id: string,
): Promise<boolean> {
  const sql = getSql();
  if (!sql) return false;
  try {
    await ensureSchema(sql);
    await sql`
      DELETE FROM content_items
      WHERE collection = ${collection} AND id = ${id}
    `;
    return true;
  } catch (error) {
    console.error(
      `[content] database delete failed for ${collection}:`,
      describe(error),
    );
    return false;
  }
}
