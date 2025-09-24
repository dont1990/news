"use client";

import React from "react";
import {
  getCategoryBg,
  getCategoryPrimaryColor,
  getCategoryTextHover,
} from "@/app/lib/category-colors";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { routes } from "@/app/routes/routes";

type Props = {
  title: string;
  className?: string;
};

const CategoryBadge = ({ title, className = "" }: Props) => {
  const categoryName = String(title).split(">")[0].trim() || "همه";
  const href = routes.news.getHref({ category: categoryName });

  return (
    <Link
      href={href}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "flex gap-1.5 items-center group w-fit",
        getCategoryTextHover(categoryName),
        className
      )}
    >
      {/* Circle */}
      <div
        className={cn(
          "size-4 rounded-full transition-colors duration-300",
          getCategoryPrimaryColor(categoryName)
        )}
      ></div>

      {/* Text */}
      <span className={cn("transition-colors duration-300")}>
        {categoryName}
      </span>
    </Link>

    // <Link
    //   href={href}
    //   onClick={(e) => e.stopPropagation()}
    //   className={cn(
    //     "px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 w-fit",
    //     getCategoryBadgeClasses(categoryName), // ✅ uses bg + text + border + hover
    //     className
    //   )}
    // >
    //   {categoryName}
    // </Link>
  );
};

export default CategoryBadge;
