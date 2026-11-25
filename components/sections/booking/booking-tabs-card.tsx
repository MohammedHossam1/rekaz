"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormDropdown } from "@/components/shared/form-dropdown";
import {
  createServiceBookingSchema,
  createStudioBookingSchema,
  type ServiceBookingValues,
  type StudioBookingValues,
} from "@/schemas/booking.schema";
import { submitServiceBooking, submitStudioBooking } from "@/lib/graphql";
import { cn } from "@/lib/utils";
import type { Messages } from "@/messages/ar";

interface BookingTabsCardProps {
  t: Messages["booking"];
  validation: Messages["validation"];
  initialTab?: "service" | "studio";
}

export function BookingTabsCard({
  t,
  validation,
  initialTab = "service",
}: BookingTabsCardProps) {
  const [activeTab, setActiveTab] = React.useState<"service" | "studio">(initialTab);
  const [submittedTab, setSubmittedTab] = React.useState<"service" | "studio" | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const serviceSchema = React.useMemo(
    () => createServiceBookingSchema(validation),
    [validation]
  );
  const studioSchema = React.useMemo(
    () => createStudioBookingSchema(validation),
    [validation]
  );

  const serviceForm = useForm<ServiceBookingValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name: "",
      phone: "",
      company: "",
      email: "",
      service: "",
      budget: "",
      details: "",
    },
  });

  const studioForm = useForm<StudioBookingValues>({
    resolver: zodResolver(studioSchema),
    defaultValues: {
      name: "",
      phone: "",
      shootType: "",
      date: "",
      time: "",
    },
  });

  const handleServiceSubmit = async (values: ServiceBookingValues) => {
    setSubmitError(null);
    try {
      await submitServiceBooking(values);
      setSubmittedTab("service");
      serviceForm.reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit booking. Please try again."
      );
    }
  };

  const handleStudioSubmit = async (values: StudioBookingValues) => {
    setSubmitError(null);
    try {
      await submitStudioBooking(values);
      setSubmittedTab("studio");
      studioForm.reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit studio booking. Please try again."
      );
    }
  };

  return (
    <div className="mx-auto max-w-[818px]">
      {/* Exact Figma folder-style connected tabs with smooth spring sliding indicator */}
      <div
        className="relative z-10 mx-auto grid w-[90%] max-w-[711px] grid-cols-2"
        role="tablist"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "service"}
          onClick={() => {
            setActiveTab("service");
            setSubmittedTab(null);
          }}
          className={cn(
            "relative flex h-[60px] cursor-pointer items-center justify-center rounded-t-[24px] font-display text-lg font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/40 sm:h-[70px] sm:text-[20px]",
            activeTab === "service"
              ? "text-brand-dark"
              : "text-foreground/80 hover:text-brand-dark"
          )}
        >
          {activeTab === "service" && (
            <motion.span
              layoutId="booking-active-tab"
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
              className="pointer-events-none absolute inset-0 rounded-t-[24px] bg-surface-subtle after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-primary/25"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 bottom-0 size-6 fill-surface-subtle"
              >
                <path d="M0 0A24 24 0 0 0 24 24H0V0Z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="pointer-events-none absolute -left-6 bottom-0 size-6 -scale-x-100 fill-surface-subtle"
              >
                <path d="M0 0A24 24 0 0 0 24 24H0V0Z" />
              </svg>
            </motion.span>
          )}
          <span className="relative z-10">{t.tabService}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "studio"}
          onClick={() => {
            setActiveTab("studio");
            setSubmittedTab(null);
          }}
          className={cn(
            "relative flex h-[60px] cursor-pointer items-center justify-center rounded-t-[24px] font-display text-lg font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/40 sm:h-[70px] sm:text-[20px]",
            activeTab === "studio"
              ? "text-brand-dark"
              : "text-foreground/80 hover:text-brand-dark"
          )}
        >
          {activeTab === "studio" && (
            <motion.span
              layoutId="booking-active-tab"
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
              className="pointer-events-none absolute inset-0 rounded-t-[24px] bg-surface-subtle after:absolute after:inset-x-6 after:bottom-0 after:h-px after:bg-primary/25"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 bottom-0 size-6 fill-surface-subtle"
              >
                <path d="M0 0A24 24 0 0 0 24 24H0V0Z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="pointer-events-none absolute -left-6 bottom-0 size-6 -scale-x-100 fill-surface-subtle"
              >
                <path d="M0 0A24 24 0 0 0 24 24H0V0Z" />
              </svg>
            </motion.span>
          )}
          <span className="relative z-10">{t.tabStudio}</span>
        </button>
      </div>

      {/* Form Panel */}
      <motion.div
        layout
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[24px] bg-surface-subtle px-5 py-6 sm:px-6 sm:py-7"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={submittedTab ? `submitted-${submittedTab}` : activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {submittedTab ? (
          <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-success/15 text-success">
              <CheckCircle2 className="size-9" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
              {submittedTab === "service"
                ? t.serviceForm.successTitle
                : t.studioForm.successTitle}
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
              {submittedTab === "service"
                ? t.serviceForm.successBody
                : t.studioForm.successBody}
            </p>
            <Button
              type="button"
              variant="gold"
              size="xl"
              className="mt-6 h-14 rounded-full px-10 font-display text-lg font-bold"
              onClick={() => setSubmittedTab(null)}
            >
              {t.serviceForm.submit}
            </Button>
          </div>
        ) : activeTab === "service" ? (
          <form
            onSubmit={serviceForm.handleSubmit(handleServiceSubmit)}
            noValidate
            className="space-y-6"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2.5">
                <Label htmlFor="svc-name" className="font-display text-sm font-bold text-foreground">
                  {t.serviceForm.name}
                </Label>
                <Input
                  id="svc-name"
                  placeholder={t.serviceForm.namePlaceholder}
                  aria-invalid={!!serviceForm.formState.errors.name}
                  className="h-12 rounded-[12px] border-0 bg-card px-4 text-base text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50"
                  {...serviceForm.register("name")}
                />
                {serviceForm.formState.errors.name && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="svc-phone" className="font-display text-sm font-bold text-foreground">
                  {t.serviceForm.phone}
                </Label>
                <Input
                  id="svc-phone"
                  type="tel"
                  dir="ltr"
                  placeholder={t.serviceForm.phonePlaceholder}
                  aria-invalid={!!serviceForm.formState.errors.phone}
                  className="h-12 rounded-[12px] border-0 bg-card px-4 text-base text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50 rtl:text-right"
                  {...serviceForm.register("phone")}
                />
                {serviceForm.formState.errors.phone && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2.5">
                <Label htmlFor="svc-company" className="font-display text-sm font-bold text-foreground">
                  {t.serviceForm.company}
                </Label>
                <Input
                  id="svc-company"
                  placeholder={t.serviceForm.companyPlaceholder}
                  aria-invalid={!!serviceForm.formState.errors.company}
                  className="h-12 rounded-[12px] border-0 bg-card px-4 text-base text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50"
                  {...serviceForm.register("company")}
                />
                {serviceForm.formState.errors.company && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.company.message}
                  </p>
                )}
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="svc-email" className="font-display text-sm font-bold text-foreground">
                  {t.serviceForm.email}
                </Label>
                <Input
                  id="svc-email"
                  type="email"
                  dir="ltr"
                  placeholder={t.serviceForm.emailPlaceholder}
                  aria-invalid={!!serviceForm.formState.errors.email}
                  className="h-12 rounded-[12px] border-0 bg-card px-4 text-base text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50 rtl:text-right"
                  {...serviceForm.register("email")}
                />
                {serviceForm.formState.errors.email && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2.5">
                <Label htmlFor="svc-type" className="font-display text-sm font-bold text-foreground">
                  {t.serviceForm.service}
                </Label>
                <Controller
                  control={serviceForm.control}
                  name="service"
                  render={({ field }) => (
                    <FormDropdown
                      id="svc-type"
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder={t.serviceForm.servicePlaceholder}
                      options={t.serviceForm.services}
                      invalid={!!serviceForm.formState.errors.service}
                    />
                  )}
                />
                {serviceForm.formState.errors.service && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.service.message}
                  </p>
                )}
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="svc-budget" className="font-display text-sm font-bold text-foreground">
                  {t.serviceForm.budget}
                </Label>
                <Controller
                  control={serviceForm.control}
                  name="budget"
                  render={({ field }) => (
                    <FormDropdown
                      id="svc-budget"
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder={t.serviceForm.budgetPlaceholder}
                      options={t.serviceForm.budgets}
                      invalid={!!serviceForm.formState.errors.budget}
                    />
                  )}
                />
                {serviceForm.formState.errors.budget && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.budget.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2.5">
              <Label htmlFor="svc-details" className="font-display text-sm font-bold text-foreground">
                {t.serviceForm.details}
              </Label>
              <Textarea
                id="svc-details"
                rows={4}
                placeholder={t.serviceForm.detailsPlaceholder}
                aria-invalid={!!serviceForm.formState.errors.details}
                className="min-h-[96px] rounded-[12px] border-0 bg-card px-4 py-3.5 text-base text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50"
                {...serviceForm.register("details")}
              />
              {serviceForm.formState.errors.details && (
                <p className="text-xs font-medium text-destructive">
                  {serviceForm.formState.errors.details.message}
                </p>
              )}
            </div>

            {submitError && (
              <p className="rounded-xl bg-destructive/10 px-4 py-2.5 text-center text-xs font-medium text-destructive">
                {submitError}
              </p>
            )}

            <div className="pt-2 text-center">
              <Button
                type="submit"
                variant="gold"
                size="xl"
                disabled={serviceForm.formState.isSubmitting}
                className="h-14 w-full rounded-full font-display text-lg font-bold sm:h-[64px] sm:max-w-[609px] sm:text-[20px]"
              >
                {serviceForm.formState.isSubmitting
                  ? t.serviceForm.submitting
                  : t.serviceForm.submit}
              </Button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={studioForm.handleSubmit(handleStudioSubmit)}
            noValidate
            className="space-y-6"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2.5">
                <Label htmlFor="studio-name" className="font-display text-sm font-bold text-foreground">
                  {t.studioForm.name}
                </Label>
                <Input
                  id="studio-name"
                  placeholder={t.studioForm.namePlaceholder}
                  aria-invalid={!!studioForm.formState.errors.name}
                  className="h-12 rounded-[12px] border-0 bg-card px-4 text-base text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50"
                  {...studioForm.register("name")}
                />
                {studioForm.formState.errors.name && (
                  <p className="text-xs font-medium text-destructive">
                    {studioForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="studio-phone" className="font-display text-sm font-bold text-foreground">
                  {t.studioForm.phone}
                </Label>
                <Input
                  id="studio-phone"
                  type="tel"
                  dir="ltr"
                  placeholder={t.studioForm.phonePlaceholder}
                  aria-invalid={!!studioForm.formState.errors.phone}
                  className="h-12 rounded-[12px] border-0 bg-card px-4 text-base text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50 rtl:text-right"
                  {...studioForm.register("phone")}
                />
                {studioForm.formState.errors.phone && (
                  <p className="text-xs font-medium text-destructive">
                    {studioForm.formState.errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2.5">
              <Label htmlFor="studio-shoot-type" className="font-display text-sm font-bold text-foreground">
                {t.studioForm.shootType}
              </Label>
              <Controller
                control={studioForm.control}
                name="shootType"
                render={({ field }) => (
                  <FormDropdown
                    id="studio-shoot-type"
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder={t.studioForm.shootTypePlaceholder}
                    options={t.studioForm.shootTypes}
                    invalid={!!studioForm.formState.errors.shootType}
                  />
                )}
              />
              {studioForm.formState.errors.shootType && (
                <p className="text-xs font-medium text-destructive">
                  {studioForm.formState.errors.shootType.message}
                </p>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2.5">
                <Label htmlFor="studio-time" className="font-display text-sm font-bold text-foreground">
                  {t.studioForm.time}
                </Label>
                <Input
                  id="studio-time"
                  type="time"
                  aria-invalid={!!studioForm.formState.errors.time}
                  className="h-[52px] rounded-[12px] border-0 bg-card px-4 text-base text-foreground shadow-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  {...studioForm.register("time")}
                />
                {studioForm.formState.errors.time && (
                  <p className="text-xs font-medium text-destructive">
                    {studioForm.formState.errors.time.message}
                  </p>
                )}
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="studio-date" className="font-display text-sm font-bold text-foreground">
                  {t.studioForm.date}
                </Label>
                <Input
                  id="studio-date"
                  type="date"
                  aria-invalid={!!studioForm.formState.errors.date}
                  className="h-[52px] rounded-[12px] border-0 bg-card px-4 text-base text-foreground shadow-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  {...studioForm.register("date")}
                />
                {studioForm.formState.errors.date && (
                  <p className="text-xs font-medium text-destructive">
                    {studioForm.formState.errors.date.message}
                  </p>
                )}
              </div>
            </div>

            {submitError && (
              <p className="rounded-xl bg-destructive/10 px-4 py-2.5 text-center text-xs font-medium text-destructive">
                {submitError}
              </p>
            )}

            <div className="pt-2 text-center">
              <Button
                type="submit"
                variant="gold"
                size="xl"
                disabled={studioForm.formState.isSubmitting}
                className="h-14 w-full rounded-full font-display text-lg font-bold sm:h-[64px] sm:max-w-[609px] sm:text-[20px]"
              >
                {studioForm.formState.isSubmitting
                  ? t.studioForm.submitting
                  : t.studioForm.submit}
              </Button>
            </div>
          </form>
        )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
