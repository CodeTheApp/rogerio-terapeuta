import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { posts } from "../data/posts";

export default function BlogPreview() {
  // Show only the first 2 posts in the preview
  const previewPosts = posts.slice(0, 2);

  return (
    <section id="blog" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-on-surface mb-4">Escritas da Alma</h2>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-light">Reflexões sobre a existência, o sentir e o processo de tornar-se quem se é.</p>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group mb-2">
            Ver todo o blog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {previewPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden rounded-3xl mb-8 aspect-[4/3] bg-surface-container-high shadow-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-on-surface-variant/60 text-xs font-medium">{post.date}</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-lg line-clamp-2 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-primary font-bold group/link">
                  <span className="group-hover/link:underline">Continuar Lendo</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
