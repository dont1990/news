import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { getCategoryBadgeClasses } from "@/app/lib/category-colors";
import { Newsletter } from "@/app/components/pages/home/sidebar/newsletter";

const trendingTopics = [
  { topic: "نشست اقلیمی", count: 1247 },
  { topic: "ایمنی هوش مصنوعی", count: 892 },
  { topic: "بهبود بازار", count: 756 },
  { topic: "اکتشاف فضا", count: 634 },
  { topic: "پیشرفت پزشکی", count: 521 },
];

const recentUpdates = [
  {
    title: "فوری: برگزاری نشست اضطراری تغییرات اقلیمی",
    time: "۵ دقیقه پیش",
    category: "محیط زیست",
    slug: "environment",
  },
  {
    title: "رشد سهام فناوری پس از اعلامیه هوش مصنوعی",
    time: "۱۲ دقیقه پیش",
    category: "تجارت",
    slug: "business",
  },
  {
    title: "شناسایی سویه جدید کرونا در اروپا",
    time: "۲۵ دقیقه پیش",
    category: "سلامت",
    slug: "health",
  },
  {
    title: "رکوردشکنی در شنای المپیک",
    time: "۱ ساعت پیش",
    category: "ورزش",
    slug: "sports",
  },
];

export function HomePageSidebar() {
  return (
    <div className="xl:col-span-1">
      <div className="sticky top-48">
        <div className="space-y-6" dir="rtl">
          {/* موضوعات داغ */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>موضوعات داغ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
                >
                  <span className="newspaper-body text-sm font-medium">
                    {item.topic}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {item.count.toLocaleString("fa-IR")}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* به‌روزرسانی‌های اخیر */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                <span>به‌روزرسانی‌های اخیر</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div
                  key={index}
                  className="space-y-2 pb-3 border-b border-border last:border-b-0"
                >
                  <p className="newspaper-body text-sm font-medium leading-tight line-clamp-2">
                    {update.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href={`/category/${update.slug}`}>
                      <Badge
                        variant="outline"
                        className={`text-xs transition-colors cursor-pointer ${getCategoryBadgeClasses(
                          update.slug
                        )}`}
                      >
                        {update.category}
                      </Badge>
                    </Link>
                    <span className="text-xs text-muted-foreground">
                      {update.time}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
