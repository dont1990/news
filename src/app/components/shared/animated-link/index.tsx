"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import type { FC, ReactNode } from "react";

interface AnimatedLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  icon?: FC<React.SVGProps<SVGSVGElement>>; // optional SVG icon
}

export const AnimatedLink: FC<AnimatedLinkProps> = ({ children, className, icon: Icon, ...props }) => {
  return (
    <motion.div
      whileHover={{ x: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-flex items-center gap-2"
    >
      <Link
        {...props}
        className={`transition-colors duration-200 hover:text-primary hover:font-medium ${className}`}
      >
        {Icon && <Icon className="w-4 h-4 inline-block text-muted-foreground mr-1" />}
        {children}
      </Link>
    </motion.div>
  );
};
