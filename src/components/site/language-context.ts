import { createContext, useContext, useEffect, useState } from "react";

import type { Category } from "@/lib/blog";
import { translateFn, type Lang } from "@/lib/translate-api";

export const STORAGE_KEY = "anan-lang";

export const LANGUAGES: Array<{ code: Lang; label: string }> = [
  { code: "en", label: "English" },
  { code: "bn", label: "বাংলা" },
];

const CATEGORY_BN: Record<Category, string> = {
  Technological: "প্রযুক্তিগত",
  Philosophical: "দার্শনিক",
  Storytelling: "গল্পের ছলে",
  "Life update": "জীবনের খবর",
  Newsletter: "নিউজলেটার",
};

export type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

export function categoryLabel(category: Category, lang: Lang): string {
  return lang === "bn" ? CATEGORY_BN[category] : category;
}

export function useTranslated(texts: string[]): string[] {
  const { lang } = useLanguage();
  const key = texts.join("\u0000");
  const [state, setState] = useState<{
    key: string;
    lang: Lang;
    value: string[];
  }>({ key, lang, value: texts });

  useEffect(() => {
    if (lang === "en") return;
    let active = true;
    const source = key.length > 0 ? key.split("\u0000") : [];
    translateFn({ data: { texts: source, target: lang } })
      .then((result) => {
        if (active) setState({ key, lang, value: result });
      })
      .catch(() => {
        if (active) setState({ key, lang, value: source });
      });
    return () => {
      active = false;
    };
  }, [key, lang]);

  if (lang === "en") return texts;
  if (state.key === key && state.lang === lang) return state.value;
  return texts;
}
