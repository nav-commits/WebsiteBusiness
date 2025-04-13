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

  // State for each FAQ question to toggle open/close
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Let's Get Started!</h1>
        <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
          Ready for a new website? Contact me today and let's talk about your
          project.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
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
                className="w-full flex justify-center items-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
            {responseMessage && (
              <p className="mt-4 text-center text-gray-700">
                {responseMessage}
              </p>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
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
                <p className="text-gray-600">navdeep.dhamrait94@gmail.com</p>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mr-4" />
                <p className="text-gray-600">Toronto, Ontario, Canada</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Schedule a Meeting
              </h3>
              {/* Calendly Button */}
              <a
                href="https://calendly.com/navdeep-dhamrait94"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
{/* FAQ Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      {/* FAQ 1 */}
      <div className="text-left max-w-3xl mx-auto">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(0)}
        >
          <h3 className="text-xl font-semibold text-gray-800">
            How long does it take to complete a website?
          </h3>
          {openFAQ === 0 ? (
            <ChevronUp className="h-5 w-5 text-indigo-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-indigo-600" />
          )}
        </div>
        {openFAQ === 0 && (
          <p className="text-gray-600 mt-2">
            Typically, the timeline for completing a website depends on
            the complexity of the project. The Starter Website can be
            delivered in about 1 week, while more advanced websites may
            take up to 4 weeks.
          </p>
        )}
      </div>

      {/* FAQ 2 */}
      <div className="text-left max-w-3xl mx-auto">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(1)}
        >
          <h3 className="text-xl font-semibold text-gray-800">
            Do you offer ongoing maintenance?
          </h3>
          {openFAQ === 1 ? (
            <ChevronUp className="h-5 w-5 text-indigo-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-indigo-600" />
          )}
        </div>
        {openFAQ === 1 && (
          <p className="text-gray-600 mt-2">
            Yes! I offer an annual maintenance package that includes
            updates, backups, and priority support.
          </p>
        )}
      </div>

      {/* FAQ 3 */}
      <div className="text-left max-w-3xl mx-auto">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(2)}
        >
          <h3 className="text-xl font-semibold text-gray-800">
            What is your process for designing a website?
          </h3>
          {openFAQ === 2 ? (
            <ChevronUp className="h-5 w-5 text-indigo-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-indigo-600" />
          )}
        </div>
        {openFAQ === 2 && (
          <p className="text-gray-600 mt-2">
            I follow a user-centered design process that includes
            researching, wireframing, prototyping, testing, and refining
            designs before moving to development.
          </p>
        )}
      </div>

      {/* FAQ 4 */}
      <div className="text-left max-w-3xl mx-auto">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(3)}
        >
          <h3 className="text-xl font-semibold text-gray-800">
            Will my website be mobile-friendly?
          </h3>
          {openFAQ === 3 ? (
            <ChevronUp className="h-5 w-5 text-indigo-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-indigo-600" />
          )}
        </div>
        {openFAQ === 3 && (
          <p className="text-gray-600 mt-2">
            Absolutely! All websites I build are fully responsive and
            optimized for mobile devices to ensure a seamless user
            experience.
          </p>
        )}
      </div>

      {/* FAQ 5 */}
      <div className="text-left max-w-3xl mx-auto">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(4)}
        >
          <h3 className="text-xl font-semibold text-gray-800">
            Do you provide SEO services?
          </h3>
          {openFAQ === 4 ? (
            <ChevronUp className="h-5 w-5 text-indigo-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-indigo-600" />
          )}
        </div>
        {openFAQ === 4 && (
          <p className="text-gray-600 mt-2">
            Yes, I offer basic SEO services as part of the website
            development package, including keyword optimization, meta tags,
            and proper structure. For more advanced SEO, I can discuss a
            customized plan.
          </p>
        )}
      </div>

      {/* FAQ 6 */}
      <div className="text-left max-w-3xl mx-auto">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(5)}
        >
          <h3 className="text-xl font-semibold text-gray-800">
            What happens if I need changes after the website is live?
          </h3>
          {openFAQ === 5 ? (
            <ChevronUp className="h-5 w-5 text-indigo-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-indigo-600" />
          )}
        </div>
        {openFAQ === 5 && (
          <p className="text-gray-600 mt-2">
            I offer post-launch support for making any necessary updates
            or changes. If it’s a major change, I’ll discuss the scope and
            provide a timeline and cost.
          </p>
        )}
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Contact;
