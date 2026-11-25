import Image from "next/image";
import { Container } from "@/components/layout/container";
import { CtaLinkButton } from "@/components/shared/cta-link-button";
import { FloatAmbient, Reveal } from "@/components/motion/motion-primitives";
import type { Locale } from "@/types";
import type { Messages } from "@/messages/ar";

interface ProjectCtaBannerProps {
  t: Messages["ctaBanner"];
  locale: Locale;
}

export function ProjectCtaBanner({ t }: ProjectCtaBannerProps) {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <Reveal scale={0.97}>
          <div className="relative overflow-hidden rounded-[28px] border border-border-gold/60 bg-gradient-to-l from-surface-subtle via-surface-subtle to-primary/20 px-6 py-10 dark:from-surface-subtle dark:via-card dark:to-primary/15 sm:px-10 md:px-14 md:py-12">
            <div className="grid items-center gap-8 md:grid-cols-12">
              {/* Copy */}
              <div className="relative z-10 space-y-4 md:col-span-7">
                <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-[44px]">
                  {t.titlePrefix}{" "}
                  <span className="text-brand-dark">{t.titleHighlight}</span>
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {t.subtitle}
                </p>
                <div className="pt-2">
                  <CtaLinkButton
                    href="/booking"
                    label={t.button}
                    variant="gold"
                  />
                </div>
              </div>

              {/* 3D Gold Spheres visual */}
              <FloatAmbient
                yRange={10}
                duration={5.5}
                className="relative mx-auto h-48 w-full max-w-[300px] md:col-span-5 md:h-56 md:max-w-none"
              >
                <Image
                  src="/images/shared/cta-shapes.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 300px, 420px"
                  className="object-contain object-center"
                  aria-hidden="true"
                />
              </FloatAmbient>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
