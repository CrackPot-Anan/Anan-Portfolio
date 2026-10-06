import { promises as fs } from "node:fs";
import path from "node:path";

import {
  CATEGORIES,
  isCategory,
  type Category,
  type CreatePostInput,
  type CreatePostResult,
  type Post,
  type UpdatePostInput,
} from "@/lib/blog";
import { dbEnabled, readPosts, writePost, writePosts } from "@/server/db";
import { readAdminSession } from "@/server/session";

const POSTS_FILE = path.join(process.cwd(), "data", "posts.json");
const MIN_TITLE = 3;
const MAX_TITLE = 160;
const MIN_EXCERPT = 10;
const MAX_EXCERPT = 400;
const MIN_BODY = 30;
const MAX_TAGS = 8;
const MAX_TAG_LENGTH = 32;
const WORDS_PER_MINUTE = 220;

type NormalizedInput = {
  title: string;
  category: Category;
  excerpt: string;
  body: string;
  tags: string[];
};

type NormalizeResult =
  { ok: true; value: NormalizedInput } | { ok: false; error: string };

function fail(error: string): CreatePostResult {
  return { ok: false, error };
}

function readFilePosts(): Promise<Post[]> {
  return fs
    .readFile(POSTS_FILE, "utf8")
    .then((raw) => {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as Post[]) : [];
    })
    .catch((error: NodeJS.ErrnoException) => {
      if (error.code === "ENOENT") return [];
      throw error;
    });
}

async function writeFilePosts(posts: Post[]): Promise<void> {
  await fs.mkdir(path.dirname(POSTS_FILE), { recursive: true });
  await fs.writeFile(POSTS_FILE, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
}

async function readAll(): Promise<Post[]> {
  if (dbEnabled()) {
    const fromDatabase = await readPosts();
    if (fromDatabase) {
      if (fromDatabase.length === 0) {
        const seed = await readFilePosts();
        if (seed.length > 0) {
          await writePosts(seed);
          return seed;
        }
      }
      return fromDatabase;
    }
    console.error(
      "[posts] falling back to the local file, database unavailable",
    );
  }
  return await readFilePosts();
}

async function persistPost(
  post: Post,
  snapshot: Post[],
): Promise<string | null> {
  if (dbEnabled()) {
    return (await writePost(post))
      ? null
      : "Couldn't save to the database. Check POSTGRES_URL / DATABASE_URL.";
  }
  const next = snapshot.some((entry) => entry.slug === post.slug)
    ? snapshot.map((entry) => (entry.slug === post.slug ? post : entry))
    : [post, ...snapshot];
  await writeFilePosts(next);
  return null;
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

function readTimeFor(body: string): string {
  return `${Math.max(1, Math.ceil(countWords(body) / WORDS_PER_MINUTE))} min read`;
}

function normalizePostInput(input: CreatePostInput): NormalizeResult {
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
    return {
      ok: false,
      error: `Title needs at least ${MIN_TITLE} characters.`,
    };
  }
  if (title.length > MAX_TITLE) {
    return {
      ok: false,
      error: `Title must stay under ${MAX_TITLE} characters.`,
    };
  }
  if (!isCategory(category)) {
    return {
      ok: false,
      error: `Pick one of the categories: ${CATEGORIES.join(", ")}.`,
    };
  }
  if (excerpt.length < MIN_EXCERPT) {
    return {
      ok: false,
      error: `Excerpt needs at least ${MIN_EXCERPT} characters.`,
    };
  }
  if (excerpt.length > MAX_EXCERPT) {
    return {
      ok: false,
      error: `Excerpt must stay under ${MAX_EXCERPT} characters.`,
    };
  }
  if (body.length < MIN_BODY) {
    return {
      ok: false,
      error: `The post needs at least ${MIN_BODY} characters of content.`,
    };
  }

  return {
    ok: true,
    value: { title, category: category as Category, excerpt, body, tags },
  };
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

  const normalized = normalizePostInput(input);
  if (!normalized.ok) return fail(normalized.error);
  const value = normalized.value;

  const existing = await readAll();
  const base = slugify(value.title);
  let slug = base;
  let suffix = 2;
  while (existing.some((post) => post.slug === slug)) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }

  const post: Post = {
    slug,
    title: value.title,
    category: value.category,
    date: new Date().toISOString().slice(0, 10),
    readTime: readTimeFor(value.body),
    excerpt: value.excerpt,
    body: value.body,
    tags: value.tags,
  };

  const error = await persistPost(post, existing);
  if (error) return fail(error);
  return { ok: true, slug };
}

export async function updatePost(
  input: UpdatePostInput,
): Promise<CreatePostResult> {
  const session = await readAdminSession();
  if (!session) {
    return fail(
      "You are not signed in any more. Log in again to save changes.",
    );
  }

  const slug = String(input.slug ?? "").trim();
  if (!slug) return fail("That post could not be found.");

  const normalized = normalizePostInput(input);
  if (!normalized.ok) return fail(normalized.error);
  const value = normalized.value;

  const existing = await readAll();
  const current = existing.find((post) => post.slug === slug);
  if (!current) return fail("That post no longer exists.");

  const post: Post = {
    ...current,
    title: value.title,
    category: value.category,
    excerpt: value.excerpt,
    body: value.body,
    tags: value.tags,
    readTime: readTimeFor(value.body),
  };

  const error = await persistPost(post, existing);
  if (error) return fail(error);
  return { ok: true, slug };
}
