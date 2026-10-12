import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";

const TITLE = "Leadership & Engagement — Abrar Anan Raiyan";
const DESCRIPTION =
  "Campus and club leadership — Assistant General Secretary at AIUB Computer Club, Logistic Peer at Firefox Club AIUB, Campus Lead at Applink by Banglalink, and Campus Ambassador at Genex Infosys.";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Home section="leadership" />,
});
