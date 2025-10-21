import { timeAgo } from "@/lib/utils/timeAgo";

interface TimeAgoProps {
  date: string | number | Date;
  className?: string;
}

export default function TimeAgo({ date, className }: TimeAgoProps) {
  return <span className={className}>{timeAgo(date)}</span>;
}
