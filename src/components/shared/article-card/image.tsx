import { Article } from "@/types/types";
import Image from "next/image";

export default function ArticleImage({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <Image
      src={article.imageUrl || "/placeholder.svg"}
      alt={article.title}
      fill
      className={className}
    />
  );
}
