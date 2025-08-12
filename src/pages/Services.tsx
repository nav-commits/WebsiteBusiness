import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Website Packages (no hosting included)
  const websitePackages = [
    {
      title: "Starter Website",
      tagline: "Perfect for small local businesses or personal brands",
      price: "$1,000",
      features: [
        "Up to 5 custom pages",
        "Mobile responsive design",
        "2 rounds of revisions",
        "Contact form integration",
        "SEO-ready foundation",
        "Delivery within 1 week",
      ],
    },
    {
      title: "Business Website",
      tagline: "Ideal for growing local businesses with extra features",
      price: "$1,500",
      features: [
        "Up to 10 custom pages",
        "Mobile responsive design",
        "3 rounds of revisions",
        "Booking system OR eCommerce",
        "Basic SEO and speed optimization",
        "Delivery within 2–3 weeks",
      ],
    },
    {
      title: "Pro Website",
      tagline: "Advanced features for scaling service businesses",
      price: "From $2,000",
      features: [
        "Unlimited custom pages",
        "Mobile responsive design",
        "4 rounds of revisions",
        "Booking + eCommerce + Courses integration",
        "Advanced SEO, speed & security enhancements",
        "Includes all Business package features plus custom solutions",
        "Delivery within 3–5 weeks",
      ],
    },
  ];

  // Care & Maintenance Plans (no hosting included)
  const carePlans = [
    {
      title: "Essential Maintenance",
      tagline: "Updates and security in one plan",
      price: "$25/mo or $250/year",
      features: [
        "Monthly plugin & WordPress updates",
        "Weekly backups",
        "Basic security checks",
      ],
    },
    {
      title: "Business Growth Plan",
      tagline: "Care and content updates",
      price: "$60/mo or $600/year",
      features: [
        "All Essential features",
        "Up to 5 small content edits per year",
        "Advanced security monitoring",
        "Monthly website performance checks",
      ],
    },
    {
      title: "Full Growth + Marketing",
      tagline: "Care and marketing in one package",
      price: "$175/mo",
      features: [
        "All Business Growth features",
        "Monthly blog posts or promo updates",
        "Local SEO tweaks & Google My Business updates",
        "Conversion optimization",
        "Monthly analytics & reports",
      ],
    },
  ];

  // Simplified Additional Services with domain registration as optional service
  const additionalServices = [
    {
      title: "Domain Registration Setup (Optional)",
      price: "$20–$30 (one-time fee) plus domain cost",
      description:
        "I can register and set up your domain for you if you prefer — domain cost not included. Clients may also buy their own domain and provide access.",
    },
    {
      title: "SEO Package",
      price: "$150",
      description: "On-page SEO optimization and Google tools setup",
    },
    {
      title: "Business Email Setup",
      price: "$100",
      description: "Setup with Google Workspace, Zoho, or similar",
    },
    {
      title: "Logo Design",
      price: "$150",
      description: "2 initial design concepts plus 2 revisions",
    },
    {
      title: "Ecommerce Support & Maintenance",
      price: "$100/month",
      description: "Ongoing ecommerce site maintenance & product updates",
      features: [
        "Product additions and updates",
        "Payment gateway checks",
        "Promo code and discount setup",
      ],
    },
  ];

  // Card component
  const ServiceCard = ({
    pkg,
  }: {
    pkg:
      | typeof websitePackages[0]
      | typeof carePlans[0]
      | typeof additionalServices[0];
  }) => {
    const isMaintenance = ["Care", "Plan", "Maintenance"].some((word) =>
      pkg.title.includes(word)
    );

    return (
      <div
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 ${
          isMaintenance ? "border-4 border-indigo-600 bg-indigo-50" : ""
        }`}
      >
        {"tagline" in pkg && pkg.tagline && (
          <div
            className={`inline-block mt-5 mx-5 text-xs font-bold px-4 py-2 rounded-full ${
              isMaintenance
                ? "bg-indigo-600 text-white shadow-md ring-1 ring-indigo-800"
                : "bg-gradient-to-r from-gray-300 to-gray-100 text-gray-900 shadow-sm ring-gray-300"
            }`}
          >
            {pkg.tagline}
          </div>
        )}
        <div className="p-8 flex-grow">
          <h3
            className={`text-2xl font-bold mb-4 ${
              isMaintenance ? "text-indigo-700" : "text-gray-900"
            }`}
          >
            {pkg.title}
          </h3>
          <p className="text-4xl font-bold text-indigo-600 mb-6">{pkg.price}</p>
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
            className="block w-full text-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center"
          >
            {isMaintenance
              ? "Get Started with This Plan"
              : "Start Your Project Now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-4xl mx-auto">
            Affordable, Modern WordPress Websites + Care Plans
          </h1>
          <p className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            I design fast, SEO-optimized WordPress websites built to convert —
            and provide ongoing maintenance, security, and marketing plans to
            keep your business growing.
          </p>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Website Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websitePackages.map((pkg, i) => (
            <ServiceCard key={i} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Care Plans */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Care & Maintenance Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carePlans.map((pkg, i) => (
            <ServiceCard key={i} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular Add-Ons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((pkg, i) => (
            <ServiceCard key={i} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Start Your Project or Care Plan?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let’s discuss your website and growth needs and create a solution
            that works for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Contact Me Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
