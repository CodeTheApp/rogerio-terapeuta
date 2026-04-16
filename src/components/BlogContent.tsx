'use client';

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Search,
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { posts } from '../data/posts';

export default function BlogContent() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

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

      {featuredPost && (
        <section className='mb-24'>
          <Link href={`/blog/${featuredPost.slug}`} className='group block'>
            <div className='relative grid grid-cols-1 lg:grid-cols-12 bg-surface-container-low rounded-[2rem] min-h-[500px] overflow-hidden'>
              <div className='relative lg:col-span-7 h-[300px] lg:h-full overflow-hidden'>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  referrerPolicy='no-referrer'
                />
              </div>
              <div className='flex flex-col justify-center lg:col-span-5 p-8 md:p-12'>
                <span className='block mb-4 font-bold text-primary text-xs uppercase tracking-widest'>
                  Destaque da Semana
                </span>
                <h2 className='mb-6 font-bold text-on-surface text-3xl md:text-4xl leading-tight'>
                  {featuredPost.title}
                </h2>
                <p className='mb-8 text-on-surface-variant text-lg leading-relaxed'>
                  {featuredPost.excerpt}
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
          <div className='gap-12 grid grid-cols-1 md:grid-cols-2'>
            {regularPosts.map((post) => (
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
            <h4 className='mb-6 font-headline text-on-surface text-xl'>
              Categorias
            </h4>
            <ul className='space-y-4'>
              {[
                { name: 'Ansiedade', count: 12 },
                { name: 'Relacionamentos', count: 8 },
                { name: 'Autoconhecimento', count: 15 },
                { name: 'Saúde Mental', count: 22 },
                { name: 'Luto e Perda', count: 5 },
              ].map((cat) => (
                <li key={cat.name}>
                  <a
                    href='#'
                    className='group flex justify-between items-center text-secondary hover:text-primary transition-all'
                  >
                    <span className='font-medium'>{cat.name}</span>
                    <span className='bg-surface-container-low group-hover:bg-primary-container px-2 py-1 rounded-full group-hover:text-on-primary text-xs'>
                      {cat.count < 10 ? `0${cat.count}` : cat.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='relative bg-tertiary-container p-8 rounded-[2rem] overflow-hidden text-on-tertiary-container'>
            <div className='z-10 relative'>
              <Quote size={40} className='opacity-50 mb-4' />
              <p className='mb-8 font-headline text-2xl italic leading-relaxed'>
                "Onde não se pode falar, deve-se calar. Mas onde a alma grita, a
                escuta cura."
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
