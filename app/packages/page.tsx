import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { PricingGrid } from "@/components/shared/pricing-grid";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.packages.heroTitle };
}

export default async function PackagesPage() {
  const { locale, t } = await getI18n();

  return (
    <>
      <PageHero
        title={t.packages.heroTitle}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.packages.breadcrumb },
        ]}
      />

      <section className="py-10 md:py-16">
        <Container>
          <PricingGrid locale={locale} choosePlanLabel={t.packages.choosePlan} />
        </Container>
      </section>
    </>
  );
}
