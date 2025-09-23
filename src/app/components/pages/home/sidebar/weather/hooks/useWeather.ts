"use client";

import { apiClient } from "@/app/lib/api/api-client";
import { useQuery } from "@tanstack/react-query";

type WeatherResponse = {
  id: number;
  city: string;
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  wind: number;
};

export function useWeather(city: string) {
  return useQuery<WeatherResponse>({
    queryKey: ["weather", city],
    queryFn: () => apiClient<WeatherResponse>("weather", { city }),
    enabled: !!city,
  });
}
