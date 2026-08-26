import { z } from "zod";

export const HONEYPOT_FIELD = "website";
export const RECAPTCHA_FIELD = "g-recaptcha-response";

const LINK_PATTERN = /(https?:\/\/|www\.|<a\s|url=)/i;

const nameSchema = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters long.")
  .max(100, "Name must be at most 100 characters long.")
  .regex(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces.");

const emailSchema = z
  .string()
  .trim()
  .max(254, "Email must be at most 254 characters long.")
  .refine((value) => !/[\r\n]/.test(value), "Invalid email.")
  .pipe(z.email("Invalid email format."));

const phoneSchema = z
  .string()
  .trim()
  .regex(/^[0-9]{7,15}$/, "Phone must be 7-15 digits only.");

const servicesSchema = z
  .string()
  .trim()
  .min(1, "Please select a service.")
  .max(500, "Services must be at most 500 characters long.");

const messageSchema = z
  .string()
  .trim()
  .max(1000, "Message must be at most 1000 characters long.")
  .refine((value) => !/[<>{}]/.test(value), "Message contains invalid characters.")
  .refine((value) => !LINK_PATTERN.test(value), "Links are not allowed in the message.");

const recaptchaSchema = z
  .string()
  .trim()
  .min(1, "The CAPTCHA response is required.");

const baseFields = {
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  services: servicesSchema,
  [RECAPTCHA_FIELD]: recaptchaSchema,
  [HONEYPOT_FIELD]: z.string().optional(),
};

export const contactSchema = z.object({
  ...baseFields,
  message: messageSchema.optional(),
});

export const quoteSchema = z.object({
  ...baseFields,
});

export function zodFieldErrors(error) {
  const fields = {};
  for (const issue of error.issues) {
    const key = issue.path.length > 0 ? issue.path.join(".") : "form";
    if (!(key in fields)) fields[key] = issue.message;
  }
  return { fields };
}
