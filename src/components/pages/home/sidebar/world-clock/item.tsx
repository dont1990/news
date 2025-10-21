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
    <div className="bg-primary/5 text-foreground p-4 rounded-2xl flex flex-col items-center justify-center text-center w-full h-full border shadow">
      <span className="text-lg">{data.city}</span>
      <span className="text-2xl font-medium mt-2">{data.time}</span>
    </div>
  );
}
