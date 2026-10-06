import { createServerFn } from "@tanstack/react-start";

export type AuthState = { email: string } | null;
export type LoginResult = { ok: true } | { ok: false; error: string };

export const loginFn = createServerFn({ method: "POST" })
  .validator((data: { email: string; password: string }) => data)
  .handler(async ({ data }): Promise<LoginResult> => {
    const { verifyCredentials, createAdminSession, AuthNotConfiguredError } =
      await import("@/server/session");

    try {
      if (!verifyCredentials(data.email, data.password)) {
        return { ok: false, error: "Invalid email or password." };
      }
    } catch (error) {
      if (error instanceof AuthNotConfiguredError) {
        return {
          ok: false,
          error: "Login isn't configured on this deployment yet.",
        };
      }
      throw error;
    }

    await createAdminSession(data.email);
    return { ok: true };
  });

export const logoutFn = createServerFn({ method: "POST" }).handler(async () => {
  const { destroyAdminSession } = await import("@/server/session");
  await destroyAdminSession();
  return { ok: true as const };
});

export const getSessionFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<AuthState> => {
    const { readAdminSession } = await import("@/server/session");
    return await readAdminSession();
  },
);
