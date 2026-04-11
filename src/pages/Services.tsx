// src/pages/Services.tsx
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<
    "packages" | "care" | "addons"
  >("packages");

  // ✅ DIRECT FROM DATA FILE (NO SANITY, NO STATE, NO EFFECTS)
  const packages = services.filter((s) => s.category === "package");
  const care = services.filter((s) => s.category === "care");
  const addons = services.filter((s) => s.category === "addon");

  const getData = () => {
    if (activeTab === "packages") return packages;
    if (activeTab === "care") return care;
    return addons;
  };

  return (
    <>
      <Helmet>
        <title>
          Toronto Web Design Services | Websites That Generate Leads
        </title>
        <meta
          name="description"
          content="Professional Toronto web design services for service businesses. Conversion-focused, SEO-optimized websites that generate leads, calls, and clients."
        />
      </Helmet>

      <div className="pt-16">
        {/* ================= HERO (UNCHANGED) ================= */}
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
              Toronto Web Design Services for Businesses That Want More Leads
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-indigo-200 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              I design and build high-converting, SEO-optimized websites for
              Toronto service businesses — helping you generate more calls,
              bookings, and clients.
            </motion.p>

            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              className="px-8 py-4"
            >
              Book a Free Call
            </Button>

            <p className="text-sm text-indigo-200 mt-6">
              Serving Toronto & the GTA — contractors, service businesses, and small companies.
            </p>
          </motion.div>
        </motion.section>

        {/* ================= TABS (UNCHANGED) ================= */}
        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center"
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
        >
          <Tabs
            options={[
              { label: "Website Packages", value: "packages" },
              { label: "Care Plans", value: "care" },
              { label: "Add-Ons", value: "addons" },
            ]}
            selected={activeTab}
            onChange={(value) =>
              setActiveTab(value as "packages" | "care" | "addons")
            }
          />
        </motion.section>

        {/* ================= GRID (UNCHANGED UI) ================= */}
        <motion.section
          className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getData().map((pkg, i) => {
              const isPremium =
                ["Care", "Plan", "Maintenance"].some((word) =>
                  pkg.title.includes(word)
                );

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
                    className={`flex flex-col h-full p-8 transition-transform transform hover:scale-105 ${
                      isPremium
                        ? "border-4 border-[#5e17eb] bg-white shadow-lg"
                        : "border border-gray-200 bg-white shadow-sm"
                    }`}
                  >
                    {/* TAGLINE */}
                    {pkg.tagline && (
                      <div className="inline-block mb-4 text-xs font-bold px-4 py-2 rounded-full bg-gray-100 text-gray-900">
                        {pkg.tagline}
                      </div>
                    )}

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {pkg.title}
                    </h3>

                    {/* PRICE */}
                    {pkg.price && (
                      <p className="text-4xl font-bold text-[#5e17eb] mb-6">
                        {pkg.price}
                      </p>
                    )}

                    {/* FEATURES */}
                    <ul className="space-y-4 mb-4 flex-grow">
                      {pkg.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}

                      {pkg.description && (
                        <li className="text-gray-600">
                          {pkg.description}
                        </li>
                      )}
                    </ul>

                    {/* SUPPORT */}
                    {pkg.support && (
                      <p className="mt-4 text-sm text-gray-500 italic">
                        {pkg.support}
                      </p>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ================= SEO + CTA (UNCHANGED) ================= */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Websites Built to Rank and Convert in Toronto
            </h2>

            <p className="text-gray-600 mb-4">
              A website isn’t just about design — it’s about getting found and turning visitors into customers.
            </p>

            <p className="text-gray-600">
              My web design services focus on SEO structure, fast performance,
              and clear messaging so your business stands out in Toronto search results.
            </p>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Let’s Build a Website That Brings You Clients
            </h2>

            <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
              Whether you need a new website or want to improve your current one,
              I’ll help you turn it into a lead-generating asset.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" className="px-8 py-4">
                Get a Free Quote
              </Button>

              <Button
                href="https://calendly.com/navdeep-dhamrait94"
                variant="outline"
                className="px-8 py-4"
              >
                Book a Free Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;