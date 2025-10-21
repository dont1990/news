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

      // Convert UTC datetime to the city’s local time
      const localDate = new Date(data.datetime).toLocaleString("en-US", {
        timeZone: timezone,
      });

      const local = new Date(localDate);
      const hour = local.getHours();

      const time = local.toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: timezone,
      });

      // Timezone abbreviation (e.g. "GMT", "EST", "JST")
      const timezoneAbbr = new Intl.DateTimeFormat("en", {
        timeZone: timezone,
        timeZoneName: "short",
      })
        .formatToParts(local)
        .find((p) => p.type === "timeZoneName")?.value;

      return { city, time, hour, timezoneAbbr };
    },
    refetchInterval: 60 * 1000, // refresh every minute
    enabled: !!city,
  });
}
