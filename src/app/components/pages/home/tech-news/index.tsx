import SectionTitle from "@/app/components/shared/section-title";
import { mockArticles } from "@/app/data/mock-article";
import React from "react";
import TechNewsGrid from "./tech-news-grid";
import { categories } from "@/app/data/categories/categories";

const TechNews = () => {
  const techCategory = categories.find((c) => c.title === "فناوری");
  const TechIcon = techCategory?.icon;

  return (
    <section className="mb-48">
      <SectionTitle
        title="اخبار فناوری"
        icon={TechIcon ? <TechIcon className="w-5 h-5" /> : undefined}
      />
      <TechNewsGrid articles={mockArticles} />
    </section>
  );
};

export default TechNews;
