import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

// Strapi API URL
const STRAPI_URL = "http://localhost:1337";

// Type for a blog post
export type StrapiPost = {
  id: number;
  title: string;
  content: RichTextBlock[];
  author: string;
  category?: string;
  publishedDate: string;
};

// Type for a rich text block
export type RichTextBlock = {
  type: string;
  children: { text: string }[];
};

// Fetch posts from Strapi
async function getPosts(): Promise<StrapiPost[]> {
  const res = await fetch(`${STRAPI_URL}/api/posts?populate=*`);
  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  return Array.isArray(data.data) ? data.data : [];
}

// Convert Rich Text blocks to plain text
function renderContent(blocks: RichTextBlock[]): string {
  if (!blocks) return "";
  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        return block.children.map((child: { text: string }) => child.text).join("");
      }
      return "";
    })
    .join("\n\n");
}

// Framer Motion animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Blog = () => {
  const [posts, setPosts] = useState<StrapiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPosts()
      .then((data) => {
        console.log(data)
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load posts.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-20">Loading posts...</p>;
  if (error) return <p className="text-center py-20 text-red-600">{error}</p>;
  if (!Array.isArray(posts) || posts.length === 0)
    return <p className="text-center py-20">No posts found.</p>;

  return (
    <div className="pt-16">
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Blog | Nav Dhamrait — Toronto Web Developer</title>
        <meta
          name="description"
          content="Read insights and tips on web design, SEO, and marketing for local service businesses by Nav Dhamrait, Toronto web developer."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
        <meta property="og:title" content="Blog — Nav Dhamrait" />
        <meta
          property="og:description"
          content="Helpful blog posts on web design, SEO, and marketing for small business websites in Toronto."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blog" />
      </Helmet>

      {/* ================= HERO ================= */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-10 leading-relaxed"
            variants={fadeInUp}
          >
            Stay up-to-date with tips, insights, and guides to help local
            service businesses grow online. Learn web design, SEO, and
            marketing strategies that actually work.
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
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 flex flex-col">
                {/* Title + Icon */}
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-6 w-6 text-[#5e17eb] mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                </div>

                {/* Author, Date, Category */}
                <div className="flex items-center text-gray-500 text-sm mb-4 space-x-2">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.publishedDate}</span>
                  {post.category && (
                    <>
                      <span>•</span>
                      <span>{post.category}</span>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="text-gray-600 leading-relaxed prose prose-indigo">
                  <ReactMarkdown>{renderContent(post.content)}</ReactMarkdown>
                </div>
              </Card>
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
            <Button to="/contact" className="px-8 py-4 rounded-lg" arrow>
              Get a Free Quote
            </Button>
            <Button
              href="https://calendly.com/navdeep-dhamrait94"
              variant="outline"
              className="px-8 py-4 rounded-lg"
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
