import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/env";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // ✅ REQUIRED
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    ssl: {
      rejectUnauthorized: false,
    },
  },
} satisfies Config;

// export default defineConfig({
//   schema: "./src/db/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: ENV.DATABASE_URL!,
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
  
// });

// export default {
//   schema: "./src/db/schema.ts",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
// };
