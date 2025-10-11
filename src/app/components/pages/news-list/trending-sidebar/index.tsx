"use client";

import { Article } from "@/app/types/types";
import Link from "next/link";
import Image from "next/image";
import { NAVBAR_HEIGHT } from "@/app/constants/global";
import { routes } from "@/app/routes/routes";
import FlameIcon from "./assets/flame";

export function TrendingSidebar({ articles }: { articles: Article[] }) {
  return (
    <aside
      className="p-3 border border-border rounded-2xl bg-muted/30 shadow-sm h-fit w-full lg:w-80 lg:mt-0 sticky"
      style={{ top: NAVBAR_HEIGHT }}
    >
      {/* 🔥 Header */}
      <div className="flex items-center gap-2 mb-4 border-b pb-4">
        <FlameIcon className="h-5 w-5 text-red-500" />
        <h3 className="font-semibold text-lg">مطالب داغ</h3>
      </div>

      {articles.length > 0 ? (
        // news list
        <ul className="gap-y-4 md:gap-y-3 flex md:block overflow-x-auto md:overflow-visible no-scrollbar md:gap-0 flex-col">
          {articles.map((article, index) => (
            <li
              key={article.id}
              className="min-w-[250px] md:min-w-0 flex-shrink-0"
            >
              <Link
                href={routes.news.detail.getHref(article.id)}
                className="group flex items-center gap-2 rounded-2xl hover:bg-accent transition-all duration-300 p-2"
              >
                <span className="flex-shrink-0 text-sm font-bold text-muted-foreground w-5">
                  #{index + 1}
                </span>
                {article.imageUrl && (
                  <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-2xl border border-border group-hover:scale-105 transition-all duration-300">
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
      ) : (
        <p>موردی یافت نشد.</p>
      )}
    </aside>
  );
}
