"use client";

import { TrendingUp } from "lucide-react";
import SectionTitle from "../../../shared/section-title";
import LiveStatCard from "./card";
import LiveStatCardSkeleton from "./card/skeleton";
import { useRates } from "./hooks/useRates";
import { LiveStat } from "./types/liveStat";

export function LiveRates() {
  const { data, isLoading, isError } = useRates();

  if (isError)
    return <p className="text-center py-8">قیمت‌ها قابل دریافت نیست.</p>;

  const liveStats: LiveStat[] = data
    ? [
        {
          id: 1,
          title: "بورس",
          value: data.tsetmc.value,
          change: data.tsetmc.change || "0",
          trend: Number(data.tsetmc.change) >= 0 ? "up" : "down",
          type: "gbp",
        },
        {
          id: 2,
          title: "دلار آمریکا",
          value: data.dollar.value,
          change: data.dollar.change || "0",
          trend: Number(data.dollar.change) >= 0 ? "up" : "down",
          type: "usd",
        },
        {
          id: 3,
          title: "سکه",
          value: data.coin.value,
          change: data.coin.change || "0",
          trend: Number(data.coin.change) >= 0 ? "up" : "down",
          type: "coin",
        },
        {
          id: 4,
          title: "طلا",
          value: data.gold.value,
          change: data.gold.change || "0",
          trend: Number(data.gold.change) >= 0 ? "up" : "down",
          type: "gold",
        },
      ]
    : [];

  return (
    <section>
      <SectionTitle
        title="آخرین قیمت‌ها"
        icon={<TrendingUp className="w-5 h-5" />}
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
