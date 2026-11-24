import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.privacy.heroTitle };
}

export default async function PrivacyPage() {
  const { locale, t } = await getI18n();

  return (
    <>
      <PageHero
        title={t.privacy.heroTitle}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.privacy.breadcrumb },
        ]}
      />

      <section className="py-10 md:py-16">
        <Container>
          <article className="relative overflow-hidden rounded-[28px] border border-border/60 bg-surface-subtle p-7 sm:p-10 md:p-14">
            <p className="text-base leading-loose text-foreground sm:text-lg">
              {t.privacy.intro}
            </p>

            <div className="mt-8 space-y-7">
              {t.privacy.sections.map((sec) => (
                <div key={sec.heading} className="space-y-2.5">
                  <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {sec.heading}
                  </h2>
                  <p className="text-sm leading-loose text-muted-foreground sm:text-base">
                    {sec.body}
                  </p>
                </div>
              ))}

              <div className="border-t border-border/70 pt-6">
                <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {t.privacy.contactHeading}
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm leading-loose text-muted-foreground sm:text-base">
                  <li>{t.privacy.contactCompany}</li>
                  <li>{t.privacy.contactEmail}</li>
                  <li>{t.privacy.contactPhone}</li>
                  <li>{t.privacy.contactAddress}</li>
                </ul>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
