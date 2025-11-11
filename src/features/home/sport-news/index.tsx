"use client";

import SectionTitle from "@/components/shared/section-title";
import React from "react";
import SportNewsGrid from "./components/news-grid";
import { categories } from "@/constants/categories/categories";
import { useLimitedNews } from "../hooks/useLimitedNews";

const SportNews = () => {
  const sportCategory = categories.find((c) => c.title === "ورزش");
  const SportIcon = sportCategory?.icon;

  // ✅ Fetch last 6 sport news
  const {
    data: articles,
    isLoading,
    isFetching,
  } = useLimitedNews({
    category: "ورزش",
    limit: 6,
    sort: "desc",
  });

  return (
    <section>
      <SectionTitle
        title="اخبار ورزشی"
        icon={SportIcon ? <SportIcon className="w-5 h-5" /> : undefined}
      />

      {isLoading ? (
        <p className="text-center py-6">در حال بارگذاری...</p>
      ) : (
        <div>
          <SportNewsGrid articles={articles || []} />
          {isFetching && <p className="text-center py-2">بارگذاری بیشتر...</p>}
        </div>
      )}
    </section>
  );
};

export default SportNews;
