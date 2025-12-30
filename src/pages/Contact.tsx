import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Send, Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [responseMessage, setResponseMessage] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setResponseMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      setResponseMessage("Failed to send the message. Please try again.");
    }
  };

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-extrabold mb-6">Let's Get Started!</h1>
        <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
          Ready for a new website? Contact me today or schedule a meeting to discuss your project.
        </p>
      </motion.section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-10 hover:shadow-xl transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}

              <input
                placeholder="Your Email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}

              <textarea
                placeholder="Your Message"
                rows={6}
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
              {errors.message && <p className="text-red-500 text-sm">{String(errors.message.message)}</p>}

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-4 text-gray-700">
                <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-indigo-600" /> 647-975-3467</div>
                <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-indigo-600" /> info@navwebdesign.com</div>
                <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-indigo-600" /> Toronto, Ontario, Canada</div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex justify-center items-center px-6 py-3 text-white bg-[#5e17eb] hover:bg-indigo-700 rounded-lg font-semibold transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-5 w-5" />
                </button>

                <a
                  href="https://calendly.com/navdeep-dhamrait94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center px-6 py-3 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition"
                >
                  Schedule a Meeting
                </a>
              </div>
            </form>

            {responseMessage && <p className="mt-4 text-center text-gray-700">{responseMessage}</p>}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            {[
              { question: "How long does it take to complete a website?", answer: "Timeline varies by complexity. Starter websites: ~1 week, advanced sites: 3–4 weeks." },
              { question: "Do you offer ongoing maintenance?", answer: "Yes, annual maintenance includes updates, backups, and priority support." },
              { question: "Will my website be mobile-friendly?", answer: "Absolutely! All websites are fully responsive for seamless mobile experience." },
              { question: "Do you provide SEO services?", answer: "Yes, basic SEO is included; advanced SEO can be customized per project." },
              { question: "Post-launch changes?", answer: "I provide support for updates. Major changes discussed separately." }
            ].map((faq, index) => (
              <motion.div key={index} className="border-b border-gray-200 pb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  {openFAQ === index ? <ChevronUp className="h-5 w-5 text-indigo-600" /> : <ChevronDown className="h-5 w-5 text-indigo-600" />}
                </div>
                {openFAQ === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
