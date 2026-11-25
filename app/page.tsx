import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionBadge } from "@/components/shared/section-badge";
import { CtaLinkButton } from "@/components/shared/cta-link-button";
import { ServicesCarousel } from "@/components/sections/home/services-carousel";
import { ProcessSteps } from "@/components/shared/process-steps";
import { FilterableWork } from "@/components/shared/filterable-work";
import { PricingGrid } from "@/components/shared/pricing-grid";
import { TestimonialsSlider } from "@/components/sections/home/testimonials-slider";
import {
  AnimatedCounter,
  FloatAmbient,
  HeroReveal,
  ParallaxBox,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/motion-primitives";
import { getI18n } from "@/lib/i18n";

const MEDIA_IMAGES = [
  "/images/home/media-1.png",
  "/images/home/media-2.png",
  "/images/home/media-3.png",
  "/images/home/media-4.png",
];

export default async function HomePage() {
  const { locale, t } = await getI18n();
  const ArrowDir = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* 1. HERO SECTION (Preserves exact 1440:662 aspect ratio & crisp 90% image clarity) */}
      <section className="relative isolate -mt-26 flex min-h-135 items-center overflow-hidden pt-3 pb-14 sm:min-h-150 lg:aspect-1440/662  lg:min-h-160 lg:pt-3 lg:pb-16">
        {/* Light Hero Background — vivid 90% clear image with minimal Figma edge fade */}
        <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            src="/images/home/hero-light2.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right  ltr:scale-x-[-1] ltr:object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                locale === "ar"
                  ? "linear-gradient(271deg, rgba(252,250,245,0.88) 12%, rgba(252,250,245,0.22) 44%, rgba(255,255,255,0) 62%)"
                  : "linear-gradient(91deg, rgba(252,250,245,0.88) 12%, rgba(252,250,245,0.22) 44%, rgba(255,255,255,0) 62%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Dark Hero Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
          <Image
            src="/images/home/hero-dark.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-left rtl:scale-x-[-1] ltr:object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                locale === "ar"
                  ? "linear-gradient(271deg, rgba(11,11,11,0.88) 12%, rgba(11,11,11,0.28) 46%, rgba(11,11,11,0) 65%)"
                  : "linear-gradient(91deg, rgba(11,11,11,0.88) 12%, rgba(11,11,11,0.28) 46%, rgba(11,11,11,0) 65%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent" />
        </div>

        <Container>
          <div className="max-w-162.5 space-y-5 sm:space-y-6">
            <HeroReveal delay={0.05}>
              <h1 className="font-display text-[32px] font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[70px] xl:leading-[86px]">
                {t.home.heroTitlePrefix}{" "}
                <span className="text-brand-dark">{t.home.heroTitleHighlight}</span>{" "}
                {t.home.heroTitleSuffix}
              </h1>
            </HeroReveal>
            <HeroReveal delay={0.18} y={20}>
              <p className="max-w-[500px] text-sm leading-[1.6] text-foreground-strong sm:text-base md:text-lg lg:text-[22px] lg:leading-[1.45]">
                {t.home.heroDescription}
              </p>
            </HeroReveal>
            <HeroReveal delay={0.3} y={18}>
              <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4 sm:pt-2">
                <CtaLinkButton
                  href="/booking"
                  label={t.home.heroPrimaryCta}
                  variant="gold"
                />
                <CtaLinkButton
                  href="/services"
                  label={t.home.heroSecondaryCta}
                  variant="goldOutline"
                />
              </div>
            </HeroReveal>
          </div>
        </Container>
      </section>

      {/* 2. ABOUT PREVIEW SECTION (Figma 55:574 with curly arrow SVG + torus swirl + 10+) */}
      <section className="py-5 md:py-18">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Start Column: Badge & Golden Ring Swirl (compact side-by-side on mobile, stacked on lg+) */}
            <div className="flex flex-row items-center justify-between gap-4 lg:col-span-3 lg:flex-col lg:items-start">
              <Reveal>
                <SectionBadge label={t.home.aboutBadge} />
              </Reveal>
              <FloatAmbient
                yRange={10}
                duration={6.5}
                className="relative size-24 pointer-events-none shrink-0 sm:size-32 lg:mt-2 lg:h-65 lg:w-65" >
                <Image
                  src="/images/shared/swirl-ring.png"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 260px"
                  className="object-contain opacity-85 rotate-45"
                  aria-hidden="true"
                />
              </FloatAmbient>
            </div>

            {/* End Column: Headline + Giant 10+ + Curly Arrow + Description & Pill CTA */}
            <div className="space-y-6 lg:col-span-9 lg:space-y-8">
              <Reveal>
                <h2 className="max-w-191.25 font-display text-2xl font-bold leading-[1.35] text-foreground sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-18">
                  {t.home.aboutTitle}
                </h2>
              </Reveal>

              <div className="relative grid items-end gap-8 lg:grid-cols-12">
                <Reveal delay={0.1} className="relative lg:col-span-5 ">
                  <div
                    dir="ltr"
                    className="inline-flex justify-between items-start font-sans font-semibold leading-none text-brand-dark  w-full"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none hidden lg:block -translate-y-5"
                    >
                      <Image
                        src="/images/home/about-arrow.svg"
                        alt=""
                        width={68}
                        height={68}
                        className="mb-2 -scale-y-100 opacity-85 dark:invert"
                      />
                    </div>
                    <div className=" ms-auto ">
                      <AnimatedCounter
                        value={10}
                        className="text-[96px] leading-[0.95] sm:text-[130px] lg:text-[156px]"
                      />
                      <span className="mt-2 text-[52px] font-normal leading-none sm:text-[72px]">
                        +
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 font-display text-base font-bold text-foreground-strong sm:text-lg lg:text-[20px]">
                    {t.home.aboutStatLabel}
                  </p>

                </Reveal>

                {/* Decorative curly arrow SVG from Figma 55:718 */}
                <Reveal delay={0.2} className="relative space-y-5 lg:col-span-7">

                  <p className="max-w-120.75 text-base leading-[1.6] text-muted-foreground sm:text-lg lg:text-[22px] lg:leading-[1.45]">
                    {t.home.aboutDescription}
                  </p>
                  <CtaLinkButton
                    href="/about"
                    label={t.home.aboutCta}
                    variant="gold"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SERVICES PREVIEW SECTION (Figma 55:772 — wave backdrop + end-aligned heading + shadcn Carousel) */}
      <section className="relative isolate py-12 md:py-10">
        {/* Subtle full-width curved wave shape from Figma (imgShapeStyle15Png) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-5 -z-10 h-85 w-full overflow-hidden opacity-7 mix-blend-multiply dark:opacity-10 dark:mix-blend-screen md:h-105"
        >
          <Image
            src="/images/home/about-swirl.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top "
          />
        </div>
        {/*  */}
        <Container>
          <Reveal className="mb-10 flex flex-col items-end gap-3 text-end">
            <SectionBadge isAnounceIcon label={t.home.servicesBadge} className="flex-row-reverse" />
            <h2 className="max-w-190 font-display text-2xl font-bold leading-[1.35] text-foreground sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-18">
              {t.home.servicesTitlePart1}
              <br />
              <span className="inline-flex align-middle">
                <Image
                  src="/images/home/services-title-pill.png"
                  alt=""
                  width={193}
                  height={62}
                  className="mx-2 inline-block h-9 w-24 rounded-full object-cover sm:h-12 sm:w-36 lg:h-14.5 lg:w-45"
                  aria-hidden="true"
                />
              </span>{" "}
              {t.home.servicesTitlePart2}
            </h2>
          </Reveal>

          <Reveal delay={0.12} scale={0.98}>
            <ServicesCarousel
              locale={locale}
              t={t.home}
              contactLabel={t.nav.contact}
            />
          </Reveal>
        </Container>
      </section>

      {/* 4. PROCESS STEPS ("كيف نعمل") */}
      <ProcessSteps t={t.process} />

      {/* 5. CREATIVE PRODUCTION ("الإنتاج الإبداعي" — Figma 225:5401 staggered arc layout) */}
      <section className="py-5 md:py-18">
        <Container>
          {/* Top Row: Heading, Compact Studio Visual (right after heading on mobile, side-by-side on lg+), Item 01 */}
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-6 lg:col-span-5 lg:space-y-8">
              <div className="space-y-3">
                <SectionBadge label={t.home.mediaBadge} />
                <h2 className="font-display text-2xl font-bold leading-[1.35] text-foreground sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-[72px]">
                  {t.home.mediaTitleLine1}
                  <br />
                  <span className="text-brand-dark">{t.home.mediaTitleLine2}</span>
                </h2>
              </div>

              {/* Compact Studio Visual for mobile/tablet right below the heading */}
              <div className="lg:hidden">
                <div className="relative mx-auto aspect-638/392 w-full max-w-75 sm:max-w-105">
                  <Image
                    src="/images/home/media-frame-outline.svg"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 300px, 420px"
                    className="pointer-events-none -translate-x-2 -translate-y-2.5 object-contain opacity-90"
                    aria-hidden="true"
                  />
                  <Image
                    src="/images/home/media-main.png"
                    alt={t.home.mediaBadge}
                    fill
                    sizes="(max-width: 640px) 300px, 420px"
                    className="relative z-10 object-contain drop-shadow-md"
                  />
                </div>
              </div>

              {/* Item 01 tucked right under heading on desktop (Figma 225:5407) */}
              {t.home.mediaItems[0] && (
                <Link
                  href="/booking/studio"
                  className="group flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                >
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-2xl font-semibold text-foreground sm:text-[32px]">
                        {t.home.mediaItems[0].number}
                      </span>
                      <span className="h-px w-16 bg-brand-light" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-brand-dark sm:text-[24px]">
                      {t.home.mediaItems[0].title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t.home.mediaItems[0].description}
                    </p>
                    <span className="mt-1 inline-flex size-8 items-center justify-center rounded-full border border-border-gold text-brand-dark transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowDir className="size-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                  <div className="relative h-[108px] w-[172px] shrink-0 sm:h-[119px] sm:w-[192px]">
                    <Image
                      src={MEDIA_IMAGES[0]}
                      alt={t.home.mediaItems[0].title}
                      fill
                      sizes="192px"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              )}
            </div>

            {/* Desktop Large Slanted Transparent Studio Visual + Gold Outline Offset (Figma 225:5411) */}
            <div className="hidden lg:col-span-7 lg:block">
              <ParallaxBox offset={20} className="relative mx-auto aspect-[638/392] w-full max-w-[580px]">
                <Image
                  src="/images/home/media-frame-outline.svg"
                  alt=""
                  fill
                  sizes="580px"
                  className="pointer-events-none -translate-x-3 -translate-y-4 object-contain opacity-90"
                  aria-hidden="true"
                />
                <Image
                  src="/images/home/media-main.png"
                  alt={t.home.mediaBadge}
                  fill
                  sizes="580px"
                  className="relative z-10 object-contain drop-shadow-md"
                />
              </ParallaxBox>
            </div>
          </div>

          {/* Bottom Staggered Arc Row: Items 02, 03, 04 (Figma 225:5408..5410) */}
          <StaggerContainer className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:items-start" staggerDelay={0.12}>
            {t.home.mediaItems.slice(1).map((item, sliceIdx) => {
              const imgIdx = sliceIdx + 1;
              const staggerClass =
                sliceIdx === 0
                  ? "lg:mt-0"
                  : sliceIdx === 1
                    ? "lg:mt-14"
                    : "lg:mt-2";

              return (
                <StaggerItem key={item.number} className={staggerClass}>
                  <Link
                    href="/booking/studio"
                    className="group flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                  >
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-2xl font-semibold text-foreground sm:text-[30px]">
                          {item.number}
                        </span>
                        <span className="h-px w-14 bg-brand-light" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-brand-dark sm:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <span className="mt-1 inline-flex size-8 items-center justify-center rounded-full border border-border-gold text-brand-dark transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowDir className="size-3.5 rtl:rotate-180" />
                      </span>
                    </div>

                    <div className="relative h-[112px] w-[178px] shrink-0">
                      <Image
                        src={MEDIA_IMAGES[imgIdx] ?? MEDIA_IMAGES[0]}
                        alt={item.title}
                        fill
                        sizes="178px"
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* 6. FEATURED WORK ("أفكار تحولت إلى إنجازات" — Figma 116:57) */}
      <section className="py-5 md:py-18">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="space-y-3">
              <SectionBadge label={t.home.workBadge} />
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-[72px]">
                {t.home.workTitle}
              </h2>
            </div>
            <p className="max-w-[580px] text-base leading-[1.5] text-muted-foreground sm:text-lg lg:text-[22px]">
              {t.home.workDescription}
            </p>
          </div>

          <FilterableWork
            locale={locale}
            categories={t.categories}
            columns={2}
            limit={4}
          />
        </Container>
      </section>

      {/* 7. PACKAGES SECTION ("الباقات" — Figma 146:1186) */}
      <section className="py-5 md:py-18">
        <Container>
          <div className="mb-10 flex flex-col items-start">
            <SectionBadge label={t.home.packagesBadge} />
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-[72px]">
              {t.home.packagesTitle}
            </h2>
          </div>

          <PricingGrid locale={locale} choosePlanLabel={t.packages.choosePlan} />
        </Container>
      </section>

      {/* 8. TESTIMONIALS ("آراء عملاؤنا" — Figma 111:564) */}
      <TestimonialsSlider t={t.home} />
    </>
  );
}
