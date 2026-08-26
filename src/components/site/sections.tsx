import type { ReactNode } from "react";

export function SectionHeading({
  index,
  command,
  title,
}: {
  index: string;
  command: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="label-mono mb-3">
          {index} <span className="text-signal">/</span> {command}
        </p>
        <h2 className="text-3xl leading-none md:text-5xl">{title}</h2>
      </div>
    </div>
  );
}

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}
