import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import { Button } from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDropdownOpen(false);
      }

      if (isOpen && navRef.current && !navRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen, isOpen]);

  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

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
  const isMoreActive = moreLinks.some((item) => isActive(item.href));

  return (
    <nav ref={navRef} aria-label="Primary navigation" className="bg-white shadow-sm border-b border-indigo-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* HEIGHT INCREASED */}
        <div className="flex items-center justify-between h-28">

          {/* LOGO (BIGGER + MORE BALANCED) */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" aria-label="Nav Web Design home">
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
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-[15px] tracking-wide transition-all duration-200 rounded-lg px-3 py-2 ${
                    isActive(item.href)
                      ? "font-semibold text-[#5e17eb] bg-indigo-50 shadow-sm ring-1 ring-inset ring-indigo-100"
                      : "text-gray-700 hover:text-[#5e17eb] hover:bg-indigo-50/60"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}

            {/* MORE */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-controls="more-navigation"
                className={`flex items-center rounded-lg px-3 py-2 text-[15px] font-medium transition-all duration-200 ${
                  isMoreActive
                    ? "bg-indigo-50 font-semibold text-[#5e17eb] shadow-sm ring-1 ring-inset ring-indigo-100"
                    : "text-gray-700 hover:bg-indigo-50/60 hover:text-[#5e17eb]"
                }`}
              >
                More
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div id="more-navigation" className="absolute top-10 left-0 bg-white shadow-xl rounded-xl py-2 w-48 border border-gray-100">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setDropdownOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`mx-2 block rounded-lg px-4 py-3 text-sm transition ${
                        isActive(item.href)
                          ? "bg-indigo-50 font-semibold text-[#5e17eb]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#5e17eb]"
                      }`}
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
              aria-label="Nav Web Design on Instagram"
              className="text-gray-700 hover:text-[#5e17eb] transition"
            >
              <Instagram className="h-6 w-6" />
            </a>

            {/* ✅ USING YOUR SECONDARY BUTTON PROPERLY */}
            <Button
              to="/contact"
              variant="secondary"
              className={`px-7 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition ${
                isActive("/contact") ? "ring-4 ring-indigo-100" : ""
              }`}
            >
              Book a Free Strategy Consultation
            </Button>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="p-3 text-gray-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="py-5 space-y-2">

            {[...navigation, ...moreLinks].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`mx-3 block rounded-xl px-5 py-3 text-base font-medium transition ${
                  isActive(item.href)
                    ? "text-[#5e17eb] bg-indigo-50 shadow-sm border-l-4 border-[#5e17eb]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#5e17eb]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-6 pt-4">
              <Button to="/contact" variant="secondary" className="w-full py-4">
                Book a Free Strategy Consultation
              </Button>
            </div>

            <div className="flex px-6 pt-4 pb-6">
              <a
                href="https://www.instagram.com/navdhamraitweb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nav Web Design on Instagram"
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
