import React from "react";
import { SearchPreview } from "../../search-preview";

type Props = {
  isMobileSearchOpen: boolean;
};

const SearchBar = ({ isMobileSearchOpen }: Props) => {
  return (
    <>
      {isMobileSearchOpen && (
        <div className="mt-4 lg:hidden">
          <SearchPreview className="w-full" />
        </div>
      )}
    </>
  );
};

export default SearchBar;
