import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What My Clients Are Saying
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have to say about their experience working with me.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                {/* Logo */}
                {testimonial.logo && (
                  <div
                    className={`mb-4 ${
                      testimonial.name === 'Vik Ghankas'
                        ? 'bg-blue-900 p-2 rounded-md inline-block'
                        : ''
                    }`}
                  >
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.name} logo`}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                )}

                {/* Name + Role */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your website needs and create a solution that works for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-[#5e17eb] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Contact Me Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
