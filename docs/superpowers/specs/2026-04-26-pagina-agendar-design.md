# Página `/agendar` com integração Cal.com (instância EU)

**Data:** 2026-04-26
**Status:** Aprovado para implementação
**Conta Cal:** `https://cal.eu/vianaterapia/30min` (instância europeia hospedada do Cal.com)

## Contexto e motivação

Hoje o site tem 5 botões de "Agendar" espalhados (`Navbar` desktop e mobile, `Hero`, `CTA`, `SobreComoFunciona`) e nenhum deles agenda nada — uns não têm `onClick`, outro aponta para `/contato`. O Rogério já mantém uma página pública de agendamento em `cal.eu/vianaterapia/30min` (instância europeia do Cal.com, escolhida pela proximidade GDPR/Portugal).

O objetivo é embarcar essa página de agendamento dentro do próprio site numa rota `/agendar` dedicada, mantendo a sensação de continuidade da marca e reaproveitando a conta Cal já existente.

## Decisões de design

| Decisão | Escolha | Motivo |
| --- | --- | --- |
| Pacote de integração | `@calcom/embed-react` | Pacote oficial recomendado pelo Cal para embarcar a página pública. Reaproveita a conta `cal.eu/vianaterapia` sem fricção. |
| Pacote alternativo recusado | `@calcom/atoms` | Requer plano Cal Platform (pago), criação e aprovação de OAuth client, provider obrigatório, refresh de token (30 min) e migração do user/event para dentro da Platform. Overkill para o caso de uso e a cal.eu sequer é mencionada como suportada na doc. |
| Modo de embed | Inline (`<Cal />`) | Calendário embutido na página, sem popup. Foi a escolha do Rogério após comparar com modal e link direto. |
| Layout da página | `Hero` + `<Cal />` + `Reflection` | Padrão consistente com `/sobre`, `/contato` e `/faq`. |
| Origem do Cal | `https://cal.eu` (via `calOrigin`) | Aponta para a instância europeia onde o usuário existe. |
| Tematização | `theme: 'light'` + `brandColor` ligado ao token `--color-primary` (`#84432e`) | Bate com a identidade terracota do site. Refinamento fino (fontes, espaçamentos) fica para o painel admin do Cal — embed-react não permite CSS injection. |
| Roteamento dos botões | Todos os 5 botões "Agendar" passam a apontar para `/agendar` | Conversão centralizada num único destino. |
| `SobreComoFunciona` | "Agendar consulta" deixa de ir para `/contato` e passa a ir para `/agendar`; "Ir para Contato" continua indo para `/contato` | Separa as duas intenções (agendar vs. tirar dúvida). |

## Arquitetura

### Arquivos novos

| Caminho | Tipo | Responsabilidade |
| --- | --- | --- |
| `app/agendar/page.tsx` | Server Component | `metadata` (title/description SEO) e composição vertical: `<AgendarHero />` → `<AgendarCalendar />` → `<AgendarReflection />`. |
| `src/components/agendar/AgendarHero.tsx` | Client Component | Hero centralizado seguindo o padrão de `ContatoHero.tsx`/`FaqHero.tsx`/`sobre/SobreHero.tsx`: título serif + subtítulo. Anima entrada com `motion`. |
| `src/components/agendar/AgendarCalendar.tsx` | Client Component (`'use client'`) | Wrapper do `<Cal />` do `@calcom/embed-react`. Configura `calLink="vianaterapia/30min"`, `calOrigin="https://cal.eu"` e `config` com tema. Container com `max-w-5xl mx-auto px-6` e altura mínima razoável (~720px) para o widget. |
| `src/components/agendar/AgendarReflection.tsx` | Client Component | Citação de fechamento, padrão visual idêntico a `ContatoReflection.tsx`/`FaqReflection.tsx`. |

### Arquivos modificados

| Caminho:linha | Mudança |
| --- | --- |
| `package.json` | Adicionar dependência `@calcom/embed-react` (via `pnpm add`). |
| `src/components/Navbar.tsx:163` (desktop) | Envolver o `<Button>Agendar Consulta</Button>` num `<Link href="/agendar">` (segue padrão dos outros itens de página). |
| `src/components/Navbar.tsx:212` (mobile) | Mesma mudança; o `setIsMobileMenuOpen(false)` no `onClick` já existe. |
| `src/components/Hero.tsx:30` | "Começar minha jornada" recebe `onClick={() => router.push('/agendar')}` (o `useRouter` já está importado). |
| `src/components/CTA.tsx:26` | "Agendar minha consulta" recebe `onClick={() => router.push('/agendar')}` (o `useRouter` já está importado). |
| `src/components/sobre/SobreComoFunciona.tsx:86` | Trocar `router.push("/contato")` por `router.push("/agendar")` no botão "Agendar consulta". O segundo botão ("Ir para Contato") fica como está. |

### Conteúdo proposto (revisar antes do implementar)

**`AgendarHero`:**
- Título: `Agendar consulta`
- Subtítulo: `Escolha o horário que faz sentido para você. A primeira sessão é um espaço de escuta — sem compromisso de continuidade.`

**`AgendarReflection`:**
- Citação: `"A jornada começa quando você decide ouvir a si mesmo."`

**`metadata` em `app/agendar/page.tsx`:**
- `title: "Agendar consulta · Viana Terapia"`
- `description: "Reserve sua sessão online com Rogério Viana. Atendimento via Google Meet para Brasil e Portugal."`

## Detalhes técnicos do embed

```tsx
'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function AgendarCalendar() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ calOrigin: 'https://cal.eu' });
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#84432e' } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <section className="bg-surface px-6 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto rounded-4xl overflow-hidden">
        <Cal
          calLink="vianaterapia/30min"
          calOrigin="https://cal.eu"
          style={{ width: '100%', height: '100%', minHeight: '720px' }}
          config={{ layout: 'month_view' }}
        />
      </div>
    </section>
  );
}
```

`getCalApi` precisa rodar uma vez por mount para registrar o tema antes do widget renderizar; sem isso o `brandColor` não aplica.

## Riscos e mitigações

| Risco | Mitigação |
| --- | --- |
| `@calcom/embed-react` foi pensado primariamente para `cal.com` — pode haver casos de borda na instância EU. | Passamos `calOrigin` em **dois lugares** (`getCalApi` e prop do `<Cal />`) para garantir consistência. Se o embed quebrar, a alternativa de fallback é abrir `https://cal.eu/vianaterapia/30min` em nova aba. |
| Tematização limitada — `embed-react` não permite injetar CSS arbitrário, só os tokens expostos pelo Cal (`brandColor`, `theme`). Fontes e arredondamentos finos podem destoar levemente. | O Cal aceita configuração visual mais profunda no painel admin (`Appearance` da event type). Refinamento ali fica como follow-up manual do Rogério. |
| O bundle do `@calcom/embed-react` pode pesar (~30 KB minificados além de runtime do iframe). | Componente é Client-Only e isolado em `/agendar`, não afeta as outras páginas. |
| Layout do widget pode estourar o container em telas pequenas. | `min-h-[720px]` no container e `width: '100%'` no embed. O Cal já é responsivo internamente. |

## Fora de escopo

- Migrar para `@calcom/atoms` / Cal Platform (decisão consciente — ver tabela acima).
- Webhook de pós-agendamento (notificações, sync com Google Calendar do Rogério, etc.) — a conta Cal já cuida disso fora do site.
- Confirmação custom pós-agendamento ("Obrigado por agendar") — o Cal já mostra a tela própria dentro do iframe.
- Redirect de URL antigas — `/agendar` não existia antes, então não há legado.
- Adicionar item "Agendar" na navegação principal — agendamento é CTA, não item de menu.

## Critérios de pronto

1. `pnpm dev` roda sem erro de tipo ou runtime.
2. Acessar `/agendar` mostra o widget do Cal carregado, com a cor primária terracota aplicada nos botões e seleções.
3. Os 5 botões "Agendar" navegam para `/agendar` (manualmente verificado: Navbar desktop, Navbar mobile, Hero, CTA, SobreComoFunciona).
4. Selecionar um horário, preencher e confirmar resulta num evento real na conta `cal.eu/vianaterapia`.
5. `pnpm build` passa sem warnings novos.
