"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { useSearch } from "./hooks/useSearch";
import { SearchInput } from "./search-input";
import { SearchDropdown } from "./dropdown";
import { useClickOutside } from "@/app/hooks/useClickOutside";

interface SearchPreviewProps {
  className?: string;
}

export function SearchPreview({ className }: SearchPreviewProps) {
  const {
    searchRef,
    searchQuery,
    setSearchQuery,
    results,
    isOpen,
    setIsOpen,
    clearAll,
    handleSearch,
  } = useSearch();

  const [isInputVisible, setIsInputVisible] = useState(false);
  const isMobileOrTablet = useMediaQuery("(max-width: 1023px)");
  const isLargeUp = useMediaQuery("(min-width: 1024px)");

  // input visible by default on large screens
  useEffect(() => {
    if (isLargeUp) setIsInputVisible(true);
  }, [isLargeUp]);

  useClickOutside(searchRef, () => {
    setIsOpen(false);
    setIsInputVisible(false);
  });

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative flex items-center">
        <AnimatePresence>
          {(isInputVisible || isMobileOrTablet || isLargeUp) && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
            >
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={() => clearAll(!isLargeUp)}
                onFocus={() => searchQuery.trim() && setIsOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <SearchDropdown
        isOpen={isOpen && (results.length > 0 || searchQuery.trim().length > 0)}
        results={results}
        onClose={() => setIsOpen(false)}
        onSeeAll={() => handleSearch()}
      />
    </div>
  );
}
