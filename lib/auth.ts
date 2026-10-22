import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

export const SESSION_COOKIE = "session";

const secret = new TextEncoder().encode(
  process.env.SESSION_SECRET || "dev-secret-change-me-in-production"
);

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createSessionToken(payload: {
  id: string;
  email: string;
}): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySessionToken(
  token: string
): Promise<{ id: string; email: string } | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return { id: String(payload.id), email: String(payload.email) };
  } catch {
    return null;
  }
}

/** 从 httpOnly cookie 中解析当前登录用户（未登录返回 null） */
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const payload = await verifySessionToken(token);
  if (!payload) return null;

  return prisma.user.findUnique({
    where: { id: payload.id },
    select: { id: true, email: true, name: true, createdAt: true },
  });
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 天
};
