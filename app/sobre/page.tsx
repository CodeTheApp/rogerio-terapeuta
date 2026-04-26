import SobreComoFunciona from '@/src/components/sobre/SobreComoFunciona';
import SobreHero from '@/src/components/sobre/SobreHero';
import SobreHistoria from '@/src/components/sobre/SobreHistoria';
import SobreModalidades from '@/src/components/sobre/SobreModalidades';
import SobrePublico from '@/src/components/sobre/SobrePublico';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre · Viana Terapia',
  description:
    'Psicanalista clínico e infantil com abordagem integrativa (Freud, Winnicott, TCC, hipnoterapia, constelação sistêmica). Atendimento 100% online.',
};

export default function SobrePage() {
  return (
    <>
      <SobreHero />
      <SobreHistoria />
      <SobreModalidades />
      <SobrePublico />
      <SobreComoFunciona />
    </>
  );
}
