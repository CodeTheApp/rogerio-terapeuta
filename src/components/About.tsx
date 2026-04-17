'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

export default function About() {
  const router = useRouter();

  return (
    <section
      id='sobre'
      className='bg-surface-container-low px-6 py-24 md:py-32'
    >
      <div className='items-center gap-20 grid md:grid-cols-2 mx-auto max-w-screen-2xl'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='relative order-2 md:order-1'
        >
          <img
            src='/rogerioviana.png'
            alt='Rogério Viana'
            className='grayscale-20 hover:grayscale-0 rounded-4xl w-full object-cover object-center aspect-square transition-all duration-700'
            referrerPolicy='no-referrer'
          />
          <div className='hidden md:block -top-6 -right-6 absolute bg-surface-container-lowest shadow-xl p-8 border rounded-2xl border-outline-variant'>
            <p className='font-serif font-bold text-primary text-3xl'>100%</p>
            <p className='font-semibold text-on-surface-variant text-xs uppercase tracking-ultra-wide'>
              Atendimento Online
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='order-1 md:order-2'
        >
          <span className='block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide'>
            Sobre Mim
          </span>
          <h2 className='mb-8 font-serif text-on-surface text-4xl md:text-5xl leading-tight'>
            Escuta clínica com olhar integrativo
          </h2>
          <div className='space-y-6 text-on-surface-variant text-lg leading-relaxed'>
            <p>
              Sou Rogério Viana, psicanalista clínico e infantil. Desde 2020,
              recebo pessoas que buscam mais clareza emocional, equilíbrio
              mental e um lugar seguro para se reconhecer.
            </p>
            <p>
              Meu trabalho integra psicanálise (com base em Freud, Anna Freud e
              Winnicott), TCC, hipnoterapia, constelação sistêmica e Florais de
              Bach — escolhendo o método que cada momento do processo pede.
            </p>
            <ul className='space-y-4 pt-4'>
              {[
                'Psicanálise clínica e infantil',
                'Abordagem integrativa (Freud · Winnicott · TCC)',
                'Atendimento 100% online via Google Meet',
              ].map((item, i) => (
                <li key={i} className='flex items-start gap-4'>
                  <CheckCircle2 className='mt-0.5 w-6 h-6 text-primary shrink-0' />
                  <span className='text-on-surface'>{item}</span>
                </li>
              ))}
            </ul>
            <div className='pt-4'>
              <Button
                variant='tertiary'
                size='md'
                iconRight={<ArrowRight />}
                onClick={() => router.push('/sobre')}
              >
                Conhecer minha história
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
