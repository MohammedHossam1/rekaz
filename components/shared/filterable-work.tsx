"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/constants/site-data";
import { cn } from "@/lib/utils";
import type { Locale, ServiceCategory } from "@/types";
import type { Messages } from "@/messages/ar";

interface FilterableWorkProps {
  locale: Locale;
  categories: Messages["categories"];
  columns?: 2 | 3;
  limit?: number;
  excludeSlug?: string;
}

const CATEGORY_ORDER: ServiceCategory[] = [
  "all",
  "marketing",
  "studio",
  "programming",
  "branding",
];

export function FilterableWork({
  locale,
  categories,
  columns = 2,
  limit,
  excludeSlug,
}: FilterableWorkProps) {
  const [selected, setSelected] = React.useState<ServiceCategory>("all");

  const baseList = excludeSlug
    ? PROJECTS.filter((p) => p.slug !== excludeSlug)
    : PROJECTS;

  const filtered =
    selected === "all"
      ? baseList
      : baseList.filter((project) => project.category === selected);

  const visibleProjects = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {/* Figma Center Links pill bar */}
      <div className="mb-8 flex justify-center md:mb-10">
        <div
          role="tablist"
          className="inline-flex flex-wrap items-center justify-center overflow-hidden rounded-[26px] bg-surface-subtle"
        >
          {CATEGORY_ORDER.map((key) => {
            const active = selected === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelected(key)}
                className={cn(
                  "h-[44px] cursor-pointer px-4 text-sm transition-all sm:h-[48px] sm:px-6 sm:text-base",
                  active
                    ? "border-b-2 border-primary font-display font-bold text-foreground"
                    : "text-foreground/75 hover:text-foreground"
                )}
              >
                {categories[key]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile: shadcn Carousel */}
      <div className="md:hidden">
        <Carousel
          opts={{
            align: "start",
            direction: locale === "ar" ? "rtl" : "ltr",
            loop: visibleProjects.length > 1,
          }}
          className="w-full"
        >
          <CarouselContent>
            {visibleProjects.map((project) => (
              <CarouselItem key={project.slug} className="basis-[88%] sm:basis-[78%]">
                <Link href={`/work/${project.slug}`} className="group block space-y-4">
                  <div className="relative aspect-[4/4] w-full overflow-hidden rounded-[26px] border border-border/50 bg-surface-subtle">
                    <Image
                      src={project.image}
                      alt={project.title[locale]}
                      fill
                      sizes="88vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-brand-dark">
                      {project.title[locale]}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {project.categoryLabel[locale]} - {project.year}
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          {visibleProjects.length > 1 && (
            <div className="mt-5 flex items-center justify-center gap-3">
              <CarouselPrevious
                variant="outline"
                className="static size-10 translate-y-0 border-border bg-card hover:border-primary hover:bg-primary hover:text-primary-foreground"
              />
              <CarouselNext
                variant="outline"
                className="static size-10 translate-y-0 border-border bg-card hover:border-primary hover:bg-primary hover:text-primary-foreground"
              />
            </div>
          )}
        </Carousel>
      </div>

      {/* Tablet & Desktop: Exact Figma Grid */}
      <div
        className={cn(
          "hidden gap-7 md:grid",
          columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {visibleProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block space-y-5"
          >
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-[30px] border border-border/50 bg-surface-subtle",
                columns === 2 ? "aspect-[645/665]" : "aspect-square"
              )}
            >
              <Image
                src={project.image}
                alt={project.title[locale]}
                fill
                sizes={
                  columns === 2
                    ? "50vw"
                    : "(max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1.5 px-1">
              <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-brand-dark sm:text-[24px] sm:leading-[34px]">
                {project.title[locale]}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.categoryLabel[locale]} - {project.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
