import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { BookingTabsCard } from "@/components/sections/booking/booking-tabs-card";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.booking.tabStudio };
}

export default async function BookStudioPage() {
  const { locale, t } = await getI18n();

  return (
    <>
      <PageHero
        title={t.booking.heroTitle}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.booking.breadcrumb, href: "/booking" },
          { label: t.booking.tabStudio },
        ]}
      />

      <section className="py-10 md:py-16">
        <Container>
          <BookingTabsCard
            t={t.booking}
            validation={t.validation}
            initialTab="studio"
          />
        </Container>
      </section>
    </>
  );
}
