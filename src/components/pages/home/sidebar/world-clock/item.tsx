"use client";

import { Sun, Moon } from "lucide-react";
import { useWorldClock } from "./hooks/useWorldClock";
import { cn } from "@/lib/utils/cn";

interface ClockTileProps {
  city: string;
  timezone: string;
}

export default function ClockTile({ city, timezone }: ClockTileProps) {
  const { data } = useWorldClock(city, timezone);

  if (!data)
    return (
      <div className="h-44 flex items-center justify-center rounded-2xl bg-muted/20 border border-border/40 text-muted-foreground text-sm">
        ...
      </div>
    );

  const isNight = data.hour >= 18 || data.hour < 6;
  const gradient = isNight
    ? "from-indigo-500/20 via-purple-400/10"
    : "from-blue-400/20 via-sky-300/10";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-center rounded-2xl border border-border shadow-sm h-44 p-4 overflow-hidden backdrop-blur-md cursor-grab",
        "bg-gradient-to-br from-background via-background/80 to-background/50 transition-all duration-300 hover:scale-[1.02]"
      )}
    >
      <div className={cn("absolute inset-0 blur-2xl opacity-20", gradient)} />

      {/* 🌗 Day/Night Icon */}
      <div
        className={cn(
          "absolute top-3 right-3 transition-transform duration-300 ease-out",
          "hover:scale-105 hover:rotate-6"
        )}
      >
        {isNight ? (
          <Moon className="w-4 h-4 text-indigo-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-400" />
        )}
      </div>

      <span className="text-sm font-medium text-foreground/80">
        {data.city}
      </span>

      <span
        key={data.time}
        className={cn(
          "text-lg font-bold tracking-tight transition-colors duration-300",
          isNight ? "text-indigo-400" : "text-sky-500"
        )}
      >
        {data.time}
      </span>

      <span className="text-xs text-muted-foreground">{data.timezoneAbbr}</span>
    </div>
  );
}
