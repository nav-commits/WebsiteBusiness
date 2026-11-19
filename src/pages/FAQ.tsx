import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { serviceFAQs as faqs } from "../data/serviceGuidance";

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-28">
      <Helmet>
        <title>Web Design Pricing, Process & Timeline FAQ | Toronto</title>
        <meta
          name="description"
          content="Get answers about Toronto web design pricing, project timelines, SEO foundations, website ownership, revisions, and working directly with Nav Dhamrait."
        />
        <link rel="canonical" href="https://navwebdesign.com/faq" />
      </Helmet>

      {/* HERO */}
      <section className="page-hero px-6 py-20 text-center text-white md:py-28">
        <h1 className="mb-5 text-4xl font-black sm:text-5xl lg:text-6xl">Toronto Web Design FAQs</h1>
        <p className="text-indigo-100 max-w-2xl mx-auto text-lg">
          Everything you need to know about working with me and getting your website built.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                  key={faq._id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="surface-card overflow-hidden p-5 transition hover:border-indigo-200"
                >
                  <button
                    type="button"
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${faq._id}`}
                    className="flex w-full text-left justify-between items-center gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>

                    {openFAQ === index ? (
                      <ChevronUp className="text-[#5e17eb]" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </button>

                    <p hidden={openFAQ !== index} id={`faq-answer-${faq._id}`} className="text-gray-600 mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
