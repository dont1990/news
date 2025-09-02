import SearchPage from "@/app/components/pages/search";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback="loading ...">
      <SearchPage />
    </Suspense>
  );
};

export default page;
