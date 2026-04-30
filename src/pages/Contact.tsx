import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Send, Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { client } from "../SanityClient/sanityClient";
import { FAQ } from "../types/FAQ/faq";
import { useAnalytics } from "../useAnalystics";

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const { trackEvent } = useAnalytics();
  const [responseMessage, setResponseMessage] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    client.fetch(`*[_type == "faqItem"]{_id, question, answer}`)
      .then(data => setFaqs(data))
      .catch(err => console.error("Sanity FAQ error:", err));
  }, []);

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      await fetch(import.meta.env.VITE_ZAPIER_WEBHOOK_URL,  {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      trackEvent("generate_lead", {
        form_name: "contact_form",
        page: "/contact",
        name: data.name,
        email: data.email,
      });

      setResponseMessage("Your message has been sent successfully!");
      reset();
    } catch {
      setResponseMessage("Failed to send the message. Please try again.");
    }
  };

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };


  return (
    <main className="pt-16">
      {/* SEO Meta Tags */}
      <head>
        <title>Contact Nav Web Design – Toronto Website Designer</title>
        <meta
          name="description"
          content="Get in touch with Nav Web Design. Toronto web designer creating fast, conversion-focused websites for small businesses."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Nav Web Design Contact Page",
            "url": "https://navwebdesign.com/contact",
            "description": "Contact Nav Web Design for website design, SEO, and lead generation solutions in Toronto.",
            "contactOption": [
              { "@type": "ContactPoint", "telephone": "+1-647-975-3467", "contactType": "customer service", "areaServed": "CA" },
              { "@type": "ContactPoint", "email": "info@navwebdesign.com", "contactType": "customer service" }
            ]
          })
        }} />
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
          Need a website that converts visitors into clients? Reach out today or schedule a free consultation to discuss your project.
        </p>
      </motion.section>

      {/* FORM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div variants={fadeInUp}>
            <Card className="p-10 hover:shadow-xl transition">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" aria-label="Contact Form">
                <label className="sr-only">Your Name</label>
                <input
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  aria-invalid={errors.name ? "true" : "false"}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}

                <label className="sr-only">Your Email</label>
                <input
                  placeholder="Your Email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}

                <label className="sr-only">Your Message</label>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  {...register("message", { required: "Message is required" })}
                  aria-invalid={errors.message ? "true" : "false"}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.message && <p className="text-red-500 text-sm">{String(errors.message.message)}</p>}

                {/* CONTACT INFO */}
                <div className="flex flex-col sm:flex-row gap-4 text-gray-700 mt-4">
                  <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-[#5e17eb]" aria-hidden="true" /> 647-975-3467</div>
                  <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-[#5e17eb]" aria-hidden="true" /> info@navwebdesign.com</div>
                  <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-[#5e17eb]" aria-hidden="true" /> Toronto, Ontario</div>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button type="submit" disabled={isSubmitting} variant="secondary" className="flex-1 px-6 py-3">
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-5 w-5" />
                  </Button>
                
                </div>
                {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left">
            {faqs.length === 0 ? (
              <p className="text-gray-500 text-center">Loading FAQs...</p>
            ) : (
              faqs.map((faq, index) => (
                <motion.div key={faq._id} variants={fadeInUp}>
                  <div className="flex justify-between cursor-pointer" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                    <h3 className="font-semibold">{faq.question}</h3>
                    {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {openFAQ === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Need a Website That Converts?
          </h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            Let’s build a professional website that helps your business grow and attract more clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" className="px-8 py-4 rounded-lg" arrow>
              Get a Free Quote
            </Button>
            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              variant="outline"
              className="px-8 py-4 rounded-lg"
              arrow
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;