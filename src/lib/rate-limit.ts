/**
 * Simple in-memory rate limiter.
 *
 * Limits each IP address to MAX_REQUESTS calls within WINDOW_MS.
 * Storage is process-local, so this is intentionally single-instance.
 * For multi-instance deployments, replace the Map with a Redis backend.
 */

const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour in milliseconds

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitRecord>();

/**
 * Check whether an incoming request from `ip` is within the allowed rate.
 *
 * @param ip - The caller's IP address string.
 * @returns `true` if the request is allowed, `false` if rate limited.
 */
export function rateLimit(ip: string): boolean {
  const now = Date.now();

  // Sweep expired entries to prevent unbounded memory growth.
  for (const [key, record] of store.entries()) {
    if (now >= record.resetAt) {
      store.delete(key);
    }
  }

  const existing = store.get(ip);

  if (!existing) {
    // First request from this IP within a fresh window.
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (now >= existing.resetAt) {
    // Previous window has expired; start a new one.
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (existing.count >= MAX_REQUESTS) {
    // Limit reached; reject without incrementing to avoid integer overflow.
    return false;
  }

  existing.count += 1;
  return true;
}
