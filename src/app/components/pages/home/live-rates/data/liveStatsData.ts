type Trend = "up" | "down";

export interface LiveStat {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: Trend;
  type: "usd" | "gbp" | "coin" | "gold";
}

export const liveStats: LiveStat[] = [
  {
    id: 1,
    title: "قیمت دلار",
    value: "۵۸,۳۰۰ تومان",
    change: "+۲۵۰",
    trend: "up",
    type: "usd",
  },
  {
    id: 2,
    title: "قیمت پوند",
    value: "۷۴,۹۰۰ تومان",
    change: "-۳۰۰",
    trend: "down",
    type: "gbp",
  },
  {
    id: 3,
    title: "قیمت سکه",
    value: "۳۲,۵۰۰,۰۰۰ تومان",
    change: "+۴۰۰,۰۰۰",
    trend: "up",
    type: "coin",
  },
  {
    id: 4,
    title: "قیمت طلا (هر گرم ۱۸ عیار)",
    value: "۲,۳۵۰,۰۰۰ تومان",
    change: "+۱۵,۰۰۰",
    trend: "up",
    type: "gold",
  },
];
