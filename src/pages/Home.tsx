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
          Toronto Web Design for Service Businesses | Lawyers, Contractors & GTA
        </title>
        <meta
          name="description"
          content="Toronto web designer building high-converting SEO websites for service businesses, lawyers, contractors, and local GTA companies that want more leads and clients."
        />
      </Helmet>

      <div className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Toronto Web Design for Service Businesses, Lawyers & Contractors That Want More Leads
              </h1>

              <p className="text-lg md:text-xl text-indigo-200 mb-8">
                I build high-converting, SEO-optimized websites for Toronto & GTA service businesses —
                including lawyers, contractors, and local companies — designed to turn visitors into real calls, bookings, and clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" className="px-8 py-4">
                  Get a Free Website Audit
                </Button>
                <Button
                  to="/portfolio"
                  variant="outline"
                  className="px-8 py-4"
                >
                  View My Work
                </Button>
              </div>

              <p className="text-sm text-indigo-200 mt-6">
                Serving Toronto, Brampton, Mississauga & the GTA — helping local service businesses grow online.
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
              Built for Toronto & GTA Businesses That Want More Clients
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <FaBolt className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Local SEO Focus</h4>
                <p className="text-sm text-gray-600">
                  Optimized for Toronto, Brampton & Mississauga searches.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <FaCheckCircle className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Conversion-Focused</h4>
                <p className="text-sm text-gray-600">
                  Designed to turn website visitors into paying customers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <FaMobileAlt className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Mobile-First</h4>
                <p className="text-sm text-gray-600">
                  Fast, responsive websites across all devices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <FaComments className="text-indigo-600 text-2xl mb-3" />
                <h4 className="font-semibold mb-1">Direct Communication</h4>
                <p className="text-sm text-gray-600">
                  Work directly with a freelancer — no agency delays.
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
                Most Toronto Websites Don’t Bring In Clients
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Most service business websites in Toronto look fine — but don’t generate real leads.
                <br /><br />
                If your website isn’t optimized for SEO, speed, and conversions, potential clients leave and choose competitors.
                <br /><br />
                I build websites for lawyers, contractors, and service businesses that actually turn Google traffic into paying customers.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <img
                src="Images/laptop-coffee.png"
                alt="Website not generating leads Toronto"
                className="rounded-xl shadow"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* SERVICES */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Web Design Services for Toronto & GTA Businesses
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Lead-Generating Websites
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Built to turn visitors into calls, bookings, and inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaSearch className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Local SEO Optimization
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Rank higher on Google in Toronto, Brampton & GTA searches.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMobileAlt className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Mobile Performance
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Fast, responsive, and optimized for all devices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaComments className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Clear Messaging That Converts
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Messaging designed to build trust and drive action.
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
              Agencies focus on volume — I focus on results. Every website is built to generate real leads for Toronto service businesses.
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div className="bg-white p-8 rounded-xl shadow border">
                <h3 className="font-semibold mb-6 text-xl">Working With Me</h3>
                <ul className="space-y-3">
                  <li>✔️ Direct communication</li>
                  <li>✔️ Faster turnaround</li>
                  <li>✔️ Honest pricing</li>
                  <li>✔️ Focused on results</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow border">
                <h3 className="font-semibold mb-6 text-xl">Agencies</h3>
                <ul className="space-y-3">
                  <li>❌ Expensive retainers</li>
                  <li>❌ Slow communication</li>
                  <li>❌ Generic templates</li>
                  <li>❌ Low ROI focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Turn Your Website Into a Lead Machine
            </h2>

            <p className="text-indigo-200 mb-8">
              I help Toronto service businesses turn websites into consistent sources of leads and revenue.
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