"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";

export function useWorldClock(city: string, timezone: string) {
  return useQuery({
    queryKey: ["worldClock", city],
    queryFn: async () => {
      const data = await apiClient<{ datetime: string }>("world-clock", {
        timezone,
      });

      const time = new Date(data.datetime).toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: timezone,
      });

      return { city, time };
    },
    refetchInterval: 60 * 1000,
    enabled: !!city,
  });
}
