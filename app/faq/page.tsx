import FaqCta from '@/src/components/FaqCta';
import FaqHero from '@/src/components/FaqHero';
import FaqReflection from '@/src/components/FaqReflection';
import FaqSections from '@/src/components/FaqSections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes · Viana Terapia',
  description:
    'Respostas sobre o processo terapêutico, agendamento e valores. Atendimento online no Brasil e Portugal, e presencial em Pombal, Leiria.',
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqSections />
      <FaqCta />
      <FaqReflection />
    </>
  );
}
