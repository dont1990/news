"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group">
      <div className="flex items-center gap-3">
        {/* آیکون لوگو */}
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">ن</span>
        </div>

        {/* متن لوگو */}
        {/* <div className="text-right">
          <p className="news-heading text-2xl text-foreground group-hover:text-primary transition-colors">
            نیوزهاب
          </p>
          <p className="text-xs text-muted-foreground hidden sm:block">
            خبرخوان جهانی
          </p>
        </div> */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-secondary-400 via-primary-200 to-primary-500 bg-clip-text text-transparent">
          نیوزهاب
        </h1>
      </div>
    </Link>
  );
}
