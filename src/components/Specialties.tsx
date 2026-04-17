'use client';

import { Brain, Heart, Sparkles, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Tag } from './Tag';

const specialties = [
  {
    title: 'Ansiedade e Estresse',
    description:
      'Desenvolvimento de estratégias para lidar com as pressões do cotidiano e reencontrar a calma interior em meio ao caos.',
    icon: Brain,
    tags: ['Crises de Pânico', 'Depressão', 'Ansiedade'],
    className: 'md:col-span-2 bg-surface-container-high',
    iconColor: 'text-primary',
  },
  {
    title: 'Relacionamentos',
    description:
      'Trabalho focado na comunicação assertiva, resolução de conflitos e construção de vínculos saudáveis.',
    icon: Users,
    className: 'bg-primary text-on-primary',
    iconColor: 'text-on-primary',
  },
  {
    title: 'Desenvolvimento Pessoal',
    description:
      'Processo de autoconhecimento para fortalecer a autoestima e a tomada de decisões conscientes.',
    icon: Heart,
    className: 'bg-secondary text-on-secondary',
    iconColor: 'text-on-secondary',
  },
  {
    title: 'Terapia cognitiva comportamental',
    description:
      'Trabalho focado na mudança de comportamentos e pensamentos para controle da saúde emocional.',
    icon: Sparkles,
    className: 'md:col-span-2 bg-surface-container-highest',
    iconColor: 'text-primary',
    image:
      'https://plus.unsplash.com/premium_photo-1730151104203-25e0f0a269a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Specialties() {
  return (
    <section id='especialidades' className='bg-surface px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='mx-auto mb-20 max-w-2xl text-center'>
          <h2 className='mb-6 font-serif text-on-surface text-4xl md:text-5xl'>
            Especialidades
          </h2>
          <p className='text-on-surface-variant text-lg'>
            Frentes de atuação focadas no seu equilíbrio emocional e crescimento
            pessoal.
          </p>
        </div>

        <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
          {specialties.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-4xl flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] ${spec.className}`}
            >
              <div
                className={
                  spec.image
                    ? 'flex flex-col md:flex-row justify-between gap-10 items-center'
                    : ''
                }
              >
                <div className={spec.image ? 'md:w-2/3' : ''}>
                  <spec.icon className={`w-12 h-12 mb-8 ${spec.iconColor}`} />
                  <h3 className='mb-4 font-serif text-3xl leading-tight'>
                    {spec.title}
                  </h3>
                  <p
                    className={`text-lg mb-6 ${spec.className.includes('primary') || spec.className.includes('secondary') ? 'opacity-90' : 'text-on-surface-variant'}`}
                  >
                    {spec.description}
                  </p>
                  {spec.tags && (
                    <div className='flex flex-wrap gap-2'>
                      {spec.tags.map((tag) => (
                        <Tag key={tag} variant='terracotta' size='md'>
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  )}
                </div>
                {spec.image && (
                  <div className='w-full md:w-1/3'>
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className='shadow-lg rounded-3xl w-full h-64 object-bottom object-cover'
                      referrerPolicy='no-referrer'
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
