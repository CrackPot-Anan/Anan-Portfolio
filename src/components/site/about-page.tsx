import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, FileText } from "lucide-react";

import portrait from "@/assets/raiyan-about.jpg";
import resumeUrl from "@/assets/Abrar Anan Raiyan.pdf?url";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Section, SectionHeading } from "@/components/site/sections";
import { Approach } from "@/components/site/approach";
import { skills, stats } from "@/components/site/data";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="top">
        {/* Intro */}
        <section className="border-b border-border">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28">
            <div>
              <p className="label-mono mb-4">
                <span className="text-signal">$</span> whoami
              </p>
              <h1 className="text-4xl leading-[1.02] md:text-6xl">
                I&apos;m Abrar
                <br />
                Anan Raiyan.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
                A software project manager and AI enthusiast. I lead agile
                teams, shape products end to end, and build AI-assisted
                workflows that remove the busywork between an idea and a
                release.
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
                width={720}
                height={960}
                decoding="async"
                className="relative w-full object-cover grayscale-[25%]"
              />
              <p className="label-mono mt-5 text-right">
                Dhaka, Bangladesh · UTC+6
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <Section id="skills">
          <SectionHeading title="What I bring" />
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <article key={group.group} className="bg-background p-6 md:p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                  {group.group}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
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
