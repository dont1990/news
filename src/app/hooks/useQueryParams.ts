"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export function useQueryParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value.trim() === "") {
        params.delete(key); // ✅ remove param if empty
      } else {
        params.set(key, value);
      }
      const queryString = params.toString();
      router.push(`${window.location.pathname}${queryString ? `?${queryString}` : ""}`);
    },
    [searchParams, router]
  );

  const removeParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      const queryString = params.toString();
      router.push(`${window.location.pathname}${queryString ? `?${queryString}` : ""}`);
    },
    [searchParams, router]
  );

  const clearParams = useCallback(() => {
    router.push(window.location.pathname);
  }, [router]);

  return { getParam, setParam, removeParam, clearParams };
}
