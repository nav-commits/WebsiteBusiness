import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import IndustryPathways from "../components/IndustryPathways";
import PackageFinder from "../components/PackageFinder";

const Industries = () => (
  <div className="pt-24 lg:pt-28">
    <Helmet>
      <title>Web Design for Toronto Service Businesses | Industries</title>
      <meta
        name="description"
        content="Industry-focused Toronto web design for law firms, contractors, healthcare providers, consultants, and other service businesses across the GTA."
      />
      <link rel="canonical" href="https://navwebdesign.com/industries" />
    </Helmet>

    <section className="page-hero py-20 text-center text-white md:py-28">
      <motion.div
        className="mx-auto max-w-5xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-100">
          Industry-focused website strategy
        </p>
        <h1 className="text-4xl font-black md:text-6xl">
          Websites Designed Around How Your Clients Choose
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-indigo-100 md:text-xl">
          A law firm, contractor, clinic, and consulting practice should not follow the same generic website template. Explore the approach that fits your market.
        </p>
        <a
          href="#industries"
          className="mt-9 inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"
        >
          Choose your industry
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </a>
      </motion.div>
    </section>

    <IndustryPathways compact />

    <section className="border-y border-slate-200 bg-slate-950 py-16 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        {[
          ["Specific messaging", "Speak to the real questions and objections your buyers have before they contact you."],
          ["Relevant proof", "Connect each market to work, trust signals, and experience that make sense for that audience."],
          ["A clear next step", "Guide visitors toward the right consultation, booking, quote, or inquiry path."],
        ].map(([title, description]) => (
          <div key={title} className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-extrabold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <PackageFinder />
  </div>
);

export default Industries;
