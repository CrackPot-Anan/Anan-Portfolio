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
  image?: string;
  alt?: string;
  hidden?: boolean;
};

/** A post without its body. Used for listings so we never ship article text twice. */
export type PostSummary = Omit<Post, "body">;

export type CreatePostInput = {
  title: string;
  category: Category;
  excerpt: string;
  body: string;
  tags: string[];
  image?: string;
  alt?: string;
  slug?: string;
  hidden?: boolean;
};

export type CreatePostResult =
  { ok: true; slug: string } | { ok: false; error: string };

export type DeletePostResult = { ok: true } | { ok: false; error: string };

export type VisibilityResult = { ok: true } | { ok: false; error: string };

export type UploadImageResult =
  { ok: true; url: string } | { ok: false; error: string };

export type UpdatePostInput = Omit<CreatePostInput, "slug"> & {
  slug: string;
  newSlug?: string;
};

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

export function toPostSummary(post: Post): PostSummary {
  return {
    slug: post.slug,
    title: post.title,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    excerpt: post.excerpt,
    tags: post.tags,
    image: post.image,
    alt: post.alt,
    hidden: post.hidden,
  };
}

/**
 * Ranks other posts against the current one by shared tags and category.
 * Shared tags weigh double so a topical neighbour beats a same-category one.
 */
export function pickRelated(
  posts: PostSummary[],
  current: Pick<PostSummary, "slug" | "category" | "tags">,
  limit = 3,
): PostSummary[] {
  const currentTags = new Set(current.tags);
  const scored = posts
    .filter((post) => post.slug !== current.slug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => currentTags.has(tag)).length;
      const sameCategory = post.category === current.category ? 1 : 0;
      return { post, score: sharedTags * 2 + sameCategory };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((entry) => entry.post);
}

const postDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function formatPostDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return postDateFormatter.format(parsed);
}
