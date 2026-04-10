import Slider from "react-slick";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../components/Button";
import { Star } from "lucide-react";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { client } from "../SanityClient/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { Testimonial } from "../types/Testimonal/testimonal";

const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "testimonial"] | order(_createdAt desc){
        _id,
        name,
        role,
        content,
        rating,
        logo
      }`)
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      <Helmet>
        <title>
          Client Testimonials | Toronto Web Design Results & Reviews
        </title>
        <meta
          name="description"
          content="Read real client testimonials from Toronto businesses. See how high-converting websites helped generate leads, calls, and growth."
        />
      </Helmet>

      <div className="pt-16 min-h-screen flex flex-col">
        {/* ================= HERO ================= */}
        <motion.section
          className="bg-gradient-to-r from-indigo-600 to-purple-600 py-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-4xl mx-auto px-6"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.p
              className="text-white font-semibold mb-4"
              variants={fadeInUp}
            >
              Trusted by Toronto service businesses
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Real Results From Real Clients
            </motion.h1>

            <motion.p
              className="text-xl text-indigo-200 mb-12"
              variants={fadeInUp}
            >
              See how businesses in Toronto are using their websites to generate
              more leads, calls, and customers.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-20 bg-white flex-grow">
          <div className="max-w-3xl mx-auto px-4">
            {testimonials.length === 0 && (
              <p className="text-center text-gray-500">
                Loading testimonials...
              </p>
            )}

            {testimonials.length > 0 && (
              <Slider {...settings}>
                {testimonials.map((t, index) => (
                  <div key={t._id} className="p-4">
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="flex flex-col p-8 rounded-2xl shadow-lg min-h-[360px]">
                        {/* Logo */}
                        {t.logo && (
                          <div className="mb-4 flex justify-center">
                            <img
                              src={urlFor(t.logo).width(120).url()}
                              alt={`${t.name} business logo`}
                              className="h-16 object-contain"
                            />
                          </div>
                        )}

                        {/* Name */}
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {t.name}
                          </h3>
                          <p className="text-gray-600">{t.role}</p>
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center mb-4">
                          {[...Array(Math.min(t.rating || 5, 5))].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400" />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-gray-600 italic text-center flex-grow">
                          "{t.content}"
                        </p>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </section>

        {/* ================= SEO BOOST ================= */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Websites That Deliver Real Business Results
            </h2>

            <p className="text-gray-600 mb-4">
              These testimonials reflect the results of building websites
              focused on conversions, performance, and clear messaging.
            </p>

            <p className="text-gray-600">
              If you’re a Toronto business looking to generate more leads from
              your website, the same approach can be applied to your business.
            </p>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Want Results Like These?
            </h2>

            <p className="text-lg text-indigo-100 mb-10">
              Let’s build a website that actually brings you leads, calls, and
              clients.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" className="px-8 py-4" arrow>
                Get a Free Quote
              </Button>

              <Button
                href="https://calendly.com/navdeep-dhamrait94"
                variant="outline"
                className="px-8 py-4"
                arrow
              >
                Book a Free Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;