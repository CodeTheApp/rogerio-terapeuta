'use client';

import { Clock } from 'lucide-react';
import { motion } from 'motion/react';

export interface EventOption {
  slug: string;
  label: string;
  subtitle: string;
  description?: string;
}

interface EventTypeSelectorProps {
  options: EventOption[];
  onSelect: (slug: string) => void;
}

export default function EventTypeSelector({
  options,
  onSelect,
}: EventTypeSelectorProps) {
  return (
    <div className='gap-6 grid md:grid-cols-2 mx-auto max-w-4xl'>
      {options.map((opt, i) => (
        <motion.button
          key={opt.slug}
          type='button'
          onClick={() => onSelect(opt.slug)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className='group flex flex-col items-start gap-4 bg-surface-container-high hover:bg-surface-container-highest p-10 border border-outline-variant rounded-4xl text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer'
        >
          <Clock className='w-10 h-10 text-primary' aria-hidden />
          <div className='flex items-baseline gap-3'>
            <h3 className='font-serif text-on-surface text-3xl leading-tight'>
              {opt.label}
            </h3>
            <span className='font-medium text-on-surface-variant text-sm'>
              {opt.subtitle}
            </span>
          </div>
          {opt.description && (
            <p className='text-on-surface-variant text-base leading-relaxed'>
              {opt.description}
            </p>
          )}
          <span className='mt-4 font-bold text-primary text-sm uppercase tracking-ultra-wide group-hover:underline'>
            Escolher este horário →
          </span>
        </motion.button>
      ))}
    </div>
  );
}
