const COOKIE_NAME = "rwj_auth";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function hmacHex(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return toHex(sig);
}

function requireSecret(): string {
  const secret = process.env.RWJ_AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("RWJ_AUTH_SECRET missing or too short (need ≥32 chars)");
  }
  return secret;
}

export async function signSessionToken(): Promise<{ value: string; maxAge: number }> {
  const secret = requireSecret();
  const expiresAt = Date.now() + COOKIE_MAX_AGE_SECONDS * 1000;
  const payload = String(expiresAt);
  const sig = await hmacHex(payload, secret);
  return { value: `${payload}.${sig}`, maxAge: COOKIE_MAX_AGE_SECONDS };
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot <= 0 || dot === token.length - 1) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expiresAt = Number(payload);
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;
  let secret: string;
  try {
    secret = requireSecret();
  } catch {
    return false;
  }
  const expectedSig = await hmacHex(payload, secret);
  return constantTimeEqual(sig, expectedSig);
}

export function comparePassword(input: string): boolean {
  const expected = process.env.RWJ_REVIEW_PASSWORD;
  if (!expected || expected.length < 6) return false;
  return constantTimeEqual(input, expected);
}

export { COOKIE_NAME, COOKIE_MAX_AGE_SECONDS };
