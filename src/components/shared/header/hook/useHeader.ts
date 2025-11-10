"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useClickOutside } from "@/hooks/useClickOutside";

export function useHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const pathname = usePathname();
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);

  // Close mobile search when clicking outside
  useClickOutside(mobileSearchRef, () => {
    if (isMobileSearchOpen) setIsMobileSearchOpen(false);
  });

  // Close mobile search when route changes
  useEffect(() => {
    setIsMobileSearchOpen(false);
  }, [pathname]);

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isMobileSearchOpen,
    setIsMobileSearchOpen,
    mobileSearchRef,
  };
}
