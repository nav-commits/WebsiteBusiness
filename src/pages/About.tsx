import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
{/* Hero Section */}
<section className="bg-gray-50 py-20">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
      About Me
    </h1>
    <div className="bg-white rounded-lg shadow-lg p-8">
      <p className="text-lg text-gray-700 mb-6">
        I’m a Web Developer & Designer with a passion for helping businesses create stunning, high-performance websites. I specialize in WordPress and other CMS platforms, focusing on clean, mobile-friendly, and SEO-optimized designs.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        What sets me apart? I listen to your goals, craft a custom solution, and deliver a website that’s not just visually appealing but designed to drive results and grow your business.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Ready to elevate your online presence? Let’s work together to create a website that stands out and converts.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Start Your Project
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
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
        </div>
      </section>
    </div>
  );
};

export default About;
