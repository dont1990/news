"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";

interface IconActionButtonProps {
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
  dropdownItems?: ReactNode; // optional for actions like Share
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  active?: boolean;
  tooltip?: string;
  className?: string;
}

/**
 * Generic IconActionButton for toolbar actions like Share, Bookmark, Like, etc.
 */
export function IconActionButton({
  icon,
  label,
  onClick,
  dropdownItems,
  variant = "ghost",
  size = "lg",
  active = false,
  tooltip,
  className = "",
}: IconActionButtonProps) {
  const baseClasses = `gap-2 transition-all ${
    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
  } ${className}`;

  // Dropdown (for complex actions like Share)
  if (dropdownItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            size={size}
            className={baseClasses}
            title={tooltip || label}
          >
            {icon}
            {label && <span>{label}</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {dropdownItems}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Simple button (for Bookmark, Like, etc.)
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={baseClasses}
      title={tooltip || label}
    >
      {icon}
      {label && <span>{label}</span>}
    </Button>
  );
}
