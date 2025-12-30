import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";

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
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center flex-shrink-0">
            {" "}
            <img
            
             src="/logos/nav-logo.png"
             alt="Nav Dhamrait"
             className="
               h-[120px] 
               md:h-[80px] 
               lg:h-[200px] 
               w-auto 
               object-contain
             "
           />
           
           
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "text-[#5e17eb]"
                    : "text-gray-700 hover:text-[#5e17eb]"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}

            {/* Instagram */}
            <a
              href="https://www.instagram.com/navdhamraitweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#5e17eb] ml-4"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#5e17eb] focus:outline-none"
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

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <div className="pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "bg-indigo-50 text-[#5e17eb]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#5e17eb]"
                } block px-4 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Instagram mobile */}
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
