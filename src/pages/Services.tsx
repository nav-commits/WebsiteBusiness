import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const packages = [
    {
      title: 'Starter Website',
      price: '$500',
      features: [
        '5-page modern website',
        'Mobile-friendly & SEO optimized',
        'Free domain & hosting setup',
        '2 rounds of revisions'
      ]
    },
    {
      title: 'Business Website',
      price: '$1,000+',
      features: [
        'Everything in Starter Package',
        'Blog, Booking Form, or E-commerce setup',
        'Performance & SEO optimization',
        '3 rounds of revisions'
      ]
    },
    {
      title: 'Website Maintenance',
      price: '$50/month',
      features: [
        'Regular updates & security patches',
        'Performance optimization',
        'Ongoing support',
        'Monthly reports'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Affordable & Modern WordPress Websites for Your Business
    </h1>
    <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
      As a web designer, I create customized, high-performance WordPress websites for businesses of all sizes, helping them establish a strong and effective online presence.
    </p>
  </div>
</section>


      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.title}</h3>
                  <p className="text-4xl font-bold text-indigo-600 mb-6">{pkg.price}</p>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your website needs and create a solution that works for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Me Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;