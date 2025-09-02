import { mockArticles } from "@/app/data/mock-article";
import ArticlePage from "./content/index";
import NotFound from "./not-found";

export default async function ArticlePageWrapper({ id }: { id: string }) {
  const article = mockArticles.find((a) => a.id === id);

  if (!article) {
    return <NotFound />;
  }

  return <ArticlePage article={article} />;
}
