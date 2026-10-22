import { ArrowUp, Github, Linkedin, Instagram, FileText } from "lucide-react";

import resumeUrl from "@/assets/Abrar Anan Raiyan.pdf?url";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
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
            href="https://www.instagram.com/_anan.raiyan_13/"
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
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl justify-center px-6 py-5">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
