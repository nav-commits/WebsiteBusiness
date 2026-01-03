import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { websitePackages, carePlans, additionalServices } from "../data/data";

const Services = () => {
  const [showOtherServices, setShowOtherServices] = useState(false);

  const otherServices = [...carePlans, ...additionalServices];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const ServiceCard = ({ pkg }) => {
    const isMaintenance = ["Care", "Plan", "Maintenance"].some((word) =>
      pkg.title.includes(word)
    );

    return (
      <motion.div
        className={`relative rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 ${
          isMaintenance
            ? "border-4 border-[#5e17eb] bg-white"
            : "bg-white border border-gray-200 shadow-lg"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {"tagline" in pkg && pkg.tagline && (
          <div
            className={`inline-block mt-5 mx-5 text-xs font-bold px-4 py-2 rounded-full ${
              isMaintenance
                ? "bg-[#5e17eb] text-white ring-1 ring-[#5e17eb]"
                : "bg-gray-100 text-gray-900 shadow-sm ring-gray-300"
            }`}
          >
            {pkg.tagline}
          </div>
        )}
        <div className="p-8 flex-grow">
          <h3
            className={`text-2xl font-bold mb-4 ${
              isMaintenance ? "text-[#5e17eb]" : "text-gray-900"
            }`}
          >
            {pkg.title}
          </h3>
          <p className="text-4xl font-bold text-[#5e17eb] mb-6">{pkg.price}</p>
          <ul className="space-y-4 mb-6">
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
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-16">
      {/* Hero */}
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
            I build fast, SEO-optimized websites designed to convert — and offer
            maintenance, security, and marketing support to keep your business
            growing.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Toggle */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 mt-8 text-center"
        initial={fadeInUp.hidden}
        whileInView={fadeInUp.visible}
        viewport={{ once: true }}
      >
        <div className="inline-flex rounded-full bg-gray-200 p-1 shadow-sm">
          <button
            onClick={() => setShowOtherServices(false)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
              !showOtherServices
                ? "bg-[#5e17eb] text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Website Packages
          </button>
          <button
            onClick={() => setShowOtherServices(true)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
              showOtherServices
                ? "bg-[#5e17eb] text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Other Services
          </button>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={fadeInUp.hidden}
        whileInView={fadeInUp.visible}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showOtherServices
            ? otherServices.map((pkg, i) => <ServiceCard key={i} pkg={pkg} />)
            : websitePackages.map((pkg, i) => (
                <ServiceCard key={i} pkg={pkg} />
              ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Turn Your Website Into a Lead Machine?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            If my approach and services align with what you’re looking for,
            let’s talk about your project and see if we’re a good fit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg text-[#5e17eb] bg-white hover:bg-indigo-50 transition"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="https://calendly.com/navdeep-dhamrait94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg border border-white/40 hover:bg-white/10 transition"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
