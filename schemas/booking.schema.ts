import { z } from "zod";
import type { Messages } from "@/messages/ar";

export function createServiceBookingSchema(validation: Messages["validation"]) {
  return z.object({
    name: z.string().trim().min(2, validation.nameMin),
    phone: z.string().trim().min(7, validation.phoneMin),
    company: z.string().trim().min(2, validation.companyRequired),
    email: z.string().trim().email(validation.emailInvalid),
    service: z.string().min(1, validation.selectRequired),
    budget: z.string().min(1, validation.selectRequired),
    details: z.string().trim().min(10, validation.messageMin),
  });
}

export function createStudioBookingSchema(validation: Messages["validation"]) {
  return z.object({
    name: z.string().trim().min(2, validation.nameMin),
    phone: z.string().trim().min(7, validation.phoneMin),
    shootType: z.string().min(1, validation.selectRequired),
    date: z.string().min(1, validation.dateRequired),
    time: z.string().min(1, validation.timeRequired),
  });
}

export type ServiceBookingValues = z.infer<ReturnType<typeof createServiceBookingSchema>>;
export type StudioBookingValues = z.infer<ReturnType<typeof createStudioBookingSchema>>;
