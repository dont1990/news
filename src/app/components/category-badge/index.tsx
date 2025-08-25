import React from "react";
import { Badge } from "../ui/badge";
import { getCategoryBadgeClasses } from "@/app/lib/category-colors";

type Props = {
  title: string;
};

const CategoryBadge = ({ title }: Props) => {
  return (
    <Badge
      variant="secondary"
      className={`text-xs px-2 py-1 ${getCategoryBadgeClasses(title)}`}
    >
      {title}
    </Badge>
  );
};

export default CategoryBadge;
