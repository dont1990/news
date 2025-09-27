"use client";

import { Clock } from "lucide-react";
import { LatestNewsGrid } from "@/app/components/pages/home/latest-news/latest-news-grid";
import SectionTitle from "@/app/components/shared/section-title";
import React from "react";
import { useLimitedNews } from "../hooks/useLimitedNews";

const LatestNews = () => {
  const {
    data: articles,
    isLoading,
    isFetching,
  } = useLimitedNews({
    limit: 6, // fetch last 6 news
    sort: "desc",
  });

  return (
    <section>
      <SectionTitle title="آخرین اخبار" icon={<Clock className="w-5 h-5" />} />

      {isLoading ? (
        <p className="text-center py-6">در حال بارگذاری...</p>
      ) : (
        <div>
          <LatestNewsGrid articles={articles || []} />
          {isFetching && <p className="text-center py-2">بارگذاری بیشتر...</p>}
        </div>
      )}
    </section>
  );
};

export default LatestNews;
