"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface SearchToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SearchToggle({ isOpen, onToggle }: SearchToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden"
      onClick={onToggle}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
    </Button>
  );
}
