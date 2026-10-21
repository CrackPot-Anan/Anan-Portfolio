import { createFileRoute } from "@tanstack/react-router";

import { absoluteUrl } from "@/lib/seo";

type Entry = {
  loc: string;
  lastmod?: string;
  changefreq: string;
  priority: string;
};

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

        const today = new Date().toISOString().slice(0, 10);

        const entries: Entry[] = [
          { loc: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
          {
            loc: "/blogs",
            lastmod: posts[0]?.date ?? today,
            changefreq: "weekly",
            priority: "0.9",
          },
          ...posts.map((post) => ({
            loc: `/blogs/${post.slug}`,
            lastmod: post.date,
            changefreq: "monthly",
            priority: "0.8",
          })),
          ...hobbies.map((hobby) => ({
            loc: `/hobbies/${hobby.id}`,
            changefreq: "yearly",
            priority: "0.4",
          })),
          ...stories.map((story) => ({
            loc: `/stories/${story.id}`,
            changefreq: "yearly",
            priority: "0.4",
          })),
        ];

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${absoluteUrl(entry.loc)}</loc>${
      entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""
    }
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
            "x-robots-tag": "noindex",
          },
        });
      },
    },
  },
});
