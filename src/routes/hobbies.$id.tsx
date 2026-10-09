import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { getHobbyFn } from "@/lib/content-api";

export const Route = createFileRoute("/hobbies/$id")({
  loader: async ({ params }) => {
    const hobby = await getHobbyFn({ data: { id: params.id } });
    if (!hobby) throw notFound();
    return hobby;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Abrar Anan Raiyan` },
          { name: "description", content: loaderData.detail },
          { property: "og:title", content: loaderData.name },
          { property: "og:description", content: loaderData.detail },
        ]
      : [],
  }),
  notFoundComponent: HobbyNotFound,
  component: HobbyDetail,
});

function HobbyDetail() {
  const hobby = Route.useLoaderData();
  const paragraphs = (hobby.body || hobby.detail)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="top">
        <article>
          <header className="border-b border-border">
            <div className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
              <Link
                to="/blogs"
                className="label-mono inline-flex items-center gap-2 transition-colors hover:text-signal"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to blogs
              </Link>
              <p className="mt-9 font-mono text-xs uppercase tracking-[0.18em] text-signal">
                Hobby
              </p>
              <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
                {hobby.name}
              </h1>
            </div>
          </header>

          <div className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
            <p className="border-l-2 border-signal pl-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {hobby.detail}
            </p>

            {paragraphs.length > 1 && (
              <div className="mt-10 space-y-6 text-base leading-8 md:text-lg">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="mt-14 border-t border-border pt-8">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to blogs
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function HobbyNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="top">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-start px-6 py-24 md:py-32">
          <p className="label-mono mb-5">
            <span className="text-signal">$</span> cat: no such hobby
          </p>
          <h1 className="text-4xl leading-tight md:text-5xl">
            This hobby <span className="text-signal">does not exist</span>.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            It may have been renamed or removed. The rest of the writing is
            still here.
          </p>
          <Link
            to="/blogs"
            className="mt-8 inline-flex items-center gap-2 rounded-sm border border-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to blogs
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
