import { defineConfig, type PluginOption, type UserConfig } from "vite";

const PORT = 8080;

export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  const plugins: PluginOption[] = [];

  const { default: tailwindcss } = await import("@tailwindcss/vite");
  plugins.push(tailwindcss());

  const { default: tsconfigPaths } = await import("vite-tsconfig-paths");
  plugins.push(tsconfigPaths({ projects: ["./tsconfig.json"] }));

  const { tanstackStart } = await import("@tanstack/react-start/plugin/vite");
  plugins.push(
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
  );

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(nitro({ defaultPreset: "cloudflare-module" }));
  }

  const { default: react } = await import("@vitejs/plugin-react");
  plugins.push(react());

  const isDevBuild = command === "build" && mode === "development";

  return {
    ...(isDevBuild
      ? {
          environments: {
            client: {
              define: { "process.env.NODE_ENV": JSON.stringify("development") },
            },
          },
        }
      : {}),
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    plugins,
    server: {
      host: "::",
      port: PORT,
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 1000,
          pollInterval: 100,
        },
      },
    },
  };
});
