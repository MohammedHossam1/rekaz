import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { FilterableServices } from "@/components/shared/filterable-services";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.services.heroTitle };
}

export default async function ServicesPage() {
  const { locale, t } = await getI18n();

  return (
    <>
      <PageHero
        title={t.services.heroTitle}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.services.breadcrumb },
        ]}
      />

      <section className="py-10 md:py-16">
        <Container>
          <FilterableServices locale={locale} categories={t.categories} />
        </Container>
      </section>
    </>
  );
}
