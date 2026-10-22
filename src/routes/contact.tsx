import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";
import { absoluteUrl, noindexHead } from "@/lib/seo";

const TITLE = "Contact — Abrar Anan Raiyan";
const DESCRIPTION =
  "Project management engagements, product consulting, and collaborations.";

export const Route = createFileRoute("/contact")({
  head: () =>
    noindexHead({
      title: TITLE,
      description: DESCRIPTION,
      url: absoluteUrl("/contact"),
    }),
  component: () => <Home section="contact" />,
});
