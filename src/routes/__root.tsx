import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-extrabold text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">Page introuvable · Page not found</h2>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest text-background"
          >
            Accueil · Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl font-semibold text-foreground">Cette page n'a pas chargé.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest text-background"
          >
            Réessayer
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Le Nordique — Le Québec, expliqué." },
      { name: "description", content: "Magazine d'analyse bilingue sur le Québec : politique, économie, culture, environnement. Bilingual analysis magazine on Quebec." },
      { name: "author", content: "Le Nordique" },
      { name: "keywords", content: "Québec, Quebec, actualités, news, analyse, politique, économie, culture, environnement, bilingue, bilingual" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Le Nordique" },
      { property: "og:title", content: "Le Nordique — Le Québec, expliqué." },
      { property: "og:description", content: "Magazine d'analyse bilingue sur le Québec : politique, économie, culture, environnement. Bilingual analysis magazine on Quebec." },
      { property: "og:locale", content: "fr_CA" },
      { property: "og:locale:alternate", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@LeNordique" },
      { name: "twitter:title", content: "Le Nordique — Le Québec, expliqué." },
      { name: "twitter:description", content: "Magazine d'analyse bilingue sur le Québec : politique, économie, culture, environnement. Bilingual analysis magazine on Quebec." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/27828e58-3ea7-4d10-80b1-4eb25b98b120" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/27828e58-3ea7-4d10-80b1-4eb25b98b120" },
      { name: "google-adsense-account", content: "ca-pub-4276130467303652" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "alternate", hrefLang: "fr-CA", href: "/" },
      { rel: "alternate", hrefLang: "en-CA", href: "/" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4276130467303652",
        crossOrigin: "anonymous",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsMediaOrganization",
          name: "Le Nordique",
          alternateName: "The Nordique",
          url: "/",
          inLanguage: ["fr-CA", "en-CA"],
          slogan: "Le Québec, expliqué. Quebec, explained.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
