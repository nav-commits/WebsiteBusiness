import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { techLogos, portfolioProjects } from "../data/data";
import { Button } from "../components/Button";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const [activeTab, setActiveTab] = useState<"all" | "website" | "logo">("all");

  return (
    <div className="pt-16">
      {/* ================= HERO ================= */}
      <motion.section
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-8 text-center">
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
            <Button to="/contact" className="px-8 py-4 rounded-lg" arrow>
              Let’s Build Your Website
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= TECH LOGOS ================= */}
      <section className="py-16 bg-white overflow-hidden border-b">
        <div className="max-w-6xl mx-auto px-6 text-center mb-8">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            Tools I Work With
          </p>
          <p className="text-lg text-gray-700">
            I use the right tools for the job — not one-size-fits-all.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-16 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...techLogos, ...techLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 opacity-70 hover:opacity-100 transition"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="Images/SMS_0310 Navdeep Dhamrait.jpg"
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
              <h3 className="text-2xl font-semibold mb-4">Why Work With Me?</h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔️ Custom solutions — no cookie-cutter sites</li>
                <li>✔️ SEO-focused design for higher rankings</li>
                <li>✔️ Mobile-first & fast loading</li>
                <li>✔️ Transparent pricing & honest advice</li>
              </ul>
              <div className="mt-6">
                <Button
                  href="https://calendly.com/navdeep-dhamrait94"
                  variant="secondary"
                  className="px-6 py-3 rounded-md"
                  arrow
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= FEATURED WORK ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Projects
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-12 gap-4">
            {["all", "website", "logo"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "all" | "website" | "logo")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === tab
                    ? "bg-[#5e17eb] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab === "all"
                  ? "All"
                  : tab === "website"
                  ? "Websites"
                  : "Logos"}
              </button>
            ))}
          </div>
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects
              .filter(
                (project) => activeTab === "all" || project.type === activeTab
              )
              .map((project, idx) => (
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
                    <span className="absolute top-4 left-4 bg-white/90 text-[#5e17eb] text-xs font-semibold px-3 py-1 rounded-full">
                      {project.type === "logo" ? "Logo" : "Client Project"}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#5e17eb] transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {project.description}
                    </p>

                    <Link
                      to={project.link}
                      className="mt-6 inline-flex items-center font-semibold text-[#5e17eb] hover:text-indigo-700"
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
            <Button to="/contact" className="px-8 py-4 rounded-lg">
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

export default Home;
