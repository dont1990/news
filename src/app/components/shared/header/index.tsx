"use client";

import { Suspense, useState } from "react";
import { SearchPreview } from "@/app/components/shared/header/search-preview";
import SearchToggle from "./search-toggle";
import Logo from "./logo";
import NotificationsButton from "./notification-button";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Hamburger from "./hamburger";
import { motion, Variants } from "framer-motion";
import Container from "@/app/components/shared/container"; // ✅ import our custom Container

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
      {/* Top Header */}
      <Container paddingY="py-4" className="flex flex-col gap-4">
        <motion.div
          className="flex items-center justify-between"
          variants={itemVariants}
        >
          <motion.div
            className="flex gap-4 items-center"
            variants={itemVariants}
          >
            <Hamburger
              isOpen={isMobileMenuOpen}
              toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <Logo />
          </motion.div>

          <motion.div
            className="flex items-center gap-x-4"
            variants={itemVariants}
          >
            <Suspense fallback={"loading"}>
              <SearchPreview className="hidden md:block" />
              <div className="md:hidden">
                <SearchToggle
                  isOpen={isMobileSearchOpen}
                  onToggle={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                />
              </div>
            </Suspense>
            <NotificationsButton />
          </motion.div>
        </motion.div>
      </Container>

      {/* Navigation */}
      <div className="bg-muted/30 border-t border-border">
        <Container paddingY="py-0">
          <Suspense fallback={"loading"}>
            <DesktopNav />
            <MobileNav
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          </Suspense>
        </Container>
      </div>
    </motion.header>
  );
}
