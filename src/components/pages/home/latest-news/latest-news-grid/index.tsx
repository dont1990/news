import { Article } from "@/types/article";
import { ArticleCard } from "../../../../shared/article-card";

interface LatestNewsGridProps {
  articles: Article[];
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
