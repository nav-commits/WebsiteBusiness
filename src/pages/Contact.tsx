import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Let's Get Started!</h1>
        <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
          Ready for a new website? Contact me today and let's talk about your project.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border rounded-md"
                />
                {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-2 border rounded-md"
                />
                {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={6}
                  className="w-full px-4 py-2 border rounded-md"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{String(errors.message.message)}</p>}
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
            {responseMessage && <p className="mt-4 text-center text-gray-700">{responseMessage}</p>}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
