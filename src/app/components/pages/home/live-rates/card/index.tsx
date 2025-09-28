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
        "relative p-4 pb-8 transition-all duration-300 shadow bg-primary/5 hover:shadow-lg border-0 !border-e-8 !border-primary"
      )}
    >
      {/* Header */}
      <div className="flex items-center mb-1">
        <div className="p-3 rounded-2xl bg-background/60">
          <IconComponent className="w-6 h-6 text-foreground" />
        </div>
        <p className="text-base font-medium text-muted-foreground ms-2">
          {stat.title}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <span
          className={cn(
            "text-sm font-medium flex items-center gap-1 justify-end",
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
