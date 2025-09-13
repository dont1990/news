import { Suspense } from "react";
import { NewsListPage } from "@/app/components/pages/news-list";

const NewsPage=()=> {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsListPage />
    </Suspense>
  );
}

export default NewsPage