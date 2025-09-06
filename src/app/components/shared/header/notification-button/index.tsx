"use client";

import { Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function NotificationsButton() {
  return (
    <div className="relative">
      <motion.div
        className="cursor-pointer"
        whileHover={{ rotate: [0, -15, 15, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Bell className="h-5 w-5" />
      </motion.div>
      <span className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full"></span>
    </div>
  );
}
