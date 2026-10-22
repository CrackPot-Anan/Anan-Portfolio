import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";
import { absoluteUrl, noindexHead } from "@/lib/seo";

const TITLE = "Projects — Abrar Anan Raiyan";
const DESCRIPTION =
  "Products I have worked on — HRIS, ERP, travel tech, delivery tooling, and enterprise platforms.";

export const Route = createFileRoute("/projects")({
  head: () =>
    noindexHead({
      title: TITLE,
      description: DESCRIPTION,
      url: absoluteUrl("/projects"),
    }),
  component: () => <Home section="projects" />,
});
