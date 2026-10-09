import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";

const TITLE = "Projects — Abrar Anan Raiyan";
const DESCRIPTION =
  "Products I have worked on — HRIS, ERP, travel tech, delivery tooling, and enterprise platforms.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Home section="projects" />,
});
