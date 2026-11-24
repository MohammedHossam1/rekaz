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
  createContactSchema,
  type ContactFormValues,
} from "@/schemas/contact.schema";
import type { Messages } from "@/messages/ar";

interface ContactFormProps {
  t: Messages["contact"]["form"];
  validation: Messages["validation"];
}

export function ContactForm({ t, validation }: ContactFormProps) {
  const [submitted, setSubmitted] = React.useState(false);

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

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex min-h-[380px] flex-col items-center justify-center rounded-[26px] border border-border-gold bg-surface-subtle p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
          {t.successTitle}
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
          {t.successBody}
        </p>
        <Button
          type="button"
          variant="gold"
          size="xl"
          className="mt-6"
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
      className="space-y-5 rounded-[26px] border border-border/60 bg-surface-subtle p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-sm font-semibold text-foreground">
            {t.name}
          </Label>
          <Input
            id="contact-name"
            placeholder={t.namePlaceholder}
            aria-invalid={!!errors.name}
            className="h-12 rounded-xl border-border/70 bg-card px-4 text-foreground"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs font-medium text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-sm font-semibold text-foreground">
            {t.email}
          </Label>
          <Input
            id="contact-email"
            type="email"
            dir="ltr"
            placeholder={t.emailPlaceholder}
            aria-invalid={!!errors.email}
            className="h-12 rounded-xl border-border/70 bg-card px-4 text-foreground"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-project-type" className="text-sm font-semibold text-foreground">
          {t.projectType}
        </Label>
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="contact-project-type"
                aria-invalid={!!errors.projectType}
                className="h-12 w-full rounded-xl border-border/70 bg-card px-4 text-foreground"
              >
                <SelectValue placeholder={t.projectTypePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {t.projectTypes.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.projectType && (
          <p className="text-xs font-medium text-destructive">
            {errors.projectType.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="text-sm font-semibold text-foreground">
          {t.message}
        </Label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder={t.messagePlaceholder}
          aria-invalid={!!errors.message}
          className="min-h-[120px] rounded-xl border-border/70 bg-card p-4 text-foreground"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs font-medium text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="gold"
        size="xl"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? t.submitting : t.submit}
      </Button>
    </form>
  );
}
