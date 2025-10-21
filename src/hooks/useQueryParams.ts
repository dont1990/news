"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export function useQueryParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const getParam = useCallback(
    (key: string): string | null => searchParams.get(key),
    [searchParams]
  );

  const getAllParams = useCallback(() => {
    const entries = Array.from(searchParams.entries());
    return Object.fromEntries(entries);
  }, [searchParams]);

  const setParam = useCallback(
    (key: string, value: string | null, options: { replace?: boolean } = {}) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value.trim() === "") params.delete(key);
      else params.set(key, value);

      const queryString = params.toString();
      const method = options.replace ? router.replace : router.push;
      method(`${pathname}${queryString ? `?${queryString}` : ""}`, {
        scroll: false,
      });
    },
    [searchParams, router, pathname]
  );

  const updateParams = useCallback(
    (updates: Record<string, string | null>, options: { replace?: boolean } = {}) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (!value || value.trim() === "") params.delete(key);
        else params.set(key, value);
      });

      const queryString = params.toString();
      const method = options.replace ? router.replace : router.push;
      method(`${pathname}${queryString ? `?${queryString}` : ""}`, {
        scroll: false,
      });
    },
    [searchParams, router, pathname]
  );

  const removeParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      router.replace(`${pathname}${params.size ? `?${params}` : ""}`, {
        scroll: false,
      });
    },
    [searchParams, router, pathname]
  );

  const clearParams = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  return { getParam, getAllParams, setParam, updateParams, removeParam, clearParams };
}
