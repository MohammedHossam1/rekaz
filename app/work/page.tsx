import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { FilterableWork } from "@/components/shared/filterable-work";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.work.heroTitle };
}

export default async function WorkPage() {
  const { locale, t } = await getI18n();

  return (
    <>
      <PageHero
        title={t.work.heroTitle}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.work.breadcrumb },
        ]}
      />

      <section className="py-10 md:py-16">
        <Container>
          <FilterableWork locale={locale} categories={t.categories} columns={2} />
        </Container>
      </section>
    </>
  );
}
