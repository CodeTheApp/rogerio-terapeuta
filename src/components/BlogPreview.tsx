'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { posts } from '../data/posts';
import { Button } from './Button';
import { Tag } from './Tag';

export default function BlogPreview() {
  const previewPosts = posts.slice(0, 2);

  return (
    <section id='blog' className='bg-surface px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex md:flex-row flex-col justify-between items-end gap-6 mb-16'>
          <div className='md:text-left text-center'>
            <h2 className='mb-4 font-serif font-bold text-on-surface text-5xl md:text-7xl tracking-tight'>
              Escritas da Alma
            </h2>
            <p className='max-w-2xl font-light text-on-surface-variant text-lg'>
              Reflexões sobre a existência, o sentir e o processo de tornar-se
              quem se é.
            </p>
          </div>
          <Link href='/blog'>
            <Button variant='tertiary' size='sm' iconRight={<ArrowRight />}>
              Ver todo o blog
            </Button>
          </Link>
        </div>

        <div className='gap-12 grid grid-cols-1 md:grid-cols-2'>
          {previewPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className='group flex flex-col'
            >
              <Link href={`/blog/${post.slug}`} className='block'>
                <div className='bg-surface-container-high shadow-lg mb-8 rounded-3xl aspect-[4/3] overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                    referrerPolicy='no-referrer'
                  />
                </div>
                <div className='flex items-center gap-3 mb-4'>
                  <Tag variant='sage' size='sm'>
                    {post.category}
                  </Tag>
                  <span className='font-medium text-on-surface-variant/60 text-xs'>
                    {post.date}
                  </span>
                </div>
                <h3 className='mb-4 font-serif font-bold text-on-surface group-hover:text-primary text-3xl leading-tight transition-colors'>
                  {post.title}
                </h3>
                <p className='mb-8 text-on-surface-variant text-lg line-clamp-2 leading-relaxed'>
                  {post.excerpt}
                </p>
                <div className='flex items-center gap-2 mt-auto font-bold text-primary'>
                  <span>Continuar Lendo</span>
                  <ArrowUpRight className='w-4 h-4' />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
