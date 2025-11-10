"use client";

import { AnimatePresence } from "framer-motion";
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

  useClickOutside(searchRef, () => setIsOpen(false));

  return (
    <div ref={searchRef} className={`relative ${className || ""}`}>
      <form onSubmit={handleSearch} className="relative flex items-center w-full">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={clearAll}
          onFocus={() => searchQuery.trim() && setIsOpen(true)}
          className="w-full sm:min-w-[400px]"
        />
      </form>

      <AnimatePresence>
        {isOpen && (
          <SearchDropdown
            results={results}
            onClose={() => setIsOpen(false)}
            onSeeAll={() => {
              handleSearch();
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
