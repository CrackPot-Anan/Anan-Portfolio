import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";

const TITLE = "Education — Abrar Anan Raiyan";
const DESCRIPTION =
  "B.Sc. in Computer Science & Engineering, American International University – Bangladesh.";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Home section="education" />,
});
