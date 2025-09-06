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

interface Props {
  search: string;
  setSearch: (v: string) => void;
  dateFilter: "all" | "today" | "week" | "month";
  setDateFilter: (v: "all" | "today" | "week" | "month") => void;
  sort: string;
  setSort: (v: string) => void;
}

export function CategoryControls({
  search,
  setSearch,
  dateFilter,
  setDateFilter,
  sort,
  setSort,
}: Props) {
  const filters: { label: string; value: "all" | "today" | "week" | "month" }[] = [
    { label: "همه", value: "all" },
    { label: "امروز", value: "today" },
    { label: "این هفته", value: "week" },
    { label: "این ماه", value: "month" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      {/* 🔍 Search */}
      <Input
        type="text"
        placeholder="جستجو در مقالات..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />

      {/* 📅 Filters + Sort */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Date Filters */}
        {filters.map((f) => (
          <Button
            key={f.value}
            variant={dateFilter === f.value ? "default" : "outline"}
            size="sm"
            onClick={() => setDateFilter(f.value)}
          >
            {f.label}
          </Button>
        ))}

        {/* Sort Dropdown */}
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="مرتب‌سازی" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">جدیدترین</SelectItem>
            <SelectItem value="popular">محبوب‌ترین</SelectItem>
            <SelectItem value="commented">بیشترین نظر</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
