// /pages/Portfolio.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { client } from "../SanityClient/sanityClient";
import { createImageUrlBuilder } from "@sanity/image-url";
import { PortfolioProject } from "../types/PortfolioProject/PortfolioProject";
import { slugify } from "../utils/slugify";
import { portfolioDetails } from "../data/portfolioDetails";

const builder = createImageUrlBuilder(client);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const urlFor = (source: string) => builder.image(source);

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
    <div className="pt-28">
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
                <Card className="group flex flex-col h-full bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">

                  {/* IMAGE */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Link
                      to={`/portfolio/${slugify(project.title)}`}
                      className="absolute inset-0 block"
                    >
                      <img
                        src={urlFor(project.img).width(800).url()}
                        alt={
                          project.alt ||
                          `${project.title} website design`
                        }
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="flex items-center gap-2 text-white font-semibold text-sm">
                          View Case Study
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>

                    {/* QUICK LINK TO LIVE SITE */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Visit ${project.title} live site`}
                        title="Visit live site"
                        className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-[#5e17eb] p-2 rounded-full shadow transition"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* INDUSTRY BADGE */}
                    {(portfolioDetails[slugify(project.title)]?.industry ||
                      project.type) && (
                      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded w-fit mb-3">
                        {portfolioDetails[slugify(project.title)]?.industry ||
                          project.type}
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
                      to={`/portfolio/${slugify(project.title)}`}
                      variant="secondary"
                      arrow
                      className="mt-auto px-5 py-2 self-start"
                    >
                      View Case Study
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
              Book a Free Strategy Consultation
            </Button>

            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              variant="outline"
              className="px-8 py-4"
            >
              Book a Free Strategy Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
