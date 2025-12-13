import { headers } from "next/headers";

const rateLimitMap = new Map<string, { count: number; expires: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 1000;

export function getClientIp(): string {
  const xForwardedFor = headers().get("x-forwarded-for");
  
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  
  return "unknown";
}

export function checkRateLimit(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry && entry.expires > now) {
    if (entry.count >= RATE_LIMIT_MAX) return false;
    entry.count += 1;
  } else {
    rateLimitMap.set(ip, { count: 1, expires: now + RATE_LIMIT_WINDOW });
  }

  return true;
}
