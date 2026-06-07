import { cookies } from "next/headers";

const ADMIN_COOKIE = "tuyou_admin_session";
const SESSION_VALUE = "authenticated";

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "tuyou2026";
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === SESSION_VALUE;
}

export function createSessionCookie() {
  return {
    name: ADMIN_COOKIE,
    value: SESSION_VALUE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  };
}

export function clearSessionCookie() {
  return {
    name: ADMIN_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 0,
    path: "/",
  };
}
