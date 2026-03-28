import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { processSteps } from "../data/data";
import { Card } from "../components/Card";

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
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <motion.img
            src="/Images/SMS_0310 Navdeep Dhamrait.jpg"
            alt="Nav Dhamrait"
            className="rounded-xl shadow-lg w-full object-cover"
            variants={fadeInUp}
          />

          {/* TEXT */}
          <div>
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              I Build Websites That Actually Bring You Clients
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-4"
              variants={fadeInUp}
            >
              I’m <span className="font-semibold">Nav Dhamrait</span>, a Toronto-based web designer & developer focused on helping service businesses turn their websites into lead-generating tools — not just something that looks good.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-6"
              variants={fadeInUp}
            >
              Most websites fail because they’re built for design, not results. I focus on conversion, speed, and structure so your site actually brings in calls, bookings, and real business growth.
            </motion.p>

            <motion.ul
              className="space-y-2 text-gray-700 mb-6"
              variants={fadeInUp}
            >
              <li>✔️ Built to convert visitors into clients</li>
              <li>✔️ Fast, mobile-first performance</li>
              <li>✔️ SEO-ready structure</li>
              <li>✔️ Clear, no-BS pricing & process</li>
            </motion.ul>

            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              className="px-6 py-3"
               variant="secondary"
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </motion.section>

      {/* ================= DIFFERENCE / APPROACH ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why My Approach Works
          </h2>

          <p className="text-gray-600 mb-10">
            I don’t just build websites — I build systems that help your business grow. Every decision is based on what will get you more leads, not just what looks nice.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Strategy First</h3>
              <p className="text-sm text-gray-600">
                We focus on your business goals, audience, and offer before touching design.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Built for Conversions</h3>
              <p className="text-sm text-gray-600">
                Every section is designed to guide visitors toward taking action.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Simple & Transparent</h3>
              <p className="text-sm text-gray-600">
                Clear process, clear pricing, no confusion at any stage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-6"
            variants={fadeInUp}
          >
            My Process
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center mb-14 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            A simple, proven process that keeps everything clear and moves your project forward without delays.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full bg-white hover:shadow-lg transition">
                    <div className="flex items-center justify-center mb-4 w-10 h-10 rounded-full bg-indigo-100 text-[#5e17eb]">
                      <Icon />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-2">
                      {step.description}
                    </p>

                    {step.note && (
                      <p className="text-xs text-gray-400">
                        {step.note}
                      </p>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something That Actually Grows Your Business
          </h2>

          <p className="text-indigo-200 mb-8">
            If you’re serious about getting more leads and turning your website into a real asset, let’s talk.
          </p>

          <Button
            href="https://calendly.com/navdeep-dhamrait94"
            className="px-8 py-4"
          >
            Book a Free Call
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;