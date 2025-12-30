import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Featured Projects
const projects = [
  {
    img: "/security.png",
    alt: "CMT Security Services",
    title: "CMT Security Services",
    description:
      "Committed to protecting your business and community with innovative security solutions. Specializing in event, residential, and commercial security.",
    link: "/portfolio",
  },
  {
    img: "/accounting.png",
    alt: "Ajay Kalha Tax Services",
    title: "Ajay Kalha Tax Services",
    description:
      "Comprehensive accounting services including bookkeeping and financial reporting to help businesses make informed decisions.",
    link: "/portfolio",
  },
  {
    img: "/Psychotherapy.png",
    alt: "The Healing Hive",
    title: "The Healing Hive",
    description:
      "Compassionate virtual therapy services across Canada focused on anxiety, trauma, and life transitions.",
    link: "/portfolio",
  },
  {
    img: "/realestate.png",
    alt: "PSR Law",
    title: "PSR Law",
    description:
      "Ontario-based real estate law firm delivering transparent, client-first legal services.",
    link: "/portfolio",
  },
  {
    img: "/storage.png",
    alt: "Container Storage Solutions",
    title: "Container Storage Solutions",
    description:
      "Secure 24/7 monitored container and trailer storage in the GTA for freight and trucking companies.",
    link: "/portfolio",
  },
  {
    img: "/vik.jpg",
    alt: "Vik Ghankas Law Group",
    title: "Vik Ghankas Law Group",
    description:
      "Family law firm serving the Lower Mainland with direct lawyer-to-client communication.",
    link: "/portfolio",
  },
  {
    img: "/MarkatImage.png",
    alt: "MARKAT Group Inc.",
    title: "MARKAT Group Inc.",
    description:
      "Toronto-based advisory firm helping SMBs scale, manage risk, and lead with confidence.",
    link: "/portfolio",
  },
];

// Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div className="pt-16">
      {/* ================= HERO ================= */}
      <motion.section
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Websites That Help Local Businesses Get More Leads
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-indigo-200"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Custom-designed, SEO-optimized websites built for Toronto’s service
            professionals.
          </motion.p>

          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition"
            >
              Let’s Build Your Website
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="/SMS_0310 Navdeep Dhamrait.jpg"
            alt="Navdeep Dhamrait"
            className="rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Hi, I’m Nav — Web Developer for Local Service Businesses
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              I build professional, lead-focused websites using WordPress, Wix,
              or custom code — always choosing the best solution for your goals.
            </p>

            <div className="bg-gray-100 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Why Work With Me?
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li>✔️ Custom solutions — no cookie-cutter sites</li>
                <li>✔️ SEO-focused design for higher rankings</li>
                <li>✔️ Mobile-first & fast loading</li>
                <li>✔️ Transparent pricing & honest advice</li>
              </ul>

              <div className="mt-6">
                <a
                  href="https://calendly.com/navdeep-dhamrait94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-md text-white bg-[#5e17eb] hover:bg-indigo-700 transition"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all flex flex-col"
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Client Project
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm flex-grow">
                    {project.description}
                  </p>

                  <Link
                    to={project.link}
                    className="mt-6 inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Turn Your Website Into a Lead Machine?
          </h2>

          <p className="text-lg text-indigo-100 mb-10">
            Let’s build a website that actually brings in business — not just
            looks good.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg font-semibold text-indigo-600 bg-white hover:bg-indigo-50 transition"
            >
              Get a Free Quote
            </Link>

            <a
              href="https://calendly.com/navdeep-dhamrait94"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold border border-white/40 hover:bg-white/10 transition"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
