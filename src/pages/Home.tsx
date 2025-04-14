import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Websites That Drive Results for Businesses of All Sizes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Modern. Fast. Mobile-Friendly. Designed to Drive Results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-150"
            >
              Let’s Build Your Website
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Let's Build Your Next High-Performing Website Together
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Hey, I'm Nav Dhamrait — a Web Developer & Designer based in
              Toronto, Ontario. I specialize in creating modern, high-performing
              websites that are easy to use, mobile-friendly, and optimized to
              convert visitors into customers.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I’ve worked with clients across industries like security, finance,
              wellness, and law — delivering websites that stand out and drive
              results. Whether you're starting fresh or need a complete
              redesign, I ensure the process is smooth, efficient, and
              hassle-free.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Work With Me?
            </h3>
            <ul className="text-lg text-gray-600 space-y-4">
              <li className="flex items-start">
                <span className="mr-2">✔️</span> Custom WordPress websites that
                look great & perform well
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> SEO-optimized & mobile-friendly
                for better rankings
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> Affordable pricing with free
                hosting setup
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span> Reliable support & maintenance
                to keep your site running smoothly
              </li>
            </ul>
            <div className="mt-6 text-center">
              <a
                href="https://calendly.com/navdeep-dhamrait94" // replace with your actual Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img
                src="/security.png"
                alt="CMT Security Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  CMT Security Services
                </h3>
                <p className="text-gray-600">
                  Committed to protecting your business and community with
                  innovative security solutions. We specialize in Event
                  Security, Residential Security, Commercial Security, Close
                  Security, and Retail Loss Prevention.
                </p>
              </div>
              <div className="p-6">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 w-full justify-center"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img
                src="/accounting.png"
                alt="Ajay Kalha Tax Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Ajay Kalha Tax Services
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive accounting services tailored to your
                  business needs. From bookkeeping to preparing accurate
                  financial statements, our team ensures your finances are in
                  order, giving you insight and clarity for informed decisions.
                </p>
              </div>
              <div className="p-6">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 w-full justify-center"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img
                src="/Psychotherapy.png"
                alt="The Healing Hive"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">The Healing Hive</h3>
                <p className="text-gray-600">
                  Providing compassionate therapy services for anxiety,
                  self-worth, life transitions, and trauma through virtual
                  sessions across Canada.
                </p>
              </div>
              <div className="p-6">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 w-full justify-center"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
