import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryHead } from "@/lib/seo";

export const Route = createFileRoute("/economie")({
  head: () => categoryHead("economie"),
  component: () => <CategoryPage category="economie" />,
});
