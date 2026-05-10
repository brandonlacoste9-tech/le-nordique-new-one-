import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryHead } from "@/lib/seo";

export const Route = createFileRoute("/environnement")({
  head: () => categoryHead("environnement"),
  component: () => <CategoryPage category="environnement" />,
});
