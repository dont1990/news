"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
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
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 text-center py-16 ${className}`}
    >
      {icon && <div className="mb-2">{icon}</div>}
      <h3 className="text-lg md:text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      {action && (
        <Button onClick={action.onClick} className="mt-4">
          {action.label}
        </Button>
      )}
    </div>
  );
}
