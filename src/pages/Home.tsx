import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaBolt,
  FaMobileAlt,
  FaSearch,
  FaComments,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Nav Dhamrait — Toronto Web Developer | Websites That Bring Clients
        </title>
      </Helmet>

      <div className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Toronto Web Designer for Service Businesses Who Want More Leads
              </h1>

              <p className="text-lg md:text-xl text-indigo-200 mb-8">
                I design fast, SEO-ready websites that help Toronto service
                businesses turn visitors into real inquiries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" className="px-8 py-4">
                  Get a Free Website Audit
                </Button>
                <Button
                  to="/portfolio"
                  variant="secondary"
                  className="px-8 py-4"
                >
                  View My Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="Images/torontotower.png"
                alt="Website Preview"
                className="rounded-xl shadow-xl w-full h-[420px] md:h-[460px] lg:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* 🔥 TRUST / VALUE SECTION */}
        <section className="bg-white py-16 border-b">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
              Built Specifically for Toronto Service Businesses
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col items-start">
                <FaBolt className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Toronto-Based</h4>
                <p className="text-sm text-gray-600">
                  Local market understanding that converts better.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col items-start">
                <FaCheckCircle className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Conversion-Focused</h4>
                <p className="text-sm text-gray-600">
                  Designed to turn visitors into real leads.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col items-start">
                <FaMobileAlt className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Mobile-First</h4>
                <p className="text-sm text-gray-600">
                  Optimized for speed and performance on all devices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col items-start">
                <FaComments className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Direct Communication</h4>
                <p className="text-sm text-gray-600">
                  No middlemen. Fast and clear updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <motion.section
          className="py-24 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Most Toronto Business Websites Don’t Generate Leads
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Your website might look good — but if it’s slow, unclear, or not
                built to convert, you’re losing potential clients every day.
                <br />
                <br />
                In a competitive market like Toronto, people decide fast. I
                design websites that guide visitors clearly and turn traffic
                into real inquiries.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <img
                src="Images/laptop-coffee.png"
                alt="Website Problems"
                className="rounded-xl shadow"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* SERVICES — SMALLER & CENTERED */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">
              How I Help Toronto Service Businesses Grow
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Conversion-Focused Design
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Built to turn visitors into real inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaSearch className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    SEO-Ready Structure
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Helps your site rank and get found.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMobileAlt className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Mobile-First Performance
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Optimized for every device.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaComments className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Clear Messaging</h4>
                  <p className="text-gray-700 text-sm">
                    Guides users to take action.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button to="/services" variant="secondary" className="px-8 py-4 text-base">
                View Services
              </Button>
            </div>
          </div>
        </section>

        {/* WHY ME — EXPANDED & ALIGNED */}
        <section className="py-28 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Why Work With a Freelance Web Designer Instead of an Agency?
            </h2>
            <p className="text-gray-700 text-lg mb-12 text-center">
              Agencies often have layers of middlemen, slow turnaround times, and high costs.
              Working directly with a freelance designer means you get personalized attention,
              faster results, and a website designed specifically to grow your business.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <h3 className="font-semibold mb-6 text-black text-xl">Working With Me</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-green-500 text-xl mt-1" /> Direct communication
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-green-500 text-xl mt-1" /> Faster turnaround
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-green-500 text-xl mt-1" /> Honest pricing
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-green-500 text-xl mt-1" /> Built for results
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-green-500 text-xl mt-1" /> Personalized strategy
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheckCircle className="text-green-500 text-xl mt-1" /> Flexible revisions
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <h3 className="font-semibold mb-6 text-black text-xl">Typical Agencies</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3 items-center">
                    <FaTimesCircle className="text-red-500 text-xl mt-1" /> High costs
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaTimesCircle className="text-red-500 text-xl mt-1" /> Slow revisions
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaTimesCircle className="text-red-500 text-xl mt-1" /> Junior handoffs
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaTimesCircle className="text-red-500 text-xl mt-1" /> Cookie-cutter designs
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaTimesCircle className="text-red-500 text-xl mt-1" /> Less focus on your specific business
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Let’s Turn Your Website Into a Lead Generator
              </h2>

              <p className="text-indigo-200 mb-8">
                If your website isn’t bringing in inquiries, I’ll show you
                exactly why — and how to fix it.
              </p>

              <Button to="/contact" className="px-8 py-4">
                Get a Free Website Audit
              </Button>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <p className="text-sm text-indigo-100 mb-2">
                Quick Wins You’ll Get:
              </p>
              <ul className="space-y-2 text-sm">
                <li>✔️ Conversion issues identified</li>
                <li>✔️ SEO improvements</li>
                <li>✔️ Design fixes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* STICKY CTA — ALWAYS VISIBLE */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-3 cursor-pointer"
        >
          <FaBolt className="text-yellow-300 text-xl" />
          <span className="font-semibold text-sm">Get a Free Website Audit</span>
        </motion.a>
      </div>
    </>
  );
};

export default Home;