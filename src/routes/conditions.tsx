import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/conditions")({
  component: Terms,
});

function Terms() {
  const { tr } = useI18n();
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-serif text-5xl font-black uppercase tracking-tight">{tr("footer_terms")}</h1>
      <div className="mt-12 space-y-6 text-lg leading-relaxed">
        <p>
          Bienvenue sur Le Nordique. En accédant à ce site, vous acceptez les présentes conditions.
        </p>
        <h2 className="font-serif text-2xl font-bold">1. Propriété intellectuelle</h2>
        <p>
          Tout le contenu (textes, analyses, graphiques) est la propriété exclusive du Nordique, sauf mention contraire. Toute reproduction sans autorisation est interdite.
        </p>
        <h2 className="font-serif text-2xl font-bold">2. Responsabilité</h2>
        <p>
          Nos analyses sont fournies à titre informatif. Le Nordique ne peut être tenu responsable des décisions prises sur la base de ces informations.
        </p>
        <h2 className="font-serif text-2xl font-bold">3. Droit applicable</h2>
        <p>
          Ces conditions sont régies par les lois en vigueur dans la province de Québec, Canada.
        </p>
      </div>
    </div>
  );
}
