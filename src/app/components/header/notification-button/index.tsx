"use client";

import { Bell } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function NotificationsButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
    >
      <Bell className="h-5 w-5" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></span>
    </Button>
  );
}
