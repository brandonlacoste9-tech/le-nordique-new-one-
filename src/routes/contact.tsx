import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const { tr } = useI18n();
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-serif text-5xl font-black uppercase tracking-tight">{tr("footer_contact")}</h1>
      <div className="mt-12 space-y-8 font-serif text-xl leading-relaxed">
        <p>
          Pour toute demande d'information, de correction ou pour nous proposer une analyse, vous pouvez nous joindre aux coordonnées suivantes.
        </p>
        <div className="border-l-4 border-accent pl-6">
          <p className="font-bold">Rédaction</p>
          <p className="text-muted-foreground">redaction@lenordique.ca</p>
        </div>
        <div className="border-l-4 border-accent pl-6">
          <p className="font-bold">Publicité et Partenariats</p>
          <p className="text-muted-foreground">pub@lenordique.ca</p>
        </div>
        <div className="border-l-4 border-accent pl-6">
          <p className="font-bold">Bureaux</p>
          <p className="text-muted-foreground">Montréal, Québec, Canada</p>
        </div>
      </div>
    </div>
  );
}
