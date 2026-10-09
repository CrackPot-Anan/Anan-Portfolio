import { Link } from "@tanstack/react-router";

const nav = [
  ["/experience", "Experience"],
  ["/education", "Education"],
  ["/leadership", "Leadership"],
  ["/projects", "Projects"],
  ["/products", "Products"],
  ["/credentials", "Credentials"],
  ["/contact", "Contact"],
] as const;

const navItemBase =
  "font-mono text-[10px] uppercase tracking-[0.06em] transition-colors lg:text-[11px] lg:tracking-[0.11em]";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-3.5 md:px-5">
        <Link
          to="/"
          className="font-mono text-sm tracking-tight text-foreground"
        >
          abrar<span className="text-signal">.</span>anan
        </Link>
        <nav className="hidden items-center gap-2 md:flex lg:gap-6">
          {nav.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className={`${navItemBase} text-muted-foreground hover:text-foreground`}
              activeProps={{
                className: `${navItemBase} text-signal`,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/blogs"
            className="rounded-sm border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em] transition-colors lg:px-2.5 lg:text-[11px] lg:tracking-[0.11em]"
            activeOptions={{ exact: true }}
            activeProps={{
              className:
                "rounded-sm border border-signal bg-signal/10 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-signal transition-colors lg:px-2.5 lg:text-[11px] lg:tracking-[0.11em]",
            }}
            inactiveProps={{
              className:
                "rounded-sm border border-border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground transition-colors hover:border-signal hover:text-signal lg:px-2.5 lg:text-[11px] lg:tracking-[0.11em]",
            }}
          >
            Who's Anan
          </Link>
        </div>
      </div>
    </header>
  );
}
