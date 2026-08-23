import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "react-router-dom";

import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useAnalytics } from "../useAnalystics";

type FormData = {
  name: string;
  email: string;
  service?: string;
  budget?: string;
  message: string;
  recommendedPackage?: string;
  industry?: string;
  source?: string;
};

type EmailJSError = {
  status?: number;
  text?: string;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const hasTrackedFormStart = useRef(false);
  const [searchParams] = useSearchParams();
  const suggestedService = searchParams.get("service") || "";
  const suggestedBudget = searchParams.get("budget") || "";
  const recommendedPackage = searchParams.get("package") || "";
  const suggestedIndustry = searchParams.get("industry") || "";
  const referralSource = searchParams.get("source") || "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      service: suggestedService,
      budget: suggestedBudget,
      recommendedPackage,
      industry: suggestedIndustry,
      source: referralSource,
    },
  });

  // App already owns route-level pageview tracking. This instance is only
  // used for the successful lead event.
  const { trackEvent } = useAnalytics(false);

  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setResponseMessage("");

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing.");
      setResponseMessage(
        "The contact form is temporarily unavailable. Please email info@navwebdesign.com."
      );
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          service: data.service || "Not specified",
          budget: data.budget || "Not specified",
          recommended_package: data.recommendedPackage || "Not specified",
          industry: data.industry || "Not specified",
          lead_source: data.source || "Direct contact page",
          message: data.message,
          submitted_at: new Date().toLocaleString("en-CA", {
            timeZone: "America/Toronto",
          }),
        },
        publicKey
      );

      trackEvent("generate_lead", {
        form_name: "contact_form",
        page: "/contact",
      });

      setResponseMessage("Your message has been sent successfully!");
      reset();
    } catch (error: unknown) {
      const emailError = error as EmailJSError;
      console.error("EmailJS submission failed:", {
        status: emailError.status,
        message: emailError.text || "Unknown EmailJS error",
      });
      setResponseMessage(
        "Your message could not be sent. Please try again or email info@navwebdesign.com."
      );
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
    <main className="pt-24 lg:pt-28">
      <Helmet>
        <title>
          Contact | Book a Free Web Design Consultation in Toronto & the GTA
        </title>
        <meta
          name="description"
          content="Book a free Toronto web design consultation for lawyers, contractors, consultants, healthcare providers, and established service businesses across the GTA."
        />
        <link rel="canonical" href="https://navwebdesign.com/contact" />
      </Helmet>

      {/* HERO */}
      <motion.section
        className="page-hero px-6 py-20 text-center text-white md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-extrabold mb-6">
          Let’s Talk About Your Website
        </h1>

        <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
          Tell me where your website is now, where you want the business to go,
          and I’ll recommend a practical next step.
        </p>
      </motion.section>

      {/* FORM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-stretch">
            <aside className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-800 bg-[#0f172a] text-white shadow-[0_30px_70px_-40px_rgba(15,23,42,.7)] lg:min-h-full">
              <img
                src="/Images/consultation-workspace-stock.jpg"
                alt="People collaborating with a laptop and taking notes during a website consultation"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/65 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300 mb-3">
                  A practical first conversation
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                  Clear advice before any commitment
                </h2>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li>✓ Discuss your goals and current challenges</li>
                  <li>✓ Identify the right website scope</li>
                  <li>✓ Leave with a clear recommended next step</li>
                </ul>
              </div>
            </aside>

          <motion.div variants={fadeInUp}>
            <Card className="surface-card p-6 sm:p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>

              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                onFocus={() => {
                  if (hasTrackedFormStart.current) return;
                  hasTrackedFormStart.current = true;
                  trackEvent("form_start", {
                    form_name: "contact_form",
                    source: referralSource || "direct",
                    recommended_package: recommendedPackage || undefined,
                  });
                }}
                className="space-y-6"
              >
                <input type="hidden" {...register("recommendedPackage")} />
                <input type="hidden" {...register("industry")} />
                <input type="hidden" {...register("source")} />
                {/* NAME */}
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-800 mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  autoComplete="name"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                    errors.name
                      ? "border-red-500 focus:ring-2 focus:ring-red-300"
                      : "border-gray-300 focus:ring-2 focus:ring-[#5e17eb]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.message}
                  </p>
                )}

                {/* EMAIL */}
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-800 mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  autoComplete="email"
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                    errors.email
                      ? "border-red-500 focus:ring-2 focus:ring-red-300"
                      : "border-gray-300 focus:ring-2 focus:ring-[#5e17eb]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-gray-800 mb-2">
                      Service needed <span className="font-normal text-gray-500">(optional)</span>
                    </label>
                    <select
                      id="contact-service"
                      {...register("service")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white outline-none transition focus:ring-2 focus:ring-[#5e17eb]"
                    >
                      <option value="">Select a service</option>
                      <option value="New website">New website</option>
                      <option value="Website redesign">Website redesign</option>
                      <option value="SEO and conversion improvements">SEO &amp; conversion improvements</option>
                      <option value="Website care plan">Website care plan</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-sm font-medium text-gray-800 mb-2">
                      Estimated budget <span className="font-normal text-gray-500">(optional)</span>
                    </label>
                    <select
                      id="contact-budget"
                      {...register("budget")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white outline-none transition focus:ring-2 focus:ring-[#5e17eb]"
                    >
                      <option value="">Select a range</option>
                      <option value="$1,200–$2,000">$1,200–$2,000</option>
                      <option value="$2,000–$3,500">$2,000–$3,500</option>
                      <option value="$3,500–$5,000">$3,500–$5,000</option>
                      <option value="$5,000+">$5,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-800 mb-2">
                  Project details
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  placeholder="Tell me about your project"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message:
                        "Message must be at least 10 characters",
                    },
                    maxLength: {
                      value: 3000,
                      message: "Message must be under 3,000 characters",
                    },
                  })}
                  maxLength={3000}
                  className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                    errors.message
                      ? "border-red-500 focus:ring-2 focus:ring-red-300"
                      : "border-gray-300 focus:ring-2 focus:ring-[#5e17eb]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}

                {/* CONTACT INFO */}
                <div className="flex flex-col sm:flex-row gap-4 text-gray-700 mt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#5e17eb]" />
                    <a href="tel:+16476763466" className="hover:text-[#5e17eb] transition">
                      647-676-3466
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#5e17eb]" />
                    <a href="mailto:info@navwebdesign.com" className="hover:text-[#5e17eb] transition">
                      info@navwebdesign.com
                    </a>
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
                    : "Request a Free Strategy Consultation"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  I’ll personally reply within one business day. No pressure and no obligation.
                </p>

                {/* RESPONSE */}
                {responseMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`mt-4 text-center font-medium ${
                      responseMessage.includes("successfully")
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
        </div>
      </section>
    </main>
  );
};

export default Contact;
