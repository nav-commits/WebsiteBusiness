import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

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
        <meta
          name="description"
          content="Websites built to generate leads, calls, and revenue for Toronto service businesses."
        />
      </Helmet>

      <div className="pt-16">
        {/* HERO */}
        <motion.section
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              Websites That Actually Bring You Clients — Not Just Look Good
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-indigo-200 mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              Built for Toronto service businesses that want more calls,
              bookings, and real growth.
            </motion.p>

            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              className="px-8 py-4"
            >
              Book a Free Call
            </Button>

            <p className="mt-6 text-sm text-indigo-200">
              Trusted by 9+ businesses • Fast turnaround • 100% custom builds
            </p>
          </div>
        </motion.section>

        {/* RESULTS */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-3xl font-bold mb-10">
            Real Results for Local Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-indigo-600">+35%</p>
              <p className="text-gray-600">More inbound leads</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600">2x</p>
              <p className="text-gray-600">Higher conversions</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600">90 Days</p>
              <p className="text-gray-600">Avg. Google ranking time</p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <img
              src="Images/SMS_0310 Navdeep Dhamrait.jpg"
              alt="Nav"
              className="rounded-xl shadow"
            />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Hi, I’m Nav — I Build Websites That Generate Leads
              </h2>

              <p className="text-gray-700 mb-4">
                Most websites just sit there. I build websites designed to bring
                in leads, book calls, and actually grow your business.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>✔️ Built for conversions</li>
                <li>✔️ Fast, mobile-first design</li>
                <li>✔️ SEO-ready structure</li>
                <li>✔️ Clear, honest pricing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted By Businesses Across Toronto
              </h2>

              <p className="mb-6 text-gray-700">
                I partner with service-based businesses to deliver websites that
                generate leads, drive growth, and improve conversions.
              </p>

              <blockquote className="italic text-gray-600 mb-6 border-l-4 border-indigo-600 pl-4">
                "Nav’s websites helped us increase our leads by over 40% in just
                3 months. Highly recommend!" — Jane D., Business Owner
              </blockquote>

              <p className="text-gray-600 text-sm md:text-base">
                100% custom builds • Satisfaction guaranteed • Privacy protected
              </p>
            </div>

            {/* Right Side: Logos */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 justify-start">
              <div className="flex items-center justify-center h-14 w-auto">
                <img
                  src="Images/Markat.png"
                  alt="Markat"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-14 w-auto">
                <img
                  src="Images/psrlaw.png"
                  alt="PSR Law"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-14 w-auto">
                <img
                  src="Images/container.png"
                  alt="Container"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-14 w-auto">
                <img
                  src="Images/ajay.png"
                  alt="Ajay"
                  className="h-full w-auto object-contain"
                />
              </div>
              {/* Add more logos here */}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
            {/* Image */}
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            >
              <img
                src="Images/laptop.png" 
                alt="Featured Projects"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            >
              <h2 className="text-3xl font-bold mb-4">
                See How I Help Businesses Grow
              </h2>
              <p className="mb-4 text-gray-700">
                I work with service-based businesses in Toronto to create
                websites that don’t just look good—they generate real results.
              </p>
              <p className="mb-6 text-gray-700">
                From increasing leads and booking more calls to improving online
                visibility, my projects are designed to drive growth and revenue
                for your business.
              </p>

              <Button
                href="/portfolio"
                className="px-8 py-4"
                variant="secondary"
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </section>
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build a Website That Brings You Clients
          </h2>

          <p className="mb-8 text-indigo-200">
            If you want more leads, bookings, and growth — let’s talk.
          </p>

          <Button
            href="https://calendly.com/navdeep-dhamrait94"
            className="px-8 py-4"
          >
            Book a Free Call
          </Button>
        </section>
      </div>
    </>
  );
};

export default Home;
