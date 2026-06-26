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
            className="text-4xl md:text-5xl font-extrabold mb-6"
            variants={fadeInUp}
          >
            Toronto Web Design Portfolio
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-indigo-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Real websites built for service businesses — designed to generate
            leads, increase conversions, and grow revenue.
          </motion.p>

          <p className="text-sm text-indigo-200">
            Serving Toronto & GTA — contractors, clinics, and service companies.
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
                transition={{ delay: index * 0.08 }}
              >
                <Card className="flex flex-col h-full bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">

                  {/* IMAGE */}
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-xl mb-4">
                    <img
                      src={urlFor(project.img).width(800).url()}
                      alt={
                        project.alt ||
                        `${project.title} website design`
                      }
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col flex-grow">
                    {/* TYPE BADGE */}
                    {project.type && (
                      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded w-fit mb-3">
                        {project.type}
                      </span>
                    )}

                    {/* TITLE */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
                      {project.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description ||
                        "Custom website designed to improve conversions and generate leads."}
                    </p>

                    {/* BUTTON */}
                    <Button
                      href={project.link}
                      variant="secondary"
                      arrow
                      className="mt-auto px-5 py-2 self-start"
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

      {/* ================= SEO BOOST ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Websites Built to Generate Real Results
          </h2>

          <p className="text-gray-600 mb-4">
            Every project is designed to turn visitors into leads and paying clients.
          </p>

          <p className="text-gray-600">
            Focused on SEO, conversion strategy, and performance for Toronto businesses.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Want Results Like These?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            Let’s build a website that brings you real leads and clients.
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