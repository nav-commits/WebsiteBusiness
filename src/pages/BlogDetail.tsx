import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { client } from "../SanityClient/sanityClient";
import { PortableText } from "@portabletext/react";
import { BlogPost } from "../types/BlogPost/blogPost";
import { blogSeoFallbacks } from "../data/seoFallbacks";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const seoFallback = slug ? blogSeoFallbacks[slug] : undefined;
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
      <div className="pt-28" aria-busy="true">
        <Helmet>
          <title>{seoFallback?.title || "Web Design Insight"} | Nav Web Design</title>
          <meta
            name="description"
            content={seoFallback?.description || "Practical web design and SEO guidance for Toronto service businesses."}
          />
          {slug && <link rel="canonical" href={`https://navwebdesign.com/blog/${slug}`} />}
        </Helmet>
        <section className="page-hero py-20 text-center text-white md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-indigo-200">Web design insight</p>
            <h1 className="text-4xl font-black md:text-5xl">{seoFallback?.title || "Web Design Insight"}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-indigo-100">
              {seoFallback?.description || "Loading the full article…"}
            </p>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="pt-28">
      <Helmet>
        <title>{post.title} | Nav Web Design</title>
        <meta name="description" content={post.excerpt} />
        <link
          rel="canonical"
          href={`https://navwebdesign.com/blog/${slug}`}
        />
      </Helmet>
      <motion.section
        className="page-hero py-20 text-white md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="mb-4 text-4xl font-black text-white md:text-5xl"
            variants={fadeInUp}
          >
            {post.title}
          </motion.h1>
          <motion.div
            className="mb-2 text-sm text-indigo-100"
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
          <Card className="surface-card space-y-8 p-6 sm:p-10">
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
