import { Article } from "@/types/article";

export interface ArticleCardProps {
  article: Article;
  type?: "default" | "overlay" | "bottomOverlay" | "horizontal";
  highlightQuery?: string;
}
