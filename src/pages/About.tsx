// /pages/About.tsx
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { client } from "../SanityClient/sanityClient";
import {
  CheckCircle,
  Circle,
  Code,
  Layout,
  MessageSquare,
  Palette,
  PenTool,
  Rocket,
  Search,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { ProcessStep } from "../types/ProcessStep/processStep";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const getIcon = (iconName: string): ComponentType<SVGProps<SVGSVGElement>> => {
  const icons: Record<
    string,
    ComponentType<SVGProps<SVGSVGElement>>
  > = {
    CheckCircle,
    Circle,
    Code,
    Layout,
    MessageSquare,
    Palette,
    PenTool,
    Rocket,
    Search,
  };
  const normalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  return icons[normalizedName] || Circle;
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
          About | Toronto Web Designer for Law Firms & High-Trust Service Businesses
        </title>
        <meta
          name="description"
          content="Meet a Toronto web designer creating credible, conversion-focused websites for law firms and high-trust professional service businesses."
        />
        <link rel="canonical" href="https://navwebdesign.com/about" />
      </Helmet>

      {/* ================= TOP HERO ================= */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 mt-12 text-center"
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
            GTA-based web designer building high-trust websites for law firms,
            consultants, healthcare providers, and professional service businesses that rely on
            credibility and consistent lead generation.
          </motion.p>

          <p className="text-sm text-indigo-200">
            Serving Toronto & the GTA — focused on serious service businesses that need qualified client inquiries.
          </p>
        </motion.div>
      </motion.section>

      <div className="pt-28">
        {/* ================= ABOUT HERO ================= */}
        <motion.section
          className="bg-gray-50 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src="/Images/navdeep-dhamrait-optimized.jpg"
              loading="lazy"
              decoding="async"
              alt="GTA web designer for professional service businesses"
              className="rounded-xl shadow-lg w-full object-cover"
              variants={fadeInUp}
            />

            <div>
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Websites Built for Trust, Leads, and Real Client Inquiries
              </motion.h2>

              <motion.p
                className="text-lg text-gray-700 mb-4"
                variants={fadeInUp}
              >
                I’m <span className="font-semibold">Nav Dhamrait</span>, a GTA-based web designer
                helping law firms, consultants, healthcare providers, and professional service businesses
                turn their websites into client acquisition systems.
              </motion.p>

              <motion.p className="text-gray-600 mb-6" variants={fadeInUp}>
                In industries where trust matters — like legal services, enforcement-adjacent
                work, consulting, and contract services — your website is often the first
                impression. I build sites that make that impression count.
              </motion.p>

              <motion.ul
                className="space-y-2 text-gray-700 mb-6"
                variants={fadeInUp}
              >
                <li>✔️ Built for credibility and trust</li>
                <li>✔️ Optimized for high-value client inquiries</li>
                <li>✔️ SEO structure for GTA search visibility</li>
                <li>✔️ Fast, mobile-first performance</li>
              </motion.ul>

              <p className="text-sm text-gray-500 mb-6">
                Working with businesses across Toronto & the GTA that depend on reputation,
                referrals, and consistent inbound leads.
              </p>

              <Button
                href="https://calendly.com/navdeep-dhamrait94"
                className="px-6 py-3"
                variant="secondary"
              >
                Book a Free Strategy Consultation
              </Button>
            </div>
          </div>
        </motion.section>

        {/* ================= DIFFERENCE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Why My Approach Works for Serious Service Businesses</h2>

            <p className="text-gray-600 mb-10">
              For legal, healthcare, consulting, and professional services, design alone isn’t enough.
              You need structure, clarity, and trust signals that convert visitors into real inquiries.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Trust-First Design</h3>
                <p className="text-sm text-gray-600">
                  Built to establish credibility instantly for high-trust industries.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Lead-Focused Structure</h3>
                <p className="text-sm text-gray-600">
                  Every page is designed to drive qualified inquiries, not just traffic.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Clear & Professional Execution</h3>
                <p className="text-sm text-gray-600">
                  No clutter, no confusion — just structured paths to conversion.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* ================= STRATEGY IN PRACTICE ================= */}
        <section className="py-20 bg-indigo-50">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl" aria-hidden="true" />
              <img
                src="/Images/web-design-workspace-stock.jpg"
                alt="Web development workspace with a laptop displaying source code"
                className="relative w-full h-[420px] rounded-2xl object-cover shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5e17eb] mb-3">
                Strategy before decoration
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
                Every design decision needs a business reason
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Before choosing layouts or visual effects, I map what a visitor needs to understand, what builds trust, and what should move them toward contacting your business.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white border border-indigo-100 p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-1">Clear structure</h3>
                  <p className="text-sm text-gray-600">Pages organized around client questions and decision points.</p>
                </div>
                <div className="rounded-xl bg-white border border-indigo-100 p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-1">Purposeful execution</h3>
                  <p className="text-sm text-gray-600">Design, content, and code working toward the same outcome.</p>
                </div>
              </div>
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
              A structured process designed for professional service businesses where clarity,
              speed, and trust directly impact revenue.
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
              Let’s Build a Website That Brings You Qualified Clients
            </h2>

            <p className="text-indigo-200 mb-8">
              If you run a law firm or high-trust professional service business in the GTA,
              your website should be generating consistent, high-quality inquiries.
            </p>

            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              className="px-8 py-4"
            >
              Book a Free Strategy Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
