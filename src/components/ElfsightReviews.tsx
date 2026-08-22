import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "./GoogleReviews";

const SCRIPT_ID = "elfsight-platform";
const SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const WIDGET_ID = "7f1bce33-a3f9-4620-8a00-218c1a619a90";

const ElfsightReviews = () => {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="surface-card overflow-hidden p-4 sm:p-7 lg:p-9">
      <div
        className={`elfsight-app-${WIDGET_ID} min-h-[300px]`}
        data-elfsight-app-lazy
        aria-label="Google reviews for Nav Web Design"
      />

      <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-500">
          Reviews are provided directly by Google through Elfsight.
        </p>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#5e17eb] transition hover:text-indigo-800"
        >
          View all reviews on Google
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default ElfsightReviews;
