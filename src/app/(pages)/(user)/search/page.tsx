import SearchPageContent from "@/features/search";
import { Suspense } from "react";

const SearchPage = () => {
  return (
    <Suspense fallback="loading ...">
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
