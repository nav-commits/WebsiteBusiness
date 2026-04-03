import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import {
  FaCheckCircle,
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
          Toronto Web Design | Nav Dhamrait — Websites That Generate Leads
        </title>
        <meta
          name="description"
          content="Toronto web designer building high-converting, SEO-optimized websites for service businesses. Get more leads, calls, and clients."
        />
      </Helmet>

      <div className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Toronto Web Design for Service Businesses That Want More Leads
              </h1>

              <p className="text-lg md:text-xl text-indigo-200 mb-8">
                I build high-converting, SEO-optimized websites for Toronto
                service businesses that turn visitors into real calls, bookings,
                and clients.
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

              <p className="text-sm text-indigo-200 mt-6">
                Serving Toronto and the GTA, I specialize in web design for
                contractors, service businesses, and small companies looking to
                grow online.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="Images/torontotower.png"
                alt="Toronto web design for service businesses"
                className="rounded-xl shadow-xl w-full h-[420px] md:h-[460px] lg:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* TRUST / VALUE */}
        <section className="bg-white py-16 border-b">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
              Built for Toronto Service Businesses That Want Results
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <FaBolt className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Toronto-Focused</h4>
                <p className="text-sm text-gray-600">
                  I understand what Toronto customers look for before they
                  contact a business.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <FaCheckCircle className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Conversion-Focused</h4>
                <p className="text-sm text-gray-600">
                  Every page is designed to guide visitors toward contacting you.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <FaMobileAlt className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Mobile-First</h4>
                <p className="text-sm text-gray-600">
                  Fast-loading websites that perform smoothly on all devices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <FaComments className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Direct Communication</h4>
                <p className="text-sm text-gray-600">
                  Work directly with me — no delays, no confusion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <motion.section
          className="py-24 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Most Toronto Business Websites Don’t Generate Leads
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Most Toronto business websites look decent — but don’t actually
                generate leads.
                <br /><br />
                If your site is slow, unclear, or not built for conversions,
                visitors leave without taking action.
                <br /><br />
                In a competitive market like Toronto, you have seconds to earn
                trust. I design websites that clearly guide visitors and turn
                traffic into real inquiries.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <img
                src="Images/laptop-coffee.png"
                alt="Website not generating leads"
                className="rounded-xl shadow"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* SERVICES */}
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
                    Strategically designed layouts that increase calls and form
                    submissions.
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
                    Structured to help your website rank on Google in Toronto
                    searches.
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
                    Built for speed, usability, and performance across all
                    devices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaComments className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Clear Messaging
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Clear messaging that builds trust and drives action.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button to="/services" variant="secondary" className="px-8 py-4">
                View Services
              </Button>
            </div>
          </div>
        </section>

        {/* WHY ME */}
        <section className="py-28 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Work With a Freelance Web Designer Instead of an Agency?
            </h2>

            <p className="text-gray-700 text-lg mb-12">
              Most agencies focus on volume — not results. You get passed between
              teams, slow updates, and generic designs.
              <br /><br />
              I work directly with you to build a website focused on one thing:
              generating real leads for your business.
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div className="bg-white p-8 rounded-xl shadow border">
                <h3 className="font-semibold mb-6 text-xl">
                  Working With Me
                </h3>
                <ul className="space-y-3">
                  <li>✔️ Direct communication</li>
                  <li>✔️ Faster turnaround</li>
                  <li>✔️ Honest pricing</li>
                  <li>✔️ Built for results</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow border">
                <h3 className="font-semibold mb-6 text-xl">
                  Typical Agencies
                </h3>
                <ul className="space-y-3">
                  <li>❌ High costs</li>
                  <li>❌ Slow revisions</li>
                  <li>❌ Generic designs</li>
                  <li>❌ Less focus on results</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Turn Your Website Into a Lead Generator
            </h2>

            <p className="text-indigo-200 mb-8">
              If your website isn’t generating leads, I’ll show you exactly
              what’s wrong and how to fix it — with clear, actionable
              improvements.
            </p>

            <Button to="/contact" className="px-8 py-4">
              Get a Free Website Audit
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;