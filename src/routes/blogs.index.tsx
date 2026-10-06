import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail } from "lucide-react";

import { Tag } from "@/components/site/sections";
import { CATEGORIES, formatPostDate, type Category } from "@/lib/blog";
import { getPostsFn } from "@/lib/blog-api";

const TITLE = "Blogs — Abrar Anan Raiyan";
const DESCRIPTION =
  "Notes on shipping software without chaos — agile delivery, product ownership, and AI-driven workflows.";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  loader: () => getPostsFn(),
  component: Blogs,
});

type Filter = "All" | Category;

function Blogs() {
  const posts = Route.useLoaderData();
  const [active, setActive] = useState<Filter>("All");

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const post of posts) {
      map.set(post.category, (map.get(post.category) ?? 0) + 1);
    }
    return map;
  }, [posts]);

  const visible =
    active === "All" ? posts : posts.filter((post) => post.category === active);

  const filters: Filter[] = [
    "All",
    ...CATEGORIES.filter((category) => counts.has(category)),
  ];

  return (
    <main id="top">
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
          <p className="label-mono mb-6">
            <span className="text-signal">$</span> cat blog/*.md
          </p>
          <h1 className="text-5xl leading-[0.95] md:text-7xl">
            Notes on
            <br />
            <span className="text-signal">shipping software</span>
            <br />
            without chaos.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Practical writing from the trenches of delivery — agile without the
            theatre, product decisions that hold up, and AI workflows that
            actually remove busywork.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono mb-3">
                01 <span className="text-signal">/</span> ls blog/
              </p>
              <h2 className="text-3xl leading-none md:text-5xl">
                Latest writing
              </h2>
            </div>
            <p className="label-mono">{posts.length} posts</p>
          </div>

          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = active === filter;
              const count =
                filter === "All" ? posts.length : (counts.get(filter) ?? 0);
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "border-signal bg-signal/10 text-signal"
                      : "border-border text-muted-foreground hover:border-signal hover:text-signal"
                  }`}
                >
                  {filter}
                  <span className="ml-2 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>

          {visible.length === 0 ? (
            <p className="border border-border bg-surface px-6 py-10 text-center font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              No posts in this category yet.
            </p>
          ) : (
            <div className="space-y-px bg-border">
              {visible.map((post) => (
                <article
                  key={post.slug}
                  className="grid gap-4 bg-background p-6 transition-colors hover:bg-surface md:grid-cols-[200px_1fr] md:p-8"
                >
                  <div className="label-mono space-y-2 md:pt-1">
                    <p>{formatPostDate(post.date)}</p>
                    <p className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-signal" />
                      {post.readTime}
                    </p>
                  </div>
                  <div>
                    <p className="label-mono mb-2 text-signal">
                      {post.category}
                    </p>
                    <h3 className="text-xl md:text-2xl">
                      <Link
                        to="/blogs/$slug"
                        params={{ slug: post.slug }}
                        className="transition-colors hover:text-signal"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono mb-3">
              02 <span className="text-signal">/</span> ./contact --open
            </p>
            <h2 className="text-3xl leading-none md:text-5xl">
              Got a topic request?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Working through a delivery problem, an AI feature that needs
              scoping, or a process that stopped scaling? Tell me about it — it
              might become the next post.
            </p>
          </div>
          <a
            href="mailto:abraranan18@gmail.com"
            className="inline-flex shrink-0 items-center gap-3 rounded-sm bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> abraranan18@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
