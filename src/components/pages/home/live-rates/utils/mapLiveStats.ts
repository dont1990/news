import { LiveStat } from "../types/liveStat";

interface RatesData {
  tsetmc: { value: string; change?: string };
  dollar: { value: string; change?: string };
  coin: { value: string; change?: string };
  gold: { value: string; change?: string };
}

export function mapLiveStats(data: RatesData): LiveStat[] {
  if (!data) return [];

  return [
    {
      id: 1,
      title: "بورس",
      value: data.tsetmc.value,
      change: data.tsetmc.change || "0",
      trend: Number(data.tsetmc.change) >= 0 ? "up" : "down",
      type: "gbp",
    },
    {
      id: 2,
      title: "دلار",
      value: data.dollar.value,
      change: data.dollar.change || "0",
      trend: Number(data.dollar.change) >= 0 ? "up" : "down",
      type: "usd",
    },
    {
      id: 3,
      title: "سکه",
      value: data.coin.value,
      change: data.coin.change || "0",
      trend: Number(data.coin.change) >= 0 ? "up" : "down",
      type: "coin",
    },
    {
      id: 4,
      title: "طلا",
      value: data.gold.value,
      change: data.gold.change || "0",
      trend: Number(data.gold.change) >= 0 ? "up" : "down",
      type: "gold",
    },
  ];
}
