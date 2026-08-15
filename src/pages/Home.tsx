import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { client } from "../SanityClient/sanityClient";
import {
  FaCheckCircle,
  FaBolt,
  FaMobileAlt,
  FaSearch,
  FaComments,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const revealViewport = { once: true, amount: 0.18 };

const Home = () => {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    client
      .fetch(`count(*[_type == "portfolioProject"])`)
      .then((count: number) => setProjectCount(count))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Toronto Web Design for Law Firms & High-Trust Service Businesses
        </title>
        <meta
          name="description"
          content="Toronto web designer creating high-trust, conversion-focused websites for law firms and professional service businesses across the GTA."
        />
        <link rel="canonical" href="https://navwebdesign.com/" />
      </Helmet>

      <div className="pt-28">
        {/* HERO */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              {projectCount > 0 && (
                <p className="text-sm font-semibold text-indigo-200 uppercase tracking-wide mb-4">
                  Trusted by {projectCount}+ Toronto & GTA Businesses
                </p>
              )}

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Toronto Websites for Law Firms &amp; High-Trust Service Businesses
              </h1>

              <p className="text-lg md:text-xl text-indigo-200 mb-8">
                Build credibility quickly, explain complex services clearly, and turn more qualified visitors into calls, bookings, and consultations.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" className="px-8 py-4">
                  Book a Free Strategy Consultation
                </Button>

                <Button
                  to="/portfolio"
                  variant="outline"
                  className="px-8 py-4"
                >
                  View My Work
                </Button>
              </div>

              {/* MICROCOPY */}
              <p className="text-sm text-indigo-200 mt-4 max-w-lg">
                Let’s go over your website and identify exactly what’s stopping you from getting more calls and clients.
              </p>

              <p className="text-sm text-indigo-200 mt-6">
                Serving Toronto, Brampton, Mississauga & the GTA — helping local service businesses grow online.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="/Images/torontotower-optimized.jpg"
                alt="Toronto web design for service businesses"
                className="rounded-xl shadow-xl w-full h-[420px] md:h-[460px] lg:h-[500px] object-cover"
                decoding="async"
              />
            </motion.div>
          </div>
        </section>

        {/* FEATURED CASE STUDY */}
        <section className="py-20 md:py-24 bg-white" aria-labelledby="featured-case-study-heading">
          <motion.div
            className="max-w-6xl mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center rounded-3xl bg-[#0f172a] text-white p-7 md:p-10 lg:p-12 overflow-hidden shadow-xl">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300 mb-4">
                  Featured case study
                </p>
                <h2 id="featured-case-study-heading" className="text-3xl md:text-4xl font-extrabold mb-5">
                  Markat Group: Turning Complex Advisory Services Into a Clear Client Journey
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-7">
                  A professional services website designed to explain five advisory disciplines, build credibility, and guide business owners toward a consultation.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Industry", value: "Business advisory" },
                    { label: "Focus", value: "Clarity & trust" },
                    { label: "Primary action", value: "Consultation" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wider text-indigo-300 mb-1">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>

                <Button to="/portfolio/markat-group-inc" className="px-7 py-3" arrow>
                  Read the Case Study
                </Button>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-3xl" aria-hidden="true" />
                <div className="premium-image relative rounded-2xl border border-white/10 bg-white p-3 shadow-2xl rotate-1 hover:rotate-0 transition duration-500">
                  <img
                    src="/Images/MarkatImage.png"
                    alt="Markat Group business advisory website shown as a featured case study"
                    className="w-full rounded-xl object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CLIENT PROOF */}
        <section className="bg-gradient-to-b from-white to-indigo-50 border-b" aria-labelledby="client-proof-heading">
          <motion.div
            className="max-w-6xl mx-auto px-6 py-16 md:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
          >
            <div className="text-center mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5e17eb] mb-3">
                Client success
              </p>
              <h2 id="client-proof-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Trusted by service businesses that value results
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 md:gap-8 items-stretch max-w-4xl mx-auto mb-10">
              {[
                { src: "/Images/psrlaw.png", alt: "PSR Law", className: "bg-[#111827]", imageClassName: "scale-150" },
                { src: "/Images/healing.png", alt: "The Healing Hive", className: "bg-[#f8efe5]", imageClassName: "scale-110" },
                { src: "/Images/Markat.png", alt: "Markat Group", className: "bg-[#0b1d33]", imageClassName: "scale-110" },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className={`${logo.className} premium-card min-h-40 md:min-h-48 rounded-2xl border border-white/60 shadow-md flex items-center justify-center p-6`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-full h-28 md:h-32 object-contain ${logo.imageClassName}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <figure className="max-w-4xl mx-auto rounded-3xl bg-white border border-indigo-100 px-7 py-8 md:px-12 md:py-10 shadow-lg relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-indigo-600 to-purple-600" />
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-[#5e17eb] flex items-center justify-center shrink-0">
                  <FaQuoteLeft className="text-xl" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-900">
                    “Nav created a beautiful, professional website that exceeded our expectations. Our traffic has increased, and the site runs flawlessly.”
                  </blockquote>
                  <figcaption className="mt-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                    <span><strong className="text-base text-gray-900">Ajay Kalha</strong> · Founder &amp; Tax Consultant</span>
                    <span className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 font-semibold text-green-800">
                      Client result: increased traffic
                    </span>
                  </figcaption>
                </div>
              </div>
            </figure>
          </motion.div>
        </section>

        {/* TRUST / VALUE */}
        <section className="bg-white py-16 border-b">
          <motion.div
            className="max-w-6xl mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
              Built for Businesses Where Trust Drives the Sale
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="premium-card bg-gray-50 p-6 rounded-xl border border-transparent shadow-sm">
                <FaBolt className="text-indigo-600 text-2xl mb-3" />
                <h3 className="font-semibold mb-1">Local SEO Focus</h3>
                <p className="text-sm text-gray-600">
                  Optimized for Toronto, Brampton & Mississauga searches.
                </p>
              </div>

              <div className="premium-card bg-gray-50 p-6 rounded-xl border border-transparent shadow-sm">
                <FaCheckCircle className="text-indigo-600 text-2xl mb-3" />
                <h3 className="font-semibold mb-1">Conversion-Focused</h3>
                <p className="text-sm text-gray-600">
                  Designed to turn website visitors into paying customers.
                </p>
              </div>

              <div className="premium-card bg-gray-50 p-6 rounded-xl border border-transparent shadow-sm">
                <FaMobileAlt className="text-indigo-600 text-2xl mb-3" />
                <h3 className="font-semibold mb-1">Mobile-First</h3>
                <p className="text-sm text-gray-600">
                  Fast, responsive websites across all devices.
                </p>
              </div>

              <div className="premium-card bg-gray-50 p-6 rounded-xl border border-transparent shadow-sm">
                <FaComments className="text-indigo-600 text-2xl mb-3" />
                <h3 className="font-semibold mb-1">Direct Communication</h3>
                <p className="text-sm text-gray-600">
                  Work directly with a freelancer — no agency delays.
                </p>
              </div>
            </div>
          </motion.div>
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
                I build websites for law firms and high-trust service businesses that turn expertise into clear, credible reasons to get in touch.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <img
                src="/Images/laptop-coffee-optimized.jpg"
                alt="Website not generating leads Toronto"
                className="rounded-xl shadow"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* SERVICES */}
        <section className="py-16 bg-white">
          <motion.div
            className="max-w-6xl mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">
              Web Design Services for Toronto & GTA Businesses
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Lead-Generating Websites
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Built to turn visitors into calls, bookings, and inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaSearch className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Local SEO Optimization
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Rank higher on Google in Toronto, Brampton & GTA searches.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMobileAlt className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Mobile Performance
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Fast, responsive, and optimized for all devices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaComments className="text-indigo-600 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Clear Messaging That Converts
                  </h3>
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
          </motion.div>
        </section>

        {/* WHY ME */}
        <section className="py-28 bg-gray-100">
          <motion.div
            className="max-w-6xl mx-auto px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Work With a Freelance Web Designer Instead of an Agency?
            </h2>

            <p className="text-gray-700 text-lg mb-12">
              Agencies focus on volume — I focus on results. Every website is built to generate real leads for Toronto service businesses.
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div className="premium-card bg-white p-8 rounded-xl shadow border">
                <h3 className="font-semibold mb-6 text-xl">Working With Me</h3>
                <ul className="space-y-3">
                  <li>✔️ Direct communication</li>
                  <li>✔️ Faster turnaround</li>
                  <li>✔️ Honest pricing</li>
                  <li>✔️ Focused on results</li>
                </ul>
              </div>

              <div className="premium-card bg-white p-8 rounded-xl shadow border">
                <h3 className="font-semibold mb-6 text-xl">Agencies</h3>
                <ul className="space-y-3">
                  <li>❌ Expensive retainers</li>
                  <li>❌ Slow communication</li>
                  <li>❌ Generic templates</li>
                  <li>❌ Low ROI focus</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <motion.div
            className="max-w-6xl mx-auto px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">
              Turn Your Website Into a Lead Machine
            </h2>

            <p className="text-indigo-200 mb-8">
              I help Toronto service businesses turn websites into consistent sources of leads and revenue.
            </p>

            <Button to="/contact" className="px-8 py-4">
              Book a Free Strategy Consultation
            </Button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;
