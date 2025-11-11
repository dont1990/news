"use client";

import FlameIcon from "../../assets/flame";

export function TrendingHeader() {
  return (
    <div className="flex items-center gap-2 mb-4 border-b pb-4">
      <FlameIcon className="h-5 w-5 text-red-500" />
      <h3 className="font-semibold text-lg">مطالب داغ</h3>
    </div>
  );
}
