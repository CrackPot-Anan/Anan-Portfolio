import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Instagram,
  FileText,
} from "lucide-react";

import portrait from "@/assets/raiyan.jpg";
import resumeUrl from "@/assets/Abrar Anan Raiyan.pdf?url";
import { Section, SectionHeading, Tag } from "@/components/site/sections";
import {
  skills,
  timeline,
  projects,
  products,
  stats,
} from "@/components/site/data";

const TITLE = "Abrar Anan Raiyan — Software Project Manager & AI Enthusiast";
const DESCRIPTION =
  "Software project manager and AI enthusiast turning messy backlogs into shipped products — agile delivery, product ownership, and AI-driven workflows.";

const PORTRAIT_FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1920" viewBox="0 0 1440 1920"><rect width="1440" height="1920" fill="#36363a"/><text x="720" y="960" font-family="sans-serif" font-size="72" fill="#78787d" text-anchor="middle">Portrait</text></svg>`,
  );

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const nav = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["products", "Products"],
  ["contact", "Contact"],
] as const;

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-mono text-sm tracking-tight text-foreground"
          >
            abrar<span className="text-signal">.</span>raiyan
          </a>
          <nav className="hidden gap-7 md:flex">
            {nav.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-sm border border-signal px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
          >
            Hire me
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="grid-lines border-b border-border">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28">
            <div>
              <p className="label-mono mb-6">
                <span className="text-signal">$</span> software project manager
                · ai enthusiast
              </p>
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
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View my work <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
                >
                  <FileText className="h-4 w-4" /> Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary"
                >
                  Let&apos;s connect
                </a>
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

        {/* About */}
        <Section id="about">
          <SectionHeading
            index="01"
            command="cat about.md"
            title="Clarity is the deliverable"
          />
          <div className="grid gap-12 md:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Great software rarely fails because of code — it fails because
                of unclear scope, misaligned expectations, and silence between
                teams. My job is to remove all three.
              </p>
              <p>
                I step into complex projects, break down chaotic backlogs, and
                put structure around how work flows: crisp requirements, honest
                estimates, visible risks, and sprints that actually end with
                something shipped. I translate business intent for engineers and
                engineering reality for stakeholders.
              </p>
              <p>
                Alongside delivery, I&apos;m deep in applied AI — using language
                models to accelerate discovery, documentation, and QA, and
                exploring how AI features change the way products get scoped and
                validated.
              </p>
            </div>
            <div className="space-y-6">
              {skills.map((s) => (
                <div
                  key={s.group}
                  className="border border-border bg-surface p-5"
                >
                  <p className="label-mono mb-3">{s.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience">
          <SectionHeading
            index="02"
            command="ls experience/"
            title="Where I've delivered"
          />
          <div className="space-y-px bg-border">
            {timeline.map((t) => (
              <article
                key={t.role}
                className="grid gap-4 bg-background p-6 transition-colors hover:bg-surface md:grid-cols-[200px_1fr] md:p-8"
              >
                <p className="label-mono pt-1">{t.period}</p>
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

        {/* Projects */}
        <Section id="projects">
          <SectionHeading
            index="03"
            command="./projects.sh --list"
            title="Selected work"
          />
          <div className="grid gap-px bg-border md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group bg-background p-7 transition-colors hover:bg-surface"
              >
                <p className="label-mono">{p.kind}</p>
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
            index="04"
            command="cat products.json"
            title="Products I own"
          />
          <div className="grid gap-px bg-border md:grid-cols-2">
            {products.map((p) => (
              <article key={p.name} className="bg-background p-8">
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

        {/* Contact */}
        <Section id="contact">
          <SectionHeading
            index="05"
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

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="label-mono">
            © {new Date().getFullYear()} Abrar Anan Raiyan
          </p>
          <div className="flex gap-5">
            <a
              href="https://github.com/CrackPot-Anan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-signal"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/abrar-anan-raiyan/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-signal"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/anans_daily_2000/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-signal"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="text-muted-foreground transition-colors hover:text-signal"
            >
              <FileText className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
