import { Clock } from "lucide-react";
import { LatestNewsGrid } from "@/app/components/pages/home/latest-news/latest-news-grid";
import SectionTitle from "@/app/components/shared/section-title";
import { mockArticles } from "@/app/data/mock-article";
import React from "react";

const LatestNews = () => {
  return (
    <section>
      <SectionTitle
        title="آخرین اخبار"
        icon={<Clock className="w-5 h-5" />}
      />
      <LatestNewsGrid articles={mockArticles} />
    </section>
  );
};

export default LatestNews;
