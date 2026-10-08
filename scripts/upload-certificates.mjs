import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CERTS_DIR = path.join(ROOT, "src", "Certifications");
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
    .replace(/\.(jpe?g|png|webp|gif)$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function splitTitleIssuer(filename) {
  const base = filename.replace(/\.(jpe?g|png|webp|gif)$/i, "");
  const parts = base.split(" - ");
  if (parts.length >= 2) {
    const issuer = parts.pop().trim();
    return { title: parts.join(" - ").trim(), issuer };
  }
  return { title: base.trim(), issuer: "" };
}

const files = readdirSync(CERTS_DIR)
  .filter((name) => /\.(jpe?g|png|webp|gif)$/i.test(name))
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "accent" }));

if (files.length === 0) {
  console.error(`No images found in ${CERTS_DIR}`);
  process.exit(1);
}

const cfg = required();
const config = {
  bucket: cfg.R2_BUCKET_NAME,
  publicBaseUrl: cfg.R2_PUBLIC_BASE_URL.replace(/\/+$/, ""),
};
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
};

let uploaded = 0;
const credentials = [];

for (const name of files) {
  const ext = name.split(".").pop().toLowerCase();
  const stem = slugify(name);
  const previousKey = `certificates/${stem}`;
  const key = `certificates/${stem}.${ext}`;
  const body = new Uint8Array(readFileSync(path.join(CERTS_DIR, name)));
  await client.send(
    new DeleteObjectCommand({ Bucket: config.bucket, Key: previousKey }),
  );
  await client.send(
    new PutObjectCommand({
      Bucket: config.bucket,
      Key: key,
      Body: body,
      ContentType: contentTypeByExt[ext] ?? "application/octet-stream",
      CacheControl: CACHE_CONTROL,
    }),
  );
  const { title, issuer } = splitTitleIssuer(name);
  credentials.push({
    title,
    issuer,
    image: `${config.publicBaseUrl}/${key}`,
  });
  uploaded += 1;
  console.log(`ok ${key}  (${(body.length / 1024).toFixed(0)} KB)`);
}

const types = `export type Credential = {
  title: string;
  issuer: string;
  /** ISO date e.g. "2024-03" or "2024-03-14" — shown as "Issued Mar 2024" on the card. */
  issuedDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  image: string;
};

/** Add new certificates here — upload the image to R2 and paste its public URL. */
export const credentials: Credential[] = ${JSON.stringify(credentials, null, 2)};
`;

const outPath = path.join(ROOT, "src", "components", "site", "credentials.ts");
writeFileSync(outPath, types, "utf8");
console.log(
  `\nUploaded ${uploaded}/${files.length} to R2. Wrote ${path.relative(ROOT, outPath)}`,
);
