import React from "react";
import HashTag from "./hash-tag";

type Props = {
  tags: string[];
};

const ArticleHashTags = ({ tags }: Props) => {
  const slicedTags = tags.slice(0, 3);

  return (
    <div className="flex gap-1 flex-wrap">
      {slicedTags.map((tag, index) => {
        return <HashTag key={index} tag={tag} />;
      })}
    </div>
  );
};

export default ArticleHashTags;
