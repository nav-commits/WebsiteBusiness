import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { client } from "../SanityClient/sanityClient";
import { PortableText } from "@portabletext/react";
import { BlogPost } from "../types/BlogPost/blogPost";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  useEffect(() => {
    if (!slug) return;
    client
      .fetch(
        `*[_type == "blogPost" && slug.current == $slug][0]{
          _id,
          title,
          author,
          publishedAt,
          category,
          excerpt,
          content
        }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, [slug]);
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="pt-16">
      <Helmet>
        <title>{post.title} | Nav Dhamrait</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
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
            By {post.author} •{" "}
            {new Date(post.publishedAt).toLocaleDateString()} • {post.category}
          </motion.div>
        </div>
      </motion.section>
      <section className="max-w-4xl mx-auto py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <Card className="p-10 space-y-8">
            <article className="prose max-w-none text-gray-700">
            <PortableText value={post.content} />
            </article>
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