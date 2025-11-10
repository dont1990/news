"use client";

import { NAVBAR_HEIGHT } from "@/constants/global";
import { Newsletter } from "@/features/home/sidebar/newsletter";
import { useLimitedNews } from "../hooks/useLimitedNews";
import RecentUpdatesCard from "./recent-updates";
import TrendingTopicsCard from "./trending-topics";
import IranWeatherSlider from "./weather/slider";
import WorldClockSlider from "./world-clock/slider";

export function HomePageSidebar() {
  const { data: recentUpdates = [] } = useLimitedNews({
    limit: 5,
    sort: "desc",
  });

  return (
    <div className="xl:col-span-1">
      <div className={`sticky`} style={{ top: NAVBAR_HEIGHT }}>
        <div className="flex flex-col gap-y-6" dir="rtl">
          <TrendingTopicsCard />
          <RecentUpdatesCard articles={recentUpdates} />
          <Newsletter />
          <IranWeatherSlider variant="vertical" />
          <WorldClockSlider variant="vertical" />
        </div>
      </div>
    </div>
  );
}
