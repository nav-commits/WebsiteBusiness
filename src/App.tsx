import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyOffer from "./components/StickyOffer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioDetail = lazy(() => import("./pages/PortfolioDetail"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const FAQPage = lazy(() => import("./pages/FAQ"));

import { useAnalytics } from "./useAnalystics";

function App() {
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <ScrollToTop />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="pt-40 min-h-[60vh] text-center text-gray-600" role="status">
              Loading page…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="*"
              element={<div className="pt-80 text-center">Page Not Found</div>}
            />
          </Routes>
        </Suspense>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING STICKY OFFER */}
      <StickyOffer />
    </div>
  );
}

export default App;
