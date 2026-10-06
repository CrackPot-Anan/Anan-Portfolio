import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";

const TITLE = "Experience — Abrar Anan Raiyan";
const DESCRIPTION =
  "Work experience — delivery roles, teams, and outcomes as a software project manager.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Home section="experience" />,
});
