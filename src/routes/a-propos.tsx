import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Le Nordique" },
      { name: "description", content: "Le Nordique est un magazine d'analyse bilingue sur le Québec. Notre mission, notre équipe, notre code d'éthique." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Le Nordique" },
      { property: "og:title", content: "À propos — Le Nordique" },
      { property: "og:description", content: "Notre mission : expliquer le Québec — en français et en anglais." },
      { property: "og:locale", content: "fr_CA" },
      { property: "og:locale:alternate", content: "en_CA" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "About — The Nordique" },
      { name: "twitter:description", content: "Our mission: to explain Quebec — in French and English." },
      { name: "title:en", content: "About — The Nordique" },
      { name: "description:en", content: "The Nordique is a bilingual analysis magazine on Quebec. Our mission, our team, our ethics code." },
    ],
    links: [
      { rel: "canonical", href: "/a-propos" },
      { rel: "alternate", hrefLang: "fr-CA", href: "/a-propos" },
      { rel: "alternate", hrefLang: "en-CA", href: "/a-propos" },
    ],
  }),
  component: About,
});

function About() {
  const { tr } = useI18n();
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <span className="eyebrow">Le Nordique</span>
      <h1 className="mt-3 font-serif text-5xl font-extrabold leading-tight text-balance md:text-6xl">
        {tr("about_title")}
      </h1>
      <p className="mt-8 font-serif text-xl leading-relaxed text-pretty md:text-2xl">{tr("about_body")}</p>
    </section>
  );
}
