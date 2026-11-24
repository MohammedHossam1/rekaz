"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionBadge } from "@/components/shared/section-badge";
import { AnimatedCounter, Reveal } from "@/components/motion/motion-primitives";
import { Button } from "@/components/ui/button";
import type { Messages } from "@/messages/ar";

interface TestimonialsSliderProps {
  t: Messages["home"];
}

export function TestimonialsSlider({ t }: TestimonialsSliderProps) {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const items = t.testimonialsItems;
  const current = items[index] ?? items[0];

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section className="py-14 md:py-22">
      <Container>
        <Reveal>
          <div className="rounded-[30px] border border-surface-subtle bg-background p-6 dark:border-border/60 sm:p-8 lg:p-10">
            {/* Header Row (Figma 116:66) */}
            <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div className="space-y-3">
                <SectionBadge label={t.testimonialsBadge} />
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-[72px]">
                  {t.testimonialsTitle}
                </h2>
              </div>
              <p className="max-w-[560px] text-base leading-[1.5] text-muted-foreground sm:text-lg lg:text-[22px]">
                {t.testimonialsSubtitle}
              </p>
            </div>

            {/* Content Row (Figma 111:581): Angular-Gradient Framed Card (Start) + 4.8 Score (End) */}
            <div className="grid items-center gap-8 lg:grid-cols-12">
              {/* Review Card wrapped in Figma's 10px Angular/Conic Gradient Frame */}
              <div
                className="relative overflow-hidden rounded-[22px] p-[10px] lg:col-span-8"
                style={{
                  backgroundImage:
                    "conic-gradient(from 90deg, var(--background) 0%, var(--primary) 25%, var(--background) 50%, var(--primary) 75%, var(--background) 100%)",
                }}
              >
                <div className="relative overflow-hidden rounded-[18px] bg-card p-6 sm:p-8 lg:px-9 lg:py-7">
                  {/* Exact Figma giant quote watermark SVG */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-6 start-6 size-[210px] opacity-90 sm:size-[250px]"
                  >
                    <Image
                      src="/images/home/quote-watermark.svg"
                      alt=""
                      fill
                      sizes="250px"
                      className="object-contain dark:opacity-20"
                    />
                  </div>

                  {/* 5 Gold Stars aligned to end */}
                  <div className="relative z-10 flex items-center justify-end gap-2 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-6 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Animated Quote + Author Transition */}
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: direction * 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -24 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="relative z-10 mt-6 min-h-[108px] text-base leading-[1.9] text-foreground sm:text-lg lg:text-[20px]">
                        {current.quote}
                      </p>

                      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full border-2 border-primary p-[3px]">
                            <div className="relative size-[58px] overflow-hidden rounded-full border-[5px] border-foreground sm:size-[65px]">
                              <Image
                                src="/images/home/testimonial-avatar.png"
                                alt={current.author}
                                fill
                                sizes="65px"
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-lg font-medium text-foreground sm:text-[20px]">
                              {current.author}
                            </p>
                            <p className="text-xs text-muted-foreground sm:text-sm">
                              {current.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={handlePrev}
                            aria-label="Previous testimonial"
                            className="size-12 rounded-full bg-card text-foreground hover:bg-surface-subtle hover:text-brand-dark"
                          >
                            <ArrowRight className="size-5 rtl:rotate-0 ltr:rotate-180" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={handleNext}
                            aria-label="Next testimonial"
                            className="size-12 rounded-full bg-card text-foreground hover:bg-surface-subtle hover:text-brand-dark"
                          >
                            <ArrowLeft className="size-5 rtl:rotate-0 ltr:rotate-180" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* 4.8 Rating Score Column */}
              <div className="flex flex-col items-center justify-center py-4 text-center lg:col-span-4">
                <p className="font-sans text-[88px] font-semibold leading-none tracking-tight text-foreground sm:text-[110px] lg:text-[120px]">
                  <AnimatedCounter value={4.8} decimals={1} />
                </p>
                <div className="mt-5 flex items-center gap-2 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-6 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-foreground sm:text-base">
                  {t.testimonialsRatingCaption}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
