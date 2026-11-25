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
        "group h-12 pe-5 ps-1.5 text-sm sm:h-13.5 sm:pe-6 sm:ps-1.75 sm:text-base lg:text-lg",
        isOutline && "border-primary bg-background/40 backdrop-blur-[2px]",
        className
      )}
    >
      <DotsBadge
        variant={isOutline ? "gold" : "light"}
        className="size-9 sm:size-10"
      />
      <span>{label}</span>
    </Link>
  );
}
