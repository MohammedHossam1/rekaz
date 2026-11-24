import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/motion/motion-primitives";
import type { Locale } from "@/types";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  locale: Locale;
}

export function PageHero({ title, breadcrumbs, locale }: PageHeroProps) {
  const Separator = locale === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section className="relative isolate -mt-[104px] overflow-hidden pt-[185px] pb-20 md:pt-[205px] md:pb-24">
      {/* Light mode architectural 3D hero background (mirrored in RTL so arch is on the left & clean ivory behind gold logo) */}
      <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image
          src="/images/shared/page-hero-light.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center rtl:scale-x-[-1]"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Dark mode architectural 3D hero background */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <Image
          src="/images/shared/page-hero-dark.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center rtl:scale-x-[-1]"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/85 to-transparent" />
      </div>

      <Container className="text-center">
        <HeroReveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[60px] md:leading-[1.2]">
            {title}
          </h1>
        </HeroReveal>
        <HeroReveal delay={0.12} y={16}>
          <nav
            aria-label="Breadcrumb"
            className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground sm:text-base"
          >
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <span key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-brand-dark"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "font-medium text-foreground" : ""}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <Separator className="size-4 text-brand-dark" aria-hidden="true" />}
                </span>
              );
            })}
          </nav>
        </HeroReveal>
      </Container>
    </section>
  );
}
