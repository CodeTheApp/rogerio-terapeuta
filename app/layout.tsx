import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import type { Metadata, Viewport } from 'next';
import { Manrope, Noto_Serif } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Viana Terapia · Psicanálise Clínica',
  description:
    'Espaço de escuta e transformação. Terapia integrativa com acolhimento e respeito.',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico', sizes: 'any' },
      {
        url: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: '/favicons/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#84432e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='pt-BR'
      className={`${notoSerif.variable} ${manrope.variable}`}
      data-scroll-behavior='smooth'
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
