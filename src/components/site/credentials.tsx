import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { credentials } from "@/components/site/credentials-data";

function formatIssued(raw?: string): string | null {
  if (!raw) return null;
  const match = /^(\d{4})-(\d{2})(?:-\d{2})?$/.exec(raw);
  if (!match) return null;
  const month = new Date(
    Date.UTC(Number(match[1]), Number(match[2]) - 1, 1),
  ).toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  return `Issued ${month} ${match[1]}`;
}

export function Credentials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const reachableEnd = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < reachableEnd - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-cred-card]");
    const gap = parseFloat(window.getComputedStyle(el).columnGap) || 0;
    const width = (card ? card.offsetWidth : 320) + gap;
    const reduceMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    el.scrollBy({
      left: dir * width,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="cred-dots absolute inset-0 -z-10" aria-hidden="true" />

      <header className="mb-10 flex flex-col gap-6 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label-mono mb-3">
            03 <span className="text-signal">/</span> ls certifications/
          </p>
          <h2 className="text-3xl leading-none md:text-5xl">
            Professional Credentials
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Certifications in product, project delivery, AI and more — verified
            directly from the issuing platform.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Scroll credentials left"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Scroll credentials right"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div
        ref={trackRef}
        className="cred-track flex gap-4 overflow-x-auto pb-2"
        role="region"
        aria-label="Professional credentials carousel"
      >
        {credentials.map((c) => (
          <article
            key={c.image}
            data-cred-card
            className="cred-card flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-signal/50 hover:shadow-[var(--shadow-lift)] sm:w-[340px]"
          >
            <div className="border-b border-border bg-secondary">
              <img
                src={c.image}
                alt={`${c.title} — ${c.issuer}`}
                width={640}
                height={480}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-1.5 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                {c.issuer}
              </p>
              <h3 className="line-clamp-2 text-lg font-semibold text-foreground">
                {c.title}
              </h3>
              <div className="my-1 h-px bg-border" aria-hidden="true" />
              {formatIssued(c.issuedDate) && (
                <p className="text-xs text-foreground">
                  {formatIssued(c.issuedDate)}
                </p>
              )}
              {c.credentialId && (
                <p className="text-[11px] text-muted-foreground">
                  ID: {c.credentialId}
                </p>
              )}
              {c.verifyUrl ? (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-1 pt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-signal transition-opacity hover:opacity-80"
                >
                  Verify credential <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : (
                <div className="mt-auto pt-3" aria-hidden="true" />
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
