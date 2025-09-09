"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { SearchIcon, X } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
  onSearch?: (value?: string) => void; // optional
  onClear?: () => void;
  placeholder?: string;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function SearchInput({
  value,
  onChange,
  onSearch,
  onClear,
  placeholder = "جستجو...",
  className,
  onKeyDown,
  onFocus,
}: SearchInputProps) {
  const handleClear = () => {
    onChange("");
    onClear?.();
    onSearch?.(""); // optional call, only if provided
  };

  return (
    <div className={`flex gap-2 relative w-full ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch?.(); // optional call
          onKeyDown?.(e);
        }}
        onFocus={onFocus}
        className="rounded-lg h-10 w-full"
      />
      <Button
        onClick={() => onSearch?.()} // optional call
        className="absolute left-0 rounded-lg rounded-r-none h-full"
      >
        <SearchIcon />
      </Button>
      {value && (
        <Button
          variant="ghost"
          type="button"
          onClick={handleClear}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
