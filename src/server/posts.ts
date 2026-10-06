import { promises as fs } from "node:fs";
import path from "node:path";

import {
  CATEGORIES,
  isCategory,
  type CreatePostInput,
  type CreatePostResult,
  type Post,
} from "@/lib/blog";
import { readAdminSession } from "@/server/session";

const POSTS_FILE = path.join(process.cwd(), "data", "posts.json");
const MIN_TITLE = 3;
const MAX_TITLE = 160;
const MIN_EXCERPT = 10;
const MAX_EXCERPT = 400;
const MIN_BODY = 30;
const MAX_TAGS = 8;
const MAX_TAG_LENGTH = 32;

function fail(error: string): CreatePostResult {
  return { ok: false, error };
}

async function readAll(): Promise<Post[]> {
  try {
    const raw = await fs.readFile(POSTS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Post[]) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function writeAll(posts: Post[]): Promise<void> {
  await fs.mkdir(path.dirname(POSTS_FILE), { recursive: true });
  await fs.writeFile(POSTS_FILE, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
}

function byNewest(a: Post, b: Post): number {
  if (a.date === b.date) return b.slug.localeCompare(a.slug);
  return a.date < b.date ? 1 : -1;
}

function slugify(input: string): string {
  const slug = input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
  return slug.length > 0 ? slug : "post";
}

function countWords(body: string): number {
  return body.split(/\s+/).filter(Boolean).length;
}

export async function listPosts(): Promise<Post[]> {
  const posts = await readAll();
  return [...posts].sort(byNewest);
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await readAll();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function createPost(
  input: CreatePostInput,
): Promise<CreatePostResult> {
  const session = await readAdminSession();
  if (!session) {
    return fail("You are not signed in any more. Log in again to publish.");
  }

  const title = (input.title ?? "").trim();
  const excerpt = (input.excerpt ?? "").trim();
  const body = (input.body ?? "").trim();
  const category = String(input.category ?? "");
  const tags = (input.tags ?? [])
    .map((tag) => String(tag).trim())
    .filter((tag) => tag.length > 0)
    .slice(0, MAX_TAGS)
    .map((tag) => tag.slice(0, MAX_TAG_LENGTH));

  if (title.length < MIN_TITLE) {
    return fail(`Title needs at least ${MIN_TITLE} characters.`);
  }
  if (title.length > MAX_TITLE) {
    return fail(`Title must stay under ${MAX_TITLE} characters.`);
  }
  if (!isCategory(category)) {
    return fail(`Pick one of the categories: ${CATEGORIES.join(", ")}.`);
  }
  if (excerpt.length < MIN_EXCERPT) {
    return fail(`Excerpt needs at least ${MIN_EXCERPT} characters.`);
  }
  if (excerpt.length > MAX_EXCERPT) {
    return fail(`Excerpt must stay under ${MAX_EXCERPT} characters.`);
  }
  if (body.length < MIN_BODY) {
    return fail(`The post needs at least ${MIN_BODY} characters of content.`);
  }

  const existing = await readAll();
  const base = slugify(title);
  let slug = base;
  let suffix = 2;
  while (existing.some((post) => post.slug === slug)) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }

  const words = countWords(body);
  const post: Post = {
    slug,
    title,
    category: category as Post["category"],
    date: new Date().toISOString().slice(0, 10),
    readTime: `${Math.max(1, Math.ceil(words / 220))} min read`,
    excerpt,
    body,
    tags,
  };

  await writeAll([post, ...existing]);
  return { ok: true, slug };
}
