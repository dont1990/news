"use client";

import { useWorldClock } from "./hooks/useWorldClock";

interface WorldClockWidgetProps {
  city: string;
  timezone: string;
}

export default function WorldClockWidget({
  city,
  timezone,
}: WorldClockWidgetProps) {
  const { data, isLoading, error } = useWorldClock(city, timezone);

  if (isLoading)
    return (
      <div className={`text-center text-sm`}>
        در حال بارگذاری ساعت...
      </div>
    );
  if (error || !data)
    return (
      <div className={`text-center text-sm`}>
        ❌ خطا در دریافت ساعت
      </div>
    );

  return (
    <div className="gradient-primary text-white p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center w-full h-full">
      <span className="text-lg font-bold">{data.city}</span>
      <span className="text-2xl font-extrabold mt-2">{data.time}</span>
    </div>
  );
}
