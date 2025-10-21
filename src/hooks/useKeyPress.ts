"use client";

import { useEffect } from "react";

export function useKeyPress(
  keys: string | string[],
  handler: (event: KeyboardEvent) => void
) {
  useEffect(() => {
    const keyList = Array.isArray(keys) ? keys : [keys];

    const listener = (event: KeyboardEvent) => {
      if (keyList.includes(event.key)) {
        handler(event);
      }
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [keys, handler]);
}
