import { Suspense } from "react";
import { NewsListPage } from "@/features/news";

const NewsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsListPage />
    </Suspense>
  );
};

export default NewsPage;
