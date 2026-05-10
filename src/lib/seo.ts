import { categoryMeta, type Category } from "@/lib/articles";

const SITE = "Le Nordique";

export function categoryHead(category: Category) {
  const m = categoryMeta[category];
  const titleFr = `${m.fr} — ${SITE}`;
  const titleEn = `${m.en} — The Nordique`;
  const descFr = `Analyses, reportages et explications sur ${m.fr.toLowerCase()} au Québec.`;
  const descEn = `Analysis, reporting and explainers on ${m.en.toLowerCase()} in Quebec.`;
  const url = m.path;

  return {
    meta: [
      { title: titleFr },
      { name: "description", content: descFr },
      { name: "keywords", content: `${m.fr}, ${m.en}, Québec, Quebec, ${SITE}` },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE },
      { property: "og:title", content: m.fr },
      { property: "og:description", content: descFr },
      { property: "og:image", content: m.image },
      { property: "og:image:alt", content: m.fr },
      { property: "og:url", content: url },
      { property: "og:locale", content: "fr_CA" },
      { property: "og:locale:alternate", content: "en_CA" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@LeNordique" },
      { name: "twitter:title", content: m.fr },
      { name: "twitter:description", content: descFr },
      { name: "twitter:image", content: m.image },

      { name: "title:en", content: titleEn },
      { name: "description:en", content: descEn },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "fr-CA", href: url },
      { rel: "alternate", hrefLang: "en-CA", href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
    ],
  };
}
