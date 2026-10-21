// /pages/Portfolio.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ExternalLink, Github, LayoutDashboard, HeartPulse, Car } from "lucide-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { client } from "../SanityClient/sanityClient";
import { createImageUrlBuilder } from "@sanity/image-url";
import { PortfolioProject } from "../types/PortfolioProject/PortfolioProject";
import { slugify } from "../utils/slugify";
import { portfolioDetails } from "../data/portfolioDetails";
import { personalProjects } from "../data/personalProjects";

const builder = createImageUrlBuilder(client);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const urlFor = (source: string) => builder.image(source);

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setProjectsLoading(true);
    setProjectsError(false);
    client
      .fetch<PortfolioProject[]>(`*[_type == "portfolioProject"] | order(_createdAt desc){
        _id,
        img,
        alt,
        title,
        description,
        link,
        type
      }`)
      .then((data) => { if (active) setProjects(data); })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        if (active) setProjectsError(true);
      })
      .finally(() => { if (active) setProjectsLoading(false); });
    return () => { active = false; };
  }, [loadAttempt]);

  return (
    <div className="pt-24 lg:pt-28">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Toronto Web Design Portfolio | Nav Web Design</title>
        <meta
          name="description"
          content="Explore client website projects for Toronto and GTA service businesses, plus separately labelled personal web apps and frontend prototypes."
        />
        <link rel="canonical" href="https://navwebdesign.com/portfolio" />
      </Helmet>

      {/* ================= HERO ================= */}
      <motion.section
        className="page-hero py-20 text-center text-white md:py-28"
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
            Client websites for service businesses, alongside personal web apps
            that showcase my custom development skills.
          </motion.p>

          <nav aria-label="Portfolio sections" className="flex flex-wrap justify-center gap-4">
            <a href="#client-work" className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-950 hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Client websites
            </a>
            <a href="#personal-projects" className="rounded-full border border-indigo-200 px-6 py-3 font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Personal apps & prototypes
            </a>
          </nav>
        </motion.div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <section id="client-work" aria-labelledby="client-work-heading" className="scroll-mt-28 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Client work</p>
            <h2 id="client-work-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Websites built for real businesses</h2>
            <p className="text-lg text-slate-600">Explore my existing client projects and the approach behind each website. These are separate from the self-directed projects below.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projectsLoading && <p role="status" className="col-span-full text-slate-600">Loading client projects…</p>}
            {!projectsLoading && (projectsError || projects.length === 0) && (
              <p role="status" className="col-span-full rounded-xl border border-indigo-100 bg-indigo-50 p-6 text-slate-700">
                Client projects are temporarily unavailable. <button type="button" onClick={() => setLoadAttempt((attempt) => attempt + 1)} className="font-semibold text-indigo-700 underline">Try loading again</button>, or <Link to="/contact" className="font-semibold text-indigo-700 underline">get in touch for examples of my client work</Link>.
              </p>
            )}
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="premium-card group flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_20px_50px_-38px_rgba(15,23,42,.45)]">

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
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
                      {project.title}
                    </h3>

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

      {/* Personal work is intentionally separate from commissioned client work. */}
      <section id="personal-projects" aria-labelledby="personal-projects-heading" className="scroll-mt-28 border-y border-indigo-100 bg-indigo-50/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Independent development</p>
            <h2 id="personal-projects-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Custom Web Apps & Personal Projects</h2>
            <p className="text-lg text-slate-600">Alongside client websites, I build personal web applications and frontend prototypes to explore custom interfaces, dashboards, and modern development techniques. These are self-directed projects, not paid client engagements.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {personalProjects.map((project) => {
              const Icon = project.icon === "dashboard" ? LayoutDashboard : project.icon === "portal" ? HeartPulse : Car;
              return (
                <article key={project.title} className="flex flex-col rounded-2xl border border-indigo-100 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-indigo-600">{project.category}</p>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">{project.title}</h3>
                  <p className="mb-4 leading-relaxed text-slate-600">{project.description}</p>
                  <p className="mb-5 text-sm leading-relaxed text-slate-700"><span className="font-semibold">Development focus: </span>{project.focus}</p>
                  <ul aria-label={`${project.title} technologies`} className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li key={technology} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{technology}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <p className="mb-6 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">{project.scope}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} demo (opens in a new tab)`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-indigo-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">View demo <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
                      {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub (opens in a new tab)`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-slate-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"><Github className="h-4 w-4" aria-hidden="true" /> Source code</a>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS FOCUS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Websites Built to Generate Real Results
          </h2>

          <p className="text-gray-600 mb-4">
            My client website services focus on helping visitors understand your business and take the next step.
          </p>

          <p className="text-gray-600">
            Focused on SEO, conversion strategy, and performance for Toronto businesses.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="page-hero py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Have a Website Project in Mind?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            Let’s build a website that brings you real leads and clients.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/services" arrow className="px-8 py-4">
              See Services & Pricing
            </Button>

            <Button
              to="/contact"
              variant="outline"
              className="px-8 py-4"
            >
              Discuss Your Website Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
