import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/Button";
import ElfsightReviews from "../components/ElfsightReviews";
import GoogleReviews from "../components/GoogleReviews";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => (
  <>
    <Helmet>
      <title>Google Reviews | Nav Web Design Toronto</title>
      <meta
        name="description"
        content="Read verified Google reviews for Nav Web Design and see what Toronto and GTA businesses say about working directly with freelance web designer Nav Dhamrait."
      />
      <link rel="canonical" href="https://navwebdesign.com/testimonials" />
    </Helmet>

    <div className="flex min-h-screen flex-col pt-24 lg:pt-28">
      <motion.section
        className="page-hero py-20 text-center md:py-28"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mx-auto max-w-4xl px-6"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p className="mb-4 font-semibold text-white" variants={fadeInUp}>
            Verified feedback from real clients
          </motion.p>
          <motion.h1
            className="mb-6 text-4xl font-black text-white md:text-5xl"
            variants={fadeInUp}
          >
            Google Reviews From GTA Businesses
          </motion.h1>
          <motion.p className="mb-7 text-xl text-indigo-200" variants={fadeInUp}>
            See what clients say about the design process, communication, and the websites I’ve delivered.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <GoogleReviews />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="flex-grow bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">Client feedback</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              Reviews pulled directly from Google
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              No edited quotes or anonymous testimonials—just feedback connected to my public Google Business Profile.
            </p>
          </div>
          <ElfsightReviews />
        </div>
      </section>

      <section className="page-hero py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-extrabold">Ready to Improve Your Website?</h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-indigo-100">
            Work directly with me to build a credible, conversion-focused website for your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/contact" className="px-8 py-4" arrow>
              Book a Free Strategy Consultation
            </Button>
            <Button to="/services" variant="outline" className="px-8 py-4" arrow>
              View Services &amp; Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Testimonials;
