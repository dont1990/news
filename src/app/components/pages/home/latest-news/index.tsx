import { LatestNewsGrid } from "@/app/components/pages/home/latest-news/latest-news-grid";
import SectionTitle from "@/app/components/shared/section-title";
import { mockArticles } from "@/app/data/mock-article";
import React from "react";

const LatestNews = () => {
  return (
    <section>
      <SectionTitle title={"آخرین اخبار"} />
      <LatestNewsGrid articles={mockArticles} />
    </section>
  );
};

export default LatestNews;
