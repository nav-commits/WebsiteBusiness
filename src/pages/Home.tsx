import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Featured Projects
const projects = [
  {
    img: "/security.png",
    alt: "CMT Security Services",
    title: "CMT Security Services",
    description:
      "Committed to protecting your business and community with innovative security solutions. We specialize in Event Security, Residential Security, Commercial Security, Close Security, and Retail Loss Prevention.",
    link: "/portfolio",
  },
  {
    img: "/accounting.png",
    alt: "Ajay Kalha Tax Services",
    title: "Ajay Kalha Tax Services",
    description:
      "We provide comprehensive accounting services tailored to your business needs. From bookkeeping to preparing accurate financial statements, our team ensures your finances are in order, giving you insight and clarity for informed decisions.",
    link: "/portfolio",
  },
  {
    img: "/Psychotherapy.png",
    alt: "The Healing Hive",
    title: "The Healing Hive",
    description:
      "Providing compassionate therapy services for anxiety, self-worth, life transitions, and trauma through virtual sessions across Canada.",
    link: "/portfolio",
  },
  {
    img: "/realestate.png",
    alt: "PSR Law",
    title: "PSR Law",
    description:
      "A dedicated real estate law firm offering expert legal guidance across Ontario. PSR Law is committed to transparency, integrity, and client-focused service—supporting first-time buyers and seasoned investors with professional legal care.",
    link: "/portfolio",
  },
  {
    img: "/storage.png",
    alt: "Container Storage Solutions",
    title: "Container Storage Solutions",
    description:
      "A leading storage terminal in the GTA, offering secure, 24/7 monitored container and trailer storage. With a client-first approach and strategic location in Brampton, they provide flexible, safe, and professional service for the freight and trucking industry.",
    link: "/portfolio",
  },
  {
    img: "/vik.jpg",
    alt: "Vik Ghankas Law Group",
    title: "Vik Ghankas Law Group",
    description:
      "Based in the Tri-Cities and serving the Lower Mainland, our Family Law firm specializes in providing personal, lawyer-to-client communication—because if you hire a lawyer, you should be attended to by a lawyer.",
    link: "/portfolio",
  },
  {
    img: "/MarkatImage.png",
    alt: "MARKAT Group Inc.",
    title: "MARKAT Group Inc.",
    description:
      "Founded in Toronto, MARKAT is a boutique advisory & consulting firm built for small and medium-sized businesses. We help ambitious teams scale smart, manage risk, and lead with confidence in a rapidly changing world.",
    link: "/portfolio",
  },
];

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Websites That Help Local Service Businesses Get More Leads
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-200 max-w-none">
              Custom-designed, SEO-optimized, and mobile-friendly websites —
              crafted for Toronto’s small business professionals.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-150"
            >
              Let’s Build Your Website
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 gap-20 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/SMS_0310 Navdeep Dhamrait.jpg"
              alt="Navdeep Dhamrait"
              className="rounded-2xl shadow-xl w-120 h-auto object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hi, I’m Nav Dhamrait — Web Developer & Designer for Local Service
              Businesses & Small Companies
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              I create professional, lead-generating websites tailored to help
              local service businesses in Toronto stand out online. Whether it’s
              WordPress, Wix, or a custom solution, I choose the best platform
              for your goals.
            </p>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Work With Me?
              </h3>
              <ul className="text-lg text-gray-700 space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">✔️</span> Custom websites
                  (WordPress, Wix, or custom) tailored to your industry and goals
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">✔️</span> SEO-focused
                  design to help you rank higher and attract clients
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">✔️</span> Mobile-friendly
                  and fast-loading for the best user experience
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-600">✔️</span> Transparent
                  pricing, free site audits, and ongoing support
                </li>
              </ul>

              <div className="mt-6 text-center">
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
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="p-6">
                  <Link
                    to={project.link}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 w-full justify-center"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
