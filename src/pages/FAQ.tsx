import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { client } from "../SanityClient/sanityClient";
import { FAQ } from "../types/FAQ/faq";

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "faqItem"]{_id, question, answer}`)
      .then((data) => setFaqs(data))
      .catch((err) => console.error("Sanity FAQ error:", err));
  }, []);

  return (
    <main className="min-h-screen bg-white pt-24 lg:pt-28">
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
            {faqs.length === 0 ? (
              <div className="space-y-4 animate-pulse">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border rounded-lg p-5">
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            ) : (
              faqs.map((faq, index) => (
                <motion.div
                  key={faq._id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="surface-card overflow-hidden p-5 transition hover:border-indigo-200"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  >
                    <h3 className="font-semibold text-gray-900">
                      {faq.question}
                    </h3>

                    {openFAQ === index ? (
                      <ChevronUp className="text-[#5e17eb]" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </div>

                  {openFAQ === index && (
                    <p className="text-gray-600 mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
