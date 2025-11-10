import { IArticle } from "@/types/article";
import { ArticleCard } from "../../../../components/shared/article-card";

interface LatestNewsGridProps {
  articles: IArticle[];
}

export function LatestNewsGrid({ articles }: LatestNewsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
