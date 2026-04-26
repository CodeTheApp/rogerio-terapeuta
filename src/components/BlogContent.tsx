'use client';

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Search,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { posts } from '../data/posts';

const formatCount = (n: number) => (n < 10 ? `0${n}` : String(n));

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of posts) {
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    }
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, []);

  const featuredPost = posts.find((p) => p.featured);
  const visibleFeatured = selectedCategory ? null : featuredPost;
  const visiblePosts = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts.filter((p) => !p.featured);

  const toggleCategory = (name: string) => {
    setSelectedCategory((current) => (current === name ? null : name));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='mx-auto px-6 pt-32 pb-20 max-w-7xl'
    >
      <header className='mb-16 md:text-left text-center'>
        <h1 className='mb-4 font-bold text-on-surface text-5xl md:text-7xl tracking-tight'>
          Escritas da Alma
        </h1>
        <p className='max-w-2xl font-light text-on-surface-variant text-lg'>
          Reflexões sobre a existência, o sentir e o processo de tornar-se quem
          se é.
        </p>
      </header>

      {visibleFeatured && (
        <section className='mb-24'>
          <Link href={`/blog/${visibleFeatured.slug}`} className='group block'>
            <div className='relative grid grid-cols-1 lg:grid-cols-12 bg-surface-container-low rounded-[2rem] min-h-[500px] overflow-hidden'>
              <div className='relative lg:col-span-7 h-[300px] lg:h-full overflow-hidden'>
                <img
                  src={visibleFeatured.image}
                  alt={visibleFeatured.title}
                  className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  referrerPolicy='no-referrer'
                />
              </div>
              <div className='flex flex-col justify-center lg:col-span-5 p-8 md:p-12'>
                <span className='block mb-4 font-bold text-primary text-xs uppercase tracking-widest'>
                  Destaque da Semana
                </span>
                <h2 className='mb-6 font-bold text-on-surface text-3xl md:text-4xl leading-tight'>
                  {visibleFeatured.title}
                </h2>
                <p className='mb-8 text-on-surface-variant text-lg leading-relaxed'>
                  {visibleFeatured.excerpt}
                </p>
                <span className='inline-flex items-center gap-2 bg-primary hover:opacity-90 px-8 py-3 rounded-xl w-fit text-on-primary transition-all'>
                  Ler Reflexão Completa
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      <div className='gap-16 grid grid-cols-1 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          {selectedCategory && (
            <div className='flex items-center gap-3 mb-8'>
              <span className='text-on-surface-variant text-sm'>
                Filtrando por
              </span>
              <button
                type='button'
                onClick={() => setSelectedCategory(null)}
                className='inline-flex items-center gap-2 bg-primary-container hover:bg-primary px-3 py-1 rounded-full font-semibold text-on-primary-container hover:text-on-primary text-xs uppercase tracking-widest transition-colors cursor-pointer'
              >
                {selectedCategory}
                <X className='w-3 h-3' />
              </button>
              <span className='text-on-surface-variant/60 text-sm'>
                {visiblePosts.length}{' '}
                {visiblePosts.length === 1 ? 'artigo' : 'artigos'}
              </span>
            </div>
          )}
          {visiblePosts.length === 0 ? (
            <p className='py-16 text-on-surface-variant text-center'>
              Nenhum artigo nesta categoria por enquanto.
            </p>
          ) : (
            <div className='gap-12 grid grid-cols-1 md:grid-cols-2'>
              {visiblePosts.map((post) => (
                <article key={post.id} className='group flex flex-col'>
                <Link href={`/blog/${post.slug}`} className='block'>
                  <div className='bg-surface-container-low mb-6 rounded-[2rem] aspect-[4/3] overflow-hidden'>
                    <img
                      src={post.image}
                      alt={post.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      referrerPolicy='no-referrer'
                    />
                  </div>
                </Link>
                <div className='flex items-center gap-3 mb-3'>
                  <span className='bg-secondary-container px-3 py-1 rounded-full font-semibold text-on-secondary-container text-xs'>
                    {post.category}
                  </span>
                  <span className='text-on-surface-variant/60 text-xs'>
                    {post.date}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className='mb-3 font-bold text-on-surface hover:text-primary text-2xl leading-snug transition-colors'>
                    {post.title}
                  </h3>
                </Link>
                <p className='mb-6 text-on-surface-variant line-clamp-3'>
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className='inline-flex items-center gap-1 w-fit font-bold text-primary text-sm hover:underline'
                >
                  Continuar Lendo
                  <ArrowUpRight size={14} />
                </Link>
              </article>
              ))}
            </div>
          )}

          <div className='flex justify-center items-center gap-4 mt-20'>
            <button className='flex justify-center items-center hover:bg-secondary-container border hover:border-transparent rounded-full border-outline-variant w-12 h-12 text-secondary transition-all'>
              <ChevronLeft size={20} />
            </button>
            <span className='font-medium text-on-surface-variant'>
              Página 1 de 1
            </span>
            <button className='flex justify-center items-center hover:bg-secondary-container border hover:border-transparent rounded-full border-outline-variant w-12 h-12 text-secondary transition-all'>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <aside className='space-y-12 lg:col-span-4'>
          <div className='bg-surface-container-low p-8 rounded-[2rem]'>
            <h4 className='mb-6 font-headline text-on-surface text-xl'>
              Pesquisar
            </h4>
            <div className='relative'>
              <input
                type='text'
                placeholder='Busque um tema...'
                className='bg-surface-container-lowest px-4 py-3 border-none rounded-xl focus:ring-2 focus:ring-primary w-full text-on-surface placeholder:text-secondary/50'
              />
              <Search
                className='top-1/2 right-4 absolute text-secondary/50 -translate-y-1/2'
                size={20}
              />
            </div>
          </div>

          <div className='p-8'>
            <div className='flex justify-between items-baseline mb-6'>
              <h4 className='font-headline text-on-surface text-xl'>
                Categorias
              </h4>
              {selectedCategory && (
                <button
                  type='button'
                  onClick={() => setSelectedCategory(null)}
                  className='font-medium text-primary text-xs hover:underline cursor-pointer'
                >
                  Limpar
                </button>
              )}
            </div>
            <ul className='space-y-4'>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.name;
                return (
                  <li key={cat.name}>
                    <button
                      type='button'
                      onClick={() => toggleCategory(cat.name)}
                      aria-pressed={isActive}
                      className={`group w-full flex justify-between items-center transition-all cursor-pointer ${
                        isActive
                          ? 'text-primary font-semibold'
                          : 'text-secondary hover:text-primary font-medium'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs transition-colors ${
                          isActive
                            ? 'bg-primary text-on-primary'
                            : 'bg-surface-container-low group-hover:bg-primary-container group-hover:text-on-primary-container'
                        }`}
                      >
                        {formatCount(cat.count)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='relative bg-tertiary-container p-8 rounded-[2rem] overflow-hidden text-on-tertiary-container'>
            <div className='z-10 relative'>
              <Quote size={40} className='opacity-50 mb-4' />
              <p className='mb-8 font-headline text-2xl italic leading-relaxed'>
                &ldquo;Onde não se pode falar, deve-se calar. Mas onde a alma
                grita, a escuta cura.&rdquo;
              </p>
              <div className='bg-on-tertiary-container/30 mb-8 w-16 h-px' />
              <h5 className='mb-2 font-bold text-sm uppercase tracking-widest'>
                Escritas da Alma
              </h5>
              <p className='opacity-80 mb-6 text-sm'>
                Receba reflexões exclusivas diretamente em seu e-mail.
              </p>
              <form className='space-y-3' onSubmit={(e) => e.preventDefault()}>
                <input
                  type='email'
                  placeholder='Seu melhor e-mail'
                  className='bg-surface-container-lowest/20 px-4 py-3 border border-on-tertiary-container/20 rounded-xl focus:ring-1 focus:ring-on-tertiary-container w-full text-on-tertiary-container placeholder:text-on-tertiary-container/60'
                />
                <button className='bg-on-tertiary-container hover:opacity-90 py-3 rounded-xl w-full font-bold text-tertiary-container transition-all'>
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
