import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";
import { absoluteUrl, noindexHead } from "@/lib/seo";

const TITLE = "Experience — Abrar Anan Raiyan";
const DESCRIPTION =
  "Work experience — delivery roles, teams, and outcomes as a software project manager.";

export const Route = createFileRoute("/experience")({
  head: () =>
    noindexHead({
      title: TITLE,
      description: DESCRIPTION,
      url: absoluteUrl("/experience"),
    }),
  component: () => <Home section="experience" />,
});
