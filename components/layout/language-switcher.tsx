"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setLocaleAction } from "@/app/actions/locale";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  arabicLabel: string;
  englishLabel: string;
}

export function LanguageSwitcher({
  locale,
  label,
  arabicLabel,
  englishLabel,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  const handleSelect = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    startTransition(async () => {
      await setLocaleAction(nextLocale);
      router.refresh();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={isPending}
        className={cn(
          "inline-flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 font-display text-sm font-bold text-foreground-strong transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isPending && "opacity-60"
        )}
      >
        <Globe className="size-4 shrink-0 text-muted-foreground" />
        <span>{label}</span>
        <ChevronDown className="size-3.5 shrink-0 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[130px]">
        <DropdownMenuItem
          onClick={() => handleSelect("ar")}
          className={cn(
            "cursor-pointer justify-between",
            locale === "ar" && "font-bold text-brand-dark"
          )}
        >
          <span>{arabicLabel}</span>
          {locale === "ar" && <span className="size-1.5 rounded-full bg-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSelect("en")}
          className={cn(
            "cursor-pointer justify-between",
            locale === "en" && "font-bold text-brand-dark"
          )}
        >
          <span>{englishLabel}</span>
          {locale === "en" && <span className="size-1.5 rounded-full bg-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
