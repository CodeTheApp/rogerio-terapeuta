import BlogContent from '@/src/components/BlogContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Escritas da Alma | Viana Terapia',
  description:
    'Reflexões sobre a existência, o sentir e o processo de tornar-se quem se é.',
};

export default function BlogPage() {
  return <BlogContent />;
}
