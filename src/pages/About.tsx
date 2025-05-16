import { ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const processSteps = [
    {
      title: "Consultation & Planning",
      description:
        "We discuss your goals, requirements, and vision for your website.",
    },
    {
      title: "Design & Development",
      description:
        "I present a selection of website designs or templates for you to choose from, then proceed with crafting a fully customized site, ensuring precision and attention to detail in every aspect.",
    },
    {
      title: "Testing & Revisions",
      description:
        "Thorough testing and refinements to ensure everything works perfectly.",
    },
    {
      title: "Launch & Support",
      description:
        "Your website goes live with ongoing support to ensure continued success.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
      About Me
    </h1>
    <div className="bg-white rounded-lg shadow-lg p-8">
      <p className="text-lg text-gray-700 mb-6">
        I’m a passionate Web Designer specializing in WordPress websites for local service businesses. Based in Toronto, I create custom, mobile-friendly, and SEO-optimized websites that don’t just look stunning — they’re built to attract and convert leads.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        What sets me apart? I take the time to understand your unique business goals and challenges, crafting tailored solutions that help grow your business through effective online presence and lead generation.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Ready to elevate your website and start getting more clients? Let’s work together to build a website that truly stands out and drives results.
      </p>

      <a
        href="https://calendly.com/navdeep-dhamrait94"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
      >
        Book a Free Consultation
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  </div>
</section>


      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            My Process
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            I believe in keeping the process simple and transparent. From the
            initial consultation to launch, I ensure that you're involved every
            step of the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          {/* Button Section */}
          <div className="mt-12 text-center">
            <a
              href="https://calendly.com/navdeep-dhamrait94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
