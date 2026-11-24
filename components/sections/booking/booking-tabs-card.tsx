"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createServiceBookingSchema,
  createStudioBookingSchema,
  type ServiceBookingValues,
  type StudioBookingValues,
} from "@/schemas/booking.schema";
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

  const handleServiceSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmittedTab("service");
    serviceForm.reset();
  };

  const handleStudioSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmittedTab("studio");
    studioForm.reset();
  };

  return (
    <div className="mx-auto max-w-[820px]">
      {/* Exact Figma folder-style connected tabs */}
      <div className="relative z-10 -mb-px grid grid-cols-2" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "service"}
          onClick={() => {
            setActiveTab("service");
            setSubmittedTab(null);
          }}
          className={cn(
            "cursor-pointer rounded-t-[24px] py-4 font-display text-lg font-bold transition-all sm:py-5 sm:text-xl",
            activeTab === "service"
              ? "border border-b-surface-subtle border-border-gold/70 bg-surface-subtle text-brand-dark"
              : "text-foreground/75 hover:text-foreground"
          )}
        >
          {t.tabService}
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
            "cursor-pointer rounded-t-[24px] py-4 font-display text-lg font-bold transition-all sm:py-5 sm:text-xl",
            activeTab === "studio"
              ? "border border-b-surface-subtle border-border-gold/70 bg-surface-subtle text-brand-dark"
              : "text-foreground/75 hover:text-foreground"
          )}
        >
          {t.tabStudio}
        </button>
      </div>

      {/* Form Panel */}
      <div
        className={cn(
          "rounded-b-[28px] border border-border-gold/70 bg-surface-subtle p-6 sm:p-8 md:p-10",
          activeTab === "service" ? "rounded-te-[28px]" : "rounded-ts-[28px]"
        )}
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
              className="mt-6"
              onClick={() => setSubmittedTab(null)}
            >
              {t.serviceForm.submit}
            </Button>
          </div>
        ) : activeTab === "service" ? (
          <form
            onSubmit={serviceForm.handleSubmit(handleServiceSubmit)}
            noValidate
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="svc-name">{t.serviceForm.name}</Label>
                <Input
                  id="svc-name"
                  placeholder={t.serviceForm.namePlaceholder}
                  aria-invalid={!!serviceForm.formState.errors.name}
                  className="h-12 rounded-xl border-border/70 bg-card px-4"
                  {...serviceForm.register("name")}
                />
                {serviceForm.formState.errors.name && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="svc-phone">{t.serviceForm.phone}</Label>
                <Input
                  id="svc-phone"
                  type="tel"
                  dir="ltr"
                  placeholder={t.serviceForm.phonePlaceholder}
                  aria-invalid={!!serviceForm.formState.errors.phone}
                  className="h-12 rounded-xl border-border/70 bg-card px-4"
                  {...serviceForm.register("phone")}
                />
                {serviceForm.formState.errors.phone && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="svc-company">{t.serviceForm.company}</Label>
                <Input
                  id="svc-company"
                  placeholder={t.serviceForm.companyPlaceholder}
                  aria-invalid={!!serviceForm.formState.errors.company}
                  className="h-12 rounded-xl border-border/70 bg-card px-4"
                  {...serviceForm.register("company")}
                />
                {serviceForm.formState.errors.company && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.company.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="svc-email">{t.serviceForm.email}</Label>
                <Input
                  id="svc-email"
                  type="email"
                  dir="ltr"
                  placeholder={t.serviceForm.emailPlaceholder}
                  aria-invalid={!!serviceForm.formState.errors.email}
                  className="h-12 rounded-xl border-border/70 bg-card px-4"
                  {...serviceForm.register("email")}
                />
                {serviceForm.formState.errors.email && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="svc-type">{t.serviceForm.service}</Label>
                <Controller
                  control={serviceForm.control}
                  name="service"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="svc-type"
                        aria-invalid={!!serviceForm.formState.errors.service}
                        className="h-12 w-full rounded-xl border-border/70 bg-card px-4"
                      >
                        <SelectValue placeholder={t.serviceForm.servicePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.serviceForm.services.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {serviceForm.formState.errors.service && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.service.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="svc-budget">{t.serviceForm.budget}</Label>
                <Controller
                  control={serviceForm.control}
                  name="budget"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="svc-budget"
                        aria-invalid={!!serviceForm.formState.errors.budget}
                        className="h-12 w-full rounded-xl border-border/70 bg-card px-4"
                      >
                        <SelectValue placeholder={t.serviceForm.budgetPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.serviceForm.budgets.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {serviceForm.formState.errors.budget && (
                  <p className="text-xs font-medium text-destructive">
                    {serviceForm.formState.errors.budget.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="svc-details">{t.serviceForm.details}</Label>
              <Textarea
                id="svc-details"
                rows={4}
                placeholder={t.serviceForm.detailsPlaceholder}
                aria-invalid={!!serviceForm.formState.errors.details}
                className="min-h-[110px] rounded-xl border-border/70 bg-card p-4"
                {...serviceForm.register("details")}
              />
              {serviceForm.formState.errors.details && (
                <p className="text-xs font-medium text-destructive">
                  {serviceForm.formState.errors.details.message}
                </p>
              )}
            </div>

            <div className="pt-2 text-center">
              <Button
                type="submit"
                variant="gold"
                size="xl"
                disabled={serviceForm.formState.isSubmitting}
                className="w-full sm:max-w-[440px]"
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
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="studio-name">{t.studioForm.name}</Label>
                <Input
                  id="studio-name"
                  placeholder={t.studioForm.namePlaceholder}
                  aria-invalid={!!studioForm.formState.errors.name}
                  className="h-12 rounded-xl border-border/70 bg-card px-4"
                  {...studioForm.register("name")}
                />
                {studioForm.formState.errors.name && (
                  <p className="text-xs font-medium text-destructive">
                    {studioForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="studio-phone">{t.studioForm.phone}</Label>
                <Input
                  id="studio-phone"
                  type="tel"
                  dir="ltr"
                  placeholder={t.studioForm.phonePlaceholder}
                  aria-invalid={!!studioForm.formState.errors.phone}
                  className="h-12 rounded-xl border-border/70 bg-card px-4"
                  {...studioForm.register("phone")}
                />
                {studioForm.formState.errors.phone && (
                  <p className="text-xs font-medium text-destructive">
                    {studioForm.formState.errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="studio-shoot-type">{t.studioForm.shootType}</Label>
              <Controller
                control={studioForm.control}
                name="shootType"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      id="studio-shoot-type"
                      aria-invalid={!!studioForm.formState.errors.shootType}
                      className="h-12 w-full rounded-xl border-border/70 bg-card px-4"
                    >
                      <SelectValue placeholder={t.studioForm.shootTypePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.studioForm.shootTypes.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {studioForm.formState.errors.shootType && (
                <p className="text-xs font-medium text-destructive">
                  {studioForm.formState.errors.shootType.message}
                </p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="studio-time">{t.studioForm.time}</Label>
                <Input
                  id="studio-time"
                  type="time"
                  aria-invalid={!!studioForm.formState.errors.time}
                  className="h-12 rounded-xl border-border/70 bg-card px-4"
                  {...studioForm.register("time")}
                />
                {studioForm.formState.errors.time && (
                  <p className="text-xs font-medium text-destructive">
                    {studioForm.formState.errors.time.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="studio-date">{t.studioForm.date}</Label>
                <Input
                  id="studio-date"
                  type="date"
                  aria-invalid={!!studioForm.formState.errors.date}
                  className="h-12 rounded-xl border-border/70 bg-card px-4"
                  {...studioForm.register("date")}
                />
                {studioForm.formState.errors.date && (
                  <p className="text-xs font-medium text-destructive">
                    {studioForm.formState.errors.date.message}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-2 text-center">
              <Button
                type="submit"
                variant="gold"
                size="xl"
                disabled={studioForm.formState.isSubmitting}
                className="w-full sm:max-w-[440px]"
              >
                {studioForm.formState.isSubmitting
                  ? t.studioForm.submitting
                  : t.studioForm.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
