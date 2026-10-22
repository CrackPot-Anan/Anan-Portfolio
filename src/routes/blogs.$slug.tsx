import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Github, Instagram, Linkedin } from "lucide-react";

import { BlogPostSkeleton } from "@/components/site/blog-skeleton";
import { Tag } from "@/components/site/sections";
import { formatPostDate, type Post } from "@/lib/blog";
import { getPostPageFn } from "@/lib/blog-api";
import {
  AUTHOR,
  DEFAULT_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  articleDescription,
  breadcrumbSchema,
  seoHead,
  truncate,
} from "@/lib/seo";

export const Route = createFileRoute("/blogs/$slug")({
  loader: async ({ params }) => {
    const { post, related } = await getPostPageFn({
      data: { slug: params.slug },
    });
    if (!post) throw notFound();
    return { post, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { post } = loaderData;
    const url = absoluteUrl(`/blogs/${post.slug}`);
    const title = `${post.title} | ${AUTHOR.name}`;
    const description = articleDescription(post.excerpt);
    const image = resolveImage(post.image) ?? DEFAULT_OG_IMAGE;

    return seoHead({
      title,
      description,
      url,
      image,
      imageAlt: post.alt ?? `${post.title} — ${AUTHOR.name}`,
      type: "article",
      keywords: [post.category, ...post.tags],
      publishedTime: post.date,
      modifiedTime: post.date,
      section: post.category,
      tags: post.tags,
      jsonLd: {
        ...blogPostingSchema(post, url, image),
        breadcrumb: breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blogs" },
          { name: post.title, path: `/blogs/${post.slug}` },
        ]),
      },
    });
  },
  notFoundComponent: PostNotFound,
  pendingComponent: BlogPostPending,
  pendingMs: 120,
  pendingMinMs: 320,
  component: BlogPost,
});

function readTimeToIso(readTime: string): string {
  const minutes = Number(readTime.match(/\d+/)?.[0] ?? 1);
  return `PT${minutes}M`;
}

/** Uploaded photos are absolute; bundled /assets paths need the site origin. */
function resolveImage(value?: string): string | undefined {
  if (!value) return undefined;
  return value.startsWith("http") ? value : absoluteUrl(value);
}

function renderParagraph(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (index % 2 === 1 && /^https?:\/\//.test(part)) {
      const trimmed = part.replace(/[.,;:!?)]*$/g, "");
      const trailing = part.slice(trimmed.length);
      return (
        <span key={index}>
          <a
            href={trimmed}
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline underline-offset-4 transition-colors hover:opacity-80"
          >
            {trimmed}
          </a>
          {trailing}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function blogPostingSchema(
  post: Post,
  url: string,
  image: string,
): Record<string, unknown> {
  const wordCount = post.body.split(/\s+/).filter(Boolean).length;
  const galleryImages = (post.gallery ?? [])
    .map((photo) => resolveImage(photo.url))
    .filter((entry): entry is string => Boolean(entry));

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: truncate(post.title, 110),
    name: truncate(post.title, 110),
    description: post.excerpt,
    image: [image, ...galleryImages],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    isAccessibleForFree: true,
    wordCount,
    timeRequired: readTimeToIso(post.readTime),
    articleSection: post.category,
    articleBody: post.body,
    keywords: [post.category, ...post.tags].join(", "),
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR.name,
      url: SITE_URL,
      sameAs: AUTHOR.sameAs,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR.name,
      url: SITE_URL,
    },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

function BlogPostPending() {
  return (
    <main id="top">
      <BlogPostSkeleton />
    </main>
  );
}

function BlogPost() {
  const { post, related } = Route.useLoaderData();
  const gallery = post.gallery ?? [];
  const fitFirstWide = gallery.length % 2 === 1;
  const paragraphs = post.body
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main id="top">
      <article itemScope itemType="https://schema.org/BlogPosting">
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
            <h1
              className="mt-4 text-4xl leading-[1.05] md:text-6xl"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <div className="label-mono mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>
                By{" "}
                <span className="text-foreground" itemProp="author">
                  {AUTHOR.name}
                </span>
              </span>
              <time dateTime={post.date} itemProp="datePublished">
                {formatPostDate(post.date)}
              </time>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-signal" />
                {post.readTime}
              </span>
            </div>
            {post.image && (
              <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
                <img
                  src={post.image}
                  alt={post.alt ?? ""}
                  width={1672}
                  height={941}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="aspect-video w-full object-cover"
                />
              </div>
            )}
          </div>
        </header>

        <div className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
          <p className="border-l-2 border-signal pl-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-10 space-y-6 text-base leading-8 md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{renderParagraph(paragraph)}</p>
            ))}
          </div>

          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          {gallery.length > 0 && (
            <section
              aria-labelledby="post-gallery"
              className="mt-12 border-t border-border pt-8"
            >
              <h2 id="post-gallery" className="label-mono mb-5">
                Gallery
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {gallery.map((photo, index) => {
                  const wide = index === 0 && fitFirstWide;
                  return (
                    <li
                      key={photo.url}
                      className={`overflow-hidden rounded-xl border border-border bg-surface ${
                        wide ? "sm:col-span-2" : ""
                      }`}
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt ?? `${post.title} — photo ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className={`w-full object-cover ${
                          wide ? "aspect-[16/9]" : "aspect-[4/3]"
                        }`}
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {post.category !== "Featured" && (
            <aside className="mt-14 border border-border bg-surface p-6 md:p-7">
              <p className="label-mono mb-4">Author</p>
              <p className="text-base font-medium">{AUTHOR.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {AUTHOR.jobTitle} writing about {post.category.toLowerCase()},
                delivery, and AI-driven work.
              </p>

              <div className="mt-6 border-t border-border pt-5">
                <p className="label-mono mb-2">More</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To reach out, follow Anan on:
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/abrar-anan-raiyan/"
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/_anan.raiyan_13/"
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
                  >
                    <Instagram className="h-3.5 w-3.5" /> Instagram
                  </a>
                  <a
                    href="https://github.com/CrackPot-Anan"
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
                  >
                    About {AUTHOR.name.split(" ")[0]}
                  </Link>
                </div>
              </div>
            </aside>
          )}

          {related.length > 0 && (
            <section className="mt-14 border-t border-border pt-8">
              <h2 className="mb-6 text-xl font-semibold md:text-2xl">
                Related to Writer
              </h2>
              <ul className="space-y-4">
                {related.map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      to="/blogs/$slug"
                      params={{ slug: entry.slug }}
                      className="group block"
                    >
                      <span className="label-mono text-signal">
                        {entry.category}
                      </span>
                      <span className="mt-1 block text-lg transition-colors group-hover:text-signal">
                        {entry.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
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
