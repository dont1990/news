"use client";

import { useState } from "react";
import { SearchPreview } from "@/app/components/search-preview";
import SearchToggle from "./search-toggle";
import Logo from "./logo";
import NotificationsButton from "./notification-button";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import SearchBar from "./search-bar";
import Hamburger from "./hamburger";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div
        className="container mx-auto px-4 py-4"
        variants={itemVariants}
      >
        <div className="flex items-center justify-between">
          <motion.div className="flex gap-4 items-center" variants={itemVariants}>
            <Hamburger
              isOpen={isMobileMenuOpen}
              toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <Logo />
          </motion.div>

          <motion.div className="flex items-center gap-x-4" variants={itemVariants}>
            <SearchPreview className="hidden lg:block" />
            <div className="lg:hidden">
              <SearchToggle
                isOpen={isMobileSearchOpen}
                onToggle={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              />
            </div>
            <NotificationsButton />
          </motion.div>
        </div>

        <SearchBar isMobileSearchOpen={isMobileSearchOpen} />
      </motion.div>

      <motion.div className="bg-muted/30 border-t border-border" variants={itemVariants}>
        <div className="container mx-auto px-4">
          <DesktopNav />
          <MobileNav
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </motion.div>
    </motion.header>
  );
}
