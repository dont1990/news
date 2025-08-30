import React from "react";
import { Badge } from "../../ui/badge";
import { getCategoryBadgeClasses } from "@/app/lib/category-colors";
import { categories } from "@/app/data/categories/categories";

type Props = {
  title: string;
  className?: string; 
};

const CategoryBadge = ({ title, className = "" }: Props) => {
  const categoryName =
    categories.find((cat) => cat.english === title.toLocaleLowerCase())
      ?.persian || title;

  return (
    <Badge
      variant="secondary"
      className={`text-xs px-2 py-1 ${getCategoryBadgeClasses(title)} ${className}`}
    >
      {categoryName}
    </Badge>
  );
};

export default CategoryBadge;
