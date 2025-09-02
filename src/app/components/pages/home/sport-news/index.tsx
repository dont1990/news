import SectionTitle from "@/app/components/shared/section-title";
import { mockArticles } from "@/app/data/mock-article";
import React from "react";
import SportNewsGrid from "./sport-news-grid";

const SportNews = () => {
  return (
    <section className=" mb-48">
      <SectionTitle title={"اخبار ورزشی"} />
      <SportNewsGrid articles={mockArticles} />
    </section>
  );
};

export default SportNews;
