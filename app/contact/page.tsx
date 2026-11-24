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
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-12">
            {/* Contact Info Column */}
            <div className="space-y-6 lg:col-span-5">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-brand-dark">{t.contact.badge}</p>
                <h2 className="font-display text-3xl font-bold leading-snug text-foreground sm:text-4xl">
                  {t.contact.heading}
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-surface-subtle p-4 transition-colors hover:border-border-gold"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Mail className="size-5" />
                  </span>
                  <span dir="ltr" className="text-sm font-medium text-foreground sm:text-base">
                    {t.contact.email}
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-surface-subtle p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <MapPin className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {t.contact.address}
                  </span>
                </div>

                <a
                  href={`tel:${t.contact.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-surface-subtle p-4 transition-colors hover:border-border-gold"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Phone className="size-5" />
                  </span>
                  <span dir="ltr" className="text-sm font-medium text-foreground sm:text-base">
                    {t.contact.phone}
                  </span>
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm t={t.contact.form} validation={t.validation} />
            </div>
          </div>

          {/* Location Map Showcase */}
          <div className="mt-12 overflow-hidden rounded-[26px] border border-border/60 shadow-xs">
            <div className="relative aspect-[21/7] min-h-[240px] w-full">
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
