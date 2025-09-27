"use client";

import SectionTitle from "@/app/components/shared/section-title";
import React from "react";
import TechNewsGrid from "./tech-news-grid";
import { categories } from "@/app/data/categories/categories";
import { useLimitedNews } from "../hooks/useLimitedNews";

const TechNews = () => {
  const techCategory = categories.find((c) => c.title === "فناوری");
  const TechIcon = techCategory?.icon;


  // ✅ Fetch last 6 tech news
  const { data: articles = [], isLoading, isFetching } = useLimitedNews({
    category: "فناوری",
    limit: 6,
    sort: "desc",
  });
  
  return (
    <section className="mb-48">
      <SectionTitle
        title="اخبار فناوری"
        icon={TechIcon ? <TechIcon className="w-5 h-5" /> : undefined}
      />

      {isLoading ? (
        <p className="text-center py-6">در حال بارگذاری...</p>
      ) : (
        <>
          <TechNewsGrid articles={articles} />
          {isFetching && <p className="text-center py-2">بارگذاری بیشتر...</p>}
        </>
      )}
    </section>
  );
};

export default TechNews;
