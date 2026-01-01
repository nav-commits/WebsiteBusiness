import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    {
      title: "PSR Law",
      image: "realestate.png",
      description:
        "A dedicated real estate law firm offering expert legal guidance across Ontario. PSR Law is committed to transparency, integrity, and client-focused service—supporting first-time buyers and seasoned investors with professional legal care.",
      features: [
        "Real Estate Legal Services",
        "Clear & Transparent Pricing",
        "Expert Guidance & Support",
        "Client-Focused Solutions",
      ],
      link: "https://psrlaw.ca/",
    },
    {
      title: "Container Storage Solutions",
      image: "/storage.png",
      description:
        "A leading storage terminal in the GTA, offering secure, 24/7 monitored container and trailer storage. With a client-first approach and strategic location in Brampton, they provide flexible, safe, and professional service for the freight and trucking industry.",
      features: [
        "24/7 Secure Storage",
        "Flexible Storage Solutions",
        "Client-First Approach",
        "Strategic Location in GTA",
      ],
      link: "https://containerstorage.solutions",
    },
    {
      title: "Ghankas Law Group",
      image: "vik.jpg",
      description:
        "Family Law specialists based in the Tri-Cities, committed to providing direct, personal legal service. We believe if you hire a lawyer, you should be attended to by a lawyer.",
      features: [
        "Personalized Client Attention",
        "Expert Family Law Services",
        "Clear Communication & Transparency",
        "Trusted Local Legal Representation",
      ],
      link: "https://ghankaslaw.com",
    },
    {
      title: "MARKAT Group Inc.",
      image: "MarkatImage.png",
      description:
        "Founded in Toronto, MARKAT is a boutique advisory & consulting firm built for small and medium-sized businesses. We help ambitious teams scale smart, manage risk, and lead with confidence in a rapidly changing world.",
      features: [
        "Strategic Business Advisory",
        "Risk Management & Compliance",
        "Tailored Growth Strategies",
        "Support for SMBs Ready to Scale",
      ],
      link: "https://www.markatgroup.net/",
    },
    {
      title: "GTA LEC",
      image: "gta-lec.png",
      description:
        "Providing professional electrical contracting and consulting services across the Greater Toronto Area. GTA LEC specializes in residential, commercial, and industrial electrical solutions with a focus on safety and reliability.",
      features: [
        "Residential, Commercial & Industrial Services",
        "Safety & Compliance Focused",
        "Efficient Project Delivery",
        "Client-Centric Solutions",
      ],
      link: "https://gta-lec.ca/",
    },
    {
      title: "VA Analytics Consulting",
      image: "vaanalytics.png",
      description:
        "VA Analytics Consulting helps businesses leverage data to make smarter decisions. From data analysis to visualization and reporting, they provide actionable insights that drive growth and efficiency.",
      features: [
        "Data-Driven Business Solutions",
        "Custom Reporting & Dashboards",
        "Insightful Analysis for Growth",
        "Actionable Recommendations",
      ],
      link: "https://vaanalyticsconsulting.com/",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            My Work
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Check out a few of the websites I've crafted for businesses. Each
            project is designed to not only look great but to drive real results
            and meet business goals.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              } gap-12 items-center bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{project.description}</p>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5e17eb] hover:bg-indigo-700 transition duration-150"
                >
                  Visit Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Turn Your Website Into a Lead Machine?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            If my work and process make sense for your business, let’s talk about
            your project and see if we’re a good fit.
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

export default Portfolio;
