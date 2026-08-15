import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { client } from "../SanityClient/sanityClient";
import { createImageUrlBuilder } from "@sanity/image-url";
import { PortfolioProject } from "../types/PortfolioProject/PortfolioProject";
import { slugify } from "../utils/slugify";
import { portfolioDetails } from "../data/portfolioDetails";

const builder = createImageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PortfolioDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<PortfolioProject | null | undefined>(
    undefined
  );

  useEffect(() => {
    if (!slug) return;

    client
      .fetch(
        `*[_type == "portfolioProject"]{
          _id,
          img,
          alt,
          title,
          description,
          link,
          type
        }`
      )
      .then((projects: PortfolioProject[]) => {
        const match = projects.find((p) => slugify(p.title) === slug);
        setProject(match ?? null);
      })
      .catch((err) => console.error("Sanity fetch error:", err));
  }, [slug]);

  if (project === undefined) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (project === null) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <p className="text-gray-600 mb-6">Project not found.</p>
        <Button to="/portfolio" variant="secondary" className="px-8 py-4" arrow>
          Back to Portfolio
        </Button>
      </div>
    );
  }

  const enrichment = slug ? portfolioDetails[slug] : undefined;

  return (
    <div className="pt-28">
      <Helmet>
        <title>{project.title} | Toronto Web Design Case Study</title>
        <meta
          name="description"
          content={
            project.description ||
            `See how a custom website was built for ${project.title} to generate leads and grow the business.`
          }
        />
        <link
          rel="canonical"
          href={`https://navwebdesign.com/portfolio/${slug}`}
        />
      </Helmet>

      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          {(enrichment?.industry || project.type) && (
            <motion.span
              className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4"
              variants={fadeInUp}
            >
              {enrichment?.industry || project.type}
            </motion.span>
          )}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            {project.title}
          </motion.h1>
        </div>
      </motion.section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <Card className="p-10 space-y-8">
            {project.img && (
              <div className="w-full aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={urlFor(project.img).width(1200).url()}
                  alt={project.alt || `${project.title} website design`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>

            {enrichment?.highlights && enrichment.highlights.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  What We Built
                </h2>
                <ul className="space-y-3">
                  {enrichment.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#5e17eb] flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {project.link && (
                <Button href={project.link} className="px-8 py-4" arrow>
                  Visit Live Site
                </Button>
              )}

              <Button
                to="/portfolio"
                variant="secondary"
                className="px-8 py-4"
                arrow
              >
                Back to Portfolio
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

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

export default PortfolioDetail;
