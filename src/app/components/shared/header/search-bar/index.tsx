import React from "react";
import { SearchPreview } from "../../../search-preview";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isMobileSearchOpen: boolean;
};

const SearchBar = ({ isMobileSearchOpen }: Props) => {
  return (
    <>
      <AnimatePresence>
        {isMobileSearchOpen && (
          <motion.div
            key="mobile-search"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 lg:hidden w-full"
          >
            <SearchPreview className="w-full relative" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
