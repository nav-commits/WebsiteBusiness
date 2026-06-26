import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black border-t border-gray-200">

      <div className="max-w-7xl mx-auto py-14 px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* ================= BRAND + LOGO ================= */}
          <div>

            {/* BIGGER LOGO */}
            <div className="mb-6">
              <img
                src="/Images/nav-logo.png"
                alt="Nav Web Design"
                className="h-[170px] w-auto object-contain"
              />
            </div>

            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              High-converting websites for Toronto service businesses designed to generate real leads, calls, and clients.
            </p>

            <div className="space-y-3 text-sm text-gray-800">

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#5e17eb]" />
                <span>647-676-3466</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#5e17eb]" />
                <span>info@navwebdesign.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#5e17eb]" />
                <span>Toronto, Ontario, Canada</span>
              </div>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="pt-10 md:pt-16">

            <h3 className="text-lg font-semibold mb-5 text-black">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-700">

              <li>
                <Link to="/services" className="hover:text-[#5e17eb] transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-[#5e17eb] transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#5e17eb] transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#5e17eb] transition">
                  Get Started
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= HOURS ================= */}
          <div className="pt-10 md:pt-16">

            <h3 className="text-lg font-semibold mb-5 text-black">
              Working Hours
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Available for new website projects and consultations across Toronto & GTA.
            </p>

            <div className="text-sm text-gray-700 space-y-1">
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-[#5e17eb] hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-3 rounded-lg transition"
              >
                Book a Consultation
              </Link>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-center">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Nav Web Design. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Built for Toronto & GTA service businesses that want more leads.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;