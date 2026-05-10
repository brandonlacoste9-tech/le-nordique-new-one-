import { createServerFn } from "@tanstack/react-start";

// This is a mock of what would be a real API call to a news service
// like NewsAPI, GNews, or an RSS aggregator.
export const fetchLatestNews = createServerFn({ method: "GET" }).handler(async () => {
  // In a real app, you would fetch from:
  // const res = await fetch(`https://newsapi.org/v2/everything?q=Quebec&apiKey=${process.env.NEWS_API_KEY}`);
  // const data = await res.json();
  
  // For demonstration, we'll return mock dynamic data
  return [
    {
      id: "news-1",
      title: "Nouveau sommet sur le climat à Montréal",
      source: "Radio-Canada",
      date: new Date().toISOString(),
      summary: "Les maires de 20 grandes villes se réunissent pour discuter de l'adaptation aux inondations.",
      url: "#"
    },
    {
      id: "news-2",
      title: "Économie : Le taux de chômage stagne au Québec",
      source: "La Presse",
      date: new Date().toISOString(),
      summary: "Les données de Statistiques Canada montrent une résilience surprenante du marché de l'emploi.",
      url: "#"
    },
    {
      id: "news-3",
      title: "Culture : Ouverture du nouveau musée d'art contemporain",
      source: "Le Devoir",
      date: new Date().toISOString(),
      summary: "Après 4 ans de travaux, l'institution rouvre ses portes au public demain.",
      url: "#"
    }
  ];
});
