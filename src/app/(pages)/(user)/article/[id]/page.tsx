import ArticlePage from "@/app/components/pages/article";

export default function page({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  return <ArticlePage params={params} />;
}
