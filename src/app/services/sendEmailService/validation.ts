import { z } from "zod";

export const ContactSchema = z.object({
  senderName: z.string().min(1, "Name is required"),
  senderEmail: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Enter a valid email address")),
  senderNumber: z.string().min(1, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export type FormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

export type ValidationResult =
  | { success: true; data: ContactFormData }
  | { success: false; errors: FormErrors };

export function validateContactForm(
  rawData: unknown
): ValidationResult {
  const result = ContactSchema.safeParse(rawData);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: FormErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof FormErrors;
    errors[field] = issue.message;
  }

  return { success: false, errors };
}