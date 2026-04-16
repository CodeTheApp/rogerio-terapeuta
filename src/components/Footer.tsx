import { MapPin, Share2 } from 'lucide-react';

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
              © 2024 Rogério Viana. CRP 06/XXXXX. <br className='md:hidden' />
              Todos os direitos reservados.
            </p>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-8 font-bold text-on-surface-variant/80 text-xs uppercase tracking-ultra-wide">
            <a href="#" className="hover:text-primary transition-colors">Políticas</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div> */}

          <div className='flex gap-6'>
            <a
              href='#'
              className='bg-primary/5 hover:opacity-70 p-2 rounded-full text-primary transition-opacity'
            >
              <Share2 className='w-6 h-6' />
            </a>
            <a
              href='#'
              className='bg-primary/5 hover:opacity-70 p-2 rounded-full text-primary transition-opacity'
            >
              <MapPin className='w-6 h-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
