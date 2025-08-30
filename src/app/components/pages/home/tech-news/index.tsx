import SectionTitle from "@/app/components/shared/section-title";
import { mockArticles } from "@/app/data/mock-article";
import React from "react";
import TechNewsGrid from "./tech-news-grid";

const TechNews = () => {
  return (
    <section>
      <SectionTitle title={"اخبار تکنولوژی"} />
      <TechNewsGrid articles={mockArticles} />
    </section>
  );
};

export default TechNews;
