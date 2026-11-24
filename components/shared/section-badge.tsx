import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  label: string;
  className?: string;
  isAnounceIcon?: boolean;
}

export function SectionBadge({ label, className, isAnounceIcon = false }: SectionBadgeProps) {
  const src = isAnounceIcon ? "/images/shared/anounced-icon.png" : "/images/shared/badge-icon.png"
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-xl font-bold text-brand-dark sm:text-[22px]",
        className
      )}
    >
      <Image
        src={src}
        alt=""
        width={32}
        height={32}
        className="size-8 object-contain"
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  );
}
