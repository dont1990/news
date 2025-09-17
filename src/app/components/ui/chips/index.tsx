"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ChipsProps = {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  asLink?: string; // Next.js Link href
  className?: string;
};

const Chips: React.FC<ChipsProps> = ({
  text,
  icon,
  iconPosition = "left",
  onClick,
  asLink,
  className,
}) => {
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="flex">{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === "right" && <span className="flex">{icon}</span>}
    </>
  );

  const baseClasses = `
    inline-flex items-center gap-1.5
    bg-gray-100 text-gray-700 text-sm font-medium
    rounded-full py-1 px-3 cursor-pointer select-none
    shadow-sm hover:shadow-md
    transition-all duration-300
    ${onClick || asLink ? "hover:bg-gray-200 active:scale-95" : ""}
    ${className ?? ""}
  `;

  if (asLink) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={asLink} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      onClick={onClick}
      className={baseClasses}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
    >
      {content}
    </motion.div>
  );
};

export default Chips;
