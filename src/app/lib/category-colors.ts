export const categoryColors = {
  world: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-200",
    hover: "hover:bg-blue-200",
    primary: "bg-blue-600",
    primaryText: "text-blue-600",
  },
  politics: {
    bg: "bg-red-100",
    text: "text-red-800",
    border: "border-red-200",
    hover: "hover:bg-red-200",
    primary: "bg-red-600",
    primaryText: "text-red-600",
  },
  business: {
    bg: "bg-green-100",
    text: "text-green-800",
    border: "border-green-200",
    hover: "hover:bg-green-200",
    primary: "bg-green-600",
    primaryText: "text-green-600",
  },
  technology: {
    bg: "bg-purple-100",
    text: "text-purple-800",
    border: "border-purple-200",
    hover: "hover:bg-purple-200",
    primary: "bg-purple-600",
    primaryText: "text-purple-600",
  },
  science: {
    bg: "bg-cyan-100",
    text: "text-cyan-800",
    border: "border-cyan-200",
    hover: "hover:bg-cyan-200",
    primary: "bg-cyan-600",
    primaryText: "text-cyan-600",
  },
  health: {
    bg: "bg-pink-100",
    text: "text-pink-800",
    border: "border-pink-200",
    hover: "hover:bg-pink-200",
    primary: "bg-pink-600",
    primaryText: "text-pink-600",
  },
  sports: {
    bg: "bg-orange-100",
    text: "text-orange-800",
    border: "border-orange-200",
    hover: "hover:bg-orange-200",
    primary: "bg-orange-600",
    primaryText: "text-orange-600",
  },
  entertainment: {
    bg: "bg-violet-100",
    text: "text-violet-800",
    border: "border-violet-200",
    hover: "hover:bg-violet-200",
    primary: "bg-violet-600",
    primaryText: "text-violet-600",
  },
  all: {
    bg: "bg-gray-100",
    text: "text-gray-800",
    border: "border-gray-200",
    hover: "hover:bg-gray-200",
    primary: "bg-gray-600",
    primaryText: "text-gray-600",
  },
} as const;

export type CategorySlug = keyof typeof categoryColors;

export function getCategoryColors(
  category: string
): (typeof categoryColors)[CategorySlug] {
  const normalizedCategory = category.toLowerCase() as CategorySlug;
  return categoryColors[normalizedCategory] || categoryColors.world;
}

export function getCategoryBadgeClasses(category: string): string {
  const colors = getCategoryColors(category);
  return `${colors.bg} ${colors.text} ${colors.border} ${colors.hover} border`;
}

export function getCategoryPrimaryColor(category: string): string {
  const colors = getCategoryColors(category);
  return colors.primary;
}

export function getCategoryTextColor(category: string): string {
  const colors = getCategoryColors(category);
  return colors.primaryText;
}
