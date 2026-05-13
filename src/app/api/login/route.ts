import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME, comparePassword, signSessionToken } from "@/lib/auth";

const FAIL_DELAY_MS = 800;

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  const origin = new URL(request.url).origin;

  if (!comparePassword(password)) {
    await sleep(FAIL_DELAY_MS);
    return NextResponse.redirect(new URL("/login?error=1", origin), { status: 303 });
  }

  const { value, maxAge } = await signSessionToken();
  const res = NextResponse.redirect(new URL("/", origin), { status: 303 });
  res.cookies.set({
    name: COOKIE_NAME,
    value,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
  return res;
}
