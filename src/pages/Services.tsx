import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { websitePackages, carePlans, additionalServices } from "../data/data";
import { Button } from "../components/Button";
import { Tabs } from "../components/Tabs";
import { Card } from "../components/Card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const [showOtherServices, setShowOtherServices] = useState(false);
  const otherServices = [...carePlans, ...additionalServices];

  return (
    <div className="pt-16">
      {/* ================= HERO ================= */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            Affordable, Modern Websites + Care Plans
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            I build fast, SEO-optimized websites designed to convert visitors
            into clients — plus ongoing maintenance, security, and marketing
            support to keep your business growing.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ================= TABS ================= */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 mt-8 text-center"
        initial={fadeInUp.hidden}
        whileInView={fadeInUp.visible}
        viewport={{ once: true }}
      >
        <Tabs
          options={[
            { label: "Website Packages", value: "packages" },
            { label: "Other Services", value: "others" },
          ]}
          selected={showOtherServices ? "others" : "packages"}
          onChange={(val) => setShowOtherServices(val === "others")}
        />
      </motion.section>

      {/* ================= PACKAGES / SERVICES ================= */}
      <motion.section
        className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={fadeInUp.hidden}
        whileInView={fadeInUp.visible}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showOtherServices ? otherServices : websitePackages).map(
            (pkg, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full"
              >
                <Card
                  className={`p-8 flex flex-col h-full transition-transform transform hover:scale-105 ${
                    ["Care", "Plan", "Maintenance"].some((word) =>
                      pkg.title.includes(word)
                    )
                      ? "border-4 border-[#5e17eb] bg-white"
                      : "border border-gray-200 bg-white shadow-lg"
                  }`}
                >
                  {/* Tagline */}
                  {"tagline" in pkg && pkg.tagline && (
                    <div
                      className={`inline-block mb-4 text-xs font-bold px-4 py-2 rounded-full ${
                        ["Care", "Plan", "Maintenance"].some((word) =>
                          pkg.title.includes(word)
                        )
                          ? "bg-[#5e17eb] text-white ring-1 ring-[#5e17eb]"
                          : "bg-gray-100 text-gray-900 shadow-sm ring-gray-300"
                      }`}
                    >
                      {pkg.tagline}
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      ["Care", "Plan", "Maintenance"].some((word) =>
                        pkg.title.includes(word)
                      )
                        ? "text-[#5e17eb]"
                        : "text-gray-900"
                    }`}
                  >
                    {pkg.title}
                  </h3>

                  {/* Price */}
                  {"price" in pkg && (
                    <p className="text-4xl font-bold text-[#5e17eb] mb-6">
                      {pkg.price}
                    </p>
                  )}

                  {/* Features / Description */}
                  <ul className="space-y-4 mb-6 flex-grow">
                    {"features" in pkg &&
                      pkg.features?.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    {"description" in pkg && pkg.description && (
                      <li className="text-gray-600">{pkg.description}</li>
                    )}
                  </ul>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Turn Your Website Into a Lead-Generating Machine?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            If my packages and services match what you’re looking for, let’s
            discuss your project and see how we can grow your business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" className="px-8 py-4 rounded-lg" arrow>
              Get a Free Quote
            </Button>

            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              variant="outline"
              className="px-8 py-4 rounded-lg"
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
