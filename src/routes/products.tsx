import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/components/site/home-page";
import { absoluteUrl, noindexHead } from "@/lib/seo";

const TITLE = "Products — Abrar Anan Raiyan";
const DESCRIPTION = "Products I own — ZenPTE and Career Koi.";

export const Route = createFileRoute("/products")({
  head: () =>
    noindexHead({
      title: TITLE,
      description: DESCRIPTION,
      url: absoluteUrl("/products"),
    }),
  component: () => <Home section="products" />,
});
