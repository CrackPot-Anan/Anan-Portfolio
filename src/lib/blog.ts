export const CATEGORIES = [
  "Technological",
  "Philosophical",
  "Storytelling",
  "Life update",
  "Newsletter",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Post = {
  slug: string;
  title: string;
  category: Category;
  date: string;
  readTime: string;
  excerpt: string;
  body: string;
  tags: string[];
};

export type CreatePostInput = {
  title: string;
  category: Category;
  excerpt: string;
  body: string;
  tags: string[];
};

export type CreatePostResult =
  { ok: true; slug: string } | { ok: false; error: string };

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

export function formatPostDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
