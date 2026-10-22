import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";
import { absoluteUrl, noindexHead } from "@/lib/seo";

const TITLE = "Education — Abrar Anan Raiyan";
const DESCRIPTION =
  "B.Sc. in Computer Science & Engineering, American International University – Bangladesh.";

export const Route = createFileRoute("/education")({
  head: () =>
    noindexHead({
      title: TITLE,
      description: DESCRIPTION,
      url: absoluteUrl("/education"),
    }),
  component: () => <Home section="education" />,
});
