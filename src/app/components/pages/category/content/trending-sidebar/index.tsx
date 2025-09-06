    "use client";

import { Article } from "@/app/types/types";
import Link from "next/link";
import { Flame } from "lucide-react";

export function TrendingSidebar({ articles }: { articles: Article[] }) {
  const trending = [...articles].slice(0, 5); // later can sort by views

  return (
    <div className="p-4 border border-border rounded-xl bg-muted/30">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="h-5 w-5 text-red-500" />
        <h3 className="font-semibold">مطالب داغ</h3>
      </div>
      <ul className="space-y-3">
        {trending.map((article) => (
          <li key={article.id}>
            <Link
              href={`/articles/${article.id}`}
              className="text-sm text-primary hover:underline line-clamp-2"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
