import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";

import { Tag } from "@/components/site/sections";
import { formatPostDate } from "@/lib/blog";
import { getPostFn } from "@/lib/blog-api";

export const Route = createFileRoute("/blogs/$slug")({
  loader: async ({ params }) => {
    const post = await getPostFn({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Abrar Anan Raiyan` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [],
  }),
  notFoundComponent: PostNotFound,
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  const paragraphs = post.body
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main id="top">
      <article>
        <header className="border-b border-border">
          <div className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
            <Link
              to="/blogs"
              className="label-mono inline-flex items-center gap-2 transition-colors hover:text-signal"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All posts
            </Link>
            <p className="mt-9 font-mono text-xs uppercase tracking-[0.18em] text-signal">
              {post.category}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              {post.title}
            </h1>
            <div className="label-mono mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>{formatPostDate(post.date)}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-signal" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
          <p className="border-l-2 border-signal pl-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-10 space-y-6 text-base leading-8 md:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          <div className="mt-14 border-t border-border pt-8">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

function PostNotFound() {
  return (
    <main id="top">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start px-6 py-24 md:py-32">
        <p className="label-mono mb-5">
          <span className="text-signal">$</span> cat: no such post
        </p>
        <h1 className="text-4xl leading-tight md:text-5xl">
          This post <span className="text-signal">does not exist</span>.
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          It may have been renamed or removed. The rest of the writing is still
          here.
        </p>
        <Link
          to="/blogs"
          className="mt-8 inline-flex items-center gap-2 rounded-sm border border-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all posts
        </Link>
      </div>
    </main>
  );
}
