"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormDropdown } from "@/components/shared/form-dropdown";
import {
  createContactSchema,
  type ContactFormValues,
} from "@/schemas/contact.schema";
import { submitContactMessage } from "@/lib/graphql";
import type { Messages } from "@/messages/ar";

interface ContactFormProps {
  t: Messages["contact"]["form"];
  validation: Messages["validation"];
}

export function ContactForm({ t, validation }: ContactFormProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const schema = React.useMemo(
    () => createContactSchema(validation),
    [validation]
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    try {
      await submitContactMessage(values);
      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit message. Please try again."
      );
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-border-gold bg-surface-subtle p-6 text-center sm:min-h-[380px] sm:rounded-[24px] sm:p-8">
        <span className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-foreground sm:text-2xl">
          {t.successTitle}
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
          {t.successBody}
        </p>
        <Button
          type="button"
          variant="gold"
          size="xl"
          className="mt-6 h-12 rounded-full px-8 font-display text-base font-bold sm:h-14 sm:text-lg"
          onClick={() => setSubmitted(false)}
        >
          {t.submit}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4 rounded-2xl border border-primary/25 bg-surface-subtle p-4 sm:space-y-5 sm:rounded-[24px] sm:p-6 lg:space-y-6"
    >
      <div className="grid gap-4 pt-1 sm:grid-cols-2 sm:gap-3 sm:pt-2">
        <div className="space-y-2 sm:space-y-2.5">
          <Label htmlFor="contact-name" className="font-display text-sm font-bold text-foreground">
            {t.name}
          </Label>
          <Input
            id="contact-name"
            placeholder={t.namePlaceholder}
            aria-invalid={!!errors.name}
            className="h-11 rounded-[12px] border-0 bg-card px-3.5 text-sm text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50 sm:h-12 sm:px-4 sm:text-base"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs font-medium text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2 sm:space-y-2.5">
          <Label htmlFor="contact-email" className="font-display text-sm font-bold text-foreground">
            {t.email}
          </Label>
          <Input
            id="contact-email"
            type="email"
            dir="ltr"
            placeholder={t.emailPlaceholder}
            aria-invalid={!!errors.email}
            className="h-11 rounded-[12px] border-0 bg-card px-3.5 text-sm text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50 sm:h-12 sm:px-4 sm:text-base rtl:text-right"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2 sm:space-y-2.5">
        <Label htmlFor="contact-project-type" className="font-display text-sm font-bold text-foreground">
          {t.projectType}
        </Label>
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <FormDropdown
              id="contact-project-type"
              value={field.value}
              onValueChange={field.onChange}
              placeholder={t.projectTypePlaceholder}
              options={t.projectTypes}
              invalid={!!errors.projectType}
            />
          )}
        />
        {errors.projectType && (
          <p className="text-xs font-medium text-destructive">
            {errors.projectType.message}
          </p>
        )}
      </div>

      <div className="space-y-2 sm:space-y-2.5">
        <Label htmlFor="contact-message" className="font-display text-sm font-bold text-foreground">
          {t.message}
        </Label>
        <Textarea
          id="contact-message"
          rows={4}
          placeholder={t.messagePlaceholder}
          aria-invalid={!!errors.message}
          className="min-h-[96px] rounded-[12px] border-0 bg-card px-3.5 py-3 text-sm text-foreground shadow-none placeholder:text-foreground/45 focus-visible:ring-2 focus-visible:ring-primary/50 sm:px-4 sm:py-3.5 sm:text-base"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs font-medium text-destructive">{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <p className="rounded-xl bg-destructive/10 px-4 py-2.5 text-center text-xs font-medium text-destructive">
          {submitError}
        </p>
      )}

      <div className="pt-1 text-center sm:pt-2">
        <Button
          type="submit"
          variant="gold"
          size="xl"
          disabled={isSubmitting}
          className="h-12 w-full rounded-full font-display text-base font-bold sm:h-14 sm:max-w-[609px] sm:text-lg lg:h-[64px] lg:text-[20px]"
        >
          {isSubmitting ? t.submitting : t.submit}
        </Button>
      </div>
    </form>
  );
}
