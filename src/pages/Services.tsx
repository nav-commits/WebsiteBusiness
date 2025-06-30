import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const packages = [
    {
      title: "Starter",
      tagline: "Perfect for small local businesses or personal service brands",
      price: "$800",
      features: [
        "Up to 5 custom pages",
        "Mobile responsive design",
        "2 rounds of revisions",
        "Contact form integration",
        "SEO-ready foundation",
        "Hosting & domain setup",
        "Delivery within 1 week",
      ],
    },
    {
      title: "Business",
      tagline: "Ideal for growing local businesses with additional needs",
      price: "$1,200",
      features: [
        "Up to 10 custom pages",
        "Mobile responsive design",
        "3 rounds of revisions",
        "Booking system OR eCommerce",
        "Basic SEO and speed optimization",
        "Hosting, domain & email setup",
        "Delivery within 2–3 weeks",
      ],
    },
    {
      title: "Pro",
      tagline: "Advanced features for scaling service businesses",
      price: "$2,000+",
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
    {
      title: "Basic Maintenance",
      price: "$15/mo",
      features: [
        "Monthly plugin updates",
        "1 backup per month",
        "Basic security checks",
      ],
    },
    {
      title: "Standard Maintenance",
      price: "$35/mo",
      features: [
        "Includes Basic Maintenance",
        "Up to 5 content edits per year",
        "Advanced security monitoring",
      ],
    },
    {
      title: "Premium Maintenance",
      price: "$60/mo",
      features: [
        "Includes Standard Maintenance",
        "Priority support response",
        "Performance optimization checks",
        "Monthly content updates",
        "Comprehensive security monitoring",
      ],
    },
    {
      title: "Logo Design",
      price: "$150",
      description: "2 initial design concepts plus 2 revisions",
    },
    {
      title: "Business Email Setup",
      price: "$100",
      description: "Setup with Google Workspace, Zoho, or similar",
    },
    {
      title: "SEO Package",
      price: "$150",
      description: "On-page SEO optimization and Google tools setup",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-4xl mx-auto">
            Affordable, Modern WordPress Websites Tailored for Local Service
            Businesses
          </h1>
          <p className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            I specialize in designing and developing custom WordPress websites
            that are fast, SEO-optimized, and built to convert visitors into
            clients. Whether you run a local service business or need a
            professional website, I’m here to help you establish an effective
            online presence.
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
