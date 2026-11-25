import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Globe,
  Headphones,
  LayoutDashboard,
  Link2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { CtaLinkButton } from "@/components/shared/cta-link-button";
import { ProcessSteps } from "@/components/shared/process-steps";
import { FaqSection } from "@/components/shared/faq-section";
import { ProjectCtaBanner } from "@/components/shared/project-cta-banner";
import { SERVICES } from "@/constants/site-data";
import { getI18n } from "@/lib/i18n";

const FEATURE_ICONS = [
  Globe,
  Smartphone,
  LayoutDashboard,
  Sparkles,
  Link2,
  Headphones,
];

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await getI18n();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title[locale] };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { locale, t } = await getI18n();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={service.title[locale]}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.services.breadcrumb, href: "/services" },
          { label: service.title[locale] },
        ]}
      />

      {/* Service Intro Split */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Copy */}
            <div className="space-y-5 lg:col-span-6">
              <p className="text-sm font-semibold text-brand-dark">
                {service.introSubtitle[locale]}
              </p>
              <h2 className="font-display text-3xl font-bold leading-snug text-foreground sm:text-4xl">
                {service.introTitle[locale]}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {service.introBody1[locale]}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {service.introBody2[locale]}
              </p>
              <div className="pt-2">
                <CtaLinkButton
                  href="/booking"
                  label={t.services.bookServiceCta}
                  variant="gold"
                />
              </div>
            </div>

            {/* Service Hero Showcase */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[26px] border border-border/60 bg-black">
                <Image
                  src={service.heroImage}
                  alt={service.title[locale]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included ("كل ما يحتاجه مشروعك الرقمي") */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-brand-dark">
              {t.services.includedBadge}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t.services.includedTitle}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {t.services.includedSubtitle}
            </p>
          </div>

          <div className="rounded-[26px] border border-border/60 bg-surface-subtle p-6 sm:p-10">
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {t.services.includedItems.map((item, idx) => {
                const Icon = FEATURE_ICONS[idx] ?? Globe;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 border-b border-border/60 pb-6 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+2)]:pb-0"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border-gold/70 bg-card text-brand-dark">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <ProcessSteps t={t.process} />

      {/* FAQ */}
      <FaqSection t={t.faq} />

      {/* CTA Banner */}
      <ProjectCtaBanner t={t.ctaBanner} locale={locale} />
    </>
  );
}
