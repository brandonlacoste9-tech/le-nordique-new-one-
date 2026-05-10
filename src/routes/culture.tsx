import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { categoryHead } from "@/lib/seo";

export const Route = createFileRoute("/culture")({
  head: () => categoryHead("culture"),
  component: () => <CategoryPage category="culture" />,
});
