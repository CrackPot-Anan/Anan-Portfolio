import {
  getCookie,
  useSession as startSession,
} from "@tanstack/react-start/server";

export const ADMIN_SESSION_COOKIE = "anan-admin";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const MIN_SECRET_LENGTH = 32;

export class AuthNotConfiguredError extends Error {
  missing: Array<string>;

  constructor(missing: Array<string>) {
    super(`Authentication is not configured. Missing: ${missing.join(", ")}`);
    this.name = "AuthNotConfiguredError";
    this.missing = missing;
  }
}

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value.trim() : undefined;
}

function requiredEnv() {
  const email = readEnv("ADMIN_EMAIL");
  const password = readEnv("ADMIN_PASSWORD");
  const secret = readEnv("SESSION_SECRET");

  const missing: Array<string> = [];
  if (!email) missing.push("ADMIN_EMAIL");
  if (!password) missing.push("ADMIN_PASSWORD");
  if (!secret || secret.length < MIN_SECRET_LENGTH) {
    missing.push(`SESSION_SECRET (at least ${MIN_SECRET_LENGTH} characters)`);
  }
  if (missing.length > 0) throw new AuthNotConfiguredError(missing);

  return {
    email: email as string,
    password: password as string,
    secret: secret as string,
  };
}

function sessionConfig() {
  const { secret } = requiredEnv();
  return {
    password: secret,
    maxAge: SESSION_MAX_AGE_SECONDS,
    name: ADMIN_SESSION_COOKIE,
    cookie: {
      path: "/",
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
    },
  };
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1)
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function verifyCredentials(email: string, password: string): boolean {
  const admin = requiredEnv();
  return (
    safeEqual(email.trim().toLowerCase(), admin.email.toLowerCase()) &&
    safeEqual(password, admin.password)
  );
}

export async function createAdminSession(email: string): Promise<void> {
  const session = await startSession(sessionConfig());
  await session.update({ email, loggedInAt: new Date().toISOString() });
}

export async function readAdminSession(): Promise<{ email: string } | null> {
  if (!getCookie(ADMIN_SESSION_COOKIE)) return null;
  try {
    const session = await startSession(sessionConfig());
    const email = session.data?.email;
    return typeof email === "string" && email.length > 0 ? { email } : null;
  } catch (error) {
    if (error instanceof AuthNotConfiguredError) return null;
    throw error;
  }
}

export async function destroyAdminSession(): Promise<void> {
  try {
    const session = await startSession(sessionConfig());
    await session.clear();
  } catch (error) {
    if (error instanceof AuthNotConfiguredError) return;
    throw error;
  }
}
