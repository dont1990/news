"use client";

import React from "react";
import Chips from "../../ui/chips";
import { useQueryParams } from "@/app/hooks/useQueryParams";
import { Hash } from "lucide-react";
import { cn } from "@/app/lib/utils";

type Props = {
  tag: string;
  highlighted?: boolean;
};

const HashTag = ({ tag, highlighted = false }: Props) => {
  const { getParam, setParam } = useQueryParams();

  const tagsQuery = getParam("tags") || "";
  const currentTags = tagsQuery.split(",").filter(Boolean);

  const isSelected = currentTags.includes(tag);
  const newTags = isSelected
    ? currentTags.filter((t) => t !== tag)
    : [...currentTags, tag];

  const isActive = isSelected || highlighted;

  return (
    <Chips
      text={tag}
      leftIcon={
        <Hash
          className={cn("size-3", isActive ? "text-secondary-500" : "text-gray-500")}
        />
      }
      onClick={() => setParam("tags", newTags.length ? newTags.join(",") : null)}
      className={cn(
        "py-0.5 px-2 mb-2 text-sm bg-gray-100",
        isActive ? "text-secondary-500" : "text-gray-500"
      )}
    />
  );
};

export default HashTag;
