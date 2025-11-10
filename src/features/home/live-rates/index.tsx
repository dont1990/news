"use client";

import SectionTitle from "../../../components/shared/section-title";
import LiveStatCard from "./card";
import LiveStatCardSkeleton from "./card/skeleton";
import { useRates } from "./hooks/useRates";
import TrendingUpIcon from "@/assets/shared-icons/trending-up";
import { mapLiveStats } from "./utils/mapLiveStats";

export function LiveRates() {
  const { data, isLoading, isError } = useRates();

  if (isError)
    return <p className="text-center py-8">قیمت‌ها قابل دریافت نیست.</p>;

  const liveStats = data ? mapLiveStats(data) : [];

  return (
    <section>
      <SectionTitle
        title="آخرین قیمت‌ها"
        icon={<TrendingUpIcon className="w-5 h-5" />}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <LiveStatCardSkeleton key={i} />
            ))
          : liveStats.map((stat) => <LiveStatCard key={stat.id} stat={stat} />)}
      </div>
    </section>
  );
}
