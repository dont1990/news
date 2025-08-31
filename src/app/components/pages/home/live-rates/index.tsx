"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/section-title";
import LiveStatCard from "./card";

interface ApiRates {
  dollar: { value: string; change: string };
  pound: { value: string; change: string };
  coin: { value: string; change: string };
  gold: { value: string; change: string };
  updatedAt: string;
}

interface LiveStat {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: Trend;
  type: "usd" | "gbp" | "coin" | "gold";
}
type Trend = "up" | "down";

export function LiveRates() {
  const [liveStats, setLiveStats] = useState<LiveStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/rates");
        const data: ApiRates = await res.json();
        console.log(data);
        const stats: LiveStat[] = [
          {
            id: 1,
            title: "قیمت دلار",
            value: data.dollar.value,
            change: data.dollar.change,
            trend:
              Number(data.dollar.change.replace(/,/g, "")) >= 0 ? "up" : "down",
            type: "usd",
          },
          {
            id: 2,
            title: "قیمت پوند",
            value: data.pound.value,
            change: data.pound.change,
            trend:
              Number(data.pound.change.replace(/,/g, "")) >= 0 ? "up" : "down",
            type: "gbp",
          },
          {
            id: 3,
            title: "قیمت سکه",
            value: data.coin.value,
            change: data.coin.change,
            trend:
              Number(data.coin.change.replace(/,/g, "")) >= 0 ? "up" : "down",
            type: "coin",
          },
          {
            id: 4,
            title: "قیمت طلا (هر گرم ۱۸ عیار)",
            value: data.gold.value,
            change: data.gold.change,
            trend:
              Number(data.gold.change.replace(/,/g, "")) >= 0 ? "up" : "down",
            type: "gold",
          },
        ];

        setLiveStats(stats);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch rates:", err);
        setLoading(false);
      }
    };

    fetchRates();

    // Optionally, refresh every minute
    const interval = setInterval(fetchRates, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-center mt-8">در حال بارگذاری...</p>;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" dir="rtl">
      <SectionTitle title="آخرین قیمت‌ها" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {liveStats.map((stat) => (
          <LiveStatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}
