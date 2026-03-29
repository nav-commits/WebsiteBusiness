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
    <div className="pt-16 min-h-screen flex flex-col">
      <Helmet>
        <title>Testimonials | Nav Dhamrait — Toronto Web Developer</title>
        <meta
          name="description"
          content="See what clients say about working with Nav Dhamrait."
        />
      </Helmet>
      <motion.section
        className="bg-gray-50 py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div className="max-w-4xl mx-auto px-6">
          <motion.p
            className="text-[#5e17eb] font-semibold mb-4"
            variants={fadeInUp}
          >
            Helping businesses grow online
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            What My Clients Are Saying
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-12"
            variants={fadeInUp}
          >
            Real results from real businesses I’ve worked with.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-white flex-grow">
        <div className="max-w-3xl mx-auto px-4">
          {/* Loading */}
          {testimonials.length === 0 && (
            <p className="text-center text-gray-500">
              Loading testimonials...
            </p>
          )}

          {/* Slider */}
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

                      {t.logo && (
                        <div className="mb-4 flex justify-center">
                          <img
                            src={urlFor(t.logo).width(120).url()}
                            alt={t.name}
                            className="h-16 object-contain"
                          />
                        </div>
                      )}

                      {/* Name + Role */}
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {t.name}
                        </h3>
                        <p className="text-gray-600">{t.role}</p>
                      </div>

                      {/* Rating */}
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
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Grow Your Business?
          </h2>

          <p className="text-lg text-indigo-100 mb-10">
            Let’s build a website that actually brings you clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" className="px-8 py-4 rounded-lg" arrow>
              Get a Free Quote
            </Button>
            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              variant="outline"
              className="px-8 py-4 rounded-lg"
              arrow
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;