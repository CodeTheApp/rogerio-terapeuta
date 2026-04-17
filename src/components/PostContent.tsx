'use client';

import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { posts, type Post } from '../data/posts';
import { Button } from './Button';

export default function PostContent({ post }: { post: Post }) {
  const [copied, setCopied] = useState(false);
  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 2);

  const handleShare = async () => {
    if (typeof window === 'undefined') return;

    const url = window.location.href;
    const shareData = {
      title: 'Rogério Viana — Psicólogo Clínico',
      text: 'Espaço de escuta e transformação.',
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // User cancelled or share failed — silently ignore
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='pt-24 md:pt-32 pb-20'
    >
      <div className='mx-auto mb-8 px-8 max-w-7xl'>
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 font-bold text-on-surface-variant hover:text-primary text-sm uppercase tracking-widest transition-colors'
        >
          <ArrowLeft className='w-4 h-4' />
          Voltar ao Blog
        </Link>
      </div>

      <div className='mx-auto mb-16 px-8 max-w-7xl'>
        <div className='items-center gap-12 grid grid-cols-1 lg:grid-cols-12'>
          <div className='lg:col-span-8'>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='inline-block bg-secondary-container mb-6 px-4 py-1 rounded-full font-semibold text-on-secondary-container text-xs uppercase tracking-widest'
            >
              {post.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='mb-8 font-headline font-bold text-on-surface text-4xl md:text-6xl leading-[1.1]'
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='flex items-center gap-4 font-medium text-on-surface-variant text-sm'
            >
              <Calendar size={18} className='text-primary' />
              <span>{post.date}</span>
              <span className='mx-2'>·</span>
              <Clock size={18} className='text-primary' />
              <span>{post.readTime}</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='mx-auto mb-20 px-8 max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className='bg-surface-container-low rounded-[2.5rem] w-full aspect-[21/9] overflow-hidden'
        >
          <img
            src={post.image}
            alt={post.title}
            className='w-full h-full object-cover'
            referrerPolicy='no-referrer'
          />
        </motion.div>
      </div>

      <div className='gap-16 grid grid-cols-1 lg:grid-cols-12 mx-auto px-8 max-w-7xl'>
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='lg:col-span-8 text-on-surface-variant leading-relaxed'
        >
          <div
            className='prose-blockquote:border-primary max-w-none prose-blockquote:font-headline prose-headings:font-headline prose-blockquote:text-primary prose-headings:text-on-surface prose-p:text-on-surface-variant prose-blockquote:text-2xl prose-blockquote:italic prose prose-lg'
            dangerouslySetInnerHTML={{
              __html:
                post.content ||
                `<p>${post.excerpt}</p><p>Conteúdo completo em breve...</p>`,
            }}
          />

          <div className='flex flex-wrap gap-3 mt-16 pt-12 border-t border-outline-variant'>
            {[
              'Auto-conhecimento',
              'Psicologia',
              'Mindfulness',
              'Bem-estar',
            ].map((tag) => (
              <span
                key={tag}
                className='bg-surface-container-low hover:bg-secondary-container px-4 py-2 rounded-lg font-medium text-secondary text-sm transition-colors cursor-pointer'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='mt-12 pt-12 border-t border-outline-variant'>
            <div className='flex md:flex-row flex-col justify-between items-center gap-8'>
              <div className='flex items-center gap-4'>
                <div className='bg-surface-container-high rounded-full w-14 h-14 overflow-hidden'>
                  <img
                    src='/rogerioviana.png'
                    alt='Rogério Viana'
                    className='w-full h-full object-[50%_-50%] object-cover scale-150'
                    referrerPolicy='no-referrer'
                  />
                </div>
                <div>
                  <p className='font-bold text-on-surface'>Rogério Viana</p>
                  <p className='text-on-surface-variant text-sm'>
                    Psicanalista Clínico · CNP 05/3230 · CBO 2515.50.
                  </p>
                </div>
              </div>
              <Button
                onClick={handleShare}
                iconLeft={<Share2 className='w-4 h-4' />}
                className='flex items-center gap-2 bg-surface-container-low hover:bg-primary/5 px-6 py-3 rounded-xl font-bold text-primary transition-all'
              >
                Compartilhar Artigo
              </Button>
            </div>
          </div>
        </motion.article>

        <aside className='space-y-12 lg:col-span-4'>
          <div className='bg-surface-container-low p-8 border rounded-4xl border-outline-variant'>
            <h3 className='mb-4 font-headline text-on-surface text-2xl'>
              Cartas Semanais
            </h3>
            <p className='mb-6 text-on-surface-variant text-sm leading-relaxed'>
              Receba reflexões exclusivas sobre psicologia e bem-estar
              diretamente em sua caixa de entrada.
            </p>
            <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
              <input
                type='email'
                placeholder='Seu melhor e-mail'
                className='bg-surface-container-lowest px-5 py-4 border-none rounded-xl focus:ring-1 focus:ring-primary w-full placeholder:text-on-surface-variant/50 text-sm'
              />
              <button className='bg-primary hover:opacity-90 py-4 rounded-xl w-full font-semibold text-on-primary text-sm transition-all'>
                Inscrever-se agora
              </button>
            </form>
            <p className='mt-4 text-[10px] text-on-surface-variant/60 text-center uppercase tracking-widest'>
              Privacidade garantida.
            </p>
          </div>

          <div className='space-y-6'>
            <h3 className='px-2 font-headline text-on-surface text-xl'>
              Leia a seguir
            </h3>
            {relatedPosts.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className='group block hover:bg-surface-container-low p-4 rounded-2xl transition-colors'
              >
                <div className='bg-surface-container-low mb-4 rounded-xl aspect-video overflow-hidden'>
                  <img
                    src={p.image}
                    alt={p.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    referrerPolicy='no-referrer'
                  />
                </div>
                <h4 className='mb-2 font-headline text-on-surface group-hover:text-primary text-lg leading-tight transition-colors'>
                  {p.title}
                </h4>
                <span className='font-medium text-on-surface-variant text-xs uppercase tracking-wider'>
                  {p.category} · {p.readTime}
                </span>
              </Link>
            ))}
          </div>

          <div className='bg-secondary-container/20 p-8 rounded-4xl text-center'>
            <div className='bg-surface-container-low shadow-sm mx-auto mb-4 border-2 border-white rounded-full w-20 h-20 overflow-hidden'>
              <img
                src='/rogerioviana.png'
                alt='Rogério Viana'
                className='w-full h-full object-[50%_-50%] object-cover scale-150'
                referrerPolicy='no-referrer'
              />
            </div>
            <h5 className='font-headline text-on-surface text-lg'>
              Rogério Viana
            </h5>
            <p className='mb-4 font-medium text-secondary text-xs italic'>
              Psicanalista Clínico & Escritor
            </p>
            {/* <div className='flex justify-center gap-4 text-primary'>
              <Share2 size={18} className='hover:opacity-70 cursor-pointer' />
              <Heart size={18} className='hover:opacity-70 cursor-pointer' />
              <Mail size={18} className='hover:opacity-70 cursor-pointer' />
            </div> */}
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
