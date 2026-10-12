import { useState } from "react";
import { Send } from "lucide-react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
  string | undefined;

const INPUT_CLASS =
  "w-full rounded-sm border border-border bg-background px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-colors focus:border-signal";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const pending = status.kind === "sending";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ACCESS_KEY) {
      setStatus({
        kind: "error",
        message:
          "The contact form isn't configured yet. Please email me directly.",
      });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name,
          email,
          message,
          subject: `New message from ${name} — portfolio`,
          from_name: "Portfolio contact form",
        }),
      });

      const result = await response.json().catch(() => null);
      if (response.ok && result?.success) {
        setStatus({ kind: "sent" });
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      setStatus({
        kind: "error",
        message:
          result?.message ?? "Couldn't send your message. Please try again.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Network error — please check your connection and try again.",
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-border bg-surface p-6 md:p-8"
    >
      <p className="label-mono mb-6">
        <span className="text-signal">$</span> send --message
      </p>

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="label-mono mb-2 block">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={INPUT_CLASS}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="label-mono mb-2 block">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="label-mono mb-2 block">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${INPUT_CLASS} resize-y`}
          />
        </div>

        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
      </div>

      {status.kind === "error" && (
        <p
          role="alert"
          className="mt-5 border border-destructive/50 bg-destructive/10 px-3 py-2.5 font-mono text-xs text-destructive"
        >
          {status.message}
        </p>
      )}

      {status.kind === "sent" && (
        <p
          role="status"
          className="mt-5 border border-signal/50 bg-signal/10 px-3 py-2.5 font-mono text-xs text-signal"
        >
          Thanks! Your message is on its way — I&apos;ll get back to you soon.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
