import { createServerFn } from "@tanstack/react-start";

export type Lang = "en" | "bn";

export const translateFn = createServerFn({ method: "POST" })
  .validator((data: { texts: string[]; target: Lang }) => data)
  .handler(async ({ data }): Promise<string[]> => {
    const { translateTexts } = await import("@/server/translate");
    return await translateTexts(data.texts, data.target);
  });
