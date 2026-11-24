"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/motion/motion-primitives";
import { PRICING_PLANS } from "@/constants/site-data";
import { cn } from "@/lib/utils";
import type { Locale, PricingPlan } from "@/types";

interface PricingGridProps {
  locale: Locale;
  choosePlanLabel: string;
}

function PricingCard({
  plan,
  locale,
  choosePlanLabel,
}: {
  plan: PricingPlan;
  locale: Locale;
  choosePlanLabel: string;
}) {
  return (
    <div className="group flex min-h-[500px] flex-col justify-between rounded-[24px] border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xs sm:min-h-[538px] sm:p-8">
      <div>
        <div className="space-y-1.5 pb-6">
          <p className="text-lg font-medium text-foreground sm:text-[20px]">
            {plan.name[locale]}
          </p>
          <p className="font-display text-3xl font-bold text-foreground sm:text-[32px] sm:leading-[40px]">
            {plan.price[locale]}
          </p>
        </div>

        <p className="min-h-[60px] text-sm leading-[1.6] text-foreground/85 sm:text-base">
          {plan.description[locale]}
        </p>

        <ul className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
          {plan.features[locale].map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-foreground dark:bg-primary/25 dark:text-primary">
                <Check className="size-3" strokeWidth={2.5} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-2">
        <Link
          href={`/booking?plan=${plan.id}`}
          className={cn(
            buttonVariants({ variant: "goldOutline", size: "xl" }),
            "h-[52px] w-full border-foreground/70 text-base transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:text-lg"
          )}
        >
          {choosePlanLabel}
        </Link>
      </div>
    </div>
  );
}

export function PricingGrid({ locale, choosePlanLabel }: PricingGridProps) {
  return (
    <>
      {/* Mobile: shadcn Carousel */}
      <div className="md:hidden">
        <Carousel
          opts={{
            align: "start",
            direction: locale === "ar" ? "rtl" : "ltr",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {PRICING_PLANS.map((plan) => (
              <CarouselItem key={plan.id} className="basis-[88%] sm:basis-[78%]">
                <PricingCard
                  plan={plan}
                  locale={locale}
                  choosePlanLabel={choosePlanLabel}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
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
        </Carousel>
      </div>

      {/* Tablet & Desktop: Exact 3-column Grid with Stagger Reveal */}
      <StaggerContainer className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
        {PRICING_PLANS.map((plan) => (
          <StaggerItem key={plan.id}>
            <PricingCard
              plan={plan}
              locale={locale}
              choosePlanLabel={choosePlanLabel}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </>
  );
}
