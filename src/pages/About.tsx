import { motion } from "framer-motion";
import {Button} from "../components/Button";
import { processSteps } from "../data/data";

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
              </span>
              . Based in Toronto, I build custom, mobile-friendly, and
              SEO-optimized websites using the right tools — WordPress, Wix, or
              fully custom solutions.
            </motion.p>

            <motion.p
              className="text-base text-gray-700 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              My websites don’t just look good — they’re built to{" "}
              <span className="font-semibold text-[#5e17eb]">
                attract visitors and convert them into real leads
              </span>
              .
            </motion.p>

            <div className="flex items-center gap-4 my-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm uppercase tracking-wider text-gray-400">
                Approach
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <motion.p
              className="text-base text-gray-700 leading-relaxed mb-2"
              variants={fadeInUp}
            >
              <span className="font-semibold text-gray-900">
                What sets me apart?
              </span>{" "}
              I take the time to understand your business goals, challenges, and
              target audience, creating tailored solutions for long-term growth
              and a strong online presence.
            </motion.p>

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
            My Workflow
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 text-center mb-14 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            I keep things simple and transparent. From the first conversation to
            launch, you’ll always know what’s happening and what comes next.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-start"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-4 w-10 h-10 rounded-full bg-indigo-100 text-[#5e17eb]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
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
            If my approach and workflow align with what you’re looking for,
            let’s talk about your project and see if we’re a good fit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              to="/contact"
              className="px-8 py-4 rounded-lg"
              arrow
            >
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

export default About;
