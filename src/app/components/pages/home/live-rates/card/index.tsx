"use client";

import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart2,
  Coins,
  Zap,
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { LiveStat } from "../types/liveStat";

const gradientMap: Record<LiveStat["type"], string> = {
  usd: "from-blue-100 to-blue-200 dark:from-blue-950/50 dark:to-blue-900/40",
  gbp: "from-emerald-100 to-emerald-200 dark:from-emerald-950/50 dark:to-emerald-900/40",
  coin: "from-amber-100 to-amber-200 dark:from-amber-950/50 dark:to-amber-900/40",
  gold: "from-pink-100 to-pink-200 dark:from-pink-950/50 dark:to-pink-900/40",
};

const iconMap: Record<
  LiveStat["type"],
  React.ComponentType<{ className?: string }>
> = {
  usd: DollarSign,
  gbp: BarChart2,
  coin: Coins,
  gold: Zap,
};

export default function LiveStatCard({ stat }: { stat: LiveStat }) {
  const IconComponent = iconMap[stat.type];

  return (
    <Card
      className={cn(
        "relative p-4 pb-8 border border-gray-200/40 dark:border-gray-700/40",
        "bg-gradient-to-br backdrop-blur-xl transition-all duration-300 hover:shadow-lg",
        gradientMap[stat.type]
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-2xl bg-background/60">
          <IconComponent className="w-6 h-6 text-foreground" />
        </div>

        <span
          className={cn(
            "text-sm font-medium flex items-center gap-1",
            stat.trend === "up" ? "text-green-500" : "text-red-500"
          )}
        >
          {stat.trend === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {stat.change}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">
          {stat.title}
        </p>
        <span className="text-xl xl:text-2xl font-bold text-foreground">
          {stat.value}
        </span>
      </div>

      {/* Badge */}
      <div className="absolute left-3 -bottom-6 bg-background p-1.5 rounded-full">
        <Badge
          variant="outline"
          className="flex items-center gap-1.5 text-xs font-medium border-transparent bg-rose-500/10 text-rose-700 px-2.5 py-1 rounded-full"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-rose-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex size-2 rounded-full bg-rose-500"></span>
          </span>
          لحظه‌ ای
        </Badge>
      </div>
    </Card>
  );
}
