export const categoryColors = {
  جهان: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-200",
    hover: "hover:bg-blue-200",
    primary: "bg-blue-600",
    primaryText: "text-blue-600",
    textHover: "hover:text-blue-600",
  },
  سیاست: {
    bg: "bg-red-100",
    text: "text-red-800",
    border: "border-red-200",
    hover: "hover:bg-red-200",
    primary: "bg-red-600",
    primaryText: "text-red-600",
    textHover: "hover:text-red-600",
  },
  تجارت: {
    bg: "bg-green-100",
    text: "text-green-800",
    border: "border-green-200",
    hover: "hover:bg-green-200",
    primary: "bg-green-600",
    primaryText: "text-green-600",
    textHover: "hover:text-green-600",
  },
  فناوری: {
    bg: "bg-purple-100",
    text: "text-purple-800",
    border: "border-purple-200",
    hover: "hover:bg-purple-200",
    primary: "bg-purple-600",
    primaryText: "text-purple-600",
    textHover: "hover:text-purple-600",
  },
  علم: {
    bg: "bg-cyan-100",
    text: "text-cyan-800",
    border: "border-cyan-200",
    hover: "hover:bg-cyan-200",
    primary: "bg-cyan-600",
    primaryText: "text-cyan-600",
    textHover: "hover:text-cyan-600",
  },
  سلامت: {
    bg: "bg-pink-100",
    text: "text-pink-800",
    border: "border-pink-200",
    hover: "hover:bg-pink-200",
    primary: "bg-pink-600",
    primaryText: "text-pink-600",
    textHover: "hover:text-pink-600",
  },
  ورزش: {
    bg: "bg-orange-100",
    text: "text-orange-800",
    border: "border-orange-200",
    hover: "hover:bg-orange-200",
    primary: "bg-orange-600",
    primaryText: "text-orange-600",
    textHover: "hover:text-orange-600",
  },
  سرگرمی: {
    bg: "bg-violet-100",
    text: "text-violet-800",
    border: "border-violet-200",
    hover: "hover:bg-violet-200",
    primary: "bg-violet-600",
    primaryText: "text-violet-600",
    textHover: "hover:text-violet-600",
  },
  "محیط زیست": {
    bg: "bg-teal-100",
    text: "text-teal-800",
    border: "border-teal-200",
    hover: "hover:bg-teal-200",
    primary: "bg-teal-600",
    primaryText: "text-teal-600",
    textHover: "hover:text-teal-600",
  },
  همه: {
    bg: "bg-gray-100",
    text: "text-gray-800",
    border: "border-gray-200",
    hover: "hover:bg-gray-200",
    primary: "bg-gray-600",
    primaryText: "text-gray-600",
    textHover: "hover:text-gray-600",
  },
} as const;

export type CategoryTitle = keyof typeof categoryColors;

export function getCategoryColors(
  category: string
): (typeof categoryColors)[CategoryTitle] {
  return categoryColors[category as CategoryTitle] || categoryColors["همه"];
}

export function getCategoryBadgeClasses(category: string): string {
  const colors = getCategoryColors(category);
  return `${colors.bg} ${colors.text} ${colors.border} ${colors.hover} border`;
}

export function getCategoryPrimaryColor(category: string): string {
  return getCategoryColors(category).primary;
}

export function getCategoryTextColor(category: string): string {
  return getCategoryColors(category).primaryText;
}

export function getCategoryTextHover(category: string): string {
  return getCategoryColors(category).textHover;
}
