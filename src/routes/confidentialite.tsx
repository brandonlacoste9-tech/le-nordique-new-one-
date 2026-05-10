import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/confidentialite")({
  component: Privacy,
});

function Privacy() {
  const { tr } = useI18n();
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-serif text-5xl font-black uppercase tracking-tight">{tr("footer_privacy")}</h1>
      <div className="mt-12 space-y-6 text-lg leading-relaxed">
        <p className="font-bold">Dernière mise à jour : 10 mai 2026</p>
        <p>
          Chez Le Nordique, nous prenons votre vie privée au sérieux. Cette politique explique comment nous traitons vos données.
        </p>
        <h2 className="font-serif text-2xl font-bold">1. Données collectées</h2>
        <p>
          Nous utilisons des outils d'analyse (comme Google Analytics) et de publicité (Google AdSense) qui peuvent collecter des cookies pour améliorer votre expérience et nous aider à financer notre journalisme indépendant.
        </p>
        <h2 className="font-serif text-2xl font-bold">2. Publicité</h2>
        <p>
          Google, en tant que fournisseur tiers, utilise des cookies pour diffuser des annonces sur notre site. L'utilisation du cookie DART par Google lui permet de diffuser des annonces aux utilisateurs en fonction de leur visite sur notre site et sur d'autres sites Internet.
        </p>
        <h2 className="font-serif text-2xl font-bold">3. Vos droits</h2>
        <p>
          Vous pouvez choisir de désactiver les cookies via les options de votre navigateur. Pour plus d'informations sur la publicité ciblée et sur la manière de vous y opposer, visitez le site de la Network Advertising Initiative.
        </p>
      </div>
    </div>
  );
}
