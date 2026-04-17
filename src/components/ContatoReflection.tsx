'use client';

import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContatoReflection() {
  return (
    <section className='bg-surface px-6 pb-16 md:pb-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center gap-6 bg-tertiary mx-auto px-8 md:px-20 py-20 md:py-28 rounded-5xl max-w-5xl text-center'
      >
        <Quote className='w-8 h-8 text-on-tertiary/70' aria-hidden />
        <blockquote className='max-w-2xl font-serif text-on-tertiary text-3xl md:text-4xl italic leading-snug'>
          &ldquo;Onde há dor, há também a possibilidade de um novo
          florescer.&rdquo;
        </blockquote>
      </motion.div>
    </section>
  );
}
