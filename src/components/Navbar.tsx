'use client';

import { Calendar, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './Button';

type NavItem = {
  label: string;
  href: string;
  id: string;
  kind: 'anchor' | 'page';
};

const navItems: NavItem[] = [
  { label: 'Início', href: '/', id: 'inicio', kind: 'anchor' },
  { label: 'Sobre', href: '/sobre', id: 'sobre', kind: 'page' },
  {
    label: 'Especialidades',
    href: '/#especialidades',
    id: 'especialidades',
    kind: 'anchor',
  },
  {
    label: 'Depoimentos',
    href: '/#depoimentos',
    id: 'depoimentos',
    kind: 'anchor',
  },
  { label: 'Blog', href: '/blog', id: 'blog', kind: 'page' },
  { label: 'Contato', href: '/contato', id: 'contato', kind: 'page' },
];

const HOME_SECTION_IDS = ['especialidades', 'depoimentos'];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const elements = HOME_SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        } else if (window.scrollY < 200) {
          setActiveSection('inicio');
        }
      },
      { threshold: 0.3 },
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY < 200) setActiveSection('inicio');
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isItemActive = (item: NavItem) => {
    if (item.kind === 'page') {
      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    }
    if (!isHome) return false;
    return activeSection === item.id;
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    setIsMobileMenuOpen(false);
    if (!isHome || item.kind !== 'anchor') return;

    e.preventDefault();
    if (item.id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', '/');
      return;
    }
    const el = document.getElementById(item.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', `/#${item.id}`);
    }
  };

  const linkClass = (active: boolean) =>
    active
      ? 'text-primary font-semibold border-b-2 border-primary pb-1'
      : 'text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200';

  const mobileLinkClass = (active: boolean) =>
    active
      ? 'text-primary font-semibold'
      : 'text-on-surface-variant hover:text-primary transition-colors';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className='top-0 z-50 fixed border-b border-outline-variant/40 w-full transition-all duration-300 glass'
    >
      <div className='flex justify-between items-center mx-auto px-6 md:px-16 py-6 w-full max-w-screen-2xl'>
        <Link href='/' aria-label='Viana Terapia — página inicial'>
          <img
            src='/logos/vt-hor-full-terra.svg'
            alt='Viana Terapia'
            className='h-8 md:h-9 w-auto'
            referrerPolicy='no-referrer'
          />
        </Link>

        <div className='hidden md:flex items-center gap-6 lg:gap-8 font-serif font-medium tracking-tight'>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item)}
              className={linkClass(isItemActive(item))}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <div className='hidden md:block'>
            <Button
              variant='primary'
              size='sm'
              iconLeft={<Calendar />}
              onClick={() => router.push('/agendar')}
            >
              Agendar Consulta
            </Button>
          </div>
          <button
            type='button'
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className='md:hidden p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-on-surface hover:text-primary transition-colors cursor-pointer'
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id='mobile-menu'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='md:hidden border-t border-outline-variant/40 glass'
          >
            <div className='flex flex-col items-start gap-6 px-6 py-8 font-serif text-lg'>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item)}
                  className={mobileLinkClass(isItemActive(item))}
                >
                  {item.label}
                </Link>
              ))}
              <div className='pt-2'>
                <Button
                  variant='primary'
                  size='md'
                  iconLeft={<Calendar />}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push('/agendar');
                  }}
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
