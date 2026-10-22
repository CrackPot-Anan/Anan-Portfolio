import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    // Keep prefetched loader data warm so a click reuses it instead of
    // firing the same request twice.
    defaultPreloadStaleTime: 30_000,
    // Repeat visits to a page resolve from cache instead of the server.
    defaultStaleTime: 30_000,
    defaultPendingMinMs: 200,
  });

  return router;
};
