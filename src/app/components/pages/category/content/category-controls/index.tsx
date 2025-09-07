"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { SearchIcon } from "lucide-react";

interface Props {
  searchInput: string;
  setSearchInput: (v: string) => void;
  onSearch: () => void;
  dateFilter: "all" | "today" | "week" | "month";
  setDateFilter: (v: "all" | "today" | "week" | "month") => void;
  sort: string;
  setSort: (v: string) => void;
}

export function CategoryControls({
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
    <div className="flex justify-between gap-4 mb-8 flex-wrap flex-col md:flex-row">
      {/* 🔍 Search + Button */}
      <div className="flex gap-2 md:max-w-md w-full relative rounded-lg h-10 ring ring-primary flex-1">
        <Input
          type="text"
          placeholder="جستجو در مقالات..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          className="rounded-lg h-full"
        />
        <Button
          onClick={onSearch}
          className="absolute left-0 rounded-lg rounded-r-none h-full"
        >
          <SearchIcon />
        </Button>
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

        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-full xs:w-36">
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
  );
}
