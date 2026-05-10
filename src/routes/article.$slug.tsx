import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticleBySlug, articles, categoryMeta, type Article } from "@/lib/articles";
import { useI18n } from "@/lib/i18n";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { BarChart } from "@/components/DataViz";
import { useEffect } from "react";

export const Route = createFileRoute("/article/$slug")({
  component: ArticlePage,
  head: ({ params }) => {
    const a = getArticleBySlug(params.slug);
    if (!a) return { meta: [{ title: "Article — Le Nordique" }] };

    const url = `/article/${a.slug}`;
    const cat = categoryMeta[a.category];
    // Primary metadata in French (site default), with English alternates for crawlers.
    const titleFr = `${a.fr.title} — Le Nordique`;
    const titleEn = `${a.en.title} — The Nordique`;

    return {
      meta: [
        // Primary
        { title: titleFr },
        { name: "description", content: a.fr.dek },
        { name: "author", content: a.author },
        { name: "keywords", content: `${cat.fr}, ${cat.en}, Québec, Quebec, ${a.author}, Le Nordique` },

        // Open Graph (article)
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Le Nordique" },
        { property: "og:title", content: a.fr.title },
        { property: "og:description", content: a.fr.dek },
        { property: "og:image", content: a.image },
        { property: "og:image:alt", content: a.fr.title },
        { property: "og:url", content: url },
        { property: "og:locale", content: "fr_CA" },
        { property: "og:locale:alternate", content: "en_CA" },

        // Article-specific OG
        { property: "article:published_time", content: a.date },
        { property: "article:author", content: a.author },
        { property: "article:section", content: cat.fr },
        { property: "article:tag", content: cat.fr },
        { property: "article:tag", content: cat.en },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@LeNordique" },
        { name: "twitter:creator", content: "@LeNordique" },
        { name: "twitter:title", content: a.fr.title },
        { name: "twitter:description", content: a.fr.dek },
        { name: "twitter:image", content: a.image },
        { name: "twitter:image:alt", content: a.fr.title },

        // English alternates (named so crawlers can pick up either language)
        { name: "title:en", content: titleEn },
        { name: "description:en", content: a.en.dek },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "fr-CA", href: url },
        { rel: "alternate", hrefLang: "en-CA", href: url },
        { rel: "alternate", hrefLang: "x-default", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: a.fr.title,
            alternativeHeadline: a.en.title,
            description: a.fr.dek,
            image: [a.image],
            datePublished: a.date,
            dateModified: a.date,
            inLanguage: ["fr-CA", "en-CA"],
            articleSection: cat.fr,
            author: { "@type": "Person", name: a.author },
            publisher: {
              "@type": "Organization",
              name: "Le Nordique",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
      ],
    };
  },
  loader: ({ params }) => {
    const a = getArticleBySlug(params.slug);
    if (!a) throw notFound();
    return a;
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-serif text-5xl font-extrabold">404</h1>
      <p className="mt-4 text-muted-foreground">Article introuvable.</p>
      <Link to="/" className="mt-6 inline-block underline">Accueil</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p>{error.message}</p>
    </div>
  ),
});

function ArticlePage() {
  const article = Route.useLoaderData() as Article;
  const { lang, tr } = useI18n();
  const c = article[lang];
  const cat = categoryMeta[article.category];
  const related = articles.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const bar = document.getElementById("scroll-progress");
      if (!bar) return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article className="relative">
      {/* Progress Bar (Vox Style) */}
      <div className="fixed top-[61px] left-0 z-30 h-1 w-full bg-border">
        <div className="h-full bg-accent transition-all duration-300" style={{ width: "0%" }} id="scroll-progress" />
      </div>

      <header className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
        <Link to={cat.path} className="eyebrow">{cat[lang]} · {c.kicker}</Link>
        <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.05] text-balance md:text-6xl">
          {c.title}
        </h1>
        <p className="mt-5 text-xl text-muted-foreground text-pretty">{c.dek}</p>
        <div className="mt-6 flex items-center gap-4 border-y border-border py-4 text-xs uppercase tracking-widest text-muted-foreground">
          <span>{tr("by")} <span className="text-foreground">{article.author}</span></span>
          <span>·</span>
          <span>{new Date(article.date).toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>·</span>
          <span>{article.readMin} {tr("min_read")}</span>
        </div>
      </header>

      <figure className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
        <img src={article.image} alt={c.title} className="aspect-[16/9] w-full object-cover" />
        {article.imageCaption && (
          <figcaption className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
            {article.imageCaption[lang]}
          </figcaption>
        )}
      </figure>

      {/* Key Takeaways Box (Vox Style) */}
      <div className="mx-auto mt-12 max-w-2xl border-2 border-ink bg-snow p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
        <h3 className="flex items-center gap-2 font-serif text-xl font-black uppercase tracking-tight">
          <span className="flex h-6 w-6 items-center justify-center bg-vox-yellow text-xs">!</span>
          {tr("key_takeaways")}
        </h3>
        <ul className="mt-6 space-y-4 text-sm font-medium leading-relaxed md:text-base">
          {c.body.filter(b => b.type === "p").slice(0, 3).map((b, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-accent">•</span>
              <span>{b.text.slice(0, 100)}...</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6 font-serif text-lg leading-relaxed md:text-xl">
              {c.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="mt-10 font-serif text-3xl font-extrabold leading-tight md:text-4xl">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote key={i} className="my-10 border-l-4 border-accent pl-6">
                      <p className="font-serif text-2xl font-semibold italic leading-snug text-foreground md:text-3xl">
                        &ldquo;{block.text}&rdquo;
                      </p>
                      {block.cite && (
                        <cite className="mt-3 block text-xs not-italic uppercase tracking-widest text-muted-foreground">
                          — {block.cite}
                        </cite>
                      )}
                    </blockquote>
                  );
                }
                
                const isFirstP = c.body.findIndex((b) => b.type === "p") === i;
                const showChart = article.slug === "hydro-quebec-pari" && i === 4;

                return (
                  <div key={i}>
                    <p className={isFirstP ? "first-letter:float-left first-letter:mr-2 first-letter:font-extrabold first-letter:text-7xl first-letter:leading-[0.85]" : ""}>
                      {block.text}
                    </p>
                    {showChart && (
                      <BarChart 
                        title="Capacité de production projetée"
                        subtitle="En Térawattheures (TWh) additionnels d'ici 2050"
                        xKey="year"
                        yKey="twh"
                        source="Hydro-Québec, Plan stratégique 2024"
                        data={[
                          { year: "2024", twh: 0 },
                          { year: "2030", twh: 15 },
                          { year: "2035", twh: 35 },
                          { year: "2040", twh: 48 },
                          { year: "2050", twh: 60 },
                        ]}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">
              <Newsletter variant="sidebar" />
              
              <div className="border-t border-ink/10 pt-8">
                <h4 className="font-serif text-xl font-black uppercase tracking-tight">À propos de l'auteur</h4>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-ink/10" />
                  <div>
                    <p className="font-bold">{article.author}</p>
                    <p className="text-xs text-muted-foreground">Analyste senior · Le Nordique</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-ink">
          <div className="rule-top pt-6">
            <h2 className="font-serif text-2xl font-extrabold">{tr("more_in")} {cat[lang]}</h2>
          </div>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {related.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </section>
      )}
    </article>
  );
}
