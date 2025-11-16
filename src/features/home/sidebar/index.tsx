"use client";

import { NAVBAR_HEIGHT } from "@/constants/global";
import { Newsletter } from "@/features/home/sidebar/components/newsletter";
import { useLimitedNews } from "../hooks/useLimitedNews";
import RecentUpdatesCard from "./components/recent-updates";
import TrendingTopicsCard from "./components/trending-topics";
import IranWeatherSlider from "./components/weather/slider";
import WorldClockSlider from "./components/world-clock/slider";

export function HomePageSidebar() {
  const { data: recentUpdates = [] } = useLimitedNews({
    limit: 5,
    sort: "desc",
  });

  return (
    <div className={`sticky`} style={{ top: NAVBAR_HEIGHT }}>
      <div className="grid gap-y-6" dir="rtl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <TrendingTopicsCard />
          <RecentUpdatesCard articles={recentUpdates} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <IranWeatherSlider variant="vertical" />
          <WorldClockSlider variant="vertical" />
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
