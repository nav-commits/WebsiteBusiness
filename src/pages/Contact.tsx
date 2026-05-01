import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Send, Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { client } from "../SanityClient/sanityClient";
import { FAQ } from "../types/FAQ/faq";
import { useAnalytics } from "../useAnalystics";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { trackEvent } = useAnalytics();
  const [responseMessage, setResponseMessage] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "faqItem"]{_id, question, answer}`)
      .then((data) => setFaqs(data))
      .catch((err) => console.error("Sanity FAQ error:", err));
  }, []);

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      await fetch(import.meta.env.VITE_ZAPIER_WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          businessType: data.businessType,
          projectType: data.projectType,
          budget: data.budget,
          timeline: data.timeline,
          message: data.message,
          submittedAt: new Date().toLocaleDateString("en-CA", {
            timeZone: "America/Toronto",
          }),
        }),
      });

      trackEvent("generate_lead", {
        form_name: "contact_form",
        page: "/contact",
        name: data.name,
        email: data.email,
        budget: data.budget,
        projectType: data.projectType,
      });

      setResponseMessage("Your message has been sent successfully!");
      reset();
    } catch {
      setResponseMessage("Failed to send the message. Please try again.");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="pt-16">
      {/* SEO */}
      <head>
        <title>Contact Nav Web Design – Toronto Website Designer</title>
        <meta
          name="description"
          content="Get in touch with Nav Web Design. Toronto web designer creating fast, conversion-focused websites for small businesses."
        />
      </head>

      {/* HERO */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-extrabold mb-6">Let's Get Started!</h1>
        <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
          Need a website that converts visitors into clients? Reach out today or
          schedule a free consultation.
        </p>
      </motion.section>

      {/* FORM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div variants={fadeInUp}>
            <Card className="p-10 hover:shadow-xl transition">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* NAME */}
                <input
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 border rounded-lg"
                />

                {/* EMAIL */}
                <input
                  placeholder="Your Email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-3 border rounded-lg"
                />

                {/* PHONE */}
                <input
                  placeholder="Phone (optional)"
                  {...register("phone")}
                  className="w-full px-4 py-3 border rounded-lg"
                />

                {/* BUSINESS TYPE */}
                <select
                  {...register("businessType", {
                    required: "Business type required",
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Business Type</option>
                  <option value="contractor">Contractor</option>
                  <option value="law_finance">Law / Finance</option>
                  <option value="service_business">Service Business</option>
                  <option value="other">Other</option>
                </select>

                {/* PROJECT TYPE */}
                <select
                  {...register("projectType", {
                    required: "Project type required",
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Project Type</option>
                  <option value="new_website">New Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="seo">SEO / Optimization</option>
                  <option value="not_sure">Not Sure Yet</option>
                </select>

                {/* BUDGET */}
                <select
                  {...register("budget", { required: "Budget required" })}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Budget Range</option>
                  <option value="500-1000">$500 - $1000</option>
                  <option value="1000-2500">$1000 - $2500</option>
                  <option value="2500+">$2500+</option>
                  <option value="not_sure">Not Sure</option>
                </select>

                {/* TIMELINE */}
                <select
                  {...register("timeline", { required: "Timeline required" })}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="2-4_weeks">2–4 weeks</option>
                  <option value="1-2_months">1–2 months</option>
                  <option value="just_exploring">Just exploring</option>
                </select>

                {/* MESSAGE */}
                <textarea
                  placeholder="Tell me about your project"
                  rows={6}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                />

                {/* CONTACT INFO */}
                <div className="flex flex-col sm:flex-row gap-4 text-gray-700 mt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#5e17eb]" />
                    647-975-3467
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#5e17eb]" />
                    info@navwebdesign.com
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#5e17eb]" />
                    Toronto, Ontario
                  </div>
                </div>

                {/* SUBMIT */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="secondary"
                  className="w-full px-6 py-3"
                >
                  {isSubmitting ? "Sending..." : "Get My Free Website Audit"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                {responseMessage && (
                  <p className="mt-4 text-center">{responseMessage}</p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-left">
            {faqs.length === 0 ? (
              <p className="text-gray-500 text-center">Loading FAQs...</p>
            ) : (
              faqs.map((faq, index) => (
                <motion.div key={faq._id} variants={fadeInUp}>
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  >
                    <h3 className="font-semibold">{faq.question}</h3>
                    {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
                  </div>

                  {openFAQ === index && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
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

export default Contact;