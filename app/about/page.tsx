import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/shared/faq-section";
import { DotsBadge } from "@/components/shared/dots-badge";
import {
  ParallaxBox,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/motion-primitives";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Portrait Image */}
            <div className="lg:col-span-5">
              <ParallaxBox offset={16} className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px] border border-border-gold/50 shadow-sm">
                <Image
                  src="/images/about/founder.png"
                  alt={t.about.heroTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </ParallaxBox>
            </div>

            {/* Text Content */}
            <Reveal delay={0.1} className="space-y-5 lg:col-span-7">
              <h2 className="font-display text-3xl font-bold leading-snug text-foreground sm:text-4xl">
                {t.about.introTitlePrefix}{" "}
                <span className="text-brand-dark">{t.about.introTitleHighlight}</span>{" "}
                {t.about.introTitleSuffix}
              </h2>
              <p className="border-s-2 border-primary ps-4 text-base font-medium leading-relaxed text-foreground sm:text-lg">
                {t.about.introLead}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t.about.introBody}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "gold", size: "pill" }),
                    "group h-[54px] ps-6 pe-[7px]"
                  )}
                >
                  <span>{t.about.introCta}</span>
                  <DotsBadge variant="light" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision & Mission ("البوصلة التي توجه طموحنا") */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="mb-10 space-y-2">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t.about.compassTitle}
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              {t.about.compassSubtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Vision Card */}
            <div className="rounded-[24px] border border-border/60 bg-surface-subtle p-7 sm:p-9">
              <Badge
                variant="outline"
                className="rounded-full border-border-gold bg-card px-4 py-1 text-xs font-semibold text-brand-dark"
              >
                {t.about.visionBadge}
              </Badge>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {t.about.visionTitlePrefix}{" "}
                <span className="text-brand-dark">{t.about.visionTitleHighlight}</span>{" "}
                {t.about.visionTitleSuffix}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t.about.visionDescription}
              </p>
            </div>

            {/* Mission Card */}
            <div className="rounded-[24px] border border-border/60 bg-surface-subtle p-7 sm:p-9">
              <Badge
                variant="outline"
                className="rounded-full border-border-gold bg-card px-4 py-1 text-xs font-semibold text-brand-dark"
              >
                {t.about.missionBadge}
              </Badge>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {t.about.missionTitlePrefix}{" "}
                <span className="text-brand-dark">{t.about.missionTitleHighlight}</span>{" "}
                {t.about.missionTitleSuffix}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t.about.missionDescription}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us ("لماذا يختارنا عملاؤنا؟") */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="mb-12 space-y-2">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t.about.whyTitle}
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              {t.about.whySubtitle}
            </p>
          </div>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {t.about.whyItems.map((item, idx) => (
              <StaggerItem key={item.title}>
                <div className="group flex flex-col items-center text-center">
                  <div
                    className={cn(
                      "relative flex size-32 items-center justify-center rounded-full border-2 p-5 transition-transform duration-300 group-hover:scale-105",
                      idx === 1
                        ? "border-primary bg-primary/20 shadow-sm"
                        : "border-border-gold/70 bg-card"
                    )}
                  >
                    <Image
                      src={WHY_ICONS[idx] ?? WHY_ICONS[0]}
                      alt={item.title}
                      width={72}
                      height={72}
                      className="size-16 object-contain"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* FAQ Section */}
      <FaqSection t={t.faq} />
    </>
  );
}
