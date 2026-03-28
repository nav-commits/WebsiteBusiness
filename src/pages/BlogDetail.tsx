import { useParams } from "react-router-dom";
import blogPosts from "../data/blogs.json";
import { Helmet } from "react-helmet-async";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Post Not Found
        </h1>
        <Button to="/blog" variant="secondary" className="px-8 py-4" arrow>
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>{post.title} | Nav Dhamrait</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* ================= HERO ================= */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            {post.title}
          </motion.h1>
          <motion.div
            className="text-sm text-gray-500 mb-2"
            variants={fadeInUp}
          >
            By {post.author} • {post.date} • {post.category}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= BLOG CONTENT ================= */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <Card className="p-10 space-y-8">
            <article className="prose max-w-none text-gray-700">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

            {/* Back button left-aligned */}
            <div className="flex justify-start mt-4">
              <Button to="/blog" variant="secondary" className="px-8 py-4" arrow>
                Back to Blog
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogDetail;