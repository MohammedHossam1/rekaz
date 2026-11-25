import { cn } from "@/lib/utils";

interface DotsBadgeProps {
  variant?: "light" | "gold";
  className?: string;
}

/**
 * Signature Rekaz 3-dot chevron circular badge inside pill CTA buttons
 * Extracted directly from Figma node 55:709 / 55:750
 */
export function DotsBadge({ variant = "light", className }: DotsBadgeProps) {
  const dotColor =
    variant === "gold" ? "bg-background" : "bg-foreground";

  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-active:scale-95",
        variant === "gold" ? "bg-primary" : "bg-card",
        className
      )}
    >
      <span className="flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[360deg] rtl:group-hover:-rotate-[360deg] motion-reduce:transition-none">
        <span className="relative flex size-3.5 items-center justify-center rtl:rotate-180">
          <span className={cn("absolute top-0 start-0 size-[5px] rounded-full", dotColor)} />
          <span className={cn("absolute end-0 top-1/2 size-[5px] -translate-y-1/2 rounded-full", dotColor)} />
          <span className={cn("absolute bottom-0 start-0 size-[5px] rounded-full", dotColor)} />
        </span>
      </span>
    </span>
  );
}
