import { cn } from "@/lib/utils/cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md", "bg-skeleton-bg", className)}
      {...props}
    />
  );
}

export { Skeleton };
