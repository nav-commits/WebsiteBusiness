// /pages/About.tsx
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { client } from "../SanityClient/sanityClient";
import * as LucideIcons from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { ProcessStep } from "../types/ProcessStep/processStep";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const getIcon = (iconName: string): ComponentType<SVGProps<SVGSVGElement>> => {
  const icons = LucideIcons as unknown as Record<
    string,
    ComponentType<SVGProps<SVGSVGElement>>
  >;
  const normalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  return icons[normalizedName] || icons.Circle;
};

const About = () => {
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "processStep"] | order(order asc){
        _id, title, description, icon, note, order
      }`
      )
      .then((data) => setProcessSteps(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>
          About Nav Dhamrait | Toronto Web Designer for Service Businesses
        </title>
        <meta
          name="description"
          content="Meet Nav Dhamrait, a Toronto web designer helping service businesses build high-converting, SEO-optimized websites that generate real leads."
        />
      </Helmet>
      {/* ================= TOP HERO ================= */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 mt-12  text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-8"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            variants={fadeInUp}
          >
            About
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Toronto web designer focused on building high-converting websites
            that turn visitors into real leads and customers.
          </motion.p>

          <p className="text-sm text-indigo-200">
            Serving Toronto & the GTA — helping service businesses grow online.
          </p>
        </motion.div>
      </motion.section>

      <div className="pt-16">
        {/* ================= ABOUT HERO ================= */}
        <motion.section
          className="bg-gray-50 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src="/Images/SMS_0310 Navdeep Dhamrait.jpg"
              alt="Nav Dhamrait Toronto web designer"
              className="rounded-xl shadow-lg w-full object-cover"
              variants={fadeInUp}
            />

            <div>
              <motion.h1
                className="text-4xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Toronto Web Designer Focused on Results — Not Just Design
              </motion.h1>

              <motion.p
                className="text-lg text-gray-700 mb-4"
                variants={fadeInUp}
              >
                I’m <span className="font-semibold">Nav Dhamrait</span>, a
                Toronto-based web designer & developer helping service
                businesses turn their websites into lead-generating tools — not
                just something that looks good.
              </motion.p>

              <motion.p className="text-gray-600 mb-6" variants={fadeInUp}>
                Most websites fail because they’re built for appearance, not
                performance. I focus on conversion, speed, and SEO structure so
                your site actually brings in calls, bookings, and real business
                growth.
              </motion.p>

              <motion.ul
                className="space-y-2 text-gray-700 mb-6"
                variants={fadeInUp}
              >
                <li>✔️ Built to generate leads and inquiries</li>
                <li>✔️ Fast, mobile-first performance</li>
                <li>✔️ SEO-ready structure for Google rankings</li>
                <li>✔️ Clear, simple process — no confusion</li>
              </motion.ul>

              <p className="text-sm text-gray-500 mb-6">
                Serving Toronto and the GTA, I work with contractors, service
                businesses, and small companies looking to grow online.
              </p>

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

        {/* ================= DIFFERENCE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Why My Approach Works</h2>

            <p className="text-gray-600 mb-10">
              I don’t just build websites — I build systems designed to bring in
              leads. Every decision is based on what helps your business grow,
              not just what looks good.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Strategy First</h3>
                <p className="text-sm text-gray-600">
                  We focus on your business, audience, and goals before design
                  begins.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Built for Conversions</h3>
                <p className="text-sm text-gray-600">
                  Every section is designed to turn visitors into leads.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Simple & Transparent</h3>
                <p className="text-sm text-gray-600">
                  Clear process, clear pricing, and no unnecessary complexity.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <motion.section
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold text-center mb-6"
              variants={fadeInUp}
            >
              My Process
            </motion.h2>

            <motion.p
              className="text-gray-600 text-center mb-14 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              A simple, proven process designed to launch your website quickly
              while focusing on results and performance.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step) => {
                const IconComponent = getIcon(step.icon);
                return (
                  <motion.div key={step._id} variants={fadeInUp}>
                    <Card className="p-6 h-full bg-white hover:shadow-lg transition">
                      <div className="flex items-center justify-center mb-4 w-10 h-10 rounded-full bg-indigo-100 text-[#5e17eb]">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-2">
                        {step.description}
                      </p>

                      {step.note && (
                        <p className="text-xs text-gray-400">{step.note}</p>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* ================= CTA ================= */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">
              Let’s Build a Website That Brings You Clients
            </h2>

            <p className="text-indigo-200 mb-8">
              If you want a website that actually generates leads and helps grow
              your business in Toronto, let’s talk.
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
    </>
  );
};

export default About;
