import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "../components/Button";
import { Tabs } from "../components/Tabs";
import { Card } from "../components/Card";

import { services } from "../data/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const [activeTab, setActiveTab] =
    useState<"packages" | "care">("packages");

  const audit = services.find((s) => s.category === "audit");
  const packages = services.filter((s) => s.category === "package");
  const care = services.filter((s) => s.category === "care");

  const getData = () => {
    if (activeTab === "packages") return packages;
    return care;
  };

  return (
    <>
      <Helmet>
        <title>
          Toronto Web Design Packages for Law Firms & High-Trust Service Businesses
        </title>
        <meta
          name="description"
          content="Transparent Toronto web design packages for law firms and high-trust service businesses. Conversion strategy, local SEO foundations, responsive design, and clear project timelines."
        />
        <link rel="canonical" href="https://navwebdesign.com/services" />
      </Helmet>

      <div className="pt-28">

        {/* ================= HERO ================= */}
        <motion.section
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-5xl mx-auto px-6"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-6"
              variants={fadeInUp}
            >
              Websites Built for Trust, Qualified Leads & Growth
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-indigo-200 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Transparent website packages for Toronto law firms and high-trust service businesses that need credibility, clear messaging, and more qualified inquiries.
            </motion.p>

            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              className="px-8 py-4"
            >
              Book a Free Strategy Consultation
            </Button>

            <p className="text-sm text-indigo-200 mt-6">
              Serving Toronto, Brampton, Mississauga & surrounding GTA regions.
            </p>
          </motion.div>
        </motion.section>

        {/* ================= TABS ================= */}
        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center"
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5e17eb] mb-3">
            Transparent pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Choose the level of strategy your business needs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Each package includes responsive design, launch support, and a clear scope. The difference is how much content, conversion strategy, and growth infrastructure your website needs.
          </p>
          <Tabs
            options={[
              { label: "Website Packages", value: "packages" },
              { label: "Care Plans", value: "care" },
            ]}
            selected={activeTab}
            onChange={(value) =>
              setActiveTab(value as "packages" | "care")
            }
          />
          <p className="mt-6 text-sm text-gray-600">
            All prices are in Canadian dollars. Final scope is confirmed before work begins—no surprise fees.
          </p>
        </motion.section>

        {/* ================= PACKAGES / CARE GRID ================= */}
        <motion.section
          className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getData().map((pkg, i) => {
              const isPremium =
                pkg.title === "Lead Generation Website (Most Popular)";

              return (
                <motion.div
                  key={pkg.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="h-full"
                >
               <Card
  className={`premium-card flex flex-col h-full p-8 ${
    isPremium
      ? "border-4 border-[#5e17eb] bg-white shadow-xl"
      : "border border-gray-200 bg-white shadow-sm"
  }`}
>
  {isPremium && (
    <div className="mb-4 inline-block rounded-full bg-[#5e17eb] px-4 py-2 text-xs font-bold text-white">
      ⭐ MOST POPULAR
    </div>
  )}

  <div className="inline-block mb-4 text-xs font-bold px-4 py-2 rounded-full bg-gray-100 text-gray-900">
    {pkg.tagline}
  </div>

  <h3 className="text-2xl font-bold text-gray-900 mb-2">
    {pkg.title}
  </h3>

  <p className="text-4xl font-extrabold text-[#5e17eb] mb-8">
    {pkg.price}
  </p>

  {pkg.outcome && (
    <div className="mb-7 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">Expected outcome</p>
      <p className="text-sm leading-relaxed text-gray-700">{pkg.outcome}</p>
    </div>
  )}

  {/* Key features stay visible for quick comparison. */}

  <ul className="space-y-3 mb-6">
    {pkg.features.slice(0, 5).map((feature, idx) => (
      <li key={idx} className="flex items-start">
        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
        <span className="text-gray-600 text-sm">
          {feature}
        </span>
      </li>
    ))}
  </ul>

  {/* Timeline */}

  {pkg.timeline && (
    <>
      <div className="border-t my-6" />

      <h4 className="font-semibold text-gray-900 mb-1">
        Timeline
      </h4>

      <p className="text-sm text-gray-600">
        {pkg.timeline}
      </p>
    </>
  )}

  {/* Best For */}

  {pkg.bestFor && (
    <>
      <div className="border-t my-6" />

      <h4 className="font-semibold text-gray-900 mb-2">
        Best For
      </h4>

      <p className="text-sm text-gray-600">
        {pkg.bestFor}
      </p>
    </>
  )}

  {/* Secondary details expand in place instead of lengthening every card. */}
  {(pkg.features.length > 5 || pkg.clientProvides || pkg.notIdealFor || pkg.note) && (
    <details className="group mt-6 rounded-xl border border-indigo-100 bg-indigo-50/50 open:bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#5e17eb] transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5e17eb] [&::-webkit-details-marker]:hidden">
        <span>
          <span className="group-open:hidden">See everything included</span>
          <span className="hidden group-open:inline">Hide package details</span>
        </span>
        <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border-t border-indigo-100 px-4 py-5">
        {pkg.features.length > 5 && (
          <div className="mb-5">
            <h4 className="font-semibold text-gray-900 mb-3">Additional features</h4>
            <ul className="space-y-2">
              {pkg.features.slice(5).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pkg.clientProvides && (
          <div className="mb-5">
            <h4 className="font-semibold text-gray-900 mb-3">What I’ll need from you</h4>
            <ul className="space-y-2">
              {pkg.clientProvides.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pkg.notIdealFor && (
          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Not ideal for</h4>
            <p className="text-sm text-gray-600">{pkg.notIdealFor}</p>
          </div>
        )}

        {pkg.note && (
          <p className="text-xs text-gray-500 mt-4 italic">{pkg.note}</p>
        )}
      </div>
    </details>
  )}

  {/* CTA */}

{/* CTA */}
<div className="mt-auto pt-8">
  <Button
    href="https://calendly.com/navdeep-dhamrait94"
    variant="secondary"
    className="w-full py-3"
    arrow
  >
    Discuss This Package
  </Button>
</div>
</Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ================= STRATEGY CONSULTATION ================= */}
        {audit && (
          <motion.section
            className="max-w-5xl mx-auto px-4 mt-20 mb-20  sm:px-6 lg:px-8 mt-20"
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">

              {/* background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-80" />

              <div className="relative p-8 md:p-10 text-center">

                {/* badge */}
                <div className="inline-block mb-4 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold text-white tracking-wide">
                  FREE STRATEGY CONSULTATION
                </div>

                {/* title */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                  {audit.title}
                </h2>

                {/* tagline */}
                <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-5">
                  {audit.tagline}
                </p>

                {/* price */}
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
                  {audit.price}
                </div>

                {/* features */}
                <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto text-left mb-8">
                  {audit.features?.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white/80 border border-gray-100 rounded-xl p-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    href="https://calendly.com/navdeep-dhamrait94"
                    className="px-6 py-3 text-base"
                    variant="secondary"
                  >
                    Book a Free Strategy Consultation
                  </Button>
                </div>

                {/* note */}
                <p className="text-xs text-gray-500 mt-5 max-w-xl mx-auto">
                  {audit.note}
                </p>

              </div>
            </div>
          </motion.section>
        )}

        {/* ================= CTA ================= */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Ready to Get More Clients From Your Website?
            </h2>

            <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
              Tell me about your business and I’ll recommend the right scope—without pushing you into a larger package.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" className="px-8 py-4">
                Book a Free Strategy Consultation
              </Button>

              <Button to="/portfolio" variant="outline" className="px-8 py-4">
                View Client Work
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Services;
