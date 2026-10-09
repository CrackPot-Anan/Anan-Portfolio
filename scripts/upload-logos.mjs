import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LOGOS_DIR = path.join(ROOT, "src", "assets", "logos");
const PREFIX = "logos";
const CACHE_CONTROL = "public, max-age=31536000, immutable";

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

function readEnv(name) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

function required() {
  const names = [
    "R2_ACCOUNT_ID",
    "R2_ACCESS_KEY_ID",
    "R2_SECRET_ACCESS_KEY",
    "R2_BUCKET_NAME",
    "R2_PUBLIC_BASE_URL",
  ];
  const missing = names.filter((name) => !readEnv(name));
  if (missing.length > 0) {
    console.error(`R2 is not configured. Missing: ${missing.join(", ")}`);
    process.exit(1);
  }
  return Object.fromEntries(names.map((name) => [name, readEnv(name)]));
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\.(jpe?g|png|webp|gif|svg)$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const files = readdirSync(LOGOS_DIR)
  .filter((name) => /\.(jpe?g|png|webp|gif|svg)$/i.test(name))
  .sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.error(`No images found in ${LOGOS_DIR}`);
  process.exit(1);
}

const cfg = required();
const publicBaseUrl = cfg.R2_PUBLIC_BASE_URL.replace(/\/+$/, "");
const client = new S3Client({
  region: "auto",
  endpoint: `https://${cfg.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  forcePathStyle: true,
  credentials: {
    accessKeyId: cfg.R2_ACCESS_KEY_ID,
    secretAccessKey: cfg.R2_SECRET_ACCESS_KEY,
  },
});

const contentTypeByExt = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  svg: "image/svg+xml",
};

for (const name of files) {
  const ext = name.split(".").pop().toLowerCase();
  const key = `${PREFIX}/${slugify(name)}.${ext}`;
  const body = new Uint8Array(readFileSync(path.join(LOGOS_DIR, name)));
  await client.send(
    new DeleteObjectCommand({ Bucket: cfg.R2_BUCKET_NAME, Key: key }),
  );
  await client.send(
    new PutObjectCommand({
      Bucket: cfg.R2_BUCKET_NAME,
      Key: key,
      Body: body,
      ContentType: contentTypeByExt[ext] ?? "application/octet-stream",
      CacheControl: CACHE_CONTROL,
    }),
  );
  console.log(`${name} -> ${publicBaseUrl}/${key}`);
}

const deleteFlag = process.argv.indexOf("--delete");
if (deleteFlag !== -1) {
  for (const key of process.argv.slice(deleteFlag + 1)) {
    await client.send(
      new DeleteObjectCommand({ Bucket: cfg.R2_BUCKET_NAME, Key: key }),
    );
    console.log(`deleted ${key}`);
  }
}
