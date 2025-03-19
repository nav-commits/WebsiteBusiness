import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ajay Kalha',
      role: 'Founder & Tax Consultant',
      content: 'Nav created a beautiful, professional website that exceeded our expectations. Our traffic has increased, and the site runs flawlessly. Highly recommend his services!',
      rating: 5
    },
    {
      name: "Simona",
      role: "Owner, The Healing Hive Psychotherapy",
      content: "Nav created a beautiful, professional website that truly represents my practice. The booking system is seamless, and clients find it easy to navigate. Highly recommend his work!",
      rating: 5
    },
    {
      name: "Harry Singh",
      role: "Owner, CMT Security Services",
      content: "Nav built a sleek, professional website that has significantly boosted my business. Clients can now easily find our services, and the site runs smoothly on all devices. Highly recommend his expertise!",
      rating: 5
    },
    {
      name: "Prabhjot Rathore",
      role: "PSR Law",
      content: "Working with Nav has been phenomenal! He designed our website exactly how we wanted, and was always there to help whenever we had questions. Thank you for your amazing work, 5 stars!",
      rating: 5
    }
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
            Don't just take my word for it. Here's what some of my clients have to say 
            about their experience working with me.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
