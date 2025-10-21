import { Article } from "@/types/types";
import { ArticleCard } from "../../../../shared/article-card";

interface TechNewsGridProps {
  articles: Article[];
}

const TechNewsGrid = ({ articles }: TechNewsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-40">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} type="bottomOverlay" />
      ))}
    </div>
  );
};

export default TechNewsGrid;
