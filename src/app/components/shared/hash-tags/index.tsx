"use client";

import React from "react";
import HashTag from "./hash-tag";
import { useQueryParams } from "@/app/hooks/useQueryParams";

type Props = {
  tags: string[];
};

const ArticleHashTags = ({ tags }: Props) => {
  const { getParam } = useQueryParams();

  const tagsQuery = getParam("tags") || "";
  const currentTags = tagsQuery.split(",").filter(Boolean);

  // Prioritize selected tags
  const prioritizedTags = [
    ...tags.filter((t) => currentTags.includes(t)),
    ...tags.filter((t) => !currentTags.includes(t)),
  ];

  const uniqueTags = Array.from(new Set(prioritizedTags));

  const slicedTags = uniqueTags.slice(0, 3);

  return (
    <div className="flex gap-1 flex-wrap my-1">
      {slicedTags.map((tag) => (
        <HashTag key={tag} tag={tag} highlighted={currentTags.includes(tag)} />
      ))}
    </div>
  );
};

export default ArticleHashTags;
