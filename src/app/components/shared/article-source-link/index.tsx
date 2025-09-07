import React from "react";
import { AnimatedLink } from "../animated-link";
import { Link } from "lucide-react";

type Props = {
  source?: string;
  sourceLink?: string;
};

const ArticleSourceLink = ({ source, sourceLink }: Props) => {
  return (
    <AnimatedLink
      href={sourceLink ?? "/"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      icon={Link}
    >
      <span>{source ? source : "منبع"}</span>
    </AnimatedLink>
  );
};

export default ArticleSourceLink;
