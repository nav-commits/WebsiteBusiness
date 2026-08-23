import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Linkedin, ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
    { name: "Industries", href: "/industries" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isMoreActive = moreLinks.some((item) => isActive(item.href));

  return (
    <nav ref={navRef} aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-[0_10px_40px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* HEIGHT INCREASED */}
        <div className="flex h-24 items-center justify-between lg:h-28">

          {/* LOGO (BIGGER + MORE BALANCED) */}
          <div className="flex min-w-0 flex-shrink-0 items-center">
            <Link to="/" aria-label="Nav Web Design home" className="group relative block h-20 w-52 overflow-hidden sm:w-60 lg:h-24 lg:w-64">
              <img
                src="/Images/nav-logo.png"
                alt="Nav Dhamrait"
                className="absolute left-0 top-1/2 h-[165px] w-[165px] max-w-none -translate-y-1/2 object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-[180px] sm:w-[180px] lg:h-[205px] lg:w-[205px]"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 xl:flex">

            {navigation.map((item) =>
              item.cta ? null : (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-xl px-4 py-2.5 text-[15px] tracking-[-0.01em] transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-indigo-50 font-bold text-[#5e17eb] ring-1 ring-inset ring-indigo-100"
                      : "font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#5e17eb]"
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
                className={`flex items-center rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-all duration-200 ${
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

              <AnimatePresence>
              {dropdownOpen && (
                <motion.div id="more-navigation" initial={{opacity:0,y:-8,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-6,scale:.98}} transition={{duration:.18}} className="absolute left-0 top-12 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
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
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE CTA */}
          <div className="hidden items-center gap-4 xl:flex">

            <a
              href="https://www.instagram.com/navdhamraitweb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nav Web Design on Instagram"
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-[#5e17eb]"
            >
              <Instagram className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/nav-dhamrait/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nav Dhamrait on LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-[#5e17eb]"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            {/* ✅ USING YOUR SECONDARY BUTTON PROPERLY */}
            <Button
              to="/contact"
              variant="secondary"
              className={`px-6 py-3 text-sm ${
                isActive("/contact") ? "ring-4 ring-indigo-100" : ""
              }`}
            >
              Book a Free Strategy Consultation
            </Button>
          </div>

          {/* MOBILE */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-[#5e17eb]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
      {isOpen && (
        <motion.div id="mobile-navigation" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:.25}} className="overflow-hidden border-t border-slate-100 bg-white shadow-xl xl:hidden">
          <div className="mx-auto max-w-2xl space-y-1 px-2 py-5">

            {[...navigation, ...moreLinks].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`mx-3 block rounded-xl px-5 py-3 text-base font-medium transition ${
                  isActive(item.href)
                    ? "bg-indigo-50 text-[#5e17eb] shadow-sm ring-1 ring-inset ring-indigo-100"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#5e17eb]"
                }`}
              >
                <span className="flex items-center justify-between">{item.name}<ArrowRight className="h-4 w-4 opacity-50" /></span>
              </Link>
            ))}

            <div className="px-6 pt-4">
              <Button to="/contact" variant="secondary" className="w-full py-4">
                Book a Free Strategy Consultation
              </Button>
            </div>

            <div className="flex gap-5 px-6 pt-4 pb-6">
              <a
                href="https://www.instagram.com/navdhamraitweb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nav Web Design on Instagram"
                className="text-gray-700"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nav-dhamrait/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nav Dhamrait on LinkedIn"
                className="text-gray-700 transition hover:text-[#5e17eb]"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
