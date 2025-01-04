import { defineConfig } from "drizzle-kit"
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

export default defineConfig({
  schema: "./src/db/schema",
  out: "./migrations",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
  // out: "./drizzle",
})
