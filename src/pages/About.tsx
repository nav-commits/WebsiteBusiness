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
      "I present a selection of website designs or templates for you to choose from, then proceed with crafting a fully customized site with precision and attention to detail.",
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="pt-16">
      {/* ================= ABOUT HERO ================= */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-10 text-center"
            variants={fadeInUp}
          >
            About Me
          </motion.h1>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            variants={fadeInUp}
          >
            {/* Lead */}
            <motion.p
              className="text-lg text-gray-800 leading-relaxed mb-4"
              variants={fadeInUp}
            >
              I’m a passionate{" "}
              <span className="font-semibold text-gray-900">
                Web Designer & Developer
              </span>{" "}
              specializing in websites for{" "}
              <span className="font-semibold text-gray-900">
                local service businesses
              </span>.
              Based in Toronto, I build custom, mobile-friendly, and
              SEO-optimized websites using the right tools — WordPress, Wix, or
              fully custom solutions.
            </motion.p>

            {/* Outcome */}
            <motion.p
              className="text-base text-gray-700 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              My websites don’t just look good — they’re built to{" "}
              <span className="font-semibold text-indigo-600">
                attract visitors and convert them into real leads
              </span>.
            </motion.p>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm uppercase tracking-wider text-gray-400">
                Approach
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Differentiator */}
            <motion.p
              className="text-base text-gray-700 leading-relaxed mb-2"
              variants={fadeInUp}
            >
              <span className="font-semibold text-gray-900">
                What sets me apart?
              </span>{" "}
              I take the time to understand your business goals, challenges, and
              target audience, allowing me to create tailored solutions that
              support long-term growth and a strong online presence.
            </motion.p>

            {/* Soft close */}
            <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              If you’re looking for a website that feels professional, performs
              well, and actually helps grow your business, you’re in the right
              place.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-6"
            variants={fadeInUp}
          >
            My Process
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 text-center mb-14 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            I keep things simple and transparent. From the first conversation to
            launch, you’ll always know what’s happening and what comes next.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
                variants={fadeInUp}
                transition={{ delay: index * 0.15 }}
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
        </div>
      </motion.section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Turn Your Website Into a Lead Machine?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            If my approach and process align with what you’re looking for, let’s
            talk about your project and see if we’re a good fit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

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

export default About;
