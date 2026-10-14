import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import type { Lang } from "@/lib/translate-api";
import {
  LanguageContext,
  LANGUAGES,
  STORAGE_KEY,
  useLanguage,
} from "@/components/site/language-context";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "bn") setLangState(stored);
    } catch {
      // localStorage unavailable — keep the default.
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures.
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Choose language"
      className="inline-flex items-center rounded-full border border-border bg-surface p-1"
    >
      {LANGUAGES.map((option) => {
        const active = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
              active
                ? "bg-signal text-primary-foreground"
                : "text-muted-foreground hover:text-signal"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
