import SectionTitle from "@/app/components/shared/section-title";
import { mockArticles } from "@/app/data/mock-article";
import React from "react";
import SportNewsGrid from "./sport-news-grid";
import { categories } from "@/app/data/categories/categories";

const SportNews = () => {
  const sportCategory = categories.find((c) => c.title === "ورزش");
  const SportIcon = sportCategory?.icon;

  return (
    <section>
      <SectionTitle
        title="اخبار ورزشی"
        icon={SportIcon ? <SportIcon className="w-5 h-5" /> : undefined}
      />
      <SportNewsGrid articles={mockArticles} />
    </section>
  );
};

export default SportNews;
