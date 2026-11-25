import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FloatAmbient, Reveal } from "@/components/motion/motion-primitives";
import type { Locale } from "@/types";
import type { Messages } from "@/messages/ar";

interface FooterProps {
  locale: Locale;
  t: Messages["footer"];
  siteName: string;
}

export function Footer({ locale, t, siteName }: FooterProps) {
  const ArrowIcon = locale === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <footer className="mt-16 w-full px-2 pb-4 sm:px-4 md:mt-24">
      <div className="relative mx-auto max-w-360 overflow-hidden rounded-[30px] border border-border/70 bg-footer-bg text-foreground">
        {/* Soft golden radial ambient glow (matches Figma Ellipse 579) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 inset-s-0 h-105 w-105 rounded-full bg-primary/15 blur-[110px] dark:bg-primary/10"
        />

        {/* Top CTA Banner */}
        <div className="border-b border-border/70 py-8 md:py-10">
          <Container>
            <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-center gap-5 sm:gap-7">
                <Link
                  href="/contact"
                  aria-label={t.ctaHighlight}
                  className="group flex size-20 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground  dark:bg-white/10 dark:text-white dark:hover:bg-primary dark:hover:text-primary-foreground sm:size-24 md:size-27"
                >
                  <ArrowIcon className="size-8 transition-transform duration-300 group-hover:scale-110 sm:size-10 rtl:rotate-90" />
                </Link>
                <h2 className="font-display text-3xl font-bold leading-snug text-foreground sm:text-4xl lg:text-[50px] lg:leading-tight">
                  {t.ctaPrefix}{" "}
                  <span className="text-brand-dark">{t.ctaHighlight}</span>{" "}
                  {t.ctaSuffix}
                </h2>
              </div>
            </Reveal>
          </Container>
        </div>

        {/* Main Footer Columns */}
        <div className="relative py-12 md:py-16">
          <Container>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="space-y-6 lg:col-span-4">
                <Link href="/" className="inline-block" aria-label={siteName}>
                  <Image
                    src="/images/shared/logo-gold.png"
                    alt={siteName}
                    width={86}
                    height={105}
                    className="h-24 w-auto object-contain"
                  />
                </Link>
                <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
                  {t.tagline}
                </p>

                {/* Social Icons (5 platforms matching Figma) */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  {[
                    {
                      label: "Instagram",
                      href: "https://instagram.com",
                      path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm9.1 2.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z",
                    },
                    {
                      label: "LinkedIn",
                      href: "https://linkedin.com",
                      path: "M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5A1.96 1.96 0 1 0 5.25 7.42 1.96 1.96 0 0 0 5.25 3.5ZM20.44 13.02C20.44 9.75 18.7 8.23 16.38 8.23C14.51 8.23 13.68 9.26 13.21 9.98V8.5H9.84C9.89 9.45 9.84 19.5 9.84 19.5H13.21V13.36C13.21 13.03 13.23 12.7 13.33 12.46C13.6 11.8 14.2 11.12 15.22 11.12C16.56 11.12 17.09 12.14 17.09 13.63V19.5H20.46L20.44 13.02Z",
                    },
                    {
                      label: "TikTok",
                      href: "https://tiktok.com",
                      path: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z",
                    },
                    {
                      label: "Facebook",
                      href: "https://facebook.com",
                      path: "M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14A22.7 22.7 0 0 0 14.31 3c-2.45 0-4.13 1.5-4.13 4.24v2.36H7.4v3.2h2.78V21h3.32Z",
                    },
                    {
                      label: "YouTube",
                      href: "https://youtube.com",
                      path: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81ZM10 15V9l5.2 3L10 15Z",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-[74px] w-[60px] items-center justify-center rounded-[14px] border border-border-gold/80 bg-background text-foreground-strong transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground dark:border-white/12 dark:bg-black dark:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-[18px]"
                        aria-hidden="true"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Main Pages Column */}
              <div className="space-y-5 lg:col-span-2">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t.mainPagesHeading}
                </h3>
                <ul className="space-y-3">
                  {t.mainLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-muted-foreground transition-colors hover:text-brand-dark"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Column */}
              <div className="space-y-5 lg:col-span-3">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t.servicesHeading}
                </h3>
                <ul className="space-y-3">
                  {t.servicesLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-muted-foreground transition-colors hover:text-brand-dark"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div className="space-y-5 lg:col-span-3">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t.contactHeading}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-border bg-background text-foreground dark:border-white/15 dark:bg-black">
                      <Mail className="size-[18px]" />
                    </span>
                    <a
                      href={`mailto:${t.email}`}
                      dir="ltr"
                      className="text-sm text-muted-foreground transition-colors hover:text-brand-dark"
                    >
                      {t.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-border bg-background text-foreground dark:border-white/15 dark:bg-black">
                      <Phone className="size-[18px]" />
                    </span>
                    <a
                      href="tel:+201234567890"
                      dir="ltr"
                      className="text-sm text-muted-foreground transition-colors hover:text-brand-dark"
                    >
                      {t.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border border-border bg-background text-foreground dark:border-white/15 dark:bg-black">
                      <MapPin className="size-[18px]" />
                    </span>
                    <span className="text-sm text-muted-foreground">{t.location}</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>

          {/* Decorative golden swirl at the outer end corner */}
          <FloatAmbient
            yRange={10}
            duration={7.5}
            rotateRange={3}
            className="pointer-events-none absolute bottom-0 end-0 hidden h-[260px] w-[240px] opacity-80 lg:block"
          >
            <Image
              src="/images/shared/swirl-footer.png"
              alt=""
              fill
              sizes="240px"
              className="object-contain"
              aria-hidden="true"
            />
          </FloatAmbient>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-border/70 py-5">
          <Container>
            <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row sm:text-sm">
              <p>{t.copyright}</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="transition-colors hover:text-brand-dark">
                  {t.terms}
                </Link>
                <span aria-hidden="true">•</span>
                <Link href="/privacy" className="transition-colors hover:text-brand-dark">
                  {t.privacy}
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
