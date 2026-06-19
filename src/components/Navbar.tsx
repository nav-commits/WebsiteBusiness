import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* LEFT: LOGO (RESPONSIVE FIXED) */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src="/Images/nav-logo.png"
                alt="Nav Dhamrait"
                className="
                h-[140px] sm:h-[110px] md:h-[130px] lg:h-[200px]
                w-auto object-contain
              "
              />
            </Link>
          </div>

          {/* CENTER: NAV LINKS (HIDDEN ON SMALLER SCREENS) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-[#5e17eb]"
                    : "text-gray-700 hover:text-[#5e17eb]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* RIGHT: ICON + CTA (DESKTOP ONLY) */}
          <div className="hidden lg:flex items-center space-x-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/navdhamraitweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#5e17eb] transition"
            >
              <Instagram className="h-6 w-6" />
            </a>

            {/* CTA Button */}
            <Button
              to="/contact"
              variant="secondary"
              className="px-5 py-2.5 text-sm"
            >
              Book a Free Consultation
            </Button>
          </div>

          {/* MOBILE MENU BUTTON (VISIBLE ON SMALL + MD) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-[#5e17eb]"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow">
          <div className="pt-2 pb-4 space-y-1">

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? "text-[#5e17eb] bg-indigo-50"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#5e17eb]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <div className="px-4 pt-4">
              <Button
                to="/contact"
                variant="secondary"
                className="w-full px-6 py-4"
              >
                Book a Free Consultation
              </Button>
            </div>

            {/* MOBILE INSTAGRAM */}
            <a
              href="https://www.instagram.com/navdhamraitweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex pl-5 pt-4 text-gray-700 hover:text-[#5e17eb]"
            >
              <Instagram className="h-6 w-6" />
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;