import { ArrowUpRight, Instagram, Linkedin, Mail, Phone, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { GOOGLE_REVIEWS_URL } from "./GoogleReviews";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b1020] text-white">
      <div className="absolute -right-40 -top-48 h-96 w-96 rounded-full bg-[#5e17eb]/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-start">

          {/* ================= BRAND + LOGO ================= */}
          <div className="md:col-span-5 lg:col-span-5">

            {/* Crop the logo's square source canvas to its visible wordmark. */}
            <div className="relative mb-6 h-20 w-64 overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/10">
              <img
                src="/Images/nav-logo.png"
                alt="Nav Web Design"
                className="absolute left-3 top-1/2 h-[190px] w-[190px] max-w-none -translate-y-1/2 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="mb-7 max-w-md text-base leading-relaxed text-slate-300">
              Strategic websites for Toronto lawyers, contractors, consultants, healthcare providers, and established service businesses—designed and built directly by Nav.
            </p>

            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#5e17eb]" />
                <a href="tel:+16476763466" className="transition hover:text-white">
                  647-676-3466
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#5e17eb]" />
                <a href="mailto:info@navwebdesign.com" className="transition hover:text-white">
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

            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-indigo-300">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-300">

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
                <Link to="/industries" className="hover:text-[#5e17eb] transition">
                  Industries
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

            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.16em] text-indigo-300">
              Let’s Work Together
            </h3>

            <p className="mb-5 max-w-sm text-sm leading-relaxed text-slate-300">
              Available for new website projects and consultations across Toronto & GTA.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <span className="flex text-amber-300">{[...Array(5)].map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-current" />)}</span>
                5.0 on Google <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/navdhamraitweb/" target="_blank" rel="noopener noreferrer" aria-label="Nav Web Design on Instagram" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/nav-dhamrait/" target="_blank" rel="noopener noreferrer" aria-label="Nav Dhamrait on LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"><Linkedin className="h-5 w-5" /></a>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="button-premium inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#5e17eb] to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/30 transition hover:-translate-y-0.5"
              >
                Book a Free Strategy Consultation
              </Link>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Nav Web Design. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built for Toronto businesses where credibility drives the sale.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
