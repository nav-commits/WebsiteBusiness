import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import { Button } from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact", cta: true },
  ];

  const moreLinks = [
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-indigo-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* HEIGHT INCREASED */}
        <div className="flex items-center justify-between h-28">

          {/* LOGO (BIGGER + MORE BALANCED) */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src="/Images/nav-logo.png"
                alt="Nav Dhamrait"
                className="h-[150px] sm:h-[160px] md:h-[180px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-9">

            {navigation.map((item) =>
              item.cta ? null : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-[15px] font-medium tracking-wide transition relative group ${
                    isActive(item.href)
                      ? "text-[#5e17eb]"
                      : "text-gray-700 hover:text-[#5e17eb]"
                  }`}
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#5e17eb] transition-all group-hover:w-full"></span>
                </Link>
              )
            )}

            {/* MORE */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-[15px] font-medium text-gray-700 hover:text-[#5e17eb]"
              >
                More <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl py-2 w-48 border border-gray-100">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#5e17eb]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE CTA */}
          <div className="hidden lg:flex items-center space-x-5">

            <a
              href="https://www.instagram.com/navdhamraitweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#5e17eb] transition"
            >
              <Instagram className="h-6 w-6" />
            </a>

            {/* ✅ USING YOUR SECONDARY BUTTON PROPERLY */}
            <Button
              to="/contact"
              variant="secondary"
              className="px-7 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition"
            >
              Book a Free Call
            </Button>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-gray-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="py-5 space-y-2">

            {[...navigation, ...moreLinks].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-3 text-base font-medium ${
                  isActive(item.href)
                    ? "text-[#5e17eb] bg-indigo-50"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#5e17eb]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-6 pt-4">
              <Button to="/contact" variant="secondary" className="w-full py-4">
                Book a Free Call
              </Button>
            </div>

            <div className="flex px-6 pt-4 pb-6">
              <a
                href="https://www.instagram.com/navdhamraitweb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;