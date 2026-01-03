import { motion } from "framer-motion";
import { Image, CheckCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

const blogPosts = [
  {
    title: "Top 5 Website Features That Attract Local Clients",
    content: `
Discover the essential features that make your website stand out and generate leads for local businesses:

- Clear call-to-action buttons
- Mobile-friendly responsive design
- Contact and booking forms
- Services and pricing pages
- Testimonials and portfolio

Tips:
- Make it easy for visitors to contact you
- Highlight your local presence for SEO
- Keep the design clean and professional
    `,
    icon: <CheckCircle className="h-6 w-6 text-[#5e17eb] mr-2" />,
    author: "Nav Dhamrait",
    date: "Dec 30, 2025",
    category: "Web Design",
  },
  {
    title: "WordPress vs Wix vs Custom Code: Which Is Best for Your Business?",
    content: `
Compare popular website platforms and custom solutions to find the right fit for your business goals.

- WordPress: Flexible, plugins, widely used
- Wix: Easy drag & drop, fast setup
- Custom Code: Fully custom, more expensive, high control

Consider:
- Budget & timeline
- Long-term updates & maintenance
- SEO & performance requirements
    `,
    icon: <Image className="h-6 w-6 text-[#5e17eb] mr-2" />,
    author: "Nav Dhamrait",
    date: "Dec 28, 2025",
    category: "Platforms",
  },
  {
    title: "5 Things Every Local Service Website Must Have",
    content: `
Essential elements every local business website needs to attract leads and convert visitors:

1. Mobile-friendly responsive design
2. Clear call-to-action buttons
3. Contact/booking forms
4. Services page with clear info
5. SEO basics (titles, descriptions, alt tags)

Extra tips:
- Include testimonials or portfolio
- Highlight local presence for SEO
    `,
    icon: <CheckCircle className="h-6 w-6 text-[#5e17eb] mr-2" />,
    author: "Nav Dhamrait",
    date: "Dec 25, 2025",
    category: "Web Design",
  },
  {
    title: "How Long Does It Take to Build a Website in 2026?",
    content: `
Timeline for small business websites:

- Consultation & planning: 1–2 days
- Design phase: 3–5 days
- Development phase: 1–2 weeks
- Testing & revisions: 2–3 days
- Launch: 1 day

Tips:
- Faster if client provides content & assets promptly
- Complex features (eCommerce, booking) add time
- Clear communication keeps timeline on track
    `,
    icon: <Image className="h-6 w-6 text-[#5e17eb] mr-2" />,
    author: "Nav Dhamrait",
    date: "Dec 20, 2025",
    category: "Development",
  },
  {
    title: "SEO Basics for Small Business Owners",
    content: `
A simple guide to on-page SEO, Google setup, and content strategies:

- Optimize page titles & meta descriptions
- Add alt text to images
- Submit sitemap to Google Search Console
- Create quality content regularly
- Use local SEO for Google My Business

Outcome:
- Better Google rankings
- More traffic & leads
- Establish authority in your local market
    `,
    icon: <CheckCircle className="h-6 w-6 text-[#5e17eb] mr-2" />,
    author: "Nav Dhamrait",
    date: "Dec 18, 2025",
    category: "SEO",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Blog = () => {
  return (
    <div className="pt-16">
      {/* ================= BLOG HERO ================= */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-10 leading-relaxed"
            variants={fadeInUp}
          >
            Stay up-to-date with tips, insights, and guides to help local
            service businesses grow online. Our blog helps you understand web
            design, SEO, and marketing strategies that actually work.
          </motion.p>
        </div>
      </motion.section>

      {/* ================= BLOG POSTS GRID ================= */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition flex flex-col"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2">
                {post.icon}
                <h3 className="text-2xl font-semibold text-gray-900">
                  {post.title}
                </h3>
              </div>

              {/* Author, Date, Category */}
              <div className="flex items-center text-gray-500 text-sm mb-4 space-x-2">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                {post.category && (
                  <>
                    <span>•</span>
                    <span>{post.category}</span>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="text-gray-600 leading-relaxed">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Want More Insights on Web Design & Marketing?
          </h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            Browse our blog or book a consultation to discuss your website needs
            and growth strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg text-[#5e17eb] bg-white hover:bg-indigo-50 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="https://calendly.com/navdeep-dhamrait94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg border border-white/40 hover:bg-white/10 transition"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
