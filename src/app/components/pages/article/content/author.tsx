"use client";
import { User } from "lucide-react";
import { Article } from "@/app/types/types";

interface ArticleAuthorProps {
  article: Article;
}

export default function ArticleAuthor({ article }: ArticleAuthorProps) {
  return (
    <div className="bg-gradient-to-r from-muted/50 to-muted/30 p-8 rounded-2xl border border-border mt-10">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <User className="h-8 w-8 text-primary" />
        </div>
        <div>
          <p className="text-muted-foreground leading-relaxed">
            خبرنگار ارشد {article.source} است و بیش از ۱۰ سال تجربه در پوشش خبری
            حوزه {article.category.toLowerCase()} دارد.
          </p>
        </div>
      </div>
    </div>
  );
}
