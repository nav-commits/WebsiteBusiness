import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const STORAGE_KEY = "growthAuditOfferDismissed";
const SHOW_DELAY_MS = 3500;

const StickyOffer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const showTimer = setTimeout(() => {
      setIsVisible(true);
      // Let the element mount before animating in.
      requestAnimationFrame(() => setHasEntered(true));
    }, SHOW_DELAY_MS);

    return () => clearTimeout(showTimer);
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
          className="absolute top-2 right-2 text-gray-400 hover:text-black transition"
        >
          <FaTimes />
        </button>

        <div className="bg-[#0f172a] text-white px-4 py-3">
          <p className="text-sm font-semibold">
            Entry Offer — Limited Time
          </p>
        </div>

        <div className="p-4">
          <h3 className="text-base font-bold text-gray-900 mb-2">
            Website Growth Audit
          </h3>

          <p className="text-sm text-gray-600 mb-3">
            Find out exactly why your website isn’t generating leads.
          </p>

          <div className="text-sm text-gray-700 space-y-1 mb-4">
            <p>✔ $100 — 60 min Zoom Call</p>
            <p>✔ Conversion + SEO breakdown</p>
            <p>✔ Competitor comparison</p>
            <p>✔ Action plan to get more leads</p>
          </div>

          <Link
            to="/contact"
            className="block text-center bg-[#5e17eb] hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Book Audit
          </Link>

          <p className="text-[11px] text-gray-400 mt-3 text-center">
            For businesses struggling to get leads
          </p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className={`sm:hidden fixed bottom-3 left-3 right-3 z-50 bg-[#0f172a] text-white shadow-2xl rounded-xl border border-white/10 ${transitionClasses}`}>

        {/* CLOSE ICON */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white/70 hover:text-white"
        >
          <FaTimes />
        </button>

        <div className="px-4 py-3 flex flex-col gap-2">

          <p className="text-xs tracking-wide text-indigo-300 font-semibold uppercase">
            🔥 Entry Offer — Website Growth Audit
          </p>

          <p className="text-sm font-semibold">
            $100 — Find out why your website isn’t getting leads
          </p>

          <Link
            to="/contact"
            className="w-full text-center bg-[#5e17eb] hover:bg-indigo-700 text-white font-bold py-3 rounded-lg text-sm transition"
          >
            Book Your Audit
          </Link>

          <p className="text-[11px] text-gray-300 text-center">
            60 min Zoom • SEO + Conversion breakdown
          </p>
        </div>
      </div>
    </>
  );
};

export default StickyOffer;