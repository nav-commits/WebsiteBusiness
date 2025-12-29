import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const [showOtherServices, setShowOtherServices] = useState(false);

  const websitePackages = [
    {
      title: "Starter Website",
      tagline: "Perfect for small local businesses or personal brands",
      price: "From $700",
      features: [
        "Up to 5 custom pages (e.g., Home, About, Services, Contact, Blog)",
        "Mobile responsive design for all devices",
        "2 rounds of revisions for the entire site (content or layout changes)",
        "Extra page changes after 2 revisions: $50 per page",
        "Contact form integration",
        "SEO-ready foundation (metadata, sitemap, Google Search Console setup)",
        "Delivery within 1 week after content is provided",
        "Hosting and domain are separate; I guide setup but client pays hosting",
      ],
    },
    {
      title: "Business Website",
      tagline: "Ideal for growing local businesses with extra features",
      price: "From $1,200",
      features: [
        "Up to 10 custom pages",
        "Mobile responsive design",
        "2 rounds of revisions for the entire site (content or layout changes)",
        "Extra page changes after 2 revisions: $50 per page",
        "Booking system OR eCommerce integration (your choice)",
        "Basic SEO and speed optimization",
        "Delivery within 2–3 weeks after content is provided",
        "Hosting and domain are separate; I guide setup but client pays hosting",
      ],
    },
    {
      title: "Pro Website",
      tagline: "Advanced features for scaling service businesses",
      price: "From $1,800",
      features: [
        "Unlimited custom pages",
        "Mobile responsive design",
        "2 rounds of revisions for the entire site (content or layout changes)",
        "Extra page changes after 2 revisions: $50 per page",
        "Booking + eCommerce + Courses integration",
        "Advanced SEO, speed & security enhancements",
        "Includes all Business package features plus custom solutions",
        "Delivery within 3–5 weeks after content is provided",
        "Hosting and domain are separate; I guide setup but client pays hosting",
      ],
    },
  ];

  const carePlans = [
    {
      title: "Essential Maintenance",
      tagline: "Yearly updates & security",
      price: "$150 / year",
      features: [
        "Annual platform, plugin, and integration updates",
        "Weekly backups",
        "Basic security monitoring",
        "Up to 2 small content updates per year (text, images, minor layout tweaks)",
      ],
    },
    {
      title: "Business Growth Plan",
      tagline: "Care + light content support",
      price: "$400 / year",
      features: [
        "All Essential Maintenance features",
        "Up to 5 small content updates per year (text, images, minor layout tweaks)",
        "Advanced security monitoring",
        "Quarterly website performance checks",
      ],
    },
    {
      title: "Full Growth + Marketing",
      tagline: "Care + marketing support",
      price: "$1,000 / year",
      features: [
        "All Business Growth features",
        "Up to 12 content updates per year (text, images, minor layout tweaks, promotional changes)",
        "Monthly blog posts or promo updates",
        "Local SEO & Google My Business maintenance",
        "Conversion optimization",
        "Monthly analytics reports",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "SEO Package",
      price: "$150",
      description: "Complete on-page SEO to help your site rank well on Google",
      features: [
        "Optimize page titles, meta descriptions, and headings",
        "Set up Google Search Console and Analytics",
        "Submit XML sitemap to Google",
        "Optimize images for SEO (alt text, file names, compression)",
        "Internal linking and URL structure review",
        "Basic keyword optimization for up to 5 main pages",
        "Ensure mobile-friendly and fast-loading pages",
      ],
    },
    {
      title: "Business Email Setup",
      price: "$100",
      description: "Setup with Google Workspace, Zoho, or similar",
    },
    {
      title: "Logo Design",
      price: "$200",
      description:
        "Includes 2 initial design concepts and 2 full revisions for your chosen logo. Extra revisions or major changes are $50 per revision. Delivery includes vector (AI, SVG), PNG, and JPEG files.",
    },
  ];

  const otherServices = [...carePlans, ...additionalServices];

  // Animation variants
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
        <div className="p-8">
          <Link
            to="/contact"
            className="block w-full text-center px-6 py-3 text-base font-medium rounded-md text-white bg-[#5e17eb] hover:bg-[#4b12c9] focus:outline-none focus:ring-2 focus:ring-[#5e17eb] flex items-center justify-center"
          >
            {isMaintenance ? "Start My Plan" : "Build My Website"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
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
            I design fast, SEO-optimized websites built to convert — and provide
            ongoing maintenance, security, and marketing plans to keep your
            business growing.
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
            : websitePackages.map((pkg, i) => <ServiceCard key={i} pkg={pkg} />)}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-16 bg-white"
        initial={fadeInUp.hidden}
        whileInView={fadeInUp.visible}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project or Care Plan?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let’s discuss your website and growth needs and create a solution
            that works for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-[#5e17eb] hover:bg-[#4b12c9] focus:outline-none focus:ring-2 focus:ring-[#5e17eb]"
          >
            Contact Me Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
