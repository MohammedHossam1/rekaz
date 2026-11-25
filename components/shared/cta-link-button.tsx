import Link from "next/link";
import { DotsBadge } from "@/components/shared/dots-badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaLinkButtonProps {
  href: string;
  label: string;
  variant?: "gold" | "goldOutline";
  className?: string;
}

export function CtaLinkButton({
  href,
  label,
  variant = "gold",
  className,
}: CtaLinkButtonProps) {
  const isOutline = variant === "goldOutline";

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant, size: "pill" }),
        "group relative h-12 overflow-hidden pe-5 ps-1.5 text-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-6px_rgba(239,187,84,0.55)] active:translate-y-0 active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-13.5 sm:pe-6 sm:ps-1.75 sm:text-base lg:text-lg",
        isOutline &&
          "border-primary bg-background/40 backdrop-blur-[2px] hover:bg-primary/10",
        className
      )}
    >
      {/* Luxury sheen sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -start-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-700 ease-out group-hover:start-[130%] motion-reduce:hidden"
      />
      <DotsBadge
        variant={isOutline ? "gold" : "light"}
        className="relative z-10 size-9 sm:size-10"
      />
      <span className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
        {label}
      </span>
    </Link>
  );
}
