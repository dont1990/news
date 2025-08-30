export default function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  return <ArticlePage params={params} />;
}
