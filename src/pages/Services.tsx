// src/pages/Services.tsx
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { client } from "../SanityClient/sanityClient";
import { Button } from "../components/Button";
import { Tabs } from "../components/Tabs";
import { Card } from "../components/Card";

export interface WebsitePackage {
  _id: string;
  type: "websitePackage" | "carePlan" | "additionalService";
  title: string;
  tagline?: string;
  price?: string;
  features: string[];
  description?: string;
  support?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<"packages" | "others">("packages");
  const [websitePackages, setWebsitePackages] = useState<WebsitePackage[]>([]);
  const [otherServices, setOtherServices] = useState<WebsitePackage[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const all: WebsitePackage[] = await client.fetch(`*[_type == "websitePackage"]{
        _id,
        title,
        type,
        tagline,
        price,
        features,
        description,
        support
      }`);
      setWebsitePackages(all.filter(item => item.type === "websitePackage"));
      setOtherServices(all.filter(item => item.type !== "websitePackage"));
    };
    fetchServices();
  }, []);

  return (
    <div className="pt-16">
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
            Services Designed to Turn Your Website Into a Lead-Generating Machine
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-indigo-200 mb-10 leading-relaxed"
            variants={fadeInUp}
          >
            I build fast, conversion-focused websites and provide ongoing care plans, maintenance, and marketing support — everything you need to grow your business online.
          </motion.p>

          <Button
            href="https://calendly.com/navdeep-dhamrait94"
            className="px-8 py-4"
          >
            Book a Free Call
          </Button>
        </motion.div>
      </motion.section>

      {/* ================= TABS ================= */}
      <motion.section
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center"
        initial={fadeInUp.hidden}
        whileInView={fadeInUp.visible}
        viewport={{ once: true }}
      >
        <Tabs
          options={[
            { label: "Website Packages", value: "packages" },
            { label: "Other Services", value: "others" },
          ]}
          selected={activeTab}
          onChange={(value) => setActiveTab(value as "packages" | "others")}
        />
      </motion.section>

      {/* ================= PACKAGES / SERVICES ================= */}
      <motion.section
        className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={fadeInUp.hidden}
        whileInView={fadeInUp.visible}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "packages" ? websitePackages : otherServices).map(
            (pkg, i) => {
              const isPremium =
                ["Care", "Plan", "Maintenance"].some((word) =>
                  pkg.title.includes(word)
                );
              return (
                <motion.div
                  key={pkg._id}
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
                    {pkg.tagline && (
                      <div
                        className={`inline-block mb-4 text-xs font-bold px-4 py-2 rounded-full ${
                          isPremium
                            ? "bg-[#5e17eb] text-white ring-1 ring-[#5e17eb]"
                            : "bg-gray-100 text-gray-900 ring-gray-300 shadow-sm"
                        }`}
                      >
                        {pkg.tagline}
                      </div>
                    )}

                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        isPremium ? "text-[#5e17eb]" : "text-gray-900"
                      }`}
                    >
                      {pkg.title}
                    </h3>

                    {pkg.price && (
                      <p className="text-4xl font-bold text-[#5e17eb] mb-6">
                        {pkg.price}
                      </p>
                    )}

                    <ul className="space-y-4 mb-4 flex-grow">
                      {pkg.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}

                      {pkg.description && (
                        <li className="text-gray-600">{pkg.description}</li>
                      )}
                    </ul>

                    {pkg.support && (
                      <p className="mt-4 text-sm text-gray-500 italic">
                        {pkg.support}
                      </p>
                    )}
                  </Card>
                </motion.div>
              );
            }
          )}
        </div>
      </motion.section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Let’s Build a Website That Actually Brings You Clients
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            Whether it’s a full website package or ongoing care plan, I’ll help you turn your website into a lead-generating machine.
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