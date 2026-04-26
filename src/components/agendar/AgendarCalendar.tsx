'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import EventTypeSelector, { type EventOption } from './EventTypeSelector';

const CAL_ORIGIN = 'https://cal.eu';
const CAL_EMBED_JS_URL = 'https://cal.eu/embed/embed.js';
const BRAND_COLOR = '#84432e'; // mesmo valor de --color-primary em globals.css

const EVENT_OPTIONS: EventOption[] = [
  {
    slug: 'vianaterapia/15min',
    label: '15 minutos',
    subtitle: 'Conversa inicial',
    description:
      'Um primeiro encontro breve para nos apresentarmos e sentirmos se faz sentido seguir.',
  },
  {
    slug: 'vianaterapia/50min',
    label: '50 minutos',
    subtitle: 'Sessão completa',
    description:
      'Atendimento clínico no formato padrão da prática psicoterapêutica.',
  },
];

export default function AgendarCalendar() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) return;
    (async () => {
      const cal = await getCalApi({ embedJsUrl: CAL_EMBED_JS_URL });
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: BRAND_COLOR } },
        hideEventTypeDetails: false,
      });
    })();
  }, [selected]);

  return (
    <section className='bg-surface px-6 pb-16 md:pb-24'>
      {selected ? (
        <div className='mx-auto max-w-6xl'>
          <button
            type='button'
            onClick={() => setSelected(null)}
            className='inline-flex items-center gap-2 mb-6 font-bold text-on-surface-variant hover:text-primary text-sm uppercase tracking-widest transition-colors cursor-pointer'
          >
            <ArrowLeft className='w-4 h-4' />
            Trocar duração
          </button>
          <div className='rounded-4xl overflow-hidden'>
            <Cal
              calLink={selected}
              calOrigin={CAL_ORIGIN}
              style={{ width: '100%' }}
              config={{ layout: 'month_view' }}
            />
          </div>
        </div>
      ) : (
        <EventTypeSelector
          options={EVENT_OPTIONS}
          onSelect={setSelected}
        />
      )}
    </section>
  );
}
