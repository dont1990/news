"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  center?: boolean; // horizontally center
  paddingX?: string; // horizontal padding override
  paddingY?: string; // vertical padding override
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | string; // responsive max width
  fullWidth?: boolean; // full-width background
}

const maxWidthClasses: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-7xl",
  "2xl": "max-w-[1536px]",
};

export default function Container({
  children,
  className,
  center = true,
  paddingX = "px-4 sm:px-6 xl:px-8",
  paddingY = "py-8 sm:py-12 lg:py-16",
  maxWidth = "2xl",
  fullWidth = false,
}: ContainerProps) {
  const maxWidthClass = fullWidth ? "w-full" : maxWidthClasses[maxWidth] || maxWidth;

  return (
    <div
      className={clsx(
        maxWidthClass,
        paddingX,
        paddingY,
        center && !fullWidth && "mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
