// utils/timeAgo.ts

export function timeAgo(date: string | number | Date): string {
  const now = new Date();
  const past = typeof date === "string" || typeof date === "number" ? new Date(date) : date;

  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (seconds < 60) return "لحظاتی پیش";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} دقیقه پیش`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} ساعت پیش`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} روز پیش`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} هفته پیش`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} ماه پیش`;
  const years = Math.floor(days / 365);
  return `${years} سال پیش`;
}
