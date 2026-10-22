import { createFileRoute } from "@tanstack/react-router";

import resumeAsset from "@/assets/Abrar Anan Raiyan.pdf?url";
import { buildLlmsIndex } from "@/lib/llms";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/llms.txt")({
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

        const body = buildLlmsIndex({
          posts,
          hobbies,
          stories,
          resumeUrl: absoluteUrl(resumeAsset),
        });

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
