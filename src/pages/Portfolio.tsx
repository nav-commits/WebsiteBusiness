import { motion } from "framer-motion";
import { projects } from "../data/data";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
const Portfolio = () => {
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
            Check out a few of the websites and logos I've crafted for
            businesses. Each project is designed to not only look great but to
            drive real results and meet business goals.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className={`flex flex-col lg:flex-row items-center gap-12 bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition`}>
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-md w-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2 flex-grow">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Button
                    href={project.link}
                    variant="secondary"
                    arrow
                    className="px-6 py-3 mt-auto self-start"
                  >
                    Visit Website
                  </Button>
                </div>
              </Card>
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
            If my work and process make sense for your business, let’s talk
            about your project and see if we’re a good fit.
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
