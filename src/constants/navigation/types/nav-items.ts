export interface INavItem {
  title: string;
  icon: React.ElementType;
  description: string;
  path: string;
  isExternal?: boolean;
}
