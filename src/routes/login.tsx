import { useState } from "react";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { getSessionFn, loginFn } from "@/lib/auth";

const TITLE = "Login — Abrar Anan Raiyan";
const DESCRIPTION = "Private sign-in for the site admin area.";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: async () => {
    const session = await getSessionFn();
    if (session) throw redirect({ to: "/admin" });
  },
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const result = await loginFn({ data: { email, password } });
      if (result.ok) {
        await navigate({ to: "/admin" });
        return;
      }
      setError(result.error);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col justify-center px-6 py-20 md:py-28">
        <div className="max-w-md border border-border bg-surface p-7 md:p-9">
          <p className="label-mono mb-6">
            <span className="text-signal">$</span> auth --login
          </p>
          <h1 className="text-4xl leading-none md:text-5xl">
            Sign <span className="text-signal">in</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Restricted area. Only the site owner has access to the admin
            console.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="label-mono mb-2 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-sm border border-border bg-background px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-colors focus:border-signal"
              />
            </div>

            <div>
              <label htmlFor="password" className="label-mono mb-2 block">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-sm border border-border bg-background px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-colors focus:border-signal"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="border border-destructive/50 bg-destructive/10 px-3 py-2.5 font-mono text-xs text-destructive"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="hire-btn w-full rounded-sm border border-signal px-3 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="relative z-[1]">
                {pending ? "Verifying..." : "Sign in"}
              </span>
              <span className="hire-btn__shine" aria-hidden="true" />
            </button>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
