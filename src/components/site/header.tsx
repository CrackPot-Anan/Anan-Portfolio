import { Link } from "@tanstack/react-router";

const nav = [
  ["experience", "Experience"],
  ["education", "Education"],
  ["leadership", "Leadership"],
  ["projects", "Projects"],
  ["products", "Products"],
  ["credentials", "Credentials"],
  ["contact", "Contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <Link
          to="/"
          className="font-mono text-sm tracking-tight text-foreground"
        >
          abrar<span className="text-signal">.</span>anan
        </Link>
        <nav className="hidden gap-7 md:flex">
          {nav.map(([id, label]) => (
            <Link
              key={id}
              to="/"
              hash={id}
              hashScrollIntoView={{ behavior: "smooth", block: "start" }}
              className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "font-mono text-xs uppercase tracking-[0.16em] text-signal transition-colors",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            hashScrollIntoView={{ behavior: "smooth", block: "start" }}
            className="hire-btn rounded-sm border border-signal px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
          >
            <span className="relative z-[1]">Hire me</span>
            <span className="hire-btn__shine" aria-hidden="true" />
          </Link>
          <Link
            to="/about"
            className="rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors"
            activeOptions={{ exact: true }}
            activeProps={{
              className:
                "rounded-sm border border-signal bg-signal/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors",
            }}
            inactiveProps={{
              className:
                "rounded-sm border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal",
            }}
          >
            Who's Anan
          </Link>
        </div>
      </div>
    </header>
  );
}
