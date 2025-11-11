"use client";

import { socialLinks } from "@/constants/social-media/social-media";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FooterSocialMedia() {
  return (
    <div className="flex justify-center md:justify-start gap-4 mt-4 md:mt-0">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="size-10 rounded-2xl bg-primary/15 flex justify-center items-center shadow-sm text-gray-500 hover:text-primary transition-colors"
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
