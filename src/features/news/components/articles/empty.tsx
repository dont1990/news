"use client";

import EmptyState from "@/components/shared/empty-state";
import TrendingUpIcon from "@/assets/shared-icons/trending-up";

interface EmptyCategoryProps {
  categoryName: string;
  categoryColors: { bg: string; text: string };
}

export function EmptyCategory({
  categoryName,
  categoryColors,
}: EmptyCategoryProps) {
  return (
    <EmptyState
      icon={<TrendingUpIcon className={`h-12 w-12 ${categoryColors.text}`} />}
      title="مقاله‌ای یافت نشد"
      description={`بعداً برای مقالات جدید ${categoryName.toLowerCase()} مراجعه کنید`}
      iconBgClass={categoryColors.bg}
      className="max-w-md mx-auto"
    />
  );
}
