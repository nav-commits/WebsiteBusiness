import { Link } from "react-router-dom";

const StickyOffer = () => {
  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden sm:block fixed right-5 bottom-5 z-50 w-[340px] bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden">

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

      {/* ================= MOBILE (STRONG BANNER) ================= */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0f172a] text-white shadow-2xl border-t border-white/10">

        <div className="px-4 py-3 flex flex-col gap-2">

          {/* TOP LABEL */}
          <p className="text-xs tracking-wide text-indigo-300 font-semibold uppercase">
            🔥 Entry Offer — Website Growth Audit
          </p>

          {/* MAIN LINE */}
          <p className="text-sm font-semibold">
            $100 — Find out why your website isn’t getting leads
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="w-full text-center bg-[#5e17eb] hover:bg-indigo-700 text-white font-bold py-3 rounded-lg text-sm transition"
          >
            Book Your Audit
          </Link>

          {/* MICRO TRUST */}
          <p className="text-[11px] text-gray-300 text-center">
            60 min Zoom • SEO + Conversion breakdown
          </p>

        </div>
      </div>
    </>
  );
};

export default StickyOffer;