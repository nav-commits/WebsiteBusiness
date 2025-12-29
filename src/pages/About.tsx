import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Consultation & Planning",
    description:
      "We discuss your goals, requirements, and vision for your website.",
  },
  {
    title: "Design & Development",
    description:
      "I present a selection of website designs or templates for you to choose from, then proceed with crafting a fully customized site, ensuring precision and attention to detail in every aspect.",
  },
  {
    title: "Testing & Revisions",
    description:
      "Thorough testing and refinements to ensure everything works perfectly.",
  },
  {
    title: "Launch & Support",
    description:
      "Your website goes live with ongoing support to ensure continued success.",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-8 text-center"
            variants={fadeInUp}
          >
            About Me
          </motion.h1>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 space-y-6"
            variants={fadeInUp}
          >
            <motion.p className="text-lg text-gray-700" variants={fadeInUp}>
              I’m a passionate Web Designer & Developer specializing in websites
              for local service businesses. Based in Toronto, I create custom,
              mobile-friendly, and SEO-optimized websites using the best tools
              for your business — whether that’s WordPress, Wix, or a fully
              custom build. My sites don’t just look stunning — they’re built to
              attract and convert leads.
            </motion.p>
            <motion.p className="text-lg text-gray-700" variants={fadeInUp}>
              What sets me apart? I take the time to understand your unique
              business goals and challenges, crafting tailored solutions that
              help grow your business through effective online presence and lead
              generation.
            </motion.p>
            <motion.p className="text-lg text-gray-700" variants={fadeInUp}>
              Ready to elevate your website and start getting more clients?
              Let’s work together to build a website that truly stands out and
              drives results.
            </motion.p>

            <motion.a
              href="https://calendly.com/navdeep-dhamrait94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5e17eb] hover:bg-indigo-700 transition duration-150"
              whileHover={{ scale: 1.05 }}
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            variants={fadeInUp}
          >
            My Process
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            I believe in keeping the process simple and transparent. From the
            initial consultation to launch, I ensure that you're involved every
            step of the way.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Button Section */}
          <motion.div className="mt-12 text-center" variants={fadeInUp}>
            <a
              href="https://calendly.com/navdeep-dhamrait94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5e17eb] hover:bg-indigo-700 transition duration-150"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
