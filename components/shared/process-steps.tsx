import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionBadge } from "@/components/shared/section-badge";
import {
  FloatAmbient,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/motion-primitives";
import type { Messages } from "@/messages/ar";

interface ProcessStepsProps {
  t: Messages["process"];
}

const STEP_IMAGES = [
  "/images/home/step-1.png",
  "/images/home/step-2.png",
  "/images/home/step-3.png",
  "/images/home/step-4.png",
];

export function ProcessSteps({ t }: ProcessStepsProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Start column: Title & floating golden swirl */}
          <div className="flex flex-col items-start lg:sticky lg:top-8 lg:col-span-5">
            <Reveal>
              <SectionBadge label={t.badge} />
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.32] text-foreground sm:text-4xl md:text-[50px]">
                {t.title}
              </h2>
            </Reveal>
            <div className="relative mt-6 hidden w-[90%] aspect-427/371  lg:block">
              <Image
                src="/images/shared/swirl2.png"
                alt=""
                fill
                sizes="320px"
                className="object-contain opacity-80"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* End column: 4 Figma Award Blocks with staggered reveal + pure CSS hover */}
          <StaggerContainer className="flex flex-col gap-3.5 lg:col-span-7" staggerDelay={0.1}>
            {t.steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div
                  tabIndex={0}
                  className="group relative flex min-h-[180px] w-full cursor-pointer items-stretch overflow-hidden rounded-[10px] border border-transparent bg-background text-start transition-all duration-300 hover:border-primary hover:bg-card hover:shadow-xs focus-visible:border-primary focus-visible:bg-card focus-visible:outline-none md:min-h-[205px]"
                >
                  {/* Step number column */}
                  <div className="relative flex w-24 shrink-0 items-center justify-center overflow-hidden bg-surface-subtle font-sans text-3xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary-foreground group-focus-visible:text-primary-foreground sm:w-[124px] sm:text-[42px]">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary to-brand-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                    <span className="relative z-10">{step.number}</span>
                  </div>

                  {/* Step copy + soft golden illustration */}
                  <div className="relative flex flex-1 items-center justify-between gap-4 px-6 py-7 sm:px-10">
                    <div className="relative z-10 max-w-lg space-y-2">
                      <h3 className="font-display text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-brand-dark group-focus-visible:text-brand-dark sm:text-[30px] sm:leading-[1.25]">
                        {step.title}
                      </h3>
                      <p className="text-base leading-[1.7] text-muted-foreground sm:text-[18px]">
                        {step.description}
                      </p>
                    </div>

                    <div className="relative hidden h-[108px] w-[124px] shrink-0 opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
                      <Image
                        src={STEP_IMAGES[index] ?? STEP_IMAGES[0]}
                        alt=""
                        fill
                        sizes="124px"
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
