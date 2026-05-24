import { neon } from "@neondatabase/serverless";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is not set");
}

export const sql = neon(process.env.POSTGRES_URL);