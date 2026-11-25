import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { getI18n } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.contact.heroTitle };
}

export default async function ContactPage() {
  const { locale, t } = await getI18n();

  return (
    <>
      <PageHero
        title={t.contact.heroTitle}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.contact.breadcrumb },
        ]}
      />

      {/* Contact Info + Form */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
            {/* Contact Info Column */}
            <div className="space-y-5 sm:space-y-7 lg:col-span-5 lg:space-y-8">
              <div className="space-y-2.5 sm:space-y-4 lg:space-y-5">
                <p className="font-display text-lg font-bold text-brand-dark sm:text-xl lg:text-[24px]">
                  {t.contact.badge}
                </p>
                <h2 className="font-display text-2xl font-bold leading-[1.25] text-foreground sm:text-4xl lg:text-[46px] lg:leading-[1.15]">
                  {t.contact.heading}
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="flex items-center gap-3 rounded-2xl bg-surface-subtle p-3.5 transition-colors hover:ring-1 hover:ring-primary/40 sm:gap-4 sm:rounded-[24px] sm:p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-primary text-primary-foreground sm:size-12">
                    <Mail className="size-5 sm:size-6" />
                  </span>
                  <span
                    dir="ltr"
                    className="min-w-0 break-all text-sm font-normal text-foreground-strong sm:text-base lg:text-[20px]"
                  >
                    {t.contact.email}
                  </span>
                </a>

                <div className="flex items-center gap-3 rounded-2xl bg-surface-subtle p-3.5 sm:gap-4 sm:rounded-[24px] sm:p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-primary text-primary-foreground sm:size-12">
                    <MapPin className="size-5 sm:size-6" />
                  </span>
                  <span className="min-w-0 break-words text-sm font-normal text-foreground-strong sm:text-base lg:text-[20px]">
                    {t.contact.address}
                  </span>
                </div>

                <a
                  href={`tel:${t.contact.phone}`}
                  className="flex items-center gap-3 rounded-2xl bg-surface-subtle p-3.5 transition-colors hover:ring-1 hover:ring-primary/40 sm:gap-4 sm:rounded-[24px] sm:p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-primary text-primary-foreground sm:size-12">
                    <Phone className="size-5 sm:size-6" />
                  </span>
                  <span
                    dir="ltr"
                    className="min-w-0 text-sm font-normal text-foreground-strong sm:text-base lg:text-[20px]"
                  >
                    {t.contact.phone}
                  </span>
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="min-w-0 lg:col-span-7">
              <ContactForm t={t.contact.form} validation={t.validation} />
            </div>
          </div>

          {/* Location Map Showcase */}
          <div className="mt-10 overflow-hidden rounded-2xl sm:mt-14 sm:rounded-[24px] lg:mt-16">
            <div className="relative h-[220px] w-full sm:h-[320px] lg:h-[408px]">
              <Image
                src="/images/contact/map.png"
                alt={t.contact.address}
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
