type ErrorContext = Record<string, unknown>;

const ENDPOINT =
  (import.meta.env.VITE_LOVABLE_ERROR_REPORTING_URL as string | undefined) ??
  null;

function isBrowser() {
  return typeof window !== "undefined";
}

function logLocally(error: Error, context?: ErrorContext) {
  if (isBrowser()) {
    console.error("[lovable-error-reporting]", { error, context });
    return;
  }
  console.error(
    "[lovable-error-reporting]",
    error,
    context ? JSON.stringify(context) : "",
  );
}

/**
 * Reports an error to the Lovable error-ingestion endpoint when one is
 * configured (e.g. inside the Lovable platform). Outside the platform this
 * falls back to logging the error locally so apps can run standalone.
 */
export function reportLovableError(error: Error, context?: ErrorContext) {
  try {
    if (ENDPOINT && isBrowser()) {
      void fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: {
            name: error.name,
            message: error.message,
            stack: error.stack,
          },
          context,
        }),
      }).catch(() => logLocally(error, context));
      return;
    }
    logLocally(error, context);
  } catch {
    logLocally(error, context);
  }
}
