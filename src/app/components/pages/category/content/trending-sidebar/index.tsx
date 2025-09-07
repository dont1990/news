"use client";

import { Article } from "@/app/types/types";
import Link from "next/link";
import { Flame } from "lucide-react";
import Image from "next/image";
import { NAVBAR_HEIGHT } from "@/app/constants/constant";

export function TrendingSidebar({ articles }: { articles: Article[] }) {
  const trending = [...articles].slice(0, 5);

  return (
    <aside
      className="p-3 border border-border rounded-lg bg-muted/30 shadow-sm h-fit w-full lg:w-80 mt-8 lg:mt-0 sticky"
      style={{ top: NAVBAR_HEIGHT }}
    >
      {/* 🔥 Header */}
      <div className="flex items-center gap-2 mb-6">
        <Flame className="h-5 w-5 text-red-500" />
        <h3 className="font-semibold text-lg">مطالب داغ</h3>
      </div>

      {/* List */}
      <ul className="gap-y-4 md:gap-y-3 flex md:block overflow-x-auto md:overflow-visible no-scrollbar md:gap-0 flex-col">
        {trending.map((article, index) => (
          <li
            key={article.id}
            className="min-w-[250px] md:min-w-0 flex-shrink-0"
          >
            <Link
              href={`/articles/${article.id}`}
              className="group flex items-center gap-2 rounded-lg hover:bg-accent transition-all duration-300 p-2"
            >
              <span className="flex-shrink-0 text-sm font-bold text-muted-foreground w-5">
                #{index + 1}
              </span>
              {article.imageUrl && (
                <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg border border-border group-hover:scale-105 transition-all duration-300">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-sm font-medium text-foreground group-hover:text-primary line-clamp-2 transition-colors duration-300">
                {article.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
