"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { posts } from "../data/posts";
import { Button } from "./Button";
import { Tag } from "./Tag";

export default function BlogPreview() {
  const previewPosts = posts.slice(0, 2);

  return (
    <section id="blog" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-on-surface mb-4">Escritas da Alma</h2>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-light">Reflexões sobre a existência, o sentir e o processo de tornar-se quem se é.</p>
          </div>
          <Link href="/blog">
            <Button variant="tertiary" size="sm" iconRight={<ArrowRight />}>
              Ver todo o blog
            </Button>
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
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden rounded-3xl mb-8 aspect-[4/3] bg-surface-container-high shadow-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Tag variant="sage" size="sm">{post.category}</Tag>
                  <span className="text-on-surface-variant/60 text-xs font-medium">{post.date}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-lg line-clamp-2 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-primary font-bold">
                  <span>Continuar Lendo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
