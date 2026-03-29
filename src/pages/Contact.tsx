import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { useAnalytics } from "../useAnalystics";
import { Button } from "../components/Button";
import { client } from "../SanityClient/sanityClient";
import { FAQ } from "../types/FAQ/faq";

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

  // Form submit
  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        import.meta.env.VITE_PUBLIC_KEY
      );

      trackEvent("generate_lead", {
        form_name: "contact_form",
        page: "/contact",
        name: data.name,
        email: data.email,
      });

      setResponseMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      setResponseMessage("Failed to send the message. Please try again.");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleScheduleMeeting = () => {
    trackEvent("book_call_click", {
      page: "/contact",
      location: "contact_page",
    });

    window.open("https://calendly.com/navdeep-dhamrait94", "_blank");
  };

  return (
    <div className="pt-16">
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
          Ready for a new website? Contact me today or schedule a meeting to
          discuss your project.
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
                <input
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {String(errors.name.message)}
                  </p>
                )}
                <input
                  placeholder="Your Email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {String(errors.email.message)}
                  </p>
                )}
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {String(errors.message.message)}
                  </p>
                )}
                {/* CONTACT INFO */}
                <div className="flex flex-col sm:flex-row gap-4 text-gray-700">
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

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {" "}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="secondary"
                    className="flex-1 px-6 py-3"
                  >
                    {" "}
                    {isSubmitting ? "Sending..." : "Send Message"}{" "}
                    <Send className="ml-2 h-5 w-5" />{" "}
                  </Button>{" "}
                  <Button
                    onClick={handleScheduleMeeting}
                    variant="secondary"
                    className="flex-1 px-6 py-3 cursor-pointer"
                  >
                    {" "}
                    Schedule a Meeting{" "}
                  </Button>{" "}
                </div>
              </form>

              {responseMessage && (
                <p className="mt-4 text-center">{responseMessage}</p>
              )}
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
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
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
    </div>
  );
};

export default Contact;
