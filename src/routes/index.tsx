import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";

const TITLE = "Abrar Anan Raiyan — Software Project Manager & AI Enthusiast";
const DESCRIPTION =
  "Software project manager and AI enthusiast turning messy backlogs into shipped products — agile delivery, product ownership, and AI-driven workflows.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: () => <Home />,
});
