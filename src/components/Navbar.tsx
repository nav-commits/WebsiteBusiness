import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react"; // Import Instagram icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-12 w-12 mt-3 flex items-center justify-center bg-[#5e17eb] text-white font-bold text-2xl rounded-lg">
                ND
              </div>
              <div className="ml-2 mt-3 flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  Nav Dhamrait
                </span>
                <span className="text-xs text-gray-700">
                  WEB DEVELOPER & DESIGNER
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}

            {/* Instagram icon for desktop */}
            <a
              href="https://www.instagram.com/navdhamraitweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 ml-4"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                } block px-3 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Instagram icon for mobile */}
            <a
              href="https://www.instagram.com/navdhamraitweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 block mt-6 ml-4 mx-auto"
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
