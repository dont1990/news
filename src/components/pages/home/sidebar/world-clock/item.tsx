"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react"; // ✅ Improved icon visuals
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
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={cn(
        "relative flex flex-col items-center justify-center text-center rounded-2xl border border-border/40 shadow-sm h-44 p-4 overflow-hidden backdrop-blur-md cursor-grab",
        "bg-gradient-to-br from-background via-background/80 to-background/50 transition-all duration-300"
      )}
    >
      <div className={cn("absolute inset-0 blur-2xl opacity-20", gradient)} />

      {/* 🌗 Day/Night Icon — refined & subtle */}
      {/* 🌗 Day/Night Icon — refined & color-adjusted */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: isNight ? -10 : 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="absolute top-3 right-3"
      >
        {isNight ? (
          <Moon className="w-4 h-4 text-indigo-400" /> // 🌙 Night: cooler tone
        ) : (
          <Sun className="w-4 h-4 text-amber-400" /> // ☀️ Day: warmer tone
        )}
      </motion.div>

      <span className="text-sm font-medium text-foreground/80">
        {data.city}
      </span>

      <motion.span
        key={data.time}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "text-lg font-bold tracking-tight",
          isNight ? "text-indigo-400" : "text-sky-500"
        )}
      >
        {data.time}
      </motion.span>

      <span className="text-xs text-muted-foreground">{data.timezoneAbbr}</span>
    </motion.div>
  );
}
