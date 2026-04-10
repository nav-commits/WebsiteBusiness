import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Helmet } from 'react-helmet-async'
import { CheckCircle } from 'lucide-react'
import { client } from '../SanityClient/sanityClient' 
import { BlogPost } from '../types/BlogPost/blogPost'
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "blogPost"] | order(publishedAt desc){
        _id,
        title,
        author,
        publishedAt,
        category,
        excerpt,
        "slug": slug.current
      }`)
      .then((data) => setPosts(data))
      .catch((err) => console.error('Sanity fetch error:', err))
  }, [])

  return (
    <div className="pt-16">
      <Helmet>
        <title>Blog | Nav Dhamrait — Toronto Web Developer</title>
        <meta
          name="description"
          content="Web design, SEO, and marketing insights for local businesses by Nav Dhamrait."
        />
      </Helmet>
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-lg text-indigo-200 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Practical tips on web design, SEO, and growing your local business
            online. Insights you can implement to improve your website, generate leads, and grow revenue.
          </motion.p>
        </div>
      </motion.section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length === 0 && <p>Loading posts...</p>}
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col p-6 h-full hover:shadow-lg transition">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-6 w-6 text-[#5e17eb] mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  By {post.author} • {new Date(post.publishedAt).toLocaleDateString()} • {post.category}
                </div>
                <p className="text-gray-600 flex-grow">{post.excerpt}</p>
                <Button
                 href={`/blog/${post.slug}`} 
                  variant="secondary"
                  arrow
                  className="px-6 py-3 mt-6 self-start"
                >
                  Read More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Need a Website That Converts?
          </h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
            Let’s build a professional website that helps your business grow and attract more clients.
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
  )
}

export default Blog