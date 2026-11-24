"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SERVICES } from "@/constants/site-data";
import type { Locale } from "@/types";
import type { Messages } from "@/messages/ar";

interface ServicesCarouselProps {
  locale: Locale;
  t: Messages["home"];
  contactLabel: string;
}

export function ServicesCarousel({
  locale,
  t,
  contactLabel,
}: ServicesCarouselProps) {
  const ArrowDir = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <Carousel
      opts={{
        align: "start",
        direction: locale === "ar" ? "rtl" : "ltr",
        loop: true,
      }}
      className="relative w-full"
    >
      <div className="relative rounded-[30px] border border-card bg-surface-subtle px-5 py-6 dark:border-border/60 sm:px-8 sm:py-8">
        <CarouselContent className="ms-0">
          {SERVICES.map((service, index) => (
            <CarouselItem
              key={service.slug}
              className="basis-full ps-0 md:basis-1/2 lg:basis-1/3"
            >
              <Link
                href={`/services/${service.slug}`}
                className={`group flex h-full flex-col justify-between px-4 py-2 transition-colors ${
                  index !== 0
                    ? "md:border-s md:border-card dark:md:border-border/50"
                    : ""
                }`}
              >
                <div>
                  <div className="relative flex h-[210px] w-full items-center justify-center overflow-hidden rounded-[12px] bg-card p-6 sm:h-[222px]">
                    <Image
                      src={service.image}
                      alt={service.title[locale]}
                      width={200}
                      height={200}
                      className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-40"
                    />
                  </div>
                  <div className="mt-5 space-y-2">
                    <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-brand-dark sm:text-2xl lg:text-[26px] lg:leading-[34px]">
                      {service.title[locale]}
                    </h3>
                    <p className="text-sm leading-[1.7] text-muted-foreground sm:text-base lg:text-[17px]">
                      {service.description[locale]}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex justify-end border-t border-card pt-4 dark:border-border/50">
                  <ArrowDir className="size-5 text-foreground transition-transform group-hover:text-brand-dark" />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Bottom CTA bar inside container (matches Figma 304:6480) */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 pt-2 text-sm sm:text-base">
          <Link
            href="/contact"
            className="inline-flex h-[29px] items-center rounded-[20px] bg-primary px-3.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
          >
            {contactLabel}
          </Link>
          <span className="text-foreground">{t.servicesNeedHelp}</span>
          <Link
            href="/booking"
            className="font-display font-bold text-brand-dark underline underline-offset-4 hover:opacity-80"
          >
            {t.servicesAllCta}
          </Link>
        </div>

        {/* Desktop: Compact 38px circular arrows straddling the outer edges (RTL/LTR logical) */}
        <CarouselPrevious
          variant="outline"
          className="hidden md:inline-flex left-auto right-auto -start-[19px] top-1/2 z-10 size-[38px] -translate-y-1/2 border-border/70 bg-card text-foreground shadow-sm hover:border-primary hover:bg-primary hover:text-primary-foreground"
        />
        <CarouselNext
          variant="outline"
          className="hidden md:inline-flex left-auto right-auto -end-[19px] top-1/2 z-10 size-[38px] -translate-y-1/2 border-border/70 bg-card text-foreground shadow-sm hover:border-primary hover:bg-primary hover:text-primary-foreground"
        />
      </div>

      {/* Mobile: Compact arrows centered below the section (matching Work & Packages) */}
      <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
        <CarouselPrevious
          variant="outline"
          className="static size-9 translate-y-0 border-border bg-card text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
        />
        <CarouselNext
          variant="outline"
          className="static size-9 translate-y-0 border-border bg-card text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
        />
      </div>
    </Carousel>
  );
}
