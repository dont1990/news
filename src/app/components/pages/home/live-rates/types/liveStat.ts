// Trend can be "up" or "down"
export type Trend = "up" | "down";

// Supported types of live stats
export type LiveStatType = "usd" | "gbp" | "coin" | "gold";

// The main type for a live stat card
export interface LiveStat {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: Trend;
  type: LiveStatType;
}
