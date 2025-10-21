// components/shared/DateText.tsx
import { formatDate } from "@/utils/date";

interface DateTextProps {
  date: string | number | Date;
  locale?: string;
  className?: string;
}

export default function DateText({ date, locale, className }: DateTextProps) {
  return <time className={className}>{formatDate(date, locale)}</time>;
}
