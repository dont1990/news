"use client";

import React from "react";
import Chips from "../../ui/chips";

type Props = {
  tag: string;
};

const HashTag = ({ tag }: Props) => {
  return (
    <Chips
      text={tag}
      asLink={`/tags/${tag}`} // Link to tag page
      icon={<span className="text-gray-400">#</span>} // optional hashtag icon
      iconPosition="left"
      className="text-gray-500 bg-gray-100 py-0.5 px-2 mb-2 text-sm"
    />
  );
};

export default HashTag;
