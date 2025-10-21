"use client";

import { NAVBAR_HEIGHT } from "@/constants/global";
import { Newsletter } from "@/components/pages/home/sidebar/newsletter";
import IranWeatherTicker from "./weather/slider";
import { useLimitedNews } from "../hooks/useLimitedNews";
import RecentUpdatesCard from "./recent-updates";
import TrendingTopicsCard from "./trending-topics";
import WorldClockTicker from "./world-clock/slider";

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
