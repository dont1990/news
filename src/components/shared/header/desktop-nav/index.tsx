"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { categories } from "@/data/categories/categories";
import { usePathname } from "next/navigation";
import { routes } from "@/routes/routes";

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      staggerDirection: -1, // ✅ reverse the stagger
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10, x: 20 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function DesktopNav() {
  const pathName = usePathname();

  return (
    <NavigationMenu className="hidden md:flex mx-auto">
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="flex"
      >
        <NavigationMenuList className="flex items-center gap-x-1 py-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = pathName.startsWith(`/category/${category.title}`);

            return (
              <motion.div key={category.title} variants={itemVariants}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`group/nav px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 relative flex items-center gap-2 ${
                      isActive ? "text-gray-900 bg-primary/10" : "text-gray-500"
                    }`}
                  >
                    <Link
                      href={routes.news.getHref({ category: category.title })}
                    >
                      <Icon className="w-5 h-5 group-hover/nav:text-primary transition-colors" />
                      <span>{category.title}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover/nav:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </motion.div>
            );
          })}
        </NavigationMenuList>
      </motion.div>
    </NavigationMenu>
  );
}
