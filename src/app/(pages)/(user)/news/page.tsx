import { Suspense } from "react";
import { NewsListPage } from "@/app/components/pages/news-list";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsListPage />
    </Suspense>
  );
}
