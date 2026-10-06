import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Lock } from "lucide-react";

import { getSessionFn } from "@/lib/auth";

const nav = [
  ["about", "About"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["leadership", "Leadership"],
  ["projects", "Projects"],
  ["products", "Products"],
  ["contact", "Contact"],
] as const;

export function SiteHeader() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getSessionFn()
      .then((session) => {
        if (!cancelled) setAuthed(Boolean(session));
      })
      .catch(() => {
        if (!cancelled) setAuthed(false);
      });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

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
            <a
              key={id}
              href={href(id)}
              className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={href("contact")}
            className="hire-btn rounded-sm border border-signal px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
          >
            <span className="relative z-[1]">Hire me</span>
            <span className="hire-btn__shine" aria-hidden="true" />
          </a>
          <Link
            to="/blogs"
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
            Blogs
          </Link>
          <Link
            to={authed ? "/admin" : "/login"}
            aria-label={authed ? "Admin console" : "Login"}
            className={`flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
              authed
                ? "border-signal text-signal"
                : "border-border text-muted-foreground hover:border-signal hover:text-signal"
            }`}
          >
            <Lock className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              {authed ? "Admin" : "Login"}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
