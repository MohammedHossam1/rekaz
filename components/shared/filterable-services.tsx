"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICES } from "@/constants/site-data";
import { cn } from "@/lib/utils";
import type { Locale, ServiceCategory } from "@/types";
import type { Messages } from "@/messages/ar";

interface FilterableServicesProps {
  locale: Locale;
  categories: Messages["categories"];
}

const CATEGORY_ORDER: ServiceCategory[] = [
  "all",
  "marketing",
  "studio",
  "programming",
  "branding",
];

export function FilterableServices({ locale, categories }: FilterableServicesProps) {
  const [selected, setSelected] = React.useState<ServiceCategory>("all");
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const filtered =
    selected === "all"
      ? SERVICES
      : SERVICES.filter((service) => service.category === selected);

  return (
    <div>
      {/* Figma Center Links pill bar (h-[48px] rounded-[26px] bg-surface-subtle) */}
      <div className="mb-10 flex justify-center">
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
                  "h-[48px] cursor-pointer px-6 text-base transition-all",
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

      {/* Services Container (matches Figma 213:735 — bg-surface-subtle rounded-[30px]) */}
      <div className="rounded-[30px] border border-card bg-surface-subtle p-5 dark:border-border/60 sm:p-7">
        <div className="grid gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service, idx) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={cn(
                "group flex flex-col justify-between px-4 py-4 transition-colors",
                idx % 3 !== 0 && "lg:border-s lg:border-card dark:lg:border-border/50"
              )}
            >
              <div>
                <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[12px] bg-card p-6">
                  <Image
                    src={service.image}
                    alt={service.title[locale]}
                    width={200}
                    height={200}
                    className="h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 space-y-2.5">
                  <h3 className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-brand-dark sm:text-[26px]">
                    {service.title[locale]}
                  </h3>
                  <p className="text-base leading-[28px] text-muted-foreground">
                    {service.description[locale]}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-end border-t border-card pt-4 dark:border-border/50">
                <ArrowIcon className="size-5 text-foreground transition-transform group-hover:text-brand-dark" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
