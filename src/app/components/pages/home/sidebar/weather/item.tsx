"use client";

import Image from "next/image";
import { useWeather } from "./hooks/useWeather";

export default function WeatherWidget({ city }: { city: string }) {
  const { data, isLoading, error } = useWeather(city);

  if (isLoading)
    return (
      <div className="text-center text-sm">در حال بارگذاری آب و هوا...</div>
    );
  if (error || !data)
    return <div className="text-center text-sm">❌ خطا در دریافت آب و هوا</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-1 p-2 rounded-2xl border border-border shadow bg-primary/5 text-center">
      <Image
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
        width={48}
        height={48}
        className="w-12 h-12"
      />
      <span className="text-sm font-medium">{data.city}</span>
      <span className="text-base font-bold">{data.temp}°C</span>
      <span className="text-xs text-muted-foreground">{data.description}</span>
    </div>
  );
}
