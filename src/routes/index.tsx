import { createFileRoute, Link } from "@tanstack/react-router";
import { articles, categoryMeta, type Category } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { TopicExplainer } from "@/components/TopicExplainer";
import { LiveFeed } from "@/components/LiveFeed";
import { Poll } from "@/components/Poll";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { tr, lang } = useI18n();
  const [hero, ...rest] = articles;
  const featured = rest.slice(0, 3);
  const more = rest.slice(3);

  const cats: Category[] = ["politique", "economie", "culture", "environnement"];

  return (
    <div>
      {/* Date strip */}
      <div className="border-b border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground sm:px-6 lg:px-8">
          <span>
            {new Date().toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", {
              weekday: "long", year: "numeric", month: "long", day: "numeric",
            })}
          </span>
          <span className="hidden sm:inline">Montréal · Québec</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rule-top pt-6">
          <span className="eyebrow">{tr("featured")}</span>
        </div>
        <div className="mt-6">
          <ArticleCard article={hero} variant="hero" />
        </div>
      </section>

      {/* Big Idea Section (Vox Style) */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ArticleCard article={rest[0]} variant="big-idea" />
      </section>

      {/* Featured grid & Trending Sidebar */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Feed */}
          <div className="lg:col-span-8">
            <div className="rule-top pt-6">
              <h2 className="font-serif text-3xl font-extrabold">{tr("latest")}</h2>
            </div>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {rest.slice(1, 5).map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>

          {/* Trending Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <LiveFeed />
            
            <Poll 
              id="energy-poll-2026"
              question="Devrait-on construire de nouveaux barrages pour répondre à la demande d'IA ?"
              options={[
                "Oui, c'est essentiel pour l'économie",
                "Non, priorisons la sobriété énergétique",
                "Seulement en partenariat avec les Nations Autochtones",
                "Je ne sais pas, j'ai besoin d'un explicateur"
              ]}
            />

            <div>
              <div className="rule-top pt-6">
                <h2 className="font-serif text-2xl font-extrabold">Plus populaires</h2>
              </div>
              <div className="mt-8 flex flex-col gap-8">
                {rest.slice(5, 9).map((a, idx) => (
                  <div key={a.slug} className="group flex gap-4">
                    <span className="font-serif text-4xl font-black text-muted-foreground/30">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="eyebrow text-[10px]">{categoryMeta[a.category][lang]}</span>
                      <h4 className="mt-1 font-serif text-lg font-bold leading-tight">
                        <Link to="/article/$slug" params={{ slug: a.slug }} className="hover-underline">
                          {a[lang].title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Topic Explainers (Guides) */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rule-top pt-6">
          <span className="eyebrow">Dossiers Permanents</span>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TopicExplainer
            title="La crise du logement, expliquée"
            description="Pourquoi Montréal n'est plus abordable et ce que les autres villes font pour régler le problème."
            slug="logement-quebec"
            category="Politique"
          />
          <TopicExplainer
            title="Le pari d'Hydro-Québec"
            description="Tout comprendre sur le plan à 185 milliards pour doubler la production d'énergie d'ici 2050."
            slug="hydro-quebec-pari"
            category="Économie"
          />
          <TopicExplainer
            title="Loi 96 : le guide complet"
            description="Un décryptage clause par clause de la loi linguistique la plus ambitieuse depuis les années 70."
            slug="loi-quebec-langue"
            category="Société"
          />
        </div>
      </section>

      <Newsletter />

      {/* Categories pivot */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rule-top pt-6">
          <span className="eyebrow">Sections</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => {
            const m = categoryMeta[c];
            return (
              <Link key={c} to={m.path} className="group relative block aspect-[4/5] overflow-hidden">
                <img
                  src={m.image}
                  alt={m[lang]}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-3xl font-extrabold text-background">{m[lang]}</h3>
                  <span className="mt-1 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
