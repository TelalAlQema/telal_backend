// import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// import { PrismaClient } from "../generated/prisma/client.js";
// import { getEnv } from "../config.js";

// const globalForPrisma = globalThis as unknown as { __telalPrisma?: PrismaClient };

// export const prisma =
//   globalForPrisma.__telalPrisma ??
//   new PrismaClient({ adapter: new PrismaMariaDb(getEnv().DATABASE_URL) });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.__telalPrisma = prisma;
// }


import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";
import { getEnv } from "../config.js";

const env = getEnv();

const databaseUrl = new URL(env.DATABASE_URL);

const adapter = new PrismaMariaDb({
  host: databaseUrl.hostname,

  port: Number(
    databaseUrl.port || 3306
  ),

  user: decodeURIComponent(
    databaseUrl.username
  ),

  password: decodeURIComponent(
    databaseUrl.password
  ),

  database: databaseUrl.pathname.replace(
    /^\//,
    ""
  ),

  connectionLimit: 5,
});

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.__telalPrisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__telalPrisma = prisma;
}