"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface InfiniteLoaderProps {
  message?: string | null; // can be undefined or null
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

export function InfiniteLoader({
  message,
  className,
  iconSize = 6,
  iconColor = "text-primary",
}: InfiniteLoaderProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2 text-muted-foreground"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        >
          <Loader2 className={`h-${iconSize} w-${iconSize} ${iconColor}`} />
        </motion.div>

        {message && (
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-sm font-medium"
          >
            {message}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
