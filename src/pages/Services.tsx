import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const packages = [
    {
      title: "Starter Website",
      tagline: "Perfect for small businesses or personal brands",
      price: "$800",
      features: [
        "Client provides hosting & domain — I handle the setup",
        "1–5 page modern WordPress website (Home, About, Services, Contact, etc.)",
        "Mobile-friendly and responsive design",
        "2 rounds of revisions",
        "Delivery: 1 week",
      ],
    },
    {
      title: "Business Website",
      tagline: "Ideal for growing businesses needing extra features",
      price: "$1,200",
      features: [
        "Client provides hosting & domain — I handle the setup",
        "Everything in Starter Website, PLUS:",
        "Blog, Booking System, or E-commerce Setup (includes cart, checkout, and payment integration)",
        "Optional advanced features: Memberships, Online Courses, Multi-language, Directories & more",
        "Security & Performance Enhancements",
        "3 rounds of revisions",
        "Delivery: 2–4 weeks",
      ],
    },
    {
      title: "Ongoing Maintenance & Support",
      tagline: "Keep your website healthy and updated",
      price: "$150/year",
      features: [
        "Up to 10 content updates per year",
        "Monthly plugin & theme updates",
        "Performance & security scans",
        "1 free backup/month + restore",
        "Priority support",
        "Coverage: 12 months",
      ],
    },
    {
      title: "SEO Package",
      tagline: "Boost visibility & get discovered online",
      price: "$150",
      features: [
        "On-page SEO optimization (keywords, meta tags, URL structure)",
        "Google Search Console & Analytics setup",
        "Sitemap & robots.txt creation",
        "SEO audit and recommendations",
        "1 round of revisions",
        "Delivery: 1–2 weeks",
      ],
    },
  ];

  return (
    <div className="pt-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const badgeTextMap: Record<
                | "Starter Website"
                | "Business Website"
                | "Ongoing Maintenance & Support"
                | "SEO Package",
                string
              > = {
                "Starter Website": "Starter",
                "Business Website": "Most Popular",
                "Ongoing Maintenance & Support": "Recommended",
                "SEO Package": "Add-On",
              };

              const isRecommended =
                pkg.title === "Business Website" ||
                pkg.title === "Ongoing Maintenance & Support";

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 ${
                    isRecommended
                      ? "border-4 border-indigo-600 bg-indigo-50"
                      : ""
                  }`}
                >
                  {/* Badge */}
                  <div
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                      isRecommended
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {badgeTextMap[pkg.title as keyof typeof badgeTextMap]}
                  </div>

                  <div className="p-8 flex-grow mt-4">
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        isRecommended ? "text-indigo-700" : "text-gray-900"
                      }`}
                    >
                      {pkg.title}
                    </h3>
                    <p className="text-4xl font-bold text-indigo-600 mb-6">
                      {pkg.price}
                    </p>
                    <ul className="space-y-4 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
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
