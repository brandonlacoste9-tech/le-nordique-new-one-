import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const { tr } = useI18n();
  return (
    <footer className="mt-24 border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="font-serif text-2xl font-extrabold">
            Le<span className="text-accent">·</span>Nordique
          </div>
          <p className="mt-3 max-w-sm text-sm text-background/70">{tr("tagline")}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm md:col-span-2">
          <Link to="/a-propos" className="hover-underline text-background/80">{tr("footer_about")}</Link>
          <Link to="/contact" className="hover-underline text-background/80">{tr("footer_contact")}</Link>
          <Link to="/confidentialite" className="hover-underline text-background/80">{tr("footer_privacy")}</Link>
          <Link to="/conditions" className="hover-underline text-background/80">{tr("footer_terms")}</Link>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-background/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Le Nordique — Montréal · Québec. {tr("footer_rights")}
        </div>
      </div>
    </footer>
  );
}
