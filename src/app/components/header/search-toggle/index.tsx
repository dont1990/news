"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface SearchToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SearchToggle({ isOpen, onToggle }: SearchToggleProps) {
  const iconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(iconRef.current, {
        rotation: 90,
        duration: 0.2,
        ease: "power2.out"
      });
    } else {
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  }, [isOpen]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden hover:bg-muted"
      onClick={onToggle}
    >
      <div ref={iconRef}>
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Search className="h-5 w-5" />
        )}
      </div>
    </Button>
  );
}