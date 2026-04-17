'use client';

import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

export default function Hero() {
  const router = useRouter();

  return (
    <section className='relative bg-surface px-6 pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden'>
      <div className='items-center gap-12 grid md:grid-cols-12 mx-auto max-w-screen-2xl'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='z-10 md:col-span-7'
        >
          <h1 className='mb-8 font-serif text-on-surface text-4xl md:text-7xl leading-tight tracking-tight'>
            Espaço de Escuta e <br />
            <span className='text-primary italic'>Acolhimento</span>
          </h1>
          <p className='mb-8 md:mb-10 max-w-xl text-on-surface-variant text-lg md:text-xl leading-relaxed'>
            Um refúgio para acolher suas dores, redescobrir suas forças e
            trilhar caminhos de cura através de uma abordagem empática e
            fundamentada.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button variant='primary' size='lg' iconLeft={<Calendar />}>
              Começar minha jornada
            </Button>
            <Button
              variant='tertiary'
              size='lg'
              iconRight={<ArrowRight />}
              onClick={() => router.push('/sobre')}
            >
              Conhecer Rogério
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className='relative md:col-span-5'
        >
          <div className='z-10 relative bg-surface-container-high shadow-2xl rounded-5xl aspect-4/5 overflow-hidden md:rotate-2 hover:rotate-0 transition-transform duration-700 transform'>
            <img
              src='/rogerioviana.png'
              alt='Rogério Viana'
              className='w-full h-full object-cover'
              referrerPolicy='no-referrer'
            />
          </div>
          <div className='-bottom-10 -left-10 -z-0 absolute bg-secondary/10 blur-3xl rounded-full w-64 h-64' />
        </motion.div>
      </div>
    </section>
  );
}
