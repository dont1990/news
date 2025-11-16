"use client";

import { LatestNewsGrid } from "@/features/home/latest-news/components/grid";
import SectionTitle from "@/components/shared/section-title";
import React from "react";
import { useLimitedNews } from "../hooks/useLimitedNews";
import ClockIcon from "@/assets/shared-icons/clock";

const LatestNews = () => {
  const {
    data: articles,
    isLoading,
    isFetching,
  } = useLimitedNews({
    limit: 6,
    sort: "desc",
  });

  return (
    <section>
      <SectionTitle
        title="آخرین اخبار"
        icon={<ClockIcon className="w-5 h-5" />}
      />

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
