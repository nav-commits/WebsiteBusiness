import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/data";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Portfolio = () => {
  return (
    <div className="pt-16">
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Nav Dhamrait — Portfolio | Toronto Web Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Nav Dhamrait, Toronto-based web developer. Custom websites and logos designed to help local businesses generate more leads."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://navwebdesign.com/portfolio" />
        <meta property="og:title" content="Nav Dhamrait — Portfolio" />
        <meta
          property="og:description"
          content="Custom websites and logos for Toronto service businesses focused on real results and lead generation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://navwebdesign.com/portfolio" />
      </Helmet>

      {/* ================= HERO ================= */}
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            My Work
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Check out a few of the websites and logos I've crafted for local
            businesses. Each project is designed to not only look great but
            deliver real results — more leads, better conversions, and a strong
            online presence.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="flex flex-col bg-gray-50 p-6 shadow-lg hover:shadow-2xl transition h-full">
                  {/* Project Image */}
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56">
                    <img
                      src={project.image}
                      alt={project.title + " project screenshot"}
                      className="rounded-xl shadow-md w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="flex flex-col mt-4 flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-2">{project.description}</p>

                    {project.technology && (
                      <p className="text-sm text-gray-500 mb-4">
                        <strong>Technology:</strong> {project.technology}
                      </p>
                    )}

                    {project.result && (
                      <p className="text-sm text-green-600 mb-2 font-semibold">
                        <strong>Result:</strong> {project.result}
                      </p>
                    )}

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 flex-grow">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <Button
                      href={project.link}
                      variant="secondary"
                      arrow
                      className="px-6 py-2 mt-auto self-start"
                    >
                      Visit Website
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Turn Your Website Into a Lead-Generating Machine?
          </h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            If my work and process make sense for your business, let’s talk about your project and see if we’re a good fit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" arrow className="px-8 py-4">
              Get a Free Quote
            </Button>
            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              variant="outline"
              className="px-8 py-4"
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
