import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { BookingTabsCard } from "@/components/sections/booking/booking-tabs-card";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.booking.heroTitle };
}

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { locale, t } = await getI18n();
  const { tab } = await searchParams;
  const initialTab = tab === "studio" ? "studio" : "service";

  return (
    <>
      <PageHero
        title={t.booking.heroTitle}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.booking.breadcrumb },
        ]}
      />

      <section className="py-10 md:py-16">
        <Container>
          <BookingTabsCard
            t={t.booking}
            validation={t.validation}
            initialTab={initialTab}
          />
        </Container>
      </section>
    </>
  );
}
