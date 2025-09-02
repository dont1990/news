"use client";

import SectionTitle from "../../../shared/section-title";
import LiveStatCard from "./card";
import { liveStats } from "./data/liveStatsData";


export function LiveRates() {
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
