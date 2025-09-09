import React from "react";
import { AnimatedLink } from "../animated-link";
import { Link } from "lucide-react";
import { routes } from "@/app/routes/routes";

type Props = {
  source?: string;
  sourceLink?: string;
};

const ArticleSourceLink = ({ source, sourceLink }: Props) => {
  return (
    <AnimatedLink
      href={sourceLink ?? routes.home.getHref()}
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
