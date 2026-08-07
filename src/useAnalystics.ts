import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function useAnalytics(trackPageViews = true) {
  const location = useLocation();

  // Track pageviews on route change
  useEffect(() => {
    if (trackPageViews && window.gtag) {
      window.gtag("config", "G-1QKCRRGTHZ", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, trackPageViews]);

  // Custom event helper
  const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (window.gtag) {
      window.gtag("event", eventName, params);
    }
  };

  return { trackEvent };
}
