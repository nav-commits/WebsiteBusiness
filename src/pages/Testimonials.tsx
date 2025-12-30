import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ajay Kalha',
      role: 'Founder & Tax Consultant',
      content:
        'Nav created a beautiful, professional website that exceeded our expectations. Our traffic has increased, and the site runs flawlessly. Highly recommend his services!',
      rating: 5,
      logo: '/logos/ajay.png',
    },
    {
      name: 'Simona',
      role: 'Owner, The Healing Hive Psychotherapy',
      content:
        'Nav created a beautiful, professional website that truly represents my practice. The booking system is seamless, and clients find it easy to navigate. Highly recommend his work!',
      rating: 5,
      logo: '/logos/healing.png',
    },
    {
      name: 'Harry Singh',
      role: 'Owner, CMT Security Services',
      content:
        'Nav built a sleek, professional website that has significantly boosted my business. Clients can now easily find our services, and the site runs smoothly on all devices. Highly recommend his expertise!',
      rating: 5,
      logo: '/logos/security.png',
    },
    {
      name: 'Prabhjot Rathore',
      role: 'PSR Law',
      content:
        'Working with Nav has been phenomenal! He designed our website exactly how we wanted, and was always there to help whenever we had questions. Thank you for your amazing work, 5 stars!',
      rating: 5,
      logo: '/logos/psrlaw.png',
    },
    {
      name: 'Sahib Walia',
      role: 'Owner, Container Storage Solutions',
      content:
        'Nav completely transformed our website, taking it from outdated to professional. The new design is clean, mobile-friendly, and truly represents our brand. We’ve already seen an increase in leads and received positive feedback from clients. I’m beyond happy with the results and highly recommend Nav to any business looking to improve their online presence.',
      rating: 5,
      logo: '/logos/container.png',
    },
    {
      name: 'Vik Ghankas',
      role: 'Founder, Ghankas Law Group',
      content:
        'I just wanted to give a huge shoutout to my main man, Nav Dhamrait, for designing and developing my new Family Law website. He was extremely diligent and proactive throughout the entire process. I can’t recommend him enough to all my friends and family who are looking to have a website built. Thanks, Nav Dhamrait!',
      rating: 5,
      logo: '/logos/vik.png',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Carousel settings: 1 card per slide for all screen sizes
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
          <motion.p className="text-indigo-600 font-semibold mb-4" variants={fadeInUp}>
            Helping local businesses grow online in Toronto & GTA
          </motion.p>
          <motion.h1 className="text-4xl font-bold text-gray-900 mb-6" variants={fadeInUp}>
            What My Clients Are Saying
          </motion.h1>
          <motion.p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            Don't just take my word for it. Here's what some of my clients have to say about their experience working with me.
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
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition duration-300 flex flex-col h-full min-h-[360px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
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
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-600 italic text-center flex-grow mt-2">"{testimonial.content}"</p>
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
            If my work and process make sense for your business, let’s talk about your project and see if we’re a good fit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="https://calendly.com/navdeep-dhamrait94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg border border-white/40 hover:bg-white/10 transition"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
