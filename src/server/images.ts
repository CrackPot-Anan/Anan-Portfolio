import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

import type { UploadImageResult } from "@/lib/blog";
import { readAdminSession } from "@/server/session";

const MAX_IMAGE_BYTES = 1_500_000;
const CACHE_CONTROL = "public, max-age=31536000, immutable";

const EXTENSIONS: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
};

type R2Config = {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  publicBaseUrl: string;
};

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

function r2Config(): R2Config {
  const accountId = readEnv("R2_ACCOUNT_ID");
  const accessKeyId = readEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = readEnv("R2_SECRET_ACCESS_KEY");
  const bucket = readEnv("R2_BUCKET_NAME");
  const publicBaseUrl = readEnv("R2_PUBLIC_BASE_URL");

  const missing: string[] = [];
  if (!accountId) missing.push("R2_ACCOUNT_ID");
  if (!accessKeyId) missing.push("R2_ACCESS_KEY_ID");
  if (!secretAccessKey) missing.push("R2_SECRET_ACCESS_KEY");
  if (!bucket) missing.push("R2_BUCKET_NAME");
  if (!publicBaseUrl) missing.push("R2_PUBLIC_BASE_URL");
  if (missing.length > 0) {
    throw new Error(
      `Image uploads are not configured. Missing: ${missing.join(", ")}`,
    );
  }

  return {
    accountId: accountId as string,
    accessKeyId: accessKeyId as string,
    secretAccessKey: secretAccessKey as string,
    bucket: bucket as string,
    publicBaseUrl: (publicBaseUrl as string).replace(/\/+$/, ""),
  };
}

function createClient(config: R2Config): S3Client {
  return new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    forcePathStyle: true,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });
}

function randomHex(length: number): string {
  const bytes = new Uint8Array(Math.ceil(length / 2));
  globalThis.crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, length);
}

function fail(error: string): UploadImageResult {
  return { ok: false, error };
}

export async function uploadCoverImage(file: File): Promise<UploadImageResult> {
  const session = await readAdminSession();
  if (!session) {
    return fail(
      "You are not signed in any more. Log in again to upload images.",
    );
  }

  const extension = EXTENSIONS[file.type];
  if (!extension) {
    return fail("Pick an image file — PNG, JPEG, WebP or GIF.");
  }
  if (file.size === 0) {
    return fail("That file could not be read as an image.");
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return fail("Cover image must be under 1.5 MB.");
  }

  let config: R2Config;
  try {
    config = r2Config();
  } catch (error) {
    return fail(
      error instanceof Error
        ? error.message
        : "Image uploads are not configured.",
    );
  }

  const day = new Date().toISOString().slice(0, 10);
  const key = `covers/${day}-${randomHex(8)}.${extension}`;

  try {
    await createClient(config).send(
      new PutObjectCommand({
        Bucket: config.bucket,
        Key: key,
        Body: new Uint8Array(await file.arrayBuffer()),
        ContentType: file.type,
        CacheControl: CACHE_CONTROL,
      }),
    );
  } catch (error) {
    console.error("[images] R2 upload failed", error);
    return fail("Couldn't upload the image to storage. Try again.");
  }

  return { ok: true, url: `${config.publicBaseUrl}/${key}` };
}

export async function deleteCoverImageByUrl(url: string): Promise<void> {
  let config: R2Config;
  try {
    config = r2Config();
  } catch {
    return;
  }

  const prefix = `${config.publicBaseUrl}/`;
  if (!url.startsWith(prefix)) return;
  const key = url.slice(prefix.length);
  if (!key.startsWith("covers/")) return;

  try {
    await createClient(config).send(
      new DeleteObjectCommand({ Bucket: config.bucket, Key: key }),
    );
  } catch (error) {
    console.error("[images] R2 delete failed", error);
  }
}
