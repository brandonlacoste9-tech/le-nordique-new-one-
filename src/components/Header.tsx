import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { Menu, X, Search, Moon, Sun } from "lucide-react";
import { SearchModal } from "./SearchModal";
import { useTheme } from "@/lib/theme";

export function Header() {
  const { lang, setLang, tr } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const links = [
    { to: "/politique", label: tr("nav_politics") },
    { to: "/economie", label: tr("nav_economy") },
    { to: "/culture", label: tr("nav_culture") },
    { to: "/environnement", label: tr("nav_environment") },
    { to: "/a-propos", label: tr("nav_about") },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b-4 border-ink bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-4">
            <div className="bg-ink px-3 py-1.5 transition-transform group-hover:scale-105">
              <span className="font-serif text-2xl font-black tracking-tighter text-vox-yellow">
                N
              </span>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-serif text-xl font-black uppercase tracking-tighter text-foreground md:text-2xl">
                Le Nordique
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                {tr("tagline")}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs font-black uppercase tracking-widest text-foreground transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSearchOpen(true)}
              className="hidden text-foreground hover:text-accent lg:block" 
              aria-label="Search"
            >
              <Search className="h-5 w-5 stroke-[3px]" />
            </button>

            <button
              onClick={toggleTheme}
              className="text-foreground hover:text-accent"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5 stroke-[3px]" /> : <Sun className="h-5 w-5 stroke-[3px]" />}
            </button>

            <div className="flex items-center bg-muted p-1 text-[10px] font-black">
              <button
                onClick={() => setLang("fr")}
                className={`px-2 py-1 transition ${
                  lang === "fr" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 transition ${
                  lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
            <button
              className="lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              {open ? <X className="h-6 w-6 stroke-[3px]" /> : <Menu className="h-6 w-6 stroke-[3px]" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-semibold uppercase tracking-wide text-foreground"
                  activeProps={{ className: "text-accent" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      
      <SearchModal open={searchOpen} setOpen={setSearchOpen} />
    </>
  );
}
