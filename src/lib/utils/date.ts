// utils/date.ts
export function formatDate(
  date: string | number | Date,
  locale: string = "fa-IR",
  options?: Intl.DateTimeFormatOptions
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateObj = typeof date === "string" || typeof date === "number" ? new Date(date) : date;

  return dateObj.toLocaleDateString(locale, { ...defaultOptions, ...options });
}
