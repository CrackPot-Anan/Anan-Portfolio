import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";
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
  component: () => <Home />,
});
