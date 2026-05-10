import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, { fr: string; en: string }>;

export const t: Dict = {
  tagline: { fr: "Le Québec, expliqué.", en: "Quebec, explained." },
  nav_home: { fr: "Accueil", en: "Home" },
  nav_politics: { fr: "Politique", en: "Politics" },
  nav_culture: { fr: "Culture", en: "Culture" },
  nav_economy: { fr: "Économie", en: "Economy" },
  nav_environment: { fr: "Environnement", en: "Environment" },
  nav_about: { fr: "À propos", en: "About" },
  featured: { fr: "À la une", en: "Featured" },
  latest: { fr: "Dernières analyses", en: "Latest analyses" },
  more_in: { fr: "Plus en", en: "More in" },
  read_more: { fr: "Lire l'article", en: "Read the article" },
  newsletter_title: { fr: "Recevez Le Nordique chaque matin", en: "Get The Nordique every morning" },
  newsletter_sub: {
    fr: "Une lettre quotidienne pour comprendre le Québec d'aujourd'hui.",
    en: "A daily letter to understand today's Quebec.",
  },
  newsletter_cta: { fr: "S'abonner", en: "Subscribe" },
  email_placeholder: { fr: "votre@courriel.ca", en: "your@email.com" },
  back_home: { fr: "Retour à l'accueil", en: "Back to home" },
  by: { fr: "Par", en: "By" },
  min_read: { fr: "min de lecture", en: "min read" },
  about_title: { fr: "À propos du Nordique", en: "About The Nordique" },
  about_body: {
    fr: "Le Nordique est un magazine d'analyse fondé pour expliquer le Québec à ses lecteurs — en français comme en anglais. Inspiré par le journalisme explicatif moderne, nous croyons qu'une démocratie saine repose sur des citoyens informés. Nous couvrons la politique, l'économie, la culture et l'environnement avec rigueur, indépendance et clarté.",
    en: "The Nordique is an analysis magazine founded to explain Quebec to its readers — in both French and English. Inspired by modern explanatory journalism, we believe a healthy democracy rests on informed citizens. We cover politics, the economy, culture and the environment with rigor, independence and clarity.",
  },
  footer_rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
  footer_about: { fr: "Notre mission", en: "Our mission" },
  footer_contact: { fr: "Nous joindre", en: "Contact" },
  footer_ethics: { fr: "Code d'éthique", en: "Ethics code" },
  footer_privacy: { fr: "Confidentialité", en: "Privacy Policy" },
  footer_terms: { fr: "Conditions d'utilisation", en: "Terms of Service" },
  key_takeaways: { fr: "L'essentiel", en: "Key Takeaways" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (key: keyof typeof t) => string };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("nordique-lang") as Lang | null) : null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("nordique-lang", l);
  };

  const tr = (key: keyof typeof t) => t[key][lang];

  return <I18nContext.Provider value={{ lang, setLang, tr }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
