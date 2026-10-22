import type { JSX } from "react";

import ogImageUrl from "@/assets/og-default.jpg?url";

export const SITE_URL = "https://abrarananraiyan.space";
export const SITE_NAME = "Abrar Anan Raiyan";
export const SITE_DESCRIPTION =
  "Software project manager and AI enthusiast turning messy backlogs into shipped products — agile delivery, product ownership, and AI-driven workflows.";

export const AUTHOR = {
  name: "Abrar Anan Raiyan",
  alternateName: ["Anan Raiyan", "Abrar Raiyan"],
  jobTitle: "Software Project Manager & AI Enthusiast",
  email: "abraranan18@gmail.com",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/abrar-anan-raiyan/",
    "https://github.com/CrackPot-Anan",
    "https://www.instagram.com/_anan.raiyan_13/",
  ],
} as const;

export const DEFAULT_OG_IMAGE = new URL(ogImageUrl, SITE_URL).toString();
export const SITE_LOCALE = "en_US";

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

export function canonicalUrl(path: string): string {
  return absoluteUrl(path);
}

const TRAILING_STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "for",
  "from",
  "has",
  "have",
  "in",
  "into",
  "is",
  "it",
  "its",
  "of",
  "on",
  "or",
  "our",
  "that",
  "the",
  "their",
  "them",
  "then",
  "there",
  "these",
  "they",
  "this",
  "to",
  "was",
  "were",
  "which",
  "who",
  "will",
  "with",
  "you",
  "your",
]);

export function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max - 1).trimEnd();
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
  const words = cut.split(" ");
  while (
    words.length > 1 &&
    TRAILING_STOPWORDS.has(
      words[words.length - 1].toLowerCase().replace(/[^a-z]/g, ""),
    )
  ) {
    words.pop();
  }
  return `${words.join(" ")}…`;
}

export function metaDescription(text: string, max = 158): string {
  return truncate(text, max);
}

export function articleDescription(excerpt: string, max = 158): string {
  const clean = excerpt.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const suffix = ` — by ${AUTHOR.name}, ${AUTHOR.jobTitle.toLowerCase()}.`;
  return `${truncate(clean, Math.max(40, max - suffix.length))}${suffix}`;
}

export type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { charSet: "utf-8" }
  | { "script:ld+json": Record<string, unknown> };

export function seoMeta(input: {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  jsonLd?: Record<string, unknown>;
}): MetaEntry[] {
  const image = input.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = input.imageAlt ?? `${AUTHOR.name} — ${AUTHOR.jobTitle}`;

  const meta: MetaEntry[] = [
    { title: input.title },
    { name: "description", content: input.description },
    { name: "author", content: AUTHOR.name },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    {
      name: "keywords",
      content: [...new Set([...(input.keywords ?? []), AUTHOR.name])].join(
        ", ",
      ),
    },
    { property: "og:type", content: input.type ?? "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: SITE_LOCALE },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:url", content: input.url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt },
    { name: "twitter:creator", content: AUTHOR.name },
  ];

  if (input.type === "article") {
    meta.push({ property: "article:author", content: AUTHOR.name });
    if (input.publishedTime) {
      meta.push({
        property: "article:published_time",
        content: input.publishedTime,
      });
    }
    if (input.modifiedTime) {
      meta.push({
        property: "article:modified_time",
        content: input.modifiedTime,
      });
    }
    if (input.section) {
      meta.push({ property: "article:section", content: input.section });
    }
    for (const tag of input.tags ?? []) {
      meta.push({ property: "article:tag", content: tag });
    }
  }

  if (input.jsonLd) {
    meta.push({ "script:ld+json": input.jsonLd });
  }

  return meta;
}

export function canonicalLink(url: string): JSX.IntrinsicElements["link"] {
  return { rel: "canonical", href: url };
}

export type SeoHeadInput = Parameters<typeof seoMeta>[0];

export function seoHead(input: SeoHeadInput): {
  meta: Array<JSX.IntrinsicElements["meta"]>;
  links: Array<JSX.IntrinsicElements["link"]>;
} {
  return {
    meta: seoMeta(input) as unknown as Array<JSX.IntrinsicElements["meta"]>,
    links: [canonicalLink(input.url)],
  };
}

export function personSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: AUTHOR.name,
    alternateName: AUTHOR.alternateName,
    jobTitle: AUTHOR.jobTitle,
    url: AUTHOR.url,
    email: `mailto:${AUTHOR.email}`,
    image: DEFAULT_OG_IMAGE,
    sameAs: AUTHOR.sameAs,
    knowsAbout: [
      "Agile delivery",
      "Scrum",
      "Product ownership",
      "Project management",
      "AI workflows",
      "Stakeholder management",
      "Business analysis",
    ],
  };
}

export function webSiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

export function profilePageSchema(url: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#webpage`,
    url,
    name: `${AUTHOR.name} — ${AUTHOR.jobTitle}`,
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };
}

export function webPageSchema(input: {
  url: string;
  name: string;
  description: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${input.url}#webpage`,
    url: input.url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type SitemapRoute = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

/**
 * Canonical routes that are meant to be indexed and listed in sitemap.xml.
 *
 * The section routes (/projects, /contact, /experience, ...) re-render the home
 * page with a scroll offset, so they stay `noindex` and are intentionally left
 * out of the sitemap. Their content is still reachable through /llms.txt.
 */
export const INDEXABLE_ROUTES: SitemapRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1 },
  { path: "/about", changefreq: "monthly", priority: 0.9 },
  { path: "/blogs", changefreq: "weekly", priority: 0.9 },
];

/**
 * Routes that duplicate home page sections. They are crawlable (so link graph
 * and social previews still work) but must never be indexed.
 */
export const NOINDEX_ROUTES: SitemapRoute[] = [
  { path: "/projects", changefreq: "monthly", priority: 0.6 },
  { path: "/products", changefreq: "monthly", priority: 0.6 },
  { path: "/experience", changefreq: "monthly", priority: 0.6 },
  { path: "/education", changefreq: "monthly", priority: 0.6 },
  { path: "/leadership", changefreq: "monthly", priority: 0.6 },
  { path: "/credentials", changefreq: "monthly", priority: 0.6 },
  { path: "/contact", changefreq: "monthly", priority: 0.6 },
];

/**
 * AI / LLM crawlers that are explicitly welcome. robots.txt only matches one
 * user-agent per group, so each of these gets its own group.
 */
export const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
  "cohere-ai",
  "CCBot",
  "YouBot",
  "Diffbot",
  "Omgilibot",
  "Timpibot",
  "Webzio-Extended",
  "ImagesiftBot",
  "AI2Bot",
  "Kangaroo Bot",
  "DuckAssistBot",
  "MistralAI-User",
] as const;

/**
 * Meta for pages that duplicate home page sections. They are crawlable and
 * shareable but explicitly kept out of the index.
 */
export function noindexHead(input: {
  title: string;
  description: string;
  url: string;
  image?: string;
}): {
  meta: Array<JSX.IntrinsicElements["meta"]>;
  links: Array<JSX.IntrinsicElements["link"]>;
} {
  const image = input.image ?? DEFAULT_OG_IMAGE;
  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      { name: "robots", content: "noindex, follow" },
      { name: "author", content: AUTHOR.name },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: SITE_LOCALE },
      { property: "og:title", content: input.title },
      { property: "og:description", content: input.description },
      { property: "og:url", content: input.url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: input.title },
      { name: "twitter:description", content: input.description },
      { name: "twitter:image", content: image },
    ],
    links: [],
  };
}
