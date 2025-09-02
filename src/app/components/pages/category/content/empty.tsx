import { TrendingUp } from "lucide-react";

export function EmptyCategory({
  categoryName,
  categoryColors,
}: {
  categoryName: string;
  categoryColors: { bg: string; text: string };
}) {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${categoryColors.bg}`}
        >
          <TrendingUp
            className={`h-12 w-12 ${categoryColors.text} animate-bounce`}
          />
        </div>
        <p className="text-2xl mb-3">مقاله‌ای یافت نشد</p>
        <p className="text-muted-foreground">
          بعداً برای مقالات جدید {categoryName.toLowerCase()} مراجعه کنید
        </p>
      </div>
    </div>
  );
}
