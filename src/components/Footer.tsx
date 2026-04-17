import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { ShareButton } from './ShareButton';

export default function Footer() {
  return (
    <footer className='bg-surface-container-low border-t border-outline-variant/40 w-full'>
      <div className='mx-auto px-6 md:px-16 py-16 max-w-screen-2xl'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-12'>
          <div className='flex flex-col items-center md:items-start md:text-left text-center'>
            <span className='mb-4 font-serif font-bold text-on-surface text-2xl'>
              Rogério Viana
            </span>
            <p className='font-bold text-on-surface-variant/60 text-sm uppercase tracking-ultra-wide'>
              © 2026 Rogério Viana. CNP 05/3230. CBO 2515.50.
            </p>
            <p className='font-bold text-on-surface-variant/60 text-sm uppercase tracking-ultra-wide'>
              Todos os direitos reservados.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-8 font-bold text-on-surface-variant/80 text-xs uppercase tracking-ultra-wide'>
            <Link href='/faq' className='hover:text-primary transition-colors'>
              FAQ
            </Link>
            <Link
              href='/sobre'
              className='hover:text-primary transition-colors'
            >
              Sobre mim
            </Link>
            <Link href='/blog' className='hover:text-primary transition-colors'>
              Blog
            </Link>
            <a href='/contato' className='hover:text-primary transition-colors'>
              Contato
            </a>
          </div>

          <div className='flex items-center gap-4'>
            <ShareButton />
            <a
              href='https://maps.google.com/?q=Pombal,+Leiria,+Portugal'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Ver Pombal, Leiria, Portugal no Google Maps'
              className='flex items-center gap-2 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full font-medium text-primary text-sm transition-colors'
            >
              <MapPin className='w-5 h-5' />
              <span>Pombal, Leiria · Portugal</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
