import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyOffer from "./components/StickyOffer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import FAQPage from "./pages/FAQ";

import { useAnalytics } from "./useAnalystics";

function App() {
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
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
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING STICKY OFFER */}
      <StickyOffer />
    </div>
  );
}

export default App;