import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import { getEnv } from "./config.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middleware/error-handler.js";
import { requestLogger } from "./middleware/request-logger.js";

import { adminRouter } from "./routes/admin.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { createLeadRouter } from "./routes/lead.routes.js";

export function createApp(options = {}) {
  const env = getEnv();

  const app = express();

  app.disable("x-powered-by");
  app.use(helmet());

  app.use(
    cors({
      origin: env.CORS_ORIGIN,
    })
  );

  app.use(
    express.json({
      limit: "16kb",
    })
  );

  app.use(cookieParser());

  app.use(requestLogger());

  app.get("/health", (_req, res) => {
    res.json({
      status: "ok",
      service: "telal-backend",
    });
  });

  app.use("/api/v1/auth", authRouter);

  app.use(
    "/api/v1",
    createLeadRouter({
      rateLimit: options.submissionRateLimit,
    })
  );

  app.use("/api/v1", adminRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  return app;
}
