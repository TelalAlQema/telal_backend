import { rateLimit } from "express-rate-limit";

export function submissionRateLimiter(limit = 5) {
  return rateLimit({
    windowMs: 60_000,
    limit,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    handler: (_req, res) => {
      res.status(429).json({
        status: "error",
        code: "rate_limited",
        message: "Too many submissions. Please try again in a minute.",
      });
    },
  });
}
