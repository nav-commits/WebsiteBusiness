import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { client } from "../SanityClient/sanityClient";
import { FAQ } from "../types/FAQ/faq";
import { useAnalytics } from "../useAnalystics";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting },
    reset,
  } = useForm<FormData>();

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

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID, {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          submitted_at: new Date().toLocaleString("en-CA", {
            timeZone: "America/Toronto",
          }),
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      // KEEP TRACKING
      trackEvent("generate_lead", {
        form_name: "contact_form",
        page: "/contact",
        name: data.name,
        email: data.email,
      });

      setResponseMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setResponseMessage("Failed to send message. Please try again.");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
        <h1 className="text-5xl font-extrabold mb-6">
          Let's Get Started!
        </h1>

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

              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* NAME */}
                <div>
                  <input
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message:
                          "Name must be at least 2 characters",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                      errors.name
                        ? "border-red-500 focus:ring-2 focus:ring-red-300"
                        : "border-gray-300 focus:ring-2 focus:ring-[#5e17eb]"
                    }`}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/i,
                        message:
                          "Please enter a valid email",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                      errors.email
                        ? "border-red-500 focus:ring-2 focus:ring-red-300"
                        : "border-gray-300 focus:ring-2 focus:ring-[#5e17eb]"
                    }`}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message:
                          "Message must be at least 10 characters",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                      errors.message
                        ? "border-red-500 focus:ring-2 focus:ring-red-300"
                        : "border-gray-300 focus:ring-2 focus:ring-[#5e17eb]"
                    }`}
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

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
                  {isSubmitting
                    ? "Sending..."
                    : "Get My Free Website Audit"}

                  <Send className="ml-2 h-5 w-5" />
                </Button>

                {/* RESPONSE MESSAGE */}
                {responseMessage && (
                  <p
                    className={`mt-4 text-center font-medium ${
                      responseMessage.includes(
                        "successfully"
                      )
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {responseMessage}
                  </p>
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
              <p className="text-gray-500 text-center">
                Loading FAQs...
              </p>
            ) : (
              faqs.map((faq, index) => (
                <motion.div key={faq._id} variants={fadeInUp}>
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  >
                    <h3 className="font-semibold">
                      {faq.question}
                    </h3>

                    {openFAQ === index ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </div>

                  {openFAQ === index && (
                    <p className="text-gray-600 mt-2">
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

export default Contact;