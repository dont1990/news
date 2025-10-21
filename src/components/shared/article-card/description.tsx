import { cn } from "@/lib/utils";
import React from "react";

interface ArticleCardDescriptionProps {
  description: string | React.ReactNode;
  className?: string;
}

const ArticleDescription = ({
  description,
  className,
}: ArticleCardDescriptionProps) => {
  return <p className={cn("text-sm line-clamp-2", className)}>{description}</p>;
};

export default ArticleDescription;
