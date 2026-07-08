"use client";

import { useEffect } from "react";

export const Analytics = () => {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/insights");
        if (!res.ok) return;

        const { connectionString } = (await res.json()) as {
          connectionString: string | null;
        };
        if (!connectionString || cancelled) return;

        const { ApplicationInsights } = await import(
          "@microsoft/applicationinsights-web"
        );

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
