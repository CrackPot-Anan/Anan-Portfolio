import { createFileRoute, Outlet } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { LanguageProvider } from "@/components/site/language";

export const Route = createFileRoute("/blogs")({
  component: BlogsLayout,
});

function BlogsLayout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
