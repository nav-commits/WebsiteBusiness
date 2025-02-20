import { Mail, Phone, MapPin } from "lucide-react";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>647-975-3467</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>navdeep.dhamrait94@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-indigo-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-indigo-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <p className="text-gray-300">
              Monday - Friday: 9:00 AM - 5:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Nav Dhamrait. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
