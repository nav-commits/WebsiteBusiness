import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";

// Hard-coded blog posts
const blogPosts = [
  {
    id: 1,
    title: "How a Professional Website Helps Local Businesses Get More Clients",
    author: "Nav Dhamrait",
    date: "2026-01-08",
    category: "Web Design",
    content: `
  A professional website is no longer optional for local businesses — it’s one of the most powerful tools you have to attract and convert new clients.
  
  1. First Impressions Build Instant Trust
  When someone searches for your service, your website is often the first interaction they have with your business. A clean, modern design immediately signals professionalism and credibility. If your site looks outdated or confusing, visitors may leave within seconds and choose a competitor instead.
  
  2. Your Website Works 24/7
  Unlike social media or ads that require constant attention, your website works for you around the clock. It answers common questions, showcases your services, and guides visitors toward contacting you — even while you sleep.
  
  3. Clear Messaging Converts Visitors Into Leads
  A well-structured website clearly explains:
  - What you do
  - Who you help
  - Why you’re different
  - How to get started
  
  This clarity removes confusion and makes it easy for potential clients to take action, whether that’s calling you, filling out a form, or booking a consultation.
  
  4. Better SEO Means More Local Visibility
  A professionally built website is optimized for search engines. This helps your business show up when local customers search for services like yours on Google. More visibility means more qualified traffic and more opportunities to win new clients.
  
  5. It Supports All Your Marketing Efforts
  Your website becomes the foundation for everything else — Google Ads, Instagram, Facebook, referrals, and email marketing. Instead of sending people to random links or social profiles, you send them to one place designed to convert.
  
  ### Final Thoughts
  A professional website isn’t just about looking good — it’s about building trust, increasing visibility, and turning visitors into paying clients. For local businesses, it’s one of the smartest investments you can make for long-term growth.
  `,
  }
 , 
  {
    id: 2,
    title: "What Every Small Business Website Needs in 2026",
    author: "Nav Dhamrait",
    date: "2026-01-08",
    category: "Web Design",
    content:
      "Building a small business website today involves planning, design, and development.\n\nFocus on clear CTAs, mobile responsiveness, and SEO basics.\n\nUse modern tools like React, Tailwind, or WordPress depending on your goals.",
  },
];

// Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Blog = () => {
  return (
    <div className="pt-16">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Blog | Nav Dhamrait — Toronto Web Developer</title>
        <meta
          name="description"
          content="Web design, SEO, and marketing insights for local businesses by Nav Dhamrait."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700"
            variants={fadeInUp}
          >
            Practical tips on web design, SEO, and growing your local business
            online.
          </motion.p>
        </div>
      </motion.section>

      {/* ================= POSTS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-6 w-6 text-[#5e17eb] mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  By {post.author} • {post.date} • {post.category}
                </div>

                <p className="text-gray-600 whitespace-pre-line">
                  {post.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Need a Website That Converts?
          </h2>
          <p className="text-lg text-indigo-100 mb-10">
            Let’s build a professional website that helps your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" className="px-8 py-4" arrow>
              Get a Free Quote
            </Button>
            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              variant="outline"
              className="px-8 py-4"
              arrow
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
