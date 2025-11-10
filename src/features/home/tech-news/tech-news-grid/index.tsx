import { IArticle } from "@/types/article";
import { ArticleCard } from "../../../../components/shared/article-card";

interface TechNewsGridProps {
  articles: IArticle[];
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
