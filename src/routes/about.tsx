import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site/about-page";
import {
  AUTHOR,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  profilePageSchema,
  seoHead,
} from "@/lib/seo";

const TITLE = `About ${AUTHOR.name} — ${AUTHOR.jobTitle}`;
const DESCRIPTION =
  "Abrar Anan Raiyan is a software project manager and AI enthusiast in Dhaka, Bangladesh. He leads agile teams, shapes products end to end, and builds AI-assisted workflows — with skills across delivery, product, AI, and tooling.";

export const Route = createFileRoute("/about")({
  head: () => {
    const url = absoluteUrl("/about");

    return seoHead({
      title: TITLE,
      description: DESCRIPTION,
      url,
      image: DEFAULT_OG_IMAGE,
      imageAlt: `${AUTHOR.name} — ${AUTHOR.jobTitle}`,
      keywords: [
        "about Abrar Anan Raiyan",
        "software project manager Bangladesh",
        "agile project manager Dhaka",
        "AI product manager",
        "product owner",
        "Scrum master",
      ],
      jsonLd: profilePageSchema(url),
    });
  },
  component: AboutPage,
});
