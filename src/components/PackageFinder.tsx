import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, RotateCcw, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "./Button";
import { useAnalytics } from "../useAnalystics";

type Answers = {
  industry?: string;
  stage?: string;
  goal?: string;
  investment?: string;
};

type Question = {
  key: keyof Answers;
  label: string;
  helper: string;
  options: Array<{ label: string; value: string; detail: string }>;
};

const questions: Question[] = [
  {
    key: "industry",
    label: "What kind of business do you run?",
    helper: "This helps tailor the recommendation to how your clients make decisions.",
    options: [
      { label: "Law firm", value: "lawyers", detail: "Legal services and professional practices" },
      { label: "Contractor", value: "contractors", detail: "Trades, construction, and home services" },
      { label: "Healthcare", value: "healthcare", detail: "Clinics, practitioners, and health services" },
      { label: "Consulting", value: "consultants", detail: "Consultants and professional services" },
      { label: "Another service business", value: "other", detail: "A different expertise-led business" },
    ],
  },
  {
    key: "stage",
    label: "Where is your website today?",
    helper: "Choose the answer that is closest to your current situation.",
    options: [
      { label: "I do not have one", value: "new", detail: "Starting with a professional foundation" },
      { label: "It needs a redesign", value: "redesign", detail: "The current site feels dated or unclear" },
      { label: "It looks fine but underperforms", value: "underperforming", detail: "Not enough inquiries or visibility" },
      { label: "It needs to support growth", value: "scaling", detail: "More services, locations, or campaigns" },
    ],
  },
  {
    key: "goal",
    label: "What is the most important outcome?",
    helper: "There can be several goals, but pick the one that matters most right now.",
    options: [
      { label: "Look credible", value: "credibility", detail: "Build trust and make the business easier to contact" },
      { label: "Generate more inquiries", value: "leads", detail: "Improve the journey from visitor to consultation" },
      { label: "Improve local visibility", value: "seo", detail: "Create stronger service and location foundations" },
      { label: "Support larger growth plans", value: "growth", detail: "Build a scalable marketing platform" },
    ],
  },
  {
    key: "investment",
    label: "Which investment range feels realistic?",
    helper: "This is not a quote. It simply keeps the recommendation practical.",
    options: [
      { label: "$1,200–$2,000", value: "essentials", detail: "A focused, professional website foundation" },
      { label: "$2,200–$3,500", value: "lead-generation", detail: "More strategy, pages, and conversion planning" },
      { label: "$4,000+", value: "custom-growth", detail: "A more advanced and scalable website" },
      { label: "I am not sure yet", value: "unsure", detail: "Recommend the most sensible starting point" },
    ],
  },
];

const recommendations = {
  essentials: {
    name: "Website Essentials",
    price: "$1,200 CAD",
    summary:
      "A focused professional website that establishes credibility, works smoothly on mobile, and gives visitors a clear way to contact you.",
    reasons: ["Up to 5 core pages", "Mobile-first design", "Basic on-page SEO", "Clear inquiry path"],
    budget: "$1,200–$2,000",
  },
  "lead-generation": {
    name: "Lead Generation Website",
    price: "$2,200–$3,000 CAD",
    summary:
      "A conversion-focused website with deeper service content, stronger SEO foundations, and a customer journey planned around qualified inquiries.",
    reasons: ["Up to 10 pages", "Conversion-focused structure", "Service-page SEO", "Advanced inquiry or booking flow"],
    budget: "$2,000–$3,500",
  },
  "custom-growth": {
    name: "Custom Growth Website",
    price: "$4,000+ CAD",
    summary:
      "A scalable website platform for established businesses with multiple services, audiences, campaigns, locations, or advanced integrations.",
    reasons: ["Custom page architecture", "Advanced integrations", "Multiple conversion journeys", "Growth-ready foundation"],
    budget: "$5,000+",
  },
};

type RecommendationKey = keyof typeof recommendations;

const getRecommendation = (answers: Answers): RecommendationKey => {
  if (answers.investment === "custom-growth" || answers.stage === "scaling" || answers.goal === "growth") {
    return "custom-growth";
  }

  if (
    answers.investment === "lead-generation" ||
    answers.goal === "leads" ||
    answers.goal === "seo" ||
    answers.stage === "underperforming"
  ) {
    return "lead-generation";
  }

  return "essentials";
};

const serviceFromStage: Record<string, string> = {
  new: "New website",
  redesign: "Website redesign",
  underperforming: "SEO and conversion improvements",
  scaling: "Website redesign",
};

const PackageFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [hasStarted, setHasStarted] = useState(false);
  const { trackEvent } = useAnalytics(false);
  const isComplete = step >= questions.length;

  const recommendationKey = useMemo(() => getRecommendation(answers), [answers]);
  const recommendation = recommendations[recommendationKey];
  const currentQuestion = questions[step];

  const chooseAnswer = (value: string) => {
    if (!currentQuestion) return;

    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("package_finder_start", { location: window.location.pathname });
    }

    const nextAnswers = { ...answers, [currentQuestion.key]: value };
    setAnswers(nextAnswers);

    if (step === questions.length - 1) {
      const result = getRecommendation(nextAnswers);
      trackEvent("package_finder_complete", {
        recommendation: result,
        industry: nextAnswers.industry,
        website_stage: nextAnswers.stage,
        primary_goal: nextAnswers.goal,
      });
    }

    window.setTimeout(() => setStep((current) => current + 1), 140);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setHasStarted(false);
    trackEvent("package_finder_restart");
  };

  const contactParams = new URLSearchParams({
    package: recommendationKey,
    service: serviceFromStage[answers.stage || ""] || "Not sure yet",
    budget: recommendation.budget,
    industry: answers.industry || "other",
    source: "package-finder",
  });

  return (
    <section id="package-finder" className="scroll-mt-28 bg-white py-20 md:py-24" aria-labelledby="package-finder-heading">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-eyebrow">60-second package finder</p>
          <h2 id="package-finder-heading" className="mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl">
            Not sure which website package fits?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Answer four quick questions and get a practical recommendation. No email required.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_30px_80px_-48px_rgba(15,23,42,.55)]">
          <div className="border-b border-slate-200 bg-white px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-bold text-slate-900">
                {isComplete ? "Your recommendation" : `Question ${step + 1} of ${questions.length}`}
              </span>
              <span className="text-slate-500">No contact details required</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#5e17eb] to-indigo-500"
                animate={{ width: `${isComplete ? 100 : (step / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <div className="min-h-[500px] p-6 sm:p-8 md:p-10">
            <AnimatePresence mode="wait">
              {!isComplete && currentQuestion ? (
                <motion.div
                  key={currentQuestion.key}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                >
                  <fieldset>
                    <legend className="text-2xl font-extrabold text-slate-950 md:text-3xl">
                      {currentQuestion.label}
                    </legend>
                    <p className="mt-3 text-slate-600">{currentQuestion.helper}</p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {currentQuestion.options.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => chooseAnswer(option.value)}
                          className="group flex min-h-28 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
                        >
                          <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-slate-300 text-transparent transition group-hover:border-[#5e17eb] group-hover:bg-[#5e17eb] group-hover:text-white">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span>
                            <span className="block font-bold text-slate-950">{option.label}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-slate-500">{option.detail}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep((current) => Math.max(0, current - 1))}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-[#5e17eb]"
                    >
                      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                      Previous question
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid items-start gap-8 lg:grid-cols-[1.2fr_.8fr]"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#5e17eb]">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      Best-fit recommendation
                    </span>
                    <h3 className="mt-5 text-3xl font-black text-slate-950 md:text-4xl">{recommendation.name}</h3>
                    <p className="mt-2 text-2xl font-extrabold text-[#5e17eb]">{recommendation.price}</p>
                    <p className="mt-5 text-lg leading-relaxed text-slate-600">{recommendation.summary}</p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Button
                        to={`/contact?${contactParams.toString()}`}
                        variant="secondary"
                        arrow
                        className="px-7 py-3"
                        onClick={() =>
                          trackEvent("package_finder_cta_click", {
                            recommendation: recommendationKey,
                            industry: answers.industry,
                          })
                        }
                      >
                        Discuss My Recommendation
                      </Button>
                      <Button to="/services#pricing" variant="secondary" className="!border-slate-300 !bg-white !bg-none px-7 py-3 !text-[#5e17eb] shadow-none hover:!bg-indigo-50">
                        Compare Packages
                      </Button>
                    </div>

                    <button
                      type="button"
                      onClick={restart}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-[#5e17eb]"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      Start again
                    </button>
                  </div>

                  <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                    <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#5e17eb]">Why it fits</p>
                    <ul className="mt-5 space-y-4">
                      {recommendation.reasons.map((reason) => (
                        <li key={reason} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                          <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 border-t border-slate-100 pt-5 text-xs leading-relaxed text-slate-500">
                      This is a starting recommendation, not a binding quote. Final scope is confirmed after a focused conversation.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageFinder;
