import { CategoryPage } from "@/app/components/pages/category";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  return <CategoryPage params={params} />;
}
