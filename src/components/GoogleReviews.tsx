import { ArrowUpRight, Star } from "lucide-react";

export const GOOGLE_REVIEWS_URL = "https://share.google/ln2vGKyk4Uhp6TmqP";

type GoogleReviewsProps = {
  compact?: boolean;
  className?: string;
};

const GoogleReviews = ({ compact = false, className = "" }: GoogleReviewsProps) => (
  <a
    href={GOOGLE_REVIEWS_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Read Nav Web Design's 5 Google reviews"
    className={`group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 shadow-lg shadow-slate-950/10 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
      compact ? "px-4 py-3" : "px-5 py-4"
    } ${className}`}
  >
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white font-extrabold text-[#5e17eb] shadow-sm">
      G
    </span>
    <span className="min-w-0 text-left">
      <span className="flex items-center gap-2">
        <span className="font-extrabold text-white">5.0</span>
        <span className="flex text-amber-300" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
          ))}
        </span>
      </span>
      <span className="block text-xs font-medium text-indigo-100">5 verified Google reviews</span>
    </span>
    {!compact && (
      <ArrowUpRight className="ml-1 h-4 w-4 text-indigo-200 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    )}
  </a>
);

export default GoogleReviews;
