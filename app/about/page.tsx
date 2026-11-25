import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaLinkButton } from "@/components/shared/cta-link-button";
import {
  ParallaxBox,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/motion-primitives";
import { Badge } from "@/components/ui/badge";
import { getI18n } from "@/lib/i18n";

const WHY_ICONS = [
  "/images/about/why-4.png",
  "/images/about/why-3.png",
  "/images/about/why-2.png",
  "/images/about/why-1.png",
];

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.about.heroTitle };
}

export default async function AboutPage() {
  const { locale, t } = await getI18n();

  return (
    <>
      <PageHero
        title={t.about.heroTitle}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.about.breadcrumb },
        ]}
      />

      {/* Intro Split */}
      <section className="py-6 md:py-10">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Portrait Image */}
            <div className="lg:col-span-4">
              <ParallaxBox
                offset={16}
                className="relative mx-auto aspect-[378/414] w-full max-w-[378px] overflow-hidden rounded-[24px] border border-border-gold/50 shadow-sm lg:mx-0"
              >
                <Image
                  src="/images/about/founder.png"
                  alt={t.about.heroTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 378px"
                  className="object-cover"
                />
              </ParallaxBox>
            </div>

            {/* Text Content */}
            <Reveal delay={0.1} className="space-y-5 lg:col-span-8">
              <h2 className="font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-[36px]">
                {t.about.introTitlePrefix}{" "}
                <span className="text-brand-dark">{t.about.introTitleHighlight}</span>{" "}
                {t.about.introTitleSuffix}
              </h2>
              <p className="border-s-2 border-primary ps-5 text-base font-medium leading-relaxed text-foreground sm:text-xl lg:text-[22px] lg:leading-[1.5]">
                {t.about.introLead}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-[18px]">
                {t.about.introBody}
              </p>
              <div className="pt-1">
                <CtaLinkButton
                  href="/contact"
                  label={t.about.introCta}
                  variant="gold"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision & Mission + Why Choose Us wrapper with Figma subtle wave backgrounds */}
      <div className="relative overflow-hidden">
        {/* Top wave background (Figma 159:621) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-[0.12] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-screen">
          <Image
            src="/images/about/bg-wave.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            aria-hidden="true"
          />
        </div>
        {/* Bottom flipped wave background (Figma 159:656) */}
        <div className="pointer-events-none absolute inset-x-0 top-[340px] -z-10 h-[420px] rotate-180 opacity-[0.12] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-screen">
          <Image
            src="/images/about/bg-wave.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            aria-hidden="true"
          />
        </div>

        {/* Vision & Mission ("البوصلة التي توجه طموحنا") */}
        <section className="py-8 md:py-12">
          <Container>
            {/* Positioned on the left side in RTL (end side via ms-auto) matching Figma */}
            <div className="mb-6 ms-auto w-full max-w-[672px] space-y-2 text-start sm:mb-8 md:w-fit">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-[50px] lg:leading-[1.25]">
                {t.about.compassTitle}
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base lg:text-[18px]">
                {t.about.compassSubtitle}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
              {/* Vision Card */}
              <div className="rounded-[24px] bg-surface-subtle p-6 sm:p-8">
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/25 bg-primary/10 px-4 py-1 font-display text-xs font-bold text-brand-dark"
                >
                  {t.about.visionBadge}
                </Badge>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-[34px]">
                  {t.about.visionTitlePrefix}{" "}
                  <span className="text-brand-dark">{t.about.visionTitleHighlight}</span>{" "}
                  {t.about.visionTitleSuffix}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base lg:text-[18px]">
                  {t.about.visionDescription}
                </p>
              </div>

              {/* Mission Card */}
              <div className="rounded-[24px] bg-surface-subtle p-6 sm:p-8">
                <Badge
                  variant="outline"
                  className="rounded-full border-border bg-card px-4 py-1 font-display text-xs font-bold text-brand-dark"
                >
                  {t.about.missionBadge}
                </Badge>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-[34px]">
                  {t.about.missionTitlePrefix}{" "}
                  <span className="text-brand-dark">{t.about.missionTitleHighlight}</span>{" "}
                  {t.about.missionTitleSuffix}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base lg:text-[18px]">
                  {t.about.missionDescription}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Us ("لماذا يختارنا عملاؤنا؟") */}
        <section className="py-8 md:py-12">
          <Container>
            <div className="mb-8 space-y-2 sm:mb-10">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-[50px] lg:leading-[1.25]">
                {t.about.whyTitle}
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base lg:text-[18px]">
                {t.about.whySubtitle}
              </p>
            </div>

            <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
              {t.about.whyItems.map((item, idx) => (
                <StaggerItem key={item.title}>
                  <div className="group flex cursor-pointer flex-col items-center text-center">
                    {/* Exact Figma Circle + Semicircular Arc + Pointer Stem & Dot with Gold Hover */}
                    <div className="relative flex h-[200px] w-[172px] items-center justify-center">
                      <svg
                        viewBox="0 0 172 200"
                        fill="none"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 size-full text-muted-foreground/35 transition-colors duration-300 group-hover:text-primary"
                      >
                        <path
                          d="M86 4A82 82 0 0 1 86 168"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M86 168V193"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <circle cx="86" cy="194" r="3.5" fill="currentColor" />
                      </svg>

                      <div className="relative -mt-7 flex size-[116px] items-center justify-center rounded-full bg-card shadow-[0_8px_28px_rgba(0,0,0,0.06)] ring-1 ring-border/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/90 group-hover:shadow-[0_0_32px_rgba(239,187,84,0.55)] group-hover:ring-4 group-hover:ring-primary/30 dark:shadow-none">
                        <Image
                          src={WHY_ICONS[idx] ?? WHY_ICONS[0]}
                          alt={item.title}
                          width={84}
                          height={84}
                          className="size-[82px] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <h3 className="mt-3 font-display text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-brand-dark sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      </div>

      {/* FAQ Section */}
      <FaqSection t={t.faq} />
    </>
  );
}
