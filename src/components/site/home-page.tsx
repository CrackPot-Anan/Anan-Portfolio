import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, FileText } from "lucide-react";

import portrait from "@/assets/raiyan.jpg";
import resumeUrl from "@/assets/Abrar Anan Raiyan.pdf?url";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Section, SectionHeading, Tag, Logo } from "@/components/site/sections";
import { Approach } from "@/components/site/approach";
import {
  timeline,
  education,
  leadership,
  projects,
  products,
  stats,
} from "@/components/site/data";
import { Credentials } from "@/components/site/credentials";

const PORTRAIT_FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1920" viewBox="0 0 1440 1920"><rect width="1440" height="1920" fill="#36363a"/><text x="720" y="960" font-family="sans-serif" font-size="72" fill="#78787d" text-anchor="middle">Portrait</text></svg>`,
  );

export function Home({ section }: { section?: string }) {
  useEffect(() => {
    if (!section) return;
    const timer = window.setTimeout(() => {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [section]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-36">
            <div>
              <h1 className="text-5xl leading-[0.95] md:text-7xl">
                I turn scattered
                <br />
                ideas into
                <br />
                <span className="text-signal">shipped software.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                I&apos;m Abrar Anan Raiyan. I lead agile teams, shape products
                end to end, and build AI-assisted workflows that remove the
                busywork between an idea and a release.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View my work <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
                >
                  <FileText className="h-4 w-4" /> Resume
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary"
                >
                  Let&apos;s connect
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-10 border-t border-border pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl text-foreground">
                      {s.value}
                    </p>
                    <p className="label-mono mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-3 border border-border"
                aria-hidden="true"
              />
              <img
                src={portrait}
                alt="Portrait of Abrar Anan Raiyan"
                width={1440}
                height={1920}
                className="relative w-full object-cover grayscale-[25%]"
                onError={(e) => {
                  e.currentTarget.src = PORTRAIT_FALLBACK;
                }}
              />

              <p className="label-mono mt-5 text-right">
                Dhaka, Bangladesh · UTC+6
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <Section id="experience">
          <SectionHeading title="Where I've delivered" />
          <div className="space-y-px bg-border">
            {timeline.map((t) => (
              <article
                key={t.role}
                className="grid gap-4 bg-background p-6 transition-colors hover:bg-surface md:grid-cols-[200px_1fr] md:p-8"
              >
                <div>
                  <p className="label-mono">{t.period}</p>
                  {t.logo ? (
                    <Logo src={t.logo} alt={`${t.org} logo`} className="mt-3" />
                  ) : null}
                </div>
                <div>
                  <h3 className="text-xl text-foreground">{t.role}</h3>
                  <p className="mt-1 font-mono text-xs text-signal">{t.org}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education">
          <SectionHeading title="Where I studied" />
          <div className="space-y-px bg-border">
            {education.map((e) => (
              <article
                key={e.school}
                className="grid gap-4 bg-background p-6 transition-colors hover:bg-surface md:grid-cols-[200px_1fr] md:p-8"
              >
                <p className="label-mono pt-1">{e.period}</p>
                <div>
                  <h3 className="text-xl text-foreground">{e.school}</h3>
                  <p className="mt-1 font-mono text-xs text-signal">
                    {e.degree}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Tag>Major: {e.major}</Tag>
                    <span className="rounded-sm border border-signal/50 bg-signal/10 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-signal">
                      {e.cgpa}
                    </span>
                    <Tag>{e.location}</Tag>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Leadership & Engagement */}
        <Section id="leadership">
          <SectionHeading title="Leadership & engagement" />
          <div className="grid gap-px bg-border md:grid-cols-2">
            {leadership.map((l) => (
              <article
                key={l.role}
                className="bg-background p-7 transition-colors hover:bg-surface md:p-8"
              >
                <p className="label-mono">{l.period}</p>
                <h3 className="mt-4 text-xl text-foreground md:text-2xl">
                  {l.role}
                </h3>
                <p className="mt-1 font-mono text-xs text-signal">{l.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {l.detail}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {l.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects">
          <SectionHeading title="Products I have worked on" />
          <div className="grid gap-px bg-border md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group bg-background p-7 transition-colors hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="label-mono">{p.kind}</p>
                  {p.logo ? <Logo src={p.logo} alt={`${p.name} logo`} /> : null}
                </div>
                <h3 className="mt-4 flex items-center gap-2 text-2xl text-foreground">
                  {p.name}
                  <ArrowUpRight className="h-4 w-4 text-signal opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Products */}
        <Section id="products">
          <SectionHeading
            index="05"
            command="cat products.json"
            title="Products I own"
          />
          <div className="grid gap-px bg-border md:grid-cols-2">
            {products.map((p) => (
              <article key={p.name} className="bg-background p-8">
                {p.logo ? (
                  <Logo src={p.logo} alt={`${p.name} logo`} className="mb-5" />
                ) : null}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl text-foreground">{p.name}</h3>
                  <span className="rounded-sm border border-signal/40 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
                    {p.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Professional Credentials */}
        <Section id="credentials">
          <Credentials index="06" />
        </Section>

        {/* My Approach & Tools */}
        <Approach />

        {/* Contact */}
        <Section id="contact">
          <SectionHeading
            index="07"
            command="./contact --open"
            title="Let's build something"
          />
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Have a stalled project, a backlog that needs shape, or an AI idea
              worth validating? I&apos;m open to project management engagements,
              product consulting, and collaborations.
            </p>
            <a
              href="mailto:abraranan18@gmail.com"
              className="inline-flex items-center gap-3 rounded-sm bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> abraranan18@gmail.com
            </a>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
