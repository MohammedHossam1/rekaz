import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionBadge } from "@/components/shared/section-badge";
import { ProjectGallery } from "@/components/sections/work/project-gallery";
import { ProjectCtaBanner } from "@/components/shared/project-cta-banner";
import { FilterableWork } from "@/components/shared/filterable-work";
import { PROJECTS, TECH_STACK_ICONS } from "@/constants/site-data";
import { getI18n } from "@/lib/i18n";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await getI18n();
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title[locale] };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { locale, t } = await getI18n();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={project.title[locale]}
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, href: "/" },
          { label: t.work.breadcrumb, href: "/work" },
          { label: t.work.projectBreadcrumb },
        ]}
      />

      {/* Gallery */}
      <section className="py-8 md:py-12">
        <Container>
          <ProjectGallery title={project.title[locale]} images={project.gallery} />
        </Container>
      </section>

      {/* Details Split */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Main Narrative */}
            <div className="space-y-8 lg:col-span-8">
              <div>
                <p className="text-sm font-semibold text-brand-dark">
                  {project.serviceName[locale]}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold leading-snug text-foreground sm:text-4xl">
                  {project.headline[locale]}
                </h2>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t.work.overviewHeading}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.overview[locale]}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t.work.goalsHeading}
                </h3>
                <ul className="space-y-2.5 text-base leading-relaxed text-muted-foreground">
                  {project.goals[locale].map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t.work.methodologyHeading}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.methodology[locale]}
                </p>
              </div>
            </div>

            {/* Sidebar: Project Metadata + Tech Stack */}
            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-[24px] border border-border/60 bg-card p-6 shadow-xs dark:bg-surface-subtle">
                <h3 className="border-b border-border/60 pb-4 font-display text-xl font-bold text-foreground">
                  {t.work.projectDetailsTitle}
                </h3>
                <dl className="mt-4 divide-y divide-border/50 text-sm">
                  <div className="flex items-center justify-between py-3">
                    <dt className="font-semibold text-foreground">{t.work.clientLabel}</dt>
                    <dd className="text-muted-foreground">{project.client[locale]}</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="font-semibold text-foreground">{t.work.serviceLabel}</dt>
                    <dd className="text-muted-foreground">{project.serviceName[locale]}</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="font-semibold text-foreground">{t.work.dateLabel}</dt>
                    <dd className="text-muted-foreground">{project.date[locale]}</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="font-semibold text-foreground">{t.work.typeLabel}</dt>
                    <dd className="text-muted-foreground">{project.type[locale]}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-[24px] border border-border/60 bg-card p-6 shadow-xs dark:bg-surface-subtle">
                <h3 className="border-b border-border/60 pb-4 font-display text-xl font-bold text-foreground">
                  {t.work.techTitle}
                </h3>
                <div className="mt-5 flex flex-wrap items-center gap-3.5">
                  {TECH_STACK_ICONS.map((tech) => (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background p-2 transition-transform hover:scale-105"
                    >
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={26}
                        height={26}
                        className="size-6 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <ProjectCtaBanner t={t.ctaBanner} locale={locale} />

      {/* More Projects ("المزيد من الأعمال") */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-3">
              <SectionBadge label={t.work.moreWorkBadge} />
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                {t.work.moreWorkTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.home.workDescription}
            </p>
          </div>

          <FilterableWork
            locale={locale}
            categories={t.categories}
            columns={3}
            limit={3}
            excludeSlug={project.slug}
          />
        </Container>
      </section>
    </>
  );
}
