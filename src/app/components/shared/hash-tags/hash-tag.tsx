"use client";

import { Hash } from "lucide-react";
import { cn } from "@/app/lib/utils";
import Chips from "../../ui/chips";
import { useTagNavigation } from "./hooks/useTagNavigation";

type Props = {
  tag: string;
  highlighted?: boolean;
};

const HashTag = ({ tag, highlighted = false }: Props) => {
  const { currentTags, toggleTag, navigateWithTags, useRecordTagClick } = useTagNavigation();

  const isSelected = currentTags.includes(tag);
  const isActive = isSelected || highlighted;

  const { mutate: recordClick } = useRecordTagClick(tag);

  const handleClick = () => {
    const newTags = toggleTag(tag);
    recordClick(); // record click
    navigateWithTags(newTags); // navigate
  };

  return (
    <Chips
      text={tag}
      leftIcon={
        <Hash
          className={cn("size-3", isActive ? "text-secondary-500" : "text-gray-500")}
        />
      }
      onClick={handleClick}
      className={cn(
        "py-0.5 px-2 text-sm bg-gray-100",
        isActive ? "text-secondary-500" : "text-gray-500"
      )}
    />
  );
};

export default HashTag;
