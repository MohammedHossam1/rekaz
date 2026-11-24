"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";
import type { Messages } from "@/messages/ar";

interface HeaderProps {
  locale: Locale;
  t: Messages["nav"];
  siteName: string;
}

export function Header({ locale, t, siteName }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [showSticky, setShowSticky] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 160;
    if (next !== showSticky) {
      setShowSticky(next);
    }
  });

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/services", label: t.services },
    { href: "/packages", label: t.packages },
    { href: "/work", label: t.work },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const renderHeaderContent = (compact = false) => (
    <Container>
      <div
        className={cn(
          "flex items-center justify-between",
          compact
            ? "h-[76px] py-2"
            : "h-[104px] border-b border-border-gold/70 py-3"
        )}
      >
        {/* Logo (start) */}
        <Link
          href="/"
          className="relative flex shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label={siteName}
        >
          <Image
            src="/images/shared/logo-gold.png"
            alt={siteName}
            width={76}
            height={92}
            priority={!compact}
            className={cn(
              "w-auto object-contain",
              compact ? "h-[52px] sm:h-[58px]" : "h-[68px] sm:h-[78px]"
            )}
          />
        </Link>

        {/* Desktop Navigation (center) */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-8">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-display font-bold transition-colors",
                  compact ? "py-2 text-[16px]" : "py-3 text-[17px]",
                  active
                    ? "text-brand-dark after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-primary"
                    : "text-foreground hover:text-brand-dark"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right/End Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle label={t.toggleTheme} />
          <LanguageSwitcher
            locale={locale}
            label={t.languageLabel}
            arabicLabel={t.switchToArabic}
            englishLabel={t.switchToEnglish}
          />
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "gold", size: "pill" }),
              compact ? "h-[42px] ps-5 pe-1.5 text-sm" : "h-[47px] ps-6 pe-1.5"
            )}
          >
            <span>{t.contact}</span>
            <span
              className={cn(
                "flex items-center justify-center rounded-full bg-card text-foreground",
                compact ? "size-8" : "size-9"
              )}
            >
              <Phone className="size-4" />
            </span>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle label={t.toggleTheme} />
          <LanguageSwitcher
            locale={locale}
            label={t.languageLabel}
            arabicLabel={t.switchToArabic}
            englishLabel={t.switchToEnglish}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={t.menu}
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </Container>
  );

  return (
    <>
      {/* Original Top Header */}
      <header className="relative z-40 w-full">
        {renderHeaderContent(false)}
      </header>

      {/* Additional Sticky Slide-Down Header on Scroll */}
      <AnimatePresence>
        {showSticky && (
          <motion.header
            key="sticky-header"
            initial={{ y: -96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -96, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 w-full border-b border-border-gold/60 bg-background/85 shadow-sm backdrop-blur-md"
          >
            {renderHeaderContent(true)}
          </motion.header>
        )}
      </AnimatePresence>

      {/* Shared Mobile Navigation Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="hidden" aria-hidden="true" tabIndex={-1} />
        <SheetContent side={locale === "ar" ? "right" : "left"} className="w-[300px] sm:w-[340px]">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between pt-2">
              <Image
                src="/images/shared/logo-gold.png"
                alt={siteName}
                width={56}
                height={68}
                className="h-14 w-auto object-contain"
              />
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-2 px-4">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 font-display text-lg font-bold transition-colors",
                    active
                      ? "bg-primary/15 text-brand-dark"
                      : "text-foreground hover:bg-surface-subtle"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-6 border-t border-border pt-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "gold", size: "pill" }),
                  "w-full justify-between"
                )}
              >
                <span>{t.contact}</span>
                <span className="flex size-9 items-center justify-center rounded-full bg-card text-foreground">
                  <Phone className="size-4" />
                </span>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
