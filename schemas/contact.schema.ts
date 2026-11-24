import { z } from "zod";
import type { Messages } from "@/messages/ar";

export function createContactSchema(validation: Messages["validation"]) {
  return z.object({
    name: z.string().trim().min(2, validation.nameMin),
    email: z.string().trim().email(validation.emailInvalid),
    projectType: z.string().min(1, validation.selectRequired),
    message: z.string().trim().min(10, validation.messageMin),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;
