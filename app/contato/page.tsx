import ContatoForm from '@/src/components/ContatoForm';
import ContatoHero from '@/src/components/ContatoHero';
import ContatoInfo from '@/src/components/ContatoInfo';
import ContatoReflection from '@/src/components/ContatoReflection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato · Viana Terapia',
  description:
    'Entre em contato com Rogério Viana. Atendimento online no Brasil e Portugal, e presencial em Pombal, Leiria.',
};

export default function ContatoPage() {
  return (
    <>
      <ContatoHero />
      <section className='bg-surface px-6 pb-16 md:pb-24'>
        <div className='items-start gap-12 md:gap-20 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl'>
          <ContatoForm />
          <ContatoInfo />
        </div>
      </section>
      <ContatoReflection />
    </>
  );
}
