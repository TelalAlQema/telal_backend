import { Router } from "express";
import { AppError } from "../lib/http-error.js";
import { maskIp } from "../lib/ip.js";
import { sendAdminNotification, sendCustomerConfirmation } from "../lib/mailer.js";
import { prisma } from "../lib/prisma.js";
import { verifyRecaptcha } from "../lib/recaptcha.js";
import { submissionRateLimiter } from "../middleware/rate-limit.js";
import {
  contactSchema,
  HONEYPOT_FIELD,
  quoteSchema,
  RECAPTCHA_FIELD,
  zodFieldErrors,
} from "../validation/lead.js";

async function handleSubmission(req, res, source, schema) {
  const body = (req.body ?? {});

  if (typeof body[HONEYPOT_FIELD] === "string" && body[HONEYPOT_FIELD].trim().length > 0) {
    res.json({ ok: true });
    return;
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    throw new AppError(400, "validation_error", "Validation failed.", zodFieldErrors(parsed.error));
  }

  const data = parsed.data;

  const verified = await verifyRecaptcha(data[RECAPTCHA_FIELD]);
  if (!verified) {
    throw new AppError(400, "recaptcha_failed", "Unable to verify you are not a robot. Please try again.");
  }

  const submission = await prisma.submission.create({
    data: {
      source,
      name: data.name,
      email: data.email,
      phone: data.phone,
      services: data.services,
      message: "message" in data && data.message ? data.message : null,
      ip: maskIp(req.ip ?? req.socket.remoteAddress ?? ""),
    },
  });

  const mailData = {
    source,
    name: data.name,
    email: data.email,
    phone: data.phone,
    services: data.services,
    message: submission.message,
  };

  await sendCustomerConfirmation(mailData);
  await sendAdminNotification(mailData);

  res.json({ ok: true });
}

export function createLeadRouter(options = {}) {
  const router = Router();
  const limiter = submissionRateLimiter(options.rateLimit);

  router.post("/contact", limiter, async (req, res) => {
    console.log("🔥 CONTACT REQUEST REACHED EXPRESS");

    await handleSubmission(req, res, "CONTACT", contactSchema);
  });

  router.post("/quote", limiter, async (req, res) => {
    await handleSubmission(req, res, "QUOTE", quoteSchema);
  });

  return router;
}
