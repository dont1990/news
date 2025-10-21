"use client";

import { categories } from "@/data/categories/categories";
import { socialLinks } from "@/data/social-media/social-media";
import { useQueryParams } from "@/hooks/useQueryParams";
import { routes } from "@/routes/routes";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const { getParam } = useQueryParams();

  const currentCategory = getParam("category") || "همه";

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-black z-40 h-dvh top-64"
      />

      {/* Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="absolute top-full left-0 w-full bg-background border-t border-border md:hidden z-50 shadow-lg"
      >
        <div className="py-6 px-4">
          {/* Categories */}
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, i) => {
              const isActive =
                pathname === "/news" && currentCategory === category.title;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={routes.news.getHref({ category: category.title })}
                    onClick={onClose}
                    className={`group/nav flex flex-col items-center justify-center gap-1 px-4 py-3 text-sm font-medium rounded-2xl bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md ${
                      isActive ? "text-gray-900 bg-primary/10" : "text-gray-500"
                    }`}
                  >
                    <category.icon className="w-6 h-6 group-hover/nav:text-primary transition-colors" />
                    <span>{category.title}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Social Media */}
          <motion.div
            className="flex justify-center gap-4 mt-8 border-t pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={onClose}
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
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
