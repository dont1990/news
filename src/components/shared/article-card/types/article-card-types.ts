import { Article } from "@/types/types";

export interface ArticleCardProps {
  article: Article;
  type?: "default" | "overlay" | "bottomOverlay" | "horizontal";
  highlightQuery?: string;
}
