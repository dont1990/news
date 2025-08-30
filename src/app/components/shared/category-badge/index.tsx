"use client";

import React from "react";
import { Badge } from "../../ui/badge";
import { getCategoryBadgeClasses } from "@/app/lib/category-colors";
import { categories } from "@/app/data/categories/categories";
import Link from "next/link";

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
      onClick={(e) => e.stopPropagation()} // ⛔ stop parent card click
      className="inline-block"
    >
      <Badge
        variant="secondary"
        className={`text-xs px-2 py-1 cursor-pointer ${getCategoryBadgeClasses(
          title
        )} ${className}`}
      >
        {categoryName}
      </Badge>
    </Link>

    //  <Link
    //   href={href}
    //   onClick={(e) => e.stopPropagation()} // ⛔ stop parent card click
    //   className={`flex gap-1 items-center`}
    // >
    //   <div
    //     className={cn("size-4 rounded-full", getCategoryPrimaryColor(title))}
    //   ></div>
    //   {categoryName}
    //   </Link>
  );
};

export default CategoryBadge;
