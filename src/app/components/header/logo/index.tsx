"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">N</span>
        </div>
        <div>
          <h1 className="news-heading text-2xl text-foreground group-hover:text-primary transition-colors">
            NewsHub
          </h1>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Global News Aggregator
          </p>
        </div>
      </div>
    </Link>
  );
}
