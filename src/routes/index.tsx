import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";
import { getPublicPostSummariesFn } from "@/lib/blog-api";
import {
  AUTHOR,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  seoHead,
  webPageSchema,
} from "@/lib/seo";

const TITLE = `${AUTHOR.name} — ${AUTHOR.jobTitle}`;
const DESCRIPTION =
  "Software project manager and AI enthusiast turning messy backlogs into shipped products — agile delivery, product ownership, and AI-driven workflows.";

export const Route = createFileRoute("/")({
  loader: async () => {
    const posts = await getPublicPostSummariesFn();
    return { posts: posts.slice(0, 3) };
  },
  head: () => {
    const url = absoluteUrl("/");

    return seoHead({
      title: TITLE,
      description: DESCRIPTION,
      url,
      image: DEFAULT_OG_IMAGE,
      keywords: [
        "software project manager",
        "product owner",
        "agile delivery",
        "scrum",
        "AI workflows",
        "project manager Bangladesh",
      ],
      jsonLd: webPageSchema({
        url,
        name: TITLE,
        description: DESCRIPTION,
      }),
    });
  },
  component: HomeRoute,
});

function HomeRoute() {
  const { posts } = Route.useLoaderData();
  return <Home posts={posts} />;
}
