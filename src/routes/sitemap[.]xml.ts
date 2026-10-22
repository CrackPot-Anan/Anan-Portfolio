import { createFileRoute } from "@tanstack/react-router";

import { INDEXABLE_ROUTES, SITE_LOCALE, absoluteUrl } from "@/lib/seo";

type Entry = {
  loc: string;
  lastmod?: string;
  changefreq: string;
  priority: string;
  images?: Array<{ loc: string; title?: string }>;
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function renderEntry(entry: Entry): string {
  const url = absoluteUrl(entry.loc);
  const alternate = [
    `    <xhtml:link rel="alternate" hreflang="${SITE_LOCALE.replace("_", "-")}" href="${escapeXml(url)}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(url)}"/>`,
  ].join("\n");

  const images = (entry.images ?? [])
    .map(
      (image) => `    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>${
        image.title
          ? `\n      <image:title>${escapeXml(image.title)}</image:title>`
          : ""
      }
    </image:image>`,
    )
    .join("\n");

  return `  <url>
    <loc>${escapeXml(url)}</loc>${
      entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""
    }
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
${alternate}${images ? `\n${images}` : ""}
  </url>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const [{ getPublicPostsFn }, { getHobbiesFn, getStoriesFn }] =
          await Promise.all([
            import("@/lib/blog-api"),
            import("@/lib/content-api"),
          ]);

        const [posts, hobbies, stories] = await Promise.all([
          getPublicPostsFn(),
          getHobbiesFn(),
          getStoriesFn(),
        ]);

        const stamp = today();

        const entries: Entry[] = [
          ...INDEXABLE_ROUTES.map((route) => ({
            loc: route.path,
            lastmod:
              route.path === "/blogs" ? (posts[0]?.date ?? stamp) : stamp,
            changefreq: route.changefreq,
            priority: route.priority.toFixed(1),
          })),
          ...posts.map((post) => ({
            loc: `/blogs/${post.slug}`,
            lastmod: post.date,
            changefreq: "monthly",
            priority: "0.8",
            images: post.image
              ? [
                  {
                    loc: post.image.startsWith("http")
                      ? post.image
                      : absoluteUrl(post.image),
                    title: post.title,
                  },
                ]
              : undefined,
          })),
          ...hobbies.map((hobby) => ({
            loc: `/hobbies/${hobby.id}`,
            lastmod: stamp,
            changefreq: "yearly",
            priority: "0.4",
          })),
          ...stories.map((story) => ({
            loc: `/stories/${story.id}`,
            lastmod: stamp,
            changefreq: "yearly",
            priority: "0.4",
          })),
        ];

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map(renderEntry).join("\n")}
</urlset>
`;

        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600, s-maxage=86400",
            "x-content-type-options": "nosniff",
          },
        });
      },
    },
  },
});
