import React from "react";
import ArticleCardTag from "./tag";

type Props = {
  titles: string[];
};

const ArticleCardTags = ({ titles }: Props) => {
  return (
    <div className="flex gap-1">
      {titles.map((title, index) => {
        return <ArticleCardTag key={index} title={title} />;
      })}
    </div>
  );
};

export default ArticleCardTags;
