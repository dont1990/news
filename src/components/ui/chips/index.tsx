"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ChipsProps = {
  text: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  asLink?: string; // Next.js Link href
  className?: string;
};

const Chips: React.FC<ChipsProps> = ({
  text,
  leftIcon,
  rightIcon,
  onClick,
  asLink,
  className,
}) => {
  const content = (
    <>
      {leftIcon && <span className="flex">{leftIcon}</span>}
      <span>{text}</span>
      {rightIcon && <span className="flex">{rightIcon}</span>}
    </>
  );

  const baseClasses = `
    inline-flex items-center gap-1
    bg-gray-100 text-gray-700 text-sm font-medium
    rounded-full py-1 px-3 cursor-pointer select-none
    hover:shadow-sm
    transition-all duration-300
    ${onClick || asLink ? "hover:bg-gray-200 active:scale-95" : ""}
    ${className ?? ""}
  `;

  if (asLink) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
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
      whileHover={onClick ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
    >
      {content}
    </motion.div>
  );
};

export default Chips;
