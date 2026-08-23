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

const sendEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
};

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

  useEffect(() => {
    if (!trackPageViews) return;

    const reached = new Set<number>();
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const depth = Math.round((window.scrollY / scrollableHeight) * 100);
      [50, 90].forEach((threshold) => {
        if (depth >= threshold && !reached.has(threshold)) {
          reached.add(threshold);
          sendEvent("scroll_depth", {
            percent_scrolled: threshold,
            page_path: location.pathname,
          });
        }
      });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const actionable = target?.closest<HTMLAnchorElement>("a[href]");
      if (!actionable) return;

      const href = actionable.href;
      const label = actionable.textContent?.trim().replace(/\s+/g, " ").slice(0, 100);

      if (href.startsWith("tel:")) {
        sendEvent("phone_click", { page_path: location.pathname });
        return;
      }

      if (href.startsWith("mailto:")) {
        sendEvent("email_click", { page_path: location.pathname });
        return;
      }

      if (href.includes("calendly.com")) {
        sendEvent("consultation_click", {
          page_path: location.pathname,
          link_text: label,
          destination: "calendly",
        });
        return;
      }

      const destination = new URL(href, window.location.href);
      if (
        destination.origin === window.location.origin &&
        destination.pathname === "/contact" &&
        location.pathname !== "/contact"
      ) {
        sendEvent("consultation_click", {
          page_path: location.pathname,
          link_text: label,
          destination: "contact_page",
        });
        return;
      }

      if (
        destination.origin === window.location.origin &&
        destination.pathname.startsWith("/portfolio/") &&
        destination.pathname !== location.pathname
      ) {
        sendEvent("case_study_click", {
          page_path: location.pathname,
          destination_path: destination.pathname,
          link_text: label,
        });
      }
    };

    const handleToggle = (event: Event) => {
      const details = event.target as HTMLDetailsElement | null;
      if (!details?.open || details.dataset.analytics !== "package-details") return;

      sendEvent("package_details_open", {
        page_path: location.pathname,
        package_name: details.dataset.package,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick, true);
    document.addEventListener("toggle", handleToggle, true);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("toggle", handleToggle, true);
    };
  }, [location.pathname, trackPageViews]);

  // Custom event helper
  const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    sendEvent(eventName, params);
  };

  return { trackEvent };
}
