"use client";

import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { categories } from "@/app/data/categories/categories";
import { SearchInput } from "@/app/components/shared/search-input";

interface Props {
  category: string;
  setCategory: (v: string) => void;
  searchInput: string;
  setSearchInput: (v: string) => void;
  onSearch: (value?: string) => void; // updated to accept optional value
  dateFilter: "all" | "today" | "week" | "month";
  setDateFilter: (v: "all" | "today" | "week" | "month") => void;
  sort: string;
  setSort: (v: string) => void;
}

export function NewsListFilter({
  category,
  setCategory,
  searchInput,
  setSearchInput,
  onSearch,
  dateFilter,
  setDateFilter,
  sort,
  setSort,
}: Props) {
  
  const filters: {
    label: string;
    value: "all" | "today" | "week" | "month";
  }[] = [
    { label: "همه", value: "all" },
    { label: "امروز", value: "today" },
    { label: "این هفته", value: "week" },
    { label: "این ماه", value: "month" },
  ];

  return (
    <div className="flex justify-between gap-4 mb-8 flex-wrap flex-col bml:flex-row">
      {/* 🔍 Search + Button */}
      <div className="flex gap-2 bml:max-w-md w-full relative rounded-lg h-10 ring ring-primary flex-1">
        <SearchInput
          value={searchInput}
          onChange={setSearchInput}
          onSearch={onSearch}
        />
      </div>

      {/* 📅 Filters + Sort */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-4 justify-between">
        <div className="flex gap-2 flex-1">
          {filters.map((f) => (
            <Button
              key={f.value}
              variant={dateFilter === f.value ? "default" : "outline"}
              size="sm"
              onClick={() => setDateFilter(f.value)}
              className="flex-1"
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="flex flex-1 gap-2">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full xs:w-32 flex-1">
              <SelectValue placeholder="دسته‌بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">همه</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c.english} value={c.english}>
                  {c.persian}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full xs:w-32 flex-1">
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">جدید ترین</SelectItem>
              <SelectItem value="popular">محبوب‌ ترین</SelectItem>
              <SelectItem value="commented">بیشترین نظر</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
