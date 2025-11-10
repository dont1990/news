import { IArticle } from "@/types/article";
import { ArticleCard } from "../../../../components/shared/article-card";

interface SportNewsGridProps {
  articles: IArticle[];
}

const SportNewsGrid = ({ articles }: SportNewsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} type="overlay" />
      ))}
    </div>
  );
};

export default SportNewsGrid;
