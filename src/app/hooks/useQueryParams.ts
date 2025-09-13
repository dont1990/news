"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useQueryParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Local copy so we don't suspend during SSR
  const [params, setParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    setParams(new URLSearchParams(searchParams.toString()));
  }, [searchParams]);

  const getParam = useCallback(
    (key: string): string | null => {
      return params ? params.get(key) : null;
    },
    [params]
  );

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (!value || value.trim() === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      const queryString = newParams.toString();
      router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
    },
    [searchParams, router, pathname]
  );

  const removeParam = useCallback(
    (key: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete(key);
      const queryString = newParams.toString();
      router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
    },
    [searchParams, router, pathname]
  );

  const clearParams = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  return { getParam, setParam, removeParam, clearParams };
}
