import React from "react";

type Props = {
  title: string;
};

const ArticleCardTag = ({ title }: Props) => {
  return (
    <p className="text-gray-500 text-sm flex gap-0.5 bg-gray-100 w-fit rounded-full py-0.5 px-2 mb-2">
      <span>#</span>
      <span className="mb-0.5">{title}</span>
    </p>
  );
};

export default ArticleCardTag;
