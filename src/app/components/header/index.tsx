"use client";

import { Bell, Menu, Search, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { SearchPreview } from "@/app/components/search-preview";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "World",
  "Politics",
  "Business",
  "Technology",
  "Science",
  "Health",
  "Sports",
  "Entertainment",
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <h1 className="news-heading text-2xl text-foreground group-hover:text-primary transition-colors">
                    NewsHub
                  </h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    Global News Aggregator
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SearchPreview className="hidden lg:block" />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-muted"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              {isMobileSearchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMobileSearchOpen && (
          <div className="mt-4 lg:hidden">
            <SearchPreview className="w-full" />
          </div>
        )}
      </div>

      <div className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center space-x-1 py-3">
              {categories.map((category) => (
                <NavigationMenuItem key={category}>
                  <NavigationMenuLink
                    asChild
                    className="group/nav px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 relative"
                  >
                    <Link href={`/category/${category.toLowerCase()}`}>
                      {category}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover/nav:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
