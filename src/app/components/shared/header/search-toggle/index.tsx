"use client";

import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

interface SearchToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SearchToggle({ isOpen, onToggle }: SearchToggleProps) {
  return (
    <>
      {isOpen ? (
        <motion.div
          onClick={onToggle}
          className="cursor-pointer"
          whileHover={{ rotate: [0, -15, 15, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <X className="h-5 w-5" />
        </motion.div>
      ) : (
        <motion.div
          onClick={onToggle}
          className="cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.95, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Search className="h-5 w-5" />
        </motion.div>
      )}
    </>
  );
}
