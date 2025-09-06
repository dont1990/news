"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

export function SortDropdown() {
  const [sort, setSort] = useState("latest");

  return (
    <div className="flex justify-end mb-6">
      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="مرتب‌سازی" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="latest">جدیدترین</SelectItem>
          <SelectItem value="popular">محبوب‌ترین</SelectItem>
          <SelectItem value="commented">بیشترین نظر</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
