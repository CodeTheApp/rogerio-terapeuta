'use client';

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { ElementType, ReactNode } from 'react';

interface InfoItem {
  icon: ElementType;
  label: string;
  value: ReactNode;
  href?: string;
}

const MAPS_URL = 'https://maps.google.com/?q=Pombal,+Leiria,+Portugal';
const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Pombal%2C+Leiria%2C+Portugal&z=13&output=embed';

const infoItems: InfoItem[] = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: (
      <>
        <span className='block'>+351 926 130 470</span>
        <span className='block'>+55 21 97017-1637</span>
      </>
    ),
    href: 'https://wa.me/351926130470',
  },
  {
    icon: Mail,
    label: 'E-mail Direto',
    value: 'rogeriosilviana@gmail.com',
    href: 'mailto:rogeriosilviana@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Endereço Presencial',
    value: (
      <>
        <span className='block'>Pombal, Leiria</span>
        <span className='block'>Portugal</span>
      </>
    ),
    href: MAPS_URL,
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/rogerio_viana_psicanalista/',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CX56fLyDH/',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/351926130470',
  },
];

export default function ContatoInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className='flex flex-col gap-12'
    >
      <div className='flex flex-col gap-8'>
        {infoItems.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <span className='inline-flex justify-center items-center bg-primary/10 rounded-xl w-11 h-11 text-primary shrink-0'>
                <Icon className='w-5 h-5' aria-hidden />
              </span>
              <span className='flex flex-col gap-1'>
                <span className='font-serif text-on-surface text-xl leading-7'>
                  {label}
                </span>
                <span className='font-sans text-on-surface-variant text-base leading-6'>
                  {value}
                </span>
              </span>
            </>
          );

          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className='group flex items-start gap-4'
            >
              {content}
            </a>
          ) : (
            <div key={label} className='flex items-start gap-4'>
              {content}
            </div>
          );
        })}
      </div>

      <div className='flex flex-col gap-4'>
        <p className='font-sans font-medium text-label-md text-on-surface-variant'>
          CONECTE-SE NAS REDES
        </p>
        <div className='flex gap-4'>
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className='inline-flex justify-center items-center bg-surface-container-high hover:bg-primary rounded-xl w-12 h-12 text-on-surface-variant hover:text-on-primary transition-colors'
            >
              <Icon className='w-5 h-5' />
            </a>
          ))}
        </div>
      </div>

      <div className='relative shadow-subtle rounded-3xl md:h-80 aspect-[4/3] md:aspect-auto overflow-hidden'>
        <iframe
          title='Mapa - Pombal, Leiria, Portugal'
          src={MAP_EMBED_URL}
          loading='lazy'
          className='absolute inset-0 border-0 w-full h-full'
          referrerPolicy='no-referrer-when-downgrade'
        />
        <a
          href={MAPS_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='bottom-4 left-4 absolute bg-surface/90 hover:bg-surface shadow-subtle backdrop-blur-sm px-4 py-2 rounded-lg font-medium text-on-surface text-sm transition-colors'
        >
          Consultório Viana Terapia · Pombal, Leiria
        </a>
      </div>
    </motion.div>
  );
}
