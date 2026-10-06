import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";

const TITLE = "Contact — Abrar Anan Raiyan";
const DESCRIPTION =
  "Project management engagements, product consulting, and collaborations.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Home section="contact" />,
});
