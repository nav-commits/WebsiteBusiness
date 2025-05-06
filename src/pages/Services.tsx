import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const packages = [
    {
      title: "Starter",
      tagline: "Great for small businesses or personal brands",
      price: "$800",
      features: [
        "Up to 5 pages",
        "Mobile responsive",
        "2 rounds of revisions",
        "Contact form",
        "SEO-ready",
        "Setup hosting/domain",
        "Delivery: 1 week",
      ],
    },
    {
      title: "Business",
      tagline: "For growing businesses with more needs",
      price: "$1,200",
      features: [
        "Up to 10 pages",
        "Mobile responsive",
        "3 rounds of revisions",
        "Booking OR eCommerce",
        "Basic SEO + speed boost",
        "Hosting/domain + email setup",
        "Delivery: 2–3 weeks",
      ],
    },
    {
      title: "Pro",
      tagline: "Best for scaling businesses and advanced features",
      price: "$2,000+",
      features: [
        "Unlimited pages",
        "Mobile responsive",
        "4 rounds of revisions",
        "Booking + eCommerce + Courses",
        "Advanced SEO + speed + security",
        "Everything in Business, plus custom features",
        "Delivery: 3–5 weeks",
      ],
    },
    {
      title: "Basic Maintenance",
      price: "$15/mo",
      features: ["Plugin updates", "1 backup/month", "Basic security checks"],
    },
    {
      title: "Standard Maintenance",
      price: "$35/mo",
      features: [
        "Everything in Basic",
        "5 content edits/year",
        "Advanced security checks",
      ],
    },
    {
      title: "Premium Maintenance",
      price: "$60/mo",
      features: [
        "Everything in Standard",
        "Priority support",
        "Performance checks",
        "Monthly content updates",
        "Security monitoring",
      ],
    },
    {
      title: "Logo Design",
      price: "$150",
      description: "2 initial concepts + 2 revisions",
    },
    {
      title: "Business Email Setup",
      price: "$100",
      description: "Google Workspace, Zoho, etc.",
    },
    {
      title: "SEO Package",
      price: "$150",
      description: "On-page SEO, Google tools setup",
    },
    {
      title: "Memberships/Courses",
      price: "$400",
      description: "Sell content, gated features",
    },
    {
      title: "Multi-language Setup",
      price: "$300",
      description: "Expand to new markets",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Affordable & Modern WordPress Websites for Your Business
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            As a web developer and designer, I craft custom, high-performance
            WordPress websites that help businesses of all sizes build a strong,
            effective online presence.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titles/Headings */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              My Service Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the package that suits your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const isMaintenance =
                pkg.title.includes("Maintenance") ||
                pkg.title === "Maintenance Add-ons";

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 ${
                    isMaintenance
                      ? "border-4 border-indigo-600 bg-indigo-50"
                      : ""
                  }`}
                >
                  {/* Badge */}
                  {pkg.tagline && (
                    <div
                      className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                        isMaintenance
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {pkg.tagline}
                    </div>
                  )}

                  <div className="p-8 flex-grow mt-4">
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        isMaintenance ? "text-indigo-700" : "text-gray-900"
                      }`}
                    >
                      {pkg.title}
                    </h3>
                    <p className="text-4xl font-bold text-indigo-600 mb-6">
                      {pkg.price}
                    </p>
                    <ul className="space-y-4 mb-6">
                      {pkg.features?.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                      {pkg.description && (
                        <li className="text-gray-600">{pkg.description}</li>
                      )}
                    </ul>
                  </div>
                  <div className="p-8">
                    <Link
                      to="/contact"
                      className="block w-full text-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center"
                    >
                      Start Your Project Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your website needs and create a solution that works
            for your business.
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
