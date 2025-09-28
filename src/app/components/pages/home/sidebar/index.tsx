"use client";

import { NAVBAR_HEIGHT } from "@/app/constants/global";
import { Newsletter } from "@/app/components/pages/home/sidebar/newsletter";
import IranWeatherTicker from "./weather/slider";
import { useLimitedNews } from "../hooks/useLimitedNews";
import RecentUpdatesCard from "./recent-updates";
import TrendingTopicsCard from "./trending-topics";
import WorldClockTicker from "./oclock/slider";

const trendingTopics = [
  { topic: "نشست اقلیمی", count: 1247 },
  { topic: "ایمنی هوش مصنوعی", count: 892 },
  { topic: "بهبود بازار", count: 756 },
  { topic: "اکتشاف فضا", count: 634 },
  { topic: "پیشرفت پزشکی", count: 521 },
];

export function HomePageSidebar() {
  const { data: recentUpdates = [] } = useLimitedNews({
    limit: 5,
    sort: "desc",
  });

  return (
    <div className="xl:col-span-1">
      <div className={`sticky`} style={{ top: NAVBAR_HEIGHT }}>
        <div className="space-y-6" dir="rtl">
          <TrendingTopicsCard />
          <RecentUpdatesCard articles={recentUpdates} />
          <Newsletter />
          <IranWeatherTicker />
          <WorldClockTicker />
        </div>
      </div>
    </div>
  );
}
