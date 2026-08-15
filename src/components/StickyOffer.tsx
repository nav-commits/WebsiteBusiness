import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const STORAGE_KEY = "strategyConsultationOfferDismissed";
const SHOW_DELAY_MS = 8000;

const StickyOffer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let delayHasElapsed = false;

    const maybeShowOffer = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = pageHeight > 0 ? window.scrollY / pageHeight : 0;

      if (delayHasElapsed && scrollProgress >= 0.25) {
        setIsVisible(true);
        requestAnimationFrame(() => setHasEntered(true));
        window.removeEventListener("scroll", maybeShowOffer);
      }
    };

    const showTimer = window.setTimeout(() => {
      delayHasElapsed = true;
      maybeShowOffer();
    }, SHOW_DELAY_MS);

    window.addEventListener("scroll", maybeShowOffer, { passive: true });

    return () => {
      window.clearTimeout(showTimer);
      window.removeEventListener("scroll", maybeShowOffer);
    };
  }, []);

  const handleClose = () => {
    setHasEntered(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  const transitionClasses = `transition-all duration-300 ease-out ${
    hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div
        className={`hidden sm:block fixed z-50 w-[340px] bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden ${transitionClasses}`}
        style={{
          right: "20px",
          bottom: "20px",
          left: "auto",
        }}
      >
        {/* CLOSE ICON */}
        <button
          onClick={handleClose}
          aria-label="Dismiss free strategy consultation offer"
          className="absolute top-2 right-2 text-gray-400 hover:text-black transition"
        >
          <FaTimes />
        </button>

        <div className="bg-[#0f172a] text-white px-4 py-3">
          <p className="text-sm font-semibold">
            Free Website Strategy Consultation
          </p>
        </div>

        <div className="p-4">
          <h3 className="text-base font-bold text-gray-900 mb-2">
            Find Your Next Growth Opportunity
          </h3>

          <p className="text-sm text-gray-600 mb-3">
            Get clear, practical feedback on how your website can generate more leads.
          </p>

          <div className="text-sm text-gray-700 space-y-1 mb-4">
            <p>✔ 30-minute discovery call</p>
            <p>✔ Website goals and challenges</p>
            <p>✔ Clear recommended next steps</p>
          </div>

          <Link
            to="/contact"
            className="block text-center bg-[#5e17eb] hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Book a Free Strategy Consultation
          </Link>

          <p className="text-[11px] text-gray-400 mt-3 text-center">
            No pressure. Just a focused conversation.
          </p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className={`sm:hidden fixed bottom-3 left-3 right-3 z-50 bg-[#0f172a] text-white shadow-2xl rounded-xl border border-white/10 ${transitionClasses}`}>

        {/* CLOSE ICON */}
        <button
          onClick={handleClose}
          aria-label="Dismiss free strategy consultation offer"
          className="absolute top-2 right-2 text-white/70 hover:text-white"
        >
          <FaTimes />
        </button>

        <div className="px-4 py-3 flex items-center gap-3 pr-9">

          <div className="min-w-0 flex-1">
            <p className="text-xs tracking-wide text-indigo-300 font-semibold uppercase">
              Free Strategy Consultation
            </p>
            <p className="text-xs text-gray-300 mt-1">
              Get clear next steps for your website.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 text-center bg-[#5e17eb] hover:bg-indigo-700 text-white font-bold px-4 py-2.5 rounded-lg text-xs transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default StickyOffer;
