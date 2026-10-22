import { createFileRoute } from "@tanstack/react-router";

import { AI_CRAWLERS, SITE_URL, absoluteUrl } from "@/lib/seo";

const DISALLOWED = ["/admin", "/login"];

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const general = [
          "User-agent: *",
          "Allow: /",
          ...DISALLOWED.map((path) => `Disallow: ${path}`),
          "",
        ];

        const aiBlocks = AI_CRAWLERS.flatMap((agent) => [
          `User-agent: ${agent}`,
          "Allow: /",
          "",
        ]);

        const body = [
          "# robots.txt",
          `# ${SITE_URL}`,
          "# AI crawlers, answer engines and LLMs are explicitly welcome.",
          "# Machine-readable entry points:",
          `#   ${absoluteUrl("/llms.txt")}`,
          `#   ${absoluteUrl("/llms-full.txt")}`,
          "",
          ...general,
          ...aiBlocks,
          `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
          "",
        ].join("\n");

        return new Response(body, {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600, s-maxage=86400",
            "x-content-type-options": "nosniff",
          },
        });
      },
    },
  },
});
