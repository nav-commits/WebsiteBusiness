import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [responseMessage, setResponseMessage] = useState("");

  type FormData = Record<string, unknown>;

  const onSubmit = async (data: FormData) => {
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        import.meta.env.VITE_PUBLIC_KEY
      );
      console.log("Email successfully sent:", result);
      setResponseMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setResponseMessage("Failed to send the message. Please try again.");
    }
  };

  // FAQ toggle
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) =>
    setOpenFAQ(openFAQ === index ? null : index);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold mb-6">Let's Get Started!</h1>
        <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
          Ready for a new website? Contact me today and let's talk about your
          project.
        </p>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {String(errors.name.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-2 border rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {String(errors.email.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                  })}
                  rows={6}
                  className="w-full px-4 py-2 border rounded-md"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {String(errors.message.message)}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-6 py-3 text-white bg-[#5e17eb] hover:bg-indigo-700 rounded-md"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
            {responseMessage && (
              <p className="mt-4 text-center text-gray-700">{responseMessage}</p>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-indigo-600 mr-4" />
                  <p className="text-gray-600">647-975-3467</p>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-indigo-600 mr-4" />
                  <p className="text-gray-600">info@navwebdesign.com</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-indigo-600 mr-4" />
                  <p className="text-gray-600">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Schedule a Meeting
              </h3>
              <a
                href="https://calendly.com/navdeep-dhamrait94"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center px-6 py-3 text-white bg-[#5e17eb] hover:bg-indigo-700 rounded-md"
              >
                Schedule a Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-left max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to complete a website?",
                answer:
                  "Typically, the timeline for completing a website depends on the complexity of the project. The Starter Website can be delivered in about 1 week, while more advanced websites may take up to 4 weeks.",
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer:
                  "Yes! I offer an annual maintenance package that includes updates, backups, and priority support.",
              },
              {
                question: "What is your process for designing a website?",
                answer:
                  "I follow a user-centered design process that includes researching, wireframing, prototyping, testing, and refining designs before moving to development.",
              },
              {
                question: "Will my website be mobile-friendly?",
                answer:
                  "Absolutely! All websites I build are fully responsive and optimized for mobile devices to ensure a seamless user experience.",
              },
              {
                question: "Do you provide SEO services?",
                answer:
                  "Yes, I offer basic SEO services as part of the website development package, including keyword optimization, meta tags, and proper structure. For more advanced SEO, I can discuss a customized plan.",
              },
              {
                question: "What happens if I need changes after the website is live?",
                answer:
                  "I offer post-launch support for making any necessary updates or changes. If it’s a major change, I’ll discuss the scope and provide a timeline and cost.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 pb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
                  )}
                </div>
                {openFAQ === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
