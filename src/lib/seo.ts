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

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

export function canonicalUrl(path: string): string {
  return absoluteUrl(path);
}

export function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

export function metaDescription(text: string, max = 158): string {
  return truncate(text, max);
}

export function articleDescription(excerpt: string, max = 158): string {
  const suffix = ` — by ${AUTHOR.name}, ${AUTHOR.jobTitle.toLowerCase()}.`;
  return `${truncate(excerpt, Math.max(40, max - suffix.length))}${suffix}`;
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
  const imageAlt = input.imageAlt ?? `${AUTHOR.name} — ${SITE_NAME}`;

  const meta: MetaEntry[] = [
    { title: input.title },
    { name: "description", content: input.description },
    { name: "author", content: AUTHOR.name },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    {
      name: "keywords",
      content: [...(input.keywords ?? []), AUTHOR.name].join(", "),
    },
    { property: "og:type", content: input.type ?? "website" },
    { property: "og:site_name", content: SITE_NAME },
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
