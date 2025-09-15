"use client";

import React from "react";
import {
  getCategoryPrimaryColor,
  getCategoryTextHover,
} from "@/app/lib/category-colors";
// import { categories } from "@/app/data/categories/categories";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { routes } from "@/app/routes/routes";

type Props = {
  title: string;
  className?: string;
};

const CategoryBadge = ({ title, className = "" }: Props) => {
  // Take only the first part before '>'
  const categoryName = String(title).split(">")[0].trim()|| "همه";

  // Find category in your categories array (optional, for colors)
  // const categoryName =
  // categories.find((cat) => cat.title === firstPart)?.title || "همه";

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
  );
};

export default CategoryBadge;
