"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useWeather } from "./hooks/useWeather";
import { cn } from "@/lib/utils/cn";

interface WeatherTileProps {
  city: string;
}

export default function WeatherTile({ city }: WeatherTileProps) {
  const { data, isLoading, error } = useWeather(city);

  if (isLoading)
    return (
      <div className="h-44 rounded-2xl bg-muted/20 flex items-center justify-center text-sm text-muted-foreground border border-border/40 animate-pulse">
        ...
      </div>
    );

  if (error || !data)
    return (
      <div className="h-44 rounded-2xl bg-destructive/10 border border-destructive/30 flex items-center justify-center text-sm text-destructive">
        ❌
      </div>
    );

  const isWarm = Number(data.temp) > 20;
  const gradient = isWarm
    ? "from-amber-500/20 via-orange-400/10"
    : "from-sky-400/20 via-cyan-400/10";

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

      <Image
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
        width={48}
        height={48}
        className="w-12 h-12 mb-1 drop-shadow-sm"
      />

      <span className="text-sm font-medium">{data.city}</span>

      <span
        className={cn(
          "text-lg font-bold",
          isWarm ? "text-amber-500" : "text-sky-400"
        )}
      >
        {data.temp}°C
      </span>

      <span className="text-xs text-muted-foreground">{data.description}</span>
    </motion.div>
  );
}
