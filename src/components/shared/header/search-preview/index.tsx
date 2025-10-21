"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSearch } from "./hooks/useSearch";
import { SearchDropdown } from "./dropdown";
import { useClickOutside } from "@/hooks/useClickOutside";
import { SearchInput } from "../../search-input";

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
  const isMobileOrTablet = useMediaQuery("(max-width: 767px)");
  const isLargeUp = useMediaQuery("(min-width: 768px)");

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
              className="flex-1"
            >
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={() => clearAll()}
                onFocus={() => searchQuery.trim() && setIsOpen(true)}
                className="min-w-[400px]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <SearchDropdown
        isOpen={isOpen}
        results={results}
        onClose={() => setIsOpen(false)}
        onSeeAll={() => {
          handleSearch();
          setIsOpen(false);
        }}
      />
    </div>
  );
}
