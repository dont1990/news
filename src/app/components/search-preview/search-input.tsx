"use client";

import { X, SearchIcon } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onFocus: () => void;
}

export function SearchInput({ value, onChange, onClear, onFocus }: SearchInputProps) {
  return (
    <div className="relative flex-1 lg:ml-2">
      <Input
        placeholder="جستجوی اخبار، مقالات و موضوعات ..."
        className="px-8 pe-12 h-12 bg-background/95 backdrop-blur-sm border-2 border-border hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl shadow-sm w-full lg:min-w-[400px]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
      />

      {value && (
        <Button
          variant="ghost"
          type="button"
          onClick={onClear}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
      )}

      <SearchIcon className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}
