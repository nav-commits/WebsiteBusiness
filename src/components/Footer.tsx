import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f8f7ff] text-gray-900 border-t-4 border-[#5e17eb]">

      <div className="max-w-7xl mx-auto pt-14 pb-8 px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-start">

          {/* ================= BRAND + LOGO ================= */}
          <div className="md:col-span-5 lg:col-span-5">

            {/* Crop the logo's square source canvas to its visible wordmark. */}
            <div className="relative h-16 w-56 overflow-hidden mb-5 -ml-3">
              <img
                src="/Images/nav-logo.png"
                alt="Nav Web Design"
                className="absolute h-[180px] w-[180px] max-w-none left-0 top-1/2 -translate-y-1/2 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-base text-gray-700 mb-6 leading-relaxed max-w-md">
              High-converting websites for Toronto service businesses designed to generate real leads, calls, and clients.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-3 text-sm text-gray-800">

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#5e17eb]" />
                <a href="tel:+16476763466" className="hover:text-[#5e17eb] transition">
                  647-676-3466
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#5e17eb]" />
                <a href="mailto:info@navwebdesign.com" className="hover:text-[#5e17eb] transition">
                  info@navwebdesign.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#5e17eb]" />
                <span>Toronto, Ontario, Canada</span>
              </div>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="md:col-span-3 lg:col-span-3">

            <h3 className="text-lg font-bold mb-5 text-gray-900">
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
          <div className="md:col-span-4 lg:col-span-4">

            <h3 className="text-lg font-bold mb-5 text-gray-900">
              Working Hours
            </h3>

            <p className="text-sm text-gray-700 mb-5 leading-relaxed max-w-sm">
              Available for new website projects and consultations across Toronto & GTA.
            </p>

            <div className="text-sm text-gray-700 space-y-2">
              <p className="flex justify-between gap-4 max-w-xs"><span>Monday–Friday</span><span className="font-medium text-gray-900">9 AM–5 PM</span></p>
              <p className="flex justify-between gap-4 max-w-xs"><span>Saturday</span><span className="font-medium text-gray-900">10 AM–4 PM</span></p>
              <p className="flex justify-between gap-4 max-w-xs"><span>Sunday</span><span className="font-medium text-gray-900">Closed</span></p>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#5e17eb] hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition"
              >
                Book a Free Strategy Consultation
              </Link>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-12 pt-6 border-t border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Nav Web Design. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Built for Toronto & GTA service businesses that want more leads.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
