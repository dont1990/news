import { routes } from "@/routes/routes";
import { ICategory } from "../categories/types/category";
// import HomeIcon from "./assets/icons/home";
import { categories } from "../categories/categories";
import { INavItem } from "./types/nav-items";
import NewspaperIcon from "./assets/icons/newspaper";

export const navItems: INavItem[] = [
  // {
  //   title: "خانه",
  //   icon: HomeIcon,
  //   description: "بازگشت به صفحه اصلی و مرور تازه‌ترین اخبار.",
  //   path: routes.home.getHref(),
  // },
  {
    title: "روزنامه",
    icon: NewspaperIcon,
    description: "مرور و مشاهده نسخه‌های مختلف روزنامه‌های برتر",
    path: routes.newspaper.getHref(),
  },

  ...categories.map((cat: ICategory) => ({
    title: cat.title,
    icon: cat.icon,
    description: cat.description,
    path: `/news?category=${cat.title}`,
  })),
];
