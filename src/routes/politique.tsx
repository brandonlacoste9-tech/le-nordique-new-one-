import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryHead } from "@/lib/seo";

export const Route = createFileRoute("/politique")({
  head: () => categoryHead("politique"),
  component: () => <CategoryPage category="politique" />,
});
