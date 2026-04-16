'use client';

import { Calendar, HelpCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

export default function CTA() {
  const router = useRouter();

  return (
    <section className='bg-surface px-6 py-32'>
      <div className='mx-auto max-w-4xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-8 font-serif text-4xl md:text-6xl leading-tight'>
            Vamos dar o primeiro passo juntos?
          </h2>
          <p className='mx-auto mb-12 max-w-xl text-on-surface-variant text-xl leading-relaxed'>
            Sua saúde mental é a base de tudo. Escolha cuidar de você hoje.
          </p>
          <div className='flex md:flex-row flex-col justify-center items-center gap-6'>
            <Button variant='primary' size='lg' iconLeft={<Calendar />}>
              Agendar minha consulta
            </Button>
            <Button
              variant='outlined'
              size='lg'
              iconLeft={<HelpCircle />}
              onClick={() => router.push('/faq')}
            >
              Perguntas Frequentes
            </Button>
          </div>
          <p className='flex justify-center items-center gap-2 mt-10 font-medium text-on-surface-variant text-sm'>
            <ShieldCheck className='w-5 h-5 text-secondary' />
            Online no Brasil e Portugal · Presencial em Pombal, Leiria
          </p>
        </motion.div>
      </div>
    </section>
  );
}
