'use client';

import { Check, Share2 } from 'lucide-react';
import { useState } from 'react';

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === 'undefined') return;

    const url = window.location.href;
    const shareData = {
      title: 'Viana Terapia — Psicanálise Clínica',
      text: 'Espaço de escuta e transformação.',
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // User cancelled or share failed — silently ignore
    }
  };

  return (
    <button
      type='button'
      onClick={handleShare}
      aria-label={copied ? 'Link copiado' : 'Compartilhar'}
      title={copied ? 'Link copiado!' : 'Compartilhar'}
      className='bg-primary/5 hover:opacity-70 p-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-primary transition-opacity cursor-pointer'
    >
      {copied ? <Check className='w-6 h-6' /> : <Share2 className='w-6 h-6' />}
    </button>
  );
}
