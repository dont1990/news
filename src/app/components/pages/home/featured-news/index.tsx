import { Star } from "lucide-react";
import { ArticleCard } from "@/app/components/shared/article-card";
import SectionTitle from "@/app/components/shared/section-title";
import { mockArticles } from "@/app/data/mock-article";

const FeaturedNews = () => {
  return (
    <section>
      <SectionTitle
        title="داستان ویژه"
        icon={<Star className="w-5 h-5" />}
      />
      <ArticleCard article={mockArticles[0]} />
    </section>
  );
};

export default FeaturedNews;
