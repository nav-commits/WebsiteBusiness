import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

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
    <main className="pt-24 bg-white min-h-screen">
      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-indigo-100 max-w-2xl mx-auto text-lg">
          Everything you need to know about working with me and getting your website built.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.length === 0 ? (
              <p className="text-gray-500 text-center">
                Loading FAQs...
              </p>
            ) : (
              faqs.map((faq, index) => (
                <motion.div
                  key={faq._id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border rounded-lg p-5"
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