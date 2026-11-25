import Image from "next/image";
import { Container } from "@/components/layout/container";
import { FloatAmbient, Reveal } from "@/components/motion/motion-primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Messages } from "@/messages/ar";

interface FaqSectionProps {
  t: Messages["faq"];
}

export function FaqSection({ t }: FaqSectionProps) {
  return (
    <section className="py-8 md:py-14">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Intro + Wireframe Globe */}
          <Reveal className="flex flex-col items-center text-center lg:col-span-5">
            <h2 className="font-display text-3xl font-bold leading-snug text-foreground sm:text-4xl md:text-[42px]">
              {t.titleLine1}
              <br />
              {t.titleLine2}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.subtitle}
            </p>
            <FloatAmbient yRange={8} duration={6.5} rotateRange={1.5} className="relative mt-8 h-52 w-72 sm:h-60 sm:w-80">
              <Image
                src="/images/shared/faq-globe.png"
                alt=""
                fill
                sizes="320px"
                className="object-contain"
                aria-hidden="true"
              />
            </FloatAmbient>
          </Reveal>

          {/* Shadcn Accordion */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <Accordion defaultValue={["faq-0"]} className="space-y-3">
              {t.items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="rounded-2xl border border-border/60 bg-surface-subtle px-5 py-1 transition-colors data-[open]:border-border-gold"
                >
                  <AccordionTrigger className="py-4 text-start font-display text-base font-bold text-foreground hover:no-underline sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
