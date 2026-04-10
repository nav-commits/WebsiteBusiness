// /pages/Portfolio.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { client } from "../SanityClient/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { PortfolioProject } from "../types/PortfolioProject/PortfolioProject";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const urlFor = (source: string) => imageUrlBuilder(client).image(source);

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "portfolioProject"] | order(_createdAt desc){
        _id,
        img,
        alt,
        title,
        description,
        link,
        type
      }`)
      .then((data) => setProjects(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  return (
    <div className="pt-16">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Toronto Web Design Portfolio | Websites That Generate Leads
        </title>
        <meta
          name="description"
          content="View web design projects by a Toronto web designer. High-converting websites built for service businesses to generate leads, calls, and clients."
        />
        <link rel="canonical" href="https://navwebdesign.com/portfolio" />
      </Helmet>

      {/* ================= HERO ================= */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-6"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            variants={fadeInUp}
          >
            Toronto Web Design Portfolio
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-indigo-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Real websites built for Toronto service businesses — designed to
            generate leads, increase conversions, and help businesses grow
            online.
          </motion.p>

          <p className="text-sm text-indigo-200">
            Serving Toronto & the GTA — contractors, small businesses, and
            service companies.
          </p>
        </motion.div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full p-6 shadow-lg bg-gray-50 hover:shadow-2xl transition-transform transform hover:scale-105">
                  {/* Image */}
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-52 xl:h-60">
                    <img
                      src={urlFor(project.img).width(600).url()}
                      alt={
                        project.alt ||
                        `${project.title} website design for Toronto business`
                      }
                      className="w-full h-full object-cover rounded-xl shadow-md"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col mt-4 flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h2>

                    <p className="text-gray-600 mb-3">
                      {project.description ||
                        "Custom website designed to improve conversions and generate leads."}
                    </p>

                    <Button
                      href={project.link}
                      variant="secondary"
                      arrow
                      className="px-6 py-2 mt-auto self-start"
                    >
                      View Project
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEO BOOST (NEW) ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Websites Built to Generate Real Results
          </h2>

          <p className="text-gray-600 mb-4">
            Every project you see here is designed with one goal — turning
            visitors into leads and customers.
          </p>

          <p className="text-gray-600">
            From structure to messaging to performance, each website is built to
            rank on Google and convert traffic into real business growth for
            Toronto companies.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Want Results Like These for Your Business?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            Let’s build a website that not only looks good — but actually brings
            you leads, calls, and clients.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" arrow className="px-8 py-4">
              Get a Free Quote
            </Button>

            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              variant="outline"
              className="px-8 py-4"
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;