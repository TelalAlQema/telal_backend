// import { defineConfig, env } from "prisma/config";

// try {
//   process.loadEnvFile();
// } catch {
//   // No .env file present — rely on environment variables already set (e.g. production/CI).
// }

// export default defineConfig({
//   schema: "prisma/schema.prisma",
//   migrations: {
//     seed: "tsx prisma/seed.ts",
//   },
//   datasource: {
//     url: env("DATABASE_URL"),
//   },
// });

import { defineConfig, env } from "prisma/config";

try {
  process.loadEnvFile();
} catch {
  // No .env file present.
  // Rely on environment variables already set,
  // such as production/CI environment variables.
}

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    seed: "node prisma/seed.js",
  },

  datasource: {
    url: env("DATABASE_URL"),
  },
});