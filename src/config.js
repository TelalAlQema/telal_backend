import { z } from "zod";

const EnvSchema = z
  .object({
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    PORT: z
      .coerce
      .number()
      .int()
      .min(1)
      .max(65535)
      .default(4000),

    DATABASE_URL: z
      .string()
      .min(
        1,
        "DATABASE_URL is required (e.g. mysql://user:pass@host:port/telalalqema)"
      ),

    CORS_ORIGIN: z
      .string()
      .optional()
      .default("http://localhost:3000")
      .transform((value) =>
        value
          .split(",")
          .map((origin) => origin.trim())
          .filter((origin) => origin.length > 0)
      ),

    JWT_SECRET: z
      .string()
      .min(
        32,
        "JWT_SECRET is required (min 32 chars) — generate with e.g. `openssl rand -base64 48`"
      )
      .trim(),

    RECAPTCHA_SECRET: z
      .string()
      .trim()
      .optional(),

    SMTP_HOST: z
      .string()
      .trim()
      .optional(),

    SMTP_PORT: z
      .coerce
      .number()
      .int()
      .min(1)
      .max(65535)
      .default(587),

    SMTP_USER: z
      .string()
      .trim()
      .optional(),

    SMTP_PASS: z
      .string()
      .optional(),
  })
  .superRefine((env, ctx) => {
    const smtpParts = [
      env.SMTP_HOST,
      env.SMTP_USER,
      env.SMTP_PASS,
    ];

    const present = smtpParts.filter(
      (part) =>
        part !== undefined &&
        part.length > 0
    ).length;

    if (present > 0 && present !== 3) {
      ctx.addIssue({
        code: "custom",
        message:
          "SMTP_HOST, SMTP_USER and SMTP_PASS must be set together (all or none).",
      });
    }
  });

export class EnvError extends Error {
  constructor(message) {
    super(message);
    this.name = "EnvError";
  }
}

let cached;

export function loadEnv(path = ".env") {
  try {
    process.loadEnvFile(path);
  } catch (err) {
    if (err?.code !== "ENOENT") {
      throw new EnvError(
        `Failed to load environment file "${path}": ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    }
  }

  const parsed = EnvSchema.safeParse(process.env);

  if (!parsed.success) {
    const details = parsed.error.issues
      .map(
        (issue) =>
          `  - ${
            issue.path.join(".") || "(root)"
          }: ${issue.message}`
      )
      .join("\n");

    throw new EnvError(
      `Invalid environment configuration:\n${details}`
    );
  }

  cached = parsed.data;

  return cached;
}

export function getEnv() {
  if (!cached) {
    cached = loadEnv();
  }

  return cached;
}
