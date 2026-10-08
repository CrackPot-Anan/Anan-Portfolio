import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, User } from "lucide-react";

import { Tag } from "@/components/site/sections";
import { CATEGORIES, formatPostDate, type Category } from "@/lib/blog";
import { getPostsFn } from "@/lib/blog-api";
import { getHobbiesFn, getStoriesFn } from "@/lib/content-api";

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
  loader: async () => {
    const [posts, hobbies, stories] = await Promise.all([
      getPostsFn(),
      getHobbiesFn(),
      getStoriesFn(),
    ]);
    return { posts, hobbies, stories };
  },
  component: Blogs,
});

type Filter = "All" | Category;

function Blogs() {
  const { posts, hobbies, stories } = Route.useLoaderData();
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
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-0">
            <div className="lg:border-r lg:border-border lg:pr-10">
              <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="label-mono mb-3">
                    01 <span className="text-signal">/</span> ls blog/
                  </p>
                  <h1 className="text-4xl leading-none md:text-5xl">
                    Latest writing
                  </h1>
                </div>
                <div className="flex flex-col items-start gap-3 sm:items-end">
                  <p className="label-mono">{posts.length} posts</p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-sm border border-signal px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
                  >
                    <User className="h-3.5 w-3.5" /> Who's Anan
                  </Link>
                </div>
              </div>

              {posts.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {filters.map((filter) => {
                    const isActive = active === filter;
                    const count =
                      filter === "All"
                        ? posts.length
                        : (counts.get(filter) ?? 0);
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
              )}

              {posts.length === 0 ? (
                <div className="border border-border bg-surface px-6 py-14 text-center">
                  <p className="label-mono mb-4">
                    <span className="text-signal">$</span> ls blog/ — 0 files
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    No posts yet. New writing will show up here.
                  </p>
                </div>
              ) : visible.length === 0 ? (
                <p className="border border-border bg-surface px-6 py-10 text-center font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  No posts in this category yet.
                </p>
              ) : (
                <div className="space-y-px bg-border">
                  {visible.map((post) => (
                    <article
                      key={post.slug}
                      className="grid gap-4 bg-background p-6 transition-colors hover:bg-surface md:grid-cols-[160px_1fr] md:p-7"
                    >
                      <div className="label-mono space-y-2 md:pt-1">
                        {post.image && (
                          <img
                            src={post.image}
                            alt=""
                            className="mb-3 aspect-video w-full rounded-xl border border-border bg-surface object-cover"
                          />
                        )}
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
                        <h2 className="text-xl md:text-2xl">
                          <Link
                            to="/blogs/$slug"
                            params={{ slug: post.slug }}
                            className="transition-colors hover:text-signal"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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

            <div className="flex flex-col gap-8 self-start lg:sticky lg:top-24 lg:pl-10">
              <div className="border border-border bg-surface p-6 md:p-7">
                <p className="label-mono mb-4">
                  02 <span className="text-signal">/</span> cat hobbies.md
                </p>
                <h2 className="text-2xl md:text-3xl">Hobbies</h2>
                <ul className="mt-6 space-y-5">
                  {hobbies.map((hobby) => (
                    <li
                      key={hobby.name}
                      className="border-t border-border pt-5 first:border-t-0 first:pt-0"
                    >
                      <p className="text-base">{hobby.name}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {hobby.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border bg-surface p-6 md:p-7">
                <p className="label-mono mb-4">
                  03 <span className="text-signal">/</span> cat stories.md
                </p>
                <h2 className="text-2xl md:text-3xl">Stories</h2>
                <ul className="mt-6 space-y-5">
                  {stories.map((story) => (
                    <li
                      key={story.title}
                      className="border-t border-border pt-5 first:border-t-0 first:pt-0"
                    >
                      <p className="text-base">{story.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {story.excerpt}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono mb-3">
              04 <span className="text-signal">/</span> ./contact --open
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
