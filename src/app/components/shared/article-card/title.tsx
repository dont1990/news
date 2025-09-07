import { cn } from "@/app/lib/utils";
import Link from "next/link";

interface ArticleCardTitleProps {
  id: string | number;
  title: string | React.ReactNode;
  className?: string;
}

export default function ArticleCardTitle({
  id,
  title,
  className,
}: ArticleCardTitleProps) {
  return (
    <Link
      href={`/article/${id}`}
      className={cn(
        "text-base md:text-lg text-card-foreground hover:text-primary transition-colors line-clamp-2 font-semibold",
        className
      )}
    >
      {title}
    </Link>
  );
}
