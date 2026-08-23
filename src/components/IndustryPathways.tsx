import { ArrowRight, Briefcase, Gavel, HardHat, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { industryPages } from "../data/industryPages";
import { useAnalytics } from "../useAnalystics";

const iconByIndustry = {
  lawyers: Gavel,
  contractors: HardHat,
  healthcare: HeartPulse,
  consultants: Briefcase,
};

type IndustryPathwaysProps = {
  compact?: boolean;
};

const IndustryPathways = ({ compact = false }: IndustryPathwaysProps) => {
  const { trackEvent } = useAnalytics(false);

  return (
    <section
      id="industries"
      className={`scroll-mt-28 ${compact ? "bg-white py-14" : "bg-slate-50 py-20 md:py-24"}`}
      aria-labelledby="industry-pathways-heading"
    >
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-eyebrow">Built around your buyers</p>
          <h2
            id="industry-pathways-heading"
            className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl"
          >
            Website strategy shaped for your industry
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Choose your field to see the trust signals, page structure, and conversion path that matter most to your clients.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {industryPages.map((industry) => {
            const Icon = iconByIndustry[industry.slug as keyof typeof iconByIndustry];

            return (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                onClick={() =>
                  trackEvent("industry_path_click", {
                    industry: industry.slug,
                    location: compact ? "industries_hub" : "homepage",
                  })
                }
                className="premium-card group flex min-h-56 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-38px_rgba(15,23,42,.45)] focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
              >
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-[#5e17eb] transition group-hover:bg-[#5e17eb] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-extrabold text-slate-950">
                  {industry.shortName}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {industry.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#5e17eb]">
                  Explore this industry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryPathways;
