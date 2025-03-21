import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "CMT Security Services",
      image: "security.png",
      description:
        "Committed to protecting your business and community with innovative security solutions. We specialize in Event Security, Residential Security, Commercial Security, Close Security, and Retail Loss Prevention.",
      features: [
        "Comprehensive Security Solutions",
        "Trusted & Professional Team",
        "Client-Focused Approach",
        "24/7 Protection & Reliability",
      ],
      link: "https://cmtsecured.ca/",
    },
    {
      title: "Ajay Kalha Tax Services",
      image: "accounting.png",
      description:
        "We provide comprehensive accounting services tailored to your business needs. From bookkeeping to preparing accurate financial statements, our team ensures your finances are in order, giving you insight and clarity for informed decisions.",
      features: [
        "User-Friendly Navigation",
        "Informative Blog Section",
        "Client Testimonials",
        "Quick Contact & Consultation",
      ],
      link: "https://aktax.org/",
    },
    {
      title: "The Healing Hive",
      image: "/Psychotherapy.png",
      description:
        "Providing compassionate therapy services for anxiety, self-worth, life transitions, and trauma through virtual sessions across Canada.",
      features: [
        "Booking System",
        "Comprehensive Services Overview",
        "Meet the Therapist Section",
        "Secure & Confidential Contact",
      ],
      link: "https://thehealinghive.net/",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            My Work
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Check out a few of the websites I've crafted for businesses. Each
            project is designed to not only look great but to drive real results
            and meet business goals.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
