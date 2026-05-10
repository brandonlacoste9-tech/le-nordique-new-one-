import { createServerFn } from "@tanstack/react-start";
import Parser from "rss-parser";

const parser = new Parser();

// This function fetches live news from Radio-Canada's public RSS feed
export const fetchLatestNews = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const feed = await parser.parseURL("https://ici.radio-canada.ca/rss/30");
    
    // We only want the latest 5 items and map them to our interface
    return (feed.items || []).slice(0, 5).map((item, idx) => ({
      id: item.guid || `rss-${idx}`,
      title: item.title || "Nouvelle sans titre",
      source: "Radio-Canada",
      date: item.isoDate || new Date().toISOString(),
      summary: item.contentSnippet || item.content || "",
      url: item.link || "#"
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération du flux RSS:", error);
    // Fallback to minimal mock if feed is down
    return [
      {
        id: "news-fallback",
        title: "Le flux de nouvelles est temporairement indisponible",
        source: "Système",
        date: new Date().toISOString(),
        summary: "Nous n'avons pas pu récupérer les dernières nouvelles en direct. Veuillez réessayer plus tard.",
        url: "#"
      }
    ];
  }
});
