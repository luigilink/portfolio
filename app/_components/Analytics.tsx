"use client";

import { useEffect } from "react";

export const Analytics = () => {
  useEffect(() => {
    const connectionString =
      process.env.NEXT_PUBLIC_APPLICATIONINSIGHTS_CONNECTION_STRING;
    if (!connectionString) return;

    let cancelled = false;

    (async () => {
      try {
        const { ApplicationInsights } = await import(
          "@microsoft/applicationinsights-web"
        );
        if (cancelled) return;

        const appInsights = new ApplicationInsights({
          config: {
            connectionString,
            disableCookiesUsage: true,
            enableAutoRouteTracking: true,
          },
        });
        appInsights.loadAppInsights();
        appInsights.trackPageView();
      } catch {
        // Analytics is non-critical; ignore failures.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
};
