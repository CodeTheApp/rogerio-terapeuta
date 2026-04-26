# Página `/agendar` com `@calcom/embed-react` — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar rota `/agendar` que embarca a página pública de agendamento `cal.eu/vianaterapia/30min` via `@calcom/embed-react`, e rotear os 5 botões "Agendar" do site para essa nova página.

**Architecture:** Next.js 16 App Router. Nova rota `app/agendar/page.tsx` (Server Component) compõe três Client Components em `src/components/agendar/`. O `<AgendarCalendar />` envolve o componente `<Cal />` do `@calcom/embed-react`, configurado com `calOrigin="https://cal.eu"` e `calLink="vianaterapia/30min"`, tematizado com a cor primária terracota do site. Os 5 botões "Agendar" existentes ganham `onClick={() => router.push('/agendar')}` (padrão já usado em `Hero`/`CTA`/`SobreComoFunciona` para navegação programática a partir do `<Button>`).

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, motion/react, lucide-react, `@calcom/embed-react` (novo), pnpm.

**Spec de referência:** `docs/superpowers/specs/2026-04-26-pagina-agendar-design.md`

---

## Notas para o implementador

- **Sem testes automatizados:** o projeto não tem infraestrutura de testes (jest/vitest). Verificação será visual via dev server (`pnpm dev`) e build estático (`pnpm build`).
- **Tokens obrigatórios:** use exclusivamente os tokens definidos em `app/globals.css` (`bg-surface-*`, `text-on-surface-*`, `text-primary`, `text-secondary`, `font-serif`, `tracking-ultra-wide`, `rounded-4xl` etc). Não use hex literais — exceto na configuração do tema do Cal, onde precisamos passar o valor literal `#84432e` (que é o valor de `--color-primary`) porque o widget Cal renderiza num iframe e não enxerga as CSS vars do site.
- **Padrão de animação:** componentes Hero/Reflection seguem o padrão `motion.div` com `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}` para entrada imediata (igual `ContatoHero`/`FaqHero`/`SobreHero`) ou `whileInView` para rolagem (igual `ContatoReflection`/`FaqReflection`).
- **Diretivas:** todo componente que usa `motion/react`, hooks ou `@calcom/embed-react` precisa de `"use client";` no topo. A `app/agendar/page.tsx` é Server Component (sem `"use client"`).
- **Imagens:** N/A nesta feature — não tem `<img>` nova.
- **Commits:** um commit por tarefa, mensagem em inglês com prefixo Conventional Commits (`feat:`, `chore:`).

---

## File Structure

**Arquivos a criar:**
- `src/components/agendar/AgendarHero.tsx` — hero centralizado da página
- `src/components/agendar/AgendarReflection.tsx` — citação de fechamento
- `src/components/agendar/AgendarCalendar.tsx` — wrapper do widget Cal
- `app/agendar/page.tsx` — composição da rota com metadata SEO

**Arquivos a modificar:**
- `package.json` — adicionar `@calcom/embed-react` (via `pnpm add`)
- `src/components/Navbar.tsx` — `onClick` no botão Agendar desktop e mobile (e instanciar `useRouter`)
- `src/components/Hero.tsx` — `onClick` no botão "Começar minha jornada"
- `src/components/CTA.tsx` — `onClick` no botão "Agendar minha consulta"
- `src/components/sobre/SobreComoFunciona.tsx` — trocar destino do botão "Agendar consulta" de `/contato` para `/agendar`

---

## Task 1: Instalar `@calcom/embed-react`

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml` (regenerado pelo pnpm; está fora do `.gitignore` mas deve ir junto)

- [ ] **Step 1: Instalar a dependência**

Rodar:
```bash
pnpm add @calcom/embed-react
```

Esperado: `package.json` ganha entrada em `dependencies`, `pnpm-lock.yaml` é atualizado, e o pnpm registra a nova versão. Não deve haver erro de peer-dependency com React 19 — caso surja, adicionar `--strict-peer-dependencies=false` ao comando.

- [ ] **Step 2: Verificar que entrou em `dependencies`**

Rodar:
```bash
grep "@calcom/embed-react" package.json
```

Esperado: linha do tipo `"@calcom/embed-react": "^1.x.x"` aparece em `dependencies`.

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add @calcom/embed-react dependency"
```

---

## Task 2: Criar `AgendarHero`

**Files:**
- Create: `src/components/agendar/AgendarHero.tsx`

- [ ] **Step 1: Criar o componente**

Criar `src/components/agendar/AgendarHero.tsx` (segue o padrão de `ContatoHero`/`FaqHero`):

```tsx
"use client";

import { motion } from "motion/react";

export default function AgendarHero() {
  return (
    <section className="pt-32 md:pt-48 pb-12 md:pb-16 px-6 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center flex flex-col gap-6"
      >
        <h1 className="font-serif text-5xl md:text-display-sm text-on-surface tracking-title">
          Agendar consulta
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
          Escolha o horário que faz sentido para você. A primeira sessão é um
          espaço de escuta — sem compromisso de continuidade.
        </p>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar que compila**

Rodar:
```bash
pnpm exec tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add src/components/agendar/AgendarHero.tsx
git commit -m "feat(agendar): add AgendarHero component"
```

---

## Task 3: Criar `AgendarReflection`

**Files:**
- Create: `src/components/agendar/AgendarReflection.tsx`

- [ ] **Step 1: Criar o componente**

Criar `src/components/agendar/AgendarReflection.tsx` (segue o padrão de `ContatoReflection`):

```tsx
"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";

export default function AgendarReflection() {
  return (
    <section className="bg-surface px-6 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 bg-tertiary mx-auto px-8 md:px-20 py-20 md:py-28 rounded-5xl max-w-5xl text-center"
      >
        <Quote className="w-8 h-8 text-on-tertiary/70" aria-hidden />
        <blockquote className="max-w-2xl font-serif text-on-tertiary text-3xl md:text-4xl italic leading-snug">
          &ldquo;A jornada começa quando você decide ouvir a si mesmo.&rdquo;
        </blockquote>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar que compila**

Rodar:
```bash
pnpm exec tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add src/components/agendar/AgendarReflection.tsx
git commit -m "feat(agendar): add AgendarReflection component"
```

---

## Task 4: Criar `AgendarCalendar`

**Files:**
- Create: `src/components/agendar/AgendarCalendar.tsx`

- [ ] **Step 1: Criar o componente com o widget Cal**

Criar `src/components/agendar/AgendarCalendar.tsx`:

```tsx
"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_ORIGIN = "https://cal.eu";
const CAL_LINK = "vianaterapia/30min";
const BRAND_COLOR = "#84432e"; // mesmo valor de --color-primary em globals.css

export default function AgendarCalendar() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ calOrigin: CAL_ORIGIN });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: BRAND_COLOR } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <section className="bg-surface px-6 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto rounded-4xl overflow-hidden">
        <Cal
          calLink={CAL_LINK}
          calOrigin={CAL_ORIGIN}
          style={{ width: "100%", height: "100%", minHeight: "720px" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </section>
  );
}
```

Por que `getCalApi` no `useEffect`: o widget Cal precisa receber a configuração de `ui` (tema, brandColor) **antes** de renderizar o iframe. Sem essa chamada, o Cal usa as cores default. A chamada é assíncrona e roda só no client.

Por que duplicar `calOrigin` em `getCalApi` e na prop do `<Cal />`: o `getCalApi` registra o origin no namespace global do Cal; a prop do `<Cal />` informa ao iframe qual URL carregar. Sem os dois, o tema não aplica ou o iframe carrega o origin errado (default `cal.com`).

- [ ] **Step 2: Verificar que compila**

Rodar:
```bash
pnpm exec tsc --noEmit
```

Esperado: sem erros. Caso o `@calcom/embed-react` exponha tipos para `config.layout` que rejeitem `"month_view"`, ajustar para o valor exato aceito pelo tipo (verificar em `node_modules/@calcom/embed-react/dist/index.d.ts`).

- [ ] **Step 3: Commit**

```bash
git add src/components/agendar/AgendarCalendar.tsx
git commit -m "feat(agendar): add AgendarCalendar wrapping @calcom/embed-react"
```

---

## Task 5: Criar a rota `app/agendar/page.tsx`

**Files:**
- Create: `app/agendar/page.tsx`

- [ ] **Step 1: Criar a página Server Component**

Criar `app/agendar/page.tsx`:

```tsx
import AgendarCalendar from "@/src/components/agendar/AgendarCalendar";
import AgendarHero from "@/src/components/agendar/AgendarHero";
import AgendarReflection from "@/src/components/agendar/AgendarReflection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agendar consulta · Viana Terapia",
  description:
    "Reserve sua sessão online com Rogério Viana. Atendimento via Google Meet para Brasil e Portugal.",
};

export default function AgendarPage() {
  return (
    <>
      <AgendarHero />
      <AgendarCalendar />
      <AgendarReflection />
    </>
  );
}
```

- [ ] **Step 2: Subir o dev server e verificar visualmente**

Rodar (em terminal separado, ou em background):
```bash
pnpm dev
```

Abrir `http://localhost:3000/agendar` no browser. Esperado:
- Hero "Agendar consulta" no topo, abaixo da Navbar.
- Widget do Cal carregado (calendário do mês com horários disponíveis em `vianaterapia/30min` na cal.eu) com botões na cor terracota `#84432e`.
- Citação "A jornada começa quando você decide ouvir a si mesmo." no fim, num bloco `bg-tertiary`.

Se o widget Cal aparecer em branco ou com erro de console, abrir DevTools e verificar:
- Network tab: requests para `cal.eu` retornando 200.
- Console: nenhum erro de CORS ou de "Cal not initialized".

- [ ] **Step 3: Commit**

```bash
git add app/agendar/page.tsx
git commit -m "feat(agendar): add /agendar route composing hero, calendar and reflection"
```

---

## Task 6: Rotear os 5 botões "Agendar" para `/agendar`

**Files:**
- Modify: `src/components/Navbar.tsx` (linhas ~163 e ~212)
- Modify: `src/components/Hero.tsx` (linha ~30)
- Modify: `src/components/CTA.tsx` (linha ~26)
- Modify: `src/components/sobre/SobreComoFunciona.tsx` (linha ~86)

- [ ] **Step 1: Navbar — adicionar `useRouter` e instanciar**

Em `src/components/Navbar.tsx`, no topo do arquivo, expandir o import de `next/navigation` para incluir `useRouter`:

```tsx
import { usePathname, useRouter } from 'next/navigation';
```

Logo após `const pathname = usePathname();` (cerca da linha 39), adicionar:

```tsx
const router = useRouter();
```

- [ ] **Step 2: Navbar — botão desktop**

Localizar o bloco do botão desktop (cerca da linha 161-166):

```tsx
          <div className='hidden md:block'>
            <Button variant='primary' size='sm' iconLeft={<Calendar />}>
              Agendar Consulta
            </Button>
          </div>
```

Trocar por:

```tsx
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
```

- [ ] **Step 3: Navbar — botão mobile**

No mesmo arquivo, localizar o bloco do botão mobile (cerca da linha 205-214):

```tsx
              <div className='pt-2'>
                <Button
                  variant='primary'
                  size='md'
                  iconLeft={<Calendar />}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Agendar Consulta
                </Button>
              </div>
```

Trocar por:

```tsx
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
```

- [ ] **Step 4: Hero — "Começar minha jornada"**

Em `src/components/Hero.tsx`, localizar (linha ~30):

```tsx
            <Button variant='primary' size='lg' iconLeft={<Calendar />}>
              Começar minha jornada
            </Button>
```

Trocar por:

```tsx
            <Button
              variant='primary'
              size='lg'
              iconLeft={<Calendar />}
              onClick={() => router.push('/agendar')}
            >
              Começar minha jornada
            </Button>
```

`useRouter` e `router` já estão importados/instanciados no topo do componente.

- [ ] **Step 5: CTA — "Agendar minha consulta"**

Em `src/components/CTA.tsx`, localizar (linha ~26):

```tsx
            <Button variant='primary' size='lg' iconLeft={<Calendar />}>
              Agendar minha consulta
            </Button>
```

Trocar por:

```tsx
            <Button
              variant='primary'
              size='lg'
              iconLeft={<Calendar />}
              onClick={() => router.push('/agendar')}
            >
              Agendar minha consulta
            </Button>
```

`useRouter` e `router` já estão importados/instanciados.

- [ ] **Step 6: SobreComoFunciona — trocar destino do botão "Agendar consulta"**

Em `src/components/sobre/SobreComoFunciona.tsx`, localizar (linha ~83-90):

```tsx
            <Button
              variant="primary"
              size="lg"
              iconLeft={<Calendar />}
              onClick={() => router.push("/contato")}
            >
              Agendar consulta
            </Button>
```

Trocar **somente** a string do `router.push`:

```tsx
            <Button
              variant="primary"
              size="lg"
              iconLeft={<Calendar />}
              onClick={() => router.push("/agendar")}
            >
              Agendar consulta
            </Button>
```

O segundo botão ("Ir para Contato") fica como está.

- [ ] **Step 7: Verificar que compila**

Rodar:
```bash
pnpm exec tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 8: Verificação visual dos 5 cliques**

Com `pnpm dev` rodando, em `http://localhost:3000`:

1. Clicar em "Agendar Consulta" no Navbar (desktop): deve ir para `/agendar`.
2. Reduzir a janela para mobile, abrir o menu, clicar "Agendar Consulta": deve fechar o menu e ir para `/agendar`.
3. Clicar em "Começar minha jornada" no Hero: deve ir para `/agendar`.
4. Rolar até o `CTA` no fim da home, clicar "Agendar minha consulta": deve ir para `/agendar`.
5. Em `/sobre`, rolar até o final, clicar "Agendar consulta": deve ir para `/agendar`. Clicar "Ir para Contato": deve ir para `/contato`.

- [ ] **Step 9: Commit**

```bash
git add src/components/Navbar.tsx src/components/Hero.tsx src/components/CTA.tsx src/components/sobre/SobreComoFunciona.tsx
git commit -m "feat(agendar): wire all 5 'Agendar' buttons to /agendar route"
```

---

## Task 7: Verificação de build de produção

**Files:**
- (nenhum — só verificação)

- [ ] **Step 1: Rodar build de produção**

Parar o `pnpm dev` (Ctrl+C). Rodar:
```bash
pnpm build
```

Esperado:
- Build conclui sem erro.
- Saída lista a rota `/agendar` na tabela final ("Route (app) ... `/agendar` ...").
- Sem warnings novos relacionados ao `@calcom/embed-react` (warnings do próprio Next sobre uso de iframe em SSR podem aparecer e são esperados; o componente já é Client Component).

- [ ] **Step 2: Smoke test de produção**

Rodar:
```bash
pnpm start
```

Abrir `http://localhost:3000/agendar` e repetir o smoke test visual da Task 5 Step 2 (widget carrega, cor terracota aplica, citação aparece). Encerrar com Ctrl+C.

- [ ] **Step 3: (Sem commit — verificação apenas)**

Se a Task 6 Step 8 já passou, o estado final está commitado. Se algum ajuste foi necessário, criar commit dedicado:

```bash
git add <arquivos-ajustados>
git commit -m "fix(agendar): <descrição do ajuste>"
```
