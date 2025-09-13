"use client";

// import { Button } from "@/app/components/ui/button";
// import Link from "next/link";
import { SearchX } from "lucide-react";
import { motion } from "framer-motion";
// import { routes } from "@/app/routes/routes";

export default function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-6 py-12"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-card shadow-lg border border-border rounded-lg p-10 max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
            <SearchX className="w-10 h-10 text-primary" />
          </div>
        </div>

        <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          مقاله یافت نشد
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          مقاله‌ای که به دنبال آن هستید وجود ندارد، حذف شده یا آدرس آن تغییر
          کرده است.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <Link href={routes.home.getHref()}>
            <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              بازگشت به صفحه اصلی
            </Button>
          </Link>
          <Link href={routes.news.getHref({ category: "all" })}>
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted w-full sm:w-auto"
            >
              مرور مقالات
            </Button>
          </Link> */}
        </div>
      </motion.div>
    </div>
  );
}
