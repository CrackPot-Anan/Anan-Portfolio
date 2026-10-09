import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";

const TITLE = "Credentials — Abrar Anan Raiyan";
const DESCRIPTION =
  "Professional certifications in product, project delivery, and AI — verified from the issuing platforms.";

export const Route = createFileRoute("/credentials")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Home section="credentials" />,
});
