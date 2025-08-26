import React from "react";
import { Badge } from "../ui/badge";
import { getCategoryBadgeClasses } from "@/app/lib/category-colors";
import { categories } from "@/app/data/mock-article";

type Props = {
  title: string;
};

const CategoryBadge = ({ title }: Props) => {
   const categoryName =
    categories.find((cat) => cat.english === title.toLocaleLowerCase())?.persian ||
    title;

  return (
    <Badge
      variant="secondary"
      className={`text-xs px-2 py-1 ${getCategoryBadgeClasses(title)}`}
    >
      {categoryName}
    </Badge>
  );
};

export default CategoryBadge;
