import { NewsGrid } from "@/app/components/news-grid";
import SectionTitle from "@/app/components/shared/section-title";
import { mockArticles } from "@/app/data/mock-article";
import React from "react";

const LatestNews = () => {
  return (
    <section>
      <SectionTitle title={"آخرین اخبار"} />
      <NewsGrid articles={mockArticles} />
    </section>
  );
};

export default LatestNews;
