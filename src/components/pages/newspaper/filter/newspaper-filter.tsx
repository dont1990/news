"use client";

import { SearchInput } from "@/components/shared/search-input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Props {
  searchInput: string;
  setSearchInput: (v: string) => void;
  onSearch: (value?: string) => void;
  sort: string;
  setSort: (v: string) => void;
}

export function NewspaperFilter({
  searchInput,
  setSearchInput,
  onSearch,
  sort,
  setSort,
}: Props) {
  return (
    <section className="flex flex-col gap-6 mb-6">
      <div className="flex justify-between gap-4 flex-wrap flex-col sm:flex-row">
        {/* 🔍 نوار جستجو */}
        <div className="flex gap-2 sm:max-w-md w-full relative rounded-2xl h-10 ring ring-primary flex-1">
          <SearchInput
            value={searchInput}
            onChange={setSearchInput}
            onSearch={onSearch}
          />
        </div>

        {/* 🔤 مرتب‌سازی حروف الفبا */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select value={sort || "az"} onValueChange={setSort}>
            <SelectTrigger className="w-full xs:w-32 flex-1">
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="az">الف تا ی</SelectItem>
              <SelectItem value="za">ی تا الف</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
