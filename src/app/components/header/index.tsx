"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { SearchPreview } from "@/app/components/search-preview";
import SearchToggle from "./search-toggle";
import Logo from "./logo";
import NotificationsButton from "./notification-button";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import SearchBar from "./search-bar";
import Hamburger from "./hamburger";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Hamburger
              isOpen={isMobileMenuOpen}
              toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />

            <Logo />
          </div>

          <div className="flex items-center gap-x-4">
            <SearchPreview className="hidden lg:block" />
            <SearchToggle
              isOpen={isMobileSearchOpen}
              onToggle={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            />
            <NotificationsButton />
          </div>
        </div>

        <SearchBar isMobileSearchOpen={isMobileSearchOpen} />
      </div>

      <div className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <DesktopNav />
          <MobileNav
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
