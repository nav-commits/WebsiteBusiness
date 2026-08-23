import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const resetScroll = () => {
  document.documentElement.classList.add("route-scroll-reset");
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const handleInternalNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");

      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin === window.location.origin &&
        destination.pathname !== window.location.pathname
      ) {
        resetScroll();
      }
    };

    document.addEventListener("click", handleInternalNavigation, true);
    return () => {
      document.removeEventListener("click", handleInternalNavigation, true);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const scrollToDestination = () => {
      if (hash) {
        const destination = document.getElementById(hash.slice(1));
        if (destination) {
          document.documentElement.classList.add("route-scroll-reset");
          destination.scrollIntoView({ block: "start", behavior: "auto" });
          return;
        }
      }

      resetScroll();
    };

    resetScroll();
    const frame = window.requestAnimationFrame(scrollToDestination);
    const timeout = window.setTimeout(scrollToDestination, 150);
    const lateTimeout = window.setTimeout(() => {
      scrollToDestination();
      document.documentElement.classList.remove("route-scroll-reset");
    }, hash ? 500 : 180);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.clearTimeout(lateTimeout);
      document.documentElement.classList.remove("route-scroll-reset");
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
