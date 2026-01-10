import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";

// ✅ Dynamic blog data
import blogPosts from "../data/blogs.json";

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
          <motion.p className="text-lg text-gray-700" variants={fadeInUp}>
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
              <Card className="p-8 space-y-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-6 w-6 text-[#5e17eb] mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                </div>
                <div className="text-sm text-gray-500">
                  By {post.author} • {post.date} • {post.category}
                </div>
                <p className="text-gray-600">{post.excerpt}</p>
                <Button
                  href={`/blog/${post.id}`}
                  variant="secondary"
                  arrow
                  className="px-6 py-3 mt-auto self-start"
                >
                  Read More
                </Button>
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
