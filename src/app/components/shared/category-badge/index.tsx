"use client";

import React from "react";
import {
  getCategoryPrimaryColor,
  getCategoryTextHover,
} from "@/app/lib/category-colors";
import { categories } from "@/app/data/categories/categories";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

type Props = {
  title: string;
  className?: string;
};

const CategoryBadge = ({ title, className = "" }: Props) => {
  const categoryName =
    categories.find((cat) => cat.english === title.toLocaleLowerCase())
      ?.persian || title;

  const href = `/category/${encodeURIComponent(title)}`;

  return (
    <Link
      href={href}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "flex gap-1.5 items-center group w-fit",
        getCategoryTextHover(title),
        className
      )} // ✅ add 'group'
    >
      {/* Circle */}
      <div
        className={cn(
          "size-4 rounded-full transition-colors duration-300",
          getCategoryPrimaryColor(title)
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
