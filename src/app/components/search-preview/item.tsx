"use client";

import Image from "next/image";
import { Clock } from "lucide-react";
import CategoryBadge from "../shared/category-badge";
import { useRouter } from "next/navigation";
import { Article } from "@/app/types/types";

interface SearchResultItemProps {
  article: Article;
  onClick: () => void;
}

export function SearchResultItem({ article, onClick }: SearchResultItemProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/article/${article.id}`);
        onClick();
      }}
      className="hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-200 cursor-pointer border-b border-border/50 last:border-b-0 group"
    >
      <div className="p-5 flex gap-4">
        <div className="relative overflow-hidden rounded-lg flex-shrink-0 w-20 h-16">
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <CategoryBadge title={article.category} />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>
                {new Date(article.publishedAt).toLocaleDateString("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <p className="font-semibold text-sm line-clamp-2 mb-2 leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </p>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {article.description}
          </p>

          <div className="mt-2 text-xs text-muted-foreground font-medium">
            {article.source} • {article.readTime}
          </div>
        </div>
      </div>
    </div>
  );
}
