import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { categories } from "@/app/data/categories/categories";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathName = usePathname();

  return (
    <NavigationMenu className="hidden md:flex mx-auto">
      <NavigationMenuList className="flex items-center space-x-1 py-3">
        {categories.map((category) => {
          const Icon = category.icon; // 👈 alias component
          const isActive = pathName.startsWith(`/category/${category.english}`);

          return (
            <NavigationMenuItem key={category.english}>
              <NavigationMenuLink
                asChild
                className={`group/nav px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 relative flex items-center gap-2 ${isActive?'text-gray-900 bg-primary/10':'text-gray-500'}`}
              >
                <Link href={`/category/${category.english}`}>
                  <Icon className="w-5 h-5 group-hover/nav:text-primary transition-colors" />
                  <span>{category.persian}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover/nav:w-full"></span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
