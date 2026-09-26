import { Helmet } from "react-helmet-async";
import { Navigate, Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  LayoutTemplate,
  MessageSquareText,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../components/Button";
import { industryPageBySlug } from "../data/industryPages";
import { useAnalytics } from "../useAnalystics";

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = slug ? industryPageBySlug[slug] : undefined;
  const { trackEvent } = useAnalytics(false);

  if (!industry) return <Navigate to="/industries" replace />;

  const contactParams = new URLSearchParams({
    service: "New website",
    industry: industry.slug,
    source: "industry-page",
  });

  return (
    <div className="pt-24 lg:pt-28">
      <Helmet>
        <title>{industry.seoTitle}</title>
        <meta name="description" content={industry.metaDescription} />
        <link rel="canonical" href={`https://navwebdesign.com/industries/${industry.slug}`} />
      </Helmet>

      <section className="page-hero py-20 text-white md:py-28">
        <motion.div
          className="section-shell grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center lg:text-left">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-100">
              {industry.eyebrow}
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">{industry.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-indigo-100 lg:mx-0 md:text-xl">
              {industry.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                to={`/contact?${contactParams.toString()}`}
                arrow
                className="px-7 py-4"
                onClick={() => trackEvent("industry_cta_click", { industry: industry.slug, location: "hero" })}
              >
                Discuss Your Website
              </Button>
              <Button to="/portfolio" variant="outline" className="px-7 py-4">
                View Client Work
              </Button>
            </div>
            <p className="mt-5 text-sm text-indigo-200">Work directly with Nav · Replies within one business day</p>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-200">What the website should do</p>
            <ul className="mt-6 space-y-4">
              {industry.priorities.slice(0, 4).map((priority) => (
                <li key={priority} className="flex items-start gap-3 text-sm leading-relaxed text-white md:text-base">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-white/15">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {priority}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-20 md:py-24" aria-labelledby="industry-challenges-heading">
        <div className="section-shell">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="section-eyebrow">The buying journey</p>
            <h2 id="industry-challenges-heading" className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Your website has to answer the right questions
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {industry.challenges.map((challenge, index) => {
              const icons = [ShieldCheck, LayoutTemplate, MessageSquareText];
              const Icon = icons[index] || HelpCircle;
              return (
                <article key={challenge.title} className="premium-card rounded-3xl border border-slate-200 bg-slate-50 p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-100 text-[#5e17eb]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">{challenge.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{challenge.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24">
        <div className="section-shell grid items-start gap-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="section-eyebrow">Recommended foundation</p>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">What I would prioritize</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {industry.priorities.map((priority) => (
                <li key={priority} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                  {priority}
                </li>
              ))}
            </ul>
          </div>

          <aside className="sticky top-36 rounded-[2rem] border border-indigo-200 bg-white p-8 shadow-[0_28px_70px_-42px_rgba(79,70,229,.6)]">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#5e17eb]">Typical starting point</p>
            <h2 className="mt-4 text-3xl font-black text-slate-950">{industry.packageName}</h2>
            <p className="mt-2 text-2xl font-extrabold text-[#5e17eb]">{industry.packagePrice}</p>
            <p className="mt-5 leading-relaxed text-slate-600">{industry.packageReason}</p>
            <Button to="/services#package-finder" variant="secondary" arrow className="mt-7 w-full px-6 py-3">
              Check Your Best Fit
            </Button>
            <p className="mt-4 text-center text-xs text-slate-500">Final scope is confirmed before work begins.</p>
          </aside>
        </div>
      </section>

      {industry.projects.length > 0 && (
        <section className="bg-white py-20 md:py-24" aria-labelledby="related-work-heading">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="section-eyebrow">Relevant client work</p>
                <h2 id="related-work-heading" className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">
                  See the thinking in context
                </h2>
              </div>
              <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-[#5e17eb]">
                View all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className={`mt-10 grid gap-6 ${industry.projects.length > 1 ? "md:grid-cols-2 xl:grid-cols-3" : "max-w-xl"}`}>
              {industry.projects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/portfolio/${project.slug}`}
                  className="premium-card group rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
                >
                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-indigo-300">Case study</span>
                  <h3 className="mt-4 text-2xl font-extrabold">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{project.context}</p>
                  <span className="mt-7 inline-flex items-center gap-2 font-bold text-white">
                    Explore the project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 bg-slate-50 py-20 md:py-24" aria-labelledby="industry-faq-heading">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="section-eyebrow">Common questions</p>
            <h2 id="industry-faq-heading" className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">
              What clients usually ask
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {industry.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-2xl font-light text-[#5e17eb] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-hero py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Search className="mx-auto h-9 w-9 text-indigo-200" aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-black md:text-4xl">Ready for a website built around your clients?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-indigo-100">
            Tell me what your business needs to improve and I’ll recommend a practical scope—without pushing you into a larger package.
          </p>
          <Button
            to={`/contact?${contactParams.toString()}`}
            arrow
            className="mt-8 px-8 py-4"
            onClick={() => trackEvent("industry_cta_click", { industry: industry.slug, location: "footer" })}
          >
            Book a Free Strategy Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
