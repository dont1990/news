"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  iconBgClass?: string; // optional: customize circle background
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export default function EmptyState({
  title = "موردی یافت نشد",
  description = "چیزی که به دنبال آن هستید موجود نیست.",
  icon,
  iconBgClass = "bg-muted", // default circle color
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 text-center py-16 ${className}`}
    >
      {icon && (
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center mb-2 ${iconBgClass}`}
        >
          <div className="text-primary animate-bounce">{icon}</div>
        </div>
      )}

      <p className="text-lg md:text-xl font-semibold text-foreground">
        {title}
      </p>

      <p className="text-sm text-muted-foreground">{description}</p>

      {action && (
        <Button onClick={action.onClick} className="mt-4">
          {action.label}
        </Button>
      )}
    </div>
  );
}
