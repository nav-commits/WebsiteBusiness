import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../data/data";
import { Button } from "../components/Button";
import { Star } from "lucide-react";
import { Card } from "../components/Card";

const Testimonials = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-[#5e17eb] font-semibold mb-4"
            variants={fadeInUp}
          >
            Helping local businesses grow online in Toronto & GTA
          </motion.p>
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            What My Clients Are Saying
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Don't just take my word for it. Here's what some of my clients have
            to say about their experience working with me.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <Card
                    className="flex flex-col p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 h-full min-h-[360px]"
                  >
                    {/* Logo */}
                    {testimonial.logo && (
                      <div className="mb-4 flex justify-center">
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.name} logo`}
                          className="h-14 w-14 object-contain"
                        />
                      </div>
                    )}

                    {/* Name + Role */}
                    <div className="mb-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial */}
                    <p className="text-gray-600 italic text-center flex-grow mt-2">
                      "{testimonial.content}"
                    </p>
                  </Card>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Turn Your Website Into a Lead Machine?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            If my work and process make sense for your business, let’s talk
            about your project and see if we’re a good fit.
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
