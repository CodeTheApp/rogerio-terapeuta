# Página `/sobre` + Refator do `About` — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar página `/sobre` dedicada com biografia completa do Rogério Viana e refatorar a seção `About` da home substituindo credenciais fictícias pela biografia real.

**Architecture:** Next.js 16 App Router. Nova rota `app/sobre/page.tsx` composta por 5 componentes em `src/components/sobre/`. Refator in-place de `src/components/About.tsx` e `src/components/Navbar.tsx`. Reutilização de tokens do design system "Terra e Alma" e do componente `<Button>` existente. Animações via `motion/react`, ícones via `lucide-react`.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, motion/react, lucide-react, pnpm.

**Spec de referência:** `docs/superpowers/specs/2026-04-17-pagina-sobre-design.md`

---

## Notas para o implementador

- **Sem testes automatizados:** o projeto não tem infraestrutura de testes (jest/vitest). Verificação será visual via dev server (`pnpm dev`) e build estático (`pnpm build`).
- **Tokens obrigatórios:** use exclusivamente os tokens definidos em `app/globals.css` (`bg-surface-*`, `text-on-surface-*`, `text-primary`, `text-secondary`, `font-serif`, `tracking-ultra-wide`, `rounded-4xl` etc). Não use hex literais.
- **Padrão de animação:** todos os componentes seguem o padrão `motion.div` com `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}` (ou `x` para entrada lateral, conforme `About`/`Hero` atuais).
- **Navegação programática:** botões de CTA que precisam navegar usam `useRouter` de `next/navigation` + `onClick={() => router.push("/destino")}` (padrão usado em `CTA.tsx:33`). Componente `<Button>` é um `<button>` HTML, não envolva em `<Link>`.
- **Imagens:** use atributo `referrerPolicy='no-referrer'` em todas as `<img>` (padrão do projeto).
- **Diretivas:** todo componente que usa `motion/react` ou hooks precisa de `"use client";` no topo.
- **Commits:** um commit por tarefa, mensagem em inglês com prefixo Conventional Commits (`feat:`, `refactor:`).

---

## File Structure

**Arquivos a criar:**
- `src/components/sobre/SobreHero.tsx` — hero da página, sem foto
- `src/components/sobre/SobreHistoria.tsx` — biografia + foto (2 colunas)
- `src/components/sobre/SobreModalidades.tsx` — 5 cards de métodos
- `src/components/sobre/SobrePublico.tsx` — para quem é o atendimento
- `src/components/sobre/SobreComoFunciona.tsx` — atendimento online + sonoterapia + CTA
- `app/sobre/page.tsx` — rota e composição

**Arquivos a modificar:**
- `src/components/About.tsx` — substituir copy, lista, badge, adicionar CTA `Conhecer minha história →`
- `src/components/Navbar.tsx` — `Sobre` deixa de ser anchor (`/#sobre`) e vira page (`/sobre`); remover de `HOME_SECTION_IDS`

---

## Task 1: Refator do `About.tsx` (home)

**Files:**
- Modify: `src/components/About.tsx`

- [ ] **Step 1: Substituir o conteúdo completo do componente**

Reescreva `src/components/About.tsx` com este conteúdo:

```tsx
'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

export default function About() {
  const router = useRouter();

  return (
    <section
      id='sobre'
      className='bg-surface-container-low px-6 py-24 md:py-32'
    >
      <div className='items-center gap-20 grid md:grid-cols-2 mx-auto max-w-screen-2xl'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='relative order-2 md:order-1'
        >
          {/* TODO: substituir /consultorio.png por foto pessoal do Rogério quando disponível */}
          <img
            src='/consultorio.png'
            alt='Consultório'
            className='grayscale-20 hover:grayscale-0 rounded-4xl w-full object-cover object-left aspect-square transition-all duration-700'
            referrerPolicy='no-referrer'
          />
          <div className='hidden md:block -top-6 -right-6 absolute bg-surface-container-lowest shadow-xl p-8 border rounded-2xl border-outline-variant'>
            <p className='font-serif font-bold text-primary text-3xl'>100%</p>
            <p className='font-semibold text-on-surface-variant text-xs uppercase tracking-ultra-wide'>
              Atendimento Online
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='order-1 md:order-2'
        >
          <span className='block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide'>
            Sobre Mim
          </span>
          <h2 className='mb-8 font-serif text-on-surface text-4xl md:text-5xl leading-tight'>
            Escuta clínica com olhar integrativo
          </h2>
          <div className='space-y-6 text-on-surface-variant text-lg leading-relaxed'>
            <p>
              Sou Rogério Viana, psicanalista clínico e infantil. Desde 2020,
              recebo pessoas que buscam mais clareza emocional, equilíbrio
              mental e um lugar seguro para se reconhecer.
            </p>
            <p>
              Meu trabalho integra psicanálise (com base em Freud, Anna Freud e
              Winnicott), TCC, hipnoterapia, constelação sistêmica e Florais de
              Bach — escolhendo o método que cada momento do processo pede.
            </p>
            <ul className='space-y-4 pt-4'>
              {[
                'Psicanálise clínica e infantil',
                'Abordagem integrativa (Freud · Winnicott · TCC)',
                'Atendimento 100% online via Google Meet',
              ].map((item, i) => (
                <li key={i} className='flex items-start gap-4'>
                  <CheckCircle2 className='mt-0.5 w-6 h-6 text-primary shrink-0' />
                  <span className='text-on-surface'>{item}</span>
                </li>
              ))}
            </ul>
            <div className='pt-4'>
              <Button
                variant='tertiary'
                size='md'
                iconRight={<ArrowRight />}
                onClick={() => router.push('/sobre')}
              >
                Conhecer minha história
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar tipos e build local**

Run: `pnpm build`
Expected: build passa sem erros de TypeScript ou lint. Se aparecer aviso sobre `useRouter`, garanta que `"use client"` está presente.

- [ ] **Step 3: Commit**

```bash
git add src/components/About.tsx
git commit -m "refactor(About): replace fictional credentials with real biography

- Updates copy with Rogério's actual background (psicanálise integrativa)
- Replaces 7+ Anos badge with 100% Online (factual differentiator)
- Adds 'Conhecer minha história' CTA pointing to /sobre"
```

---

## Task 2: Atualizar `Navbar.tsx` (Sobre vira página)

**Files:**
- Modify: `src/components/Navbar.tsx:17-26`

- [ ] **Step 1: Alterar item `Sobre` em `navItems` (linha 19)**

Encontre:
```ts
{ label: "Sobre", href: "/#sobre", id: "sobre", kind: "anchor" },
```

Substitua por:
```ts
{ label: "Sobre", href: "/sobre", id: "sobre", kind: "page" },
```

- [ ] **Step 2: Remover `"sobre"` de `HOME_SECTION_IDS` (linha 26)**

Encontre:
```ts
const HOME_SECTION_IDS = ["sobre", "especialidades", "depoimentos", "blog"];
```

Substitua por:
```ts
const HOME_SECTION_IDS = ["especialidades", "depoimentos", "blog"];
```

(O `id="sobre"` na seção `About` da home permanece para compatibilidade com links antigos `/#sobre` — apenas paramos de usar essa âncora para destaque de navegação ativa.)

- [ ] **Step 3: Verificar build**

Run: `pnpm build`
Expected: passa sem erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(Navbar): turn Sobre item into page link to /sobre

Item 'Sobre' moves from anchor (/#sobre) to dedicated page (/sobre).
The #sobre anchor on the home page is preserved for backward
compatibility with old links."
```

---

## Task 3: Criar `SobreHero.tsx`

**Files:**
- Create: `src/components/sobre/SobreHero.tsx`

- [ ] **Step 1: Criar o arquivo com o conteúdo abaixo**

```tsx
"use client";

import { motion } from "motion/react";

export default function SobreHero() {
  return (
    <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center flex flex-col gap-6"
      >
        <span className="block font-bold text-secondary text-sm uppercase tracking-ultra-wide">
          Quem é Rogério Viana
        </span>
        <h1 className="font-serif text-5xl md:text-display-sm text-on-surface tracking-title">
          Um espaço onde técnica e escuta caminham juntas
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Psicanalista clínico e infantil. Desde 2020, ajudo pessoas a recuperar
          o controle das emoções, encontrar equilíbrio mental e voltar a se
          reconhecer.
        </p>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sobre/SobreHero.tsx
git commit -m "feat(sobre): add SobreHero component"
```

---

## Task 4: Criar `SobreHistoria.tsx`

**Files:**
- Create: `src/components/sobre/SobreHistoria.tsx`

- [ ] **Step 1: Criar o arquivo com o conteúdo abaixo**

Layout: 2 colunas, foto à direita (invertido em relação ao `About` da home).

```tsx
"use client";

import { motion } from "motion/react";

export default function SobreHistoria() {
  return (
    <section className="bg-surface-container-low px-6 py-24 md:py-32">
      <div className="items-center gap-20 grid md:grid-cols-2 mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <span className="block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide">
            Como cheguei até aqui
          </span>
          <h2 className="mb-8 font-serif text-on-surface text-4xl md:text-5xl leading-tight">
            Compreender a complexidade humana com método e cuidado
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Acredito que o sofrimento psíquico raramente tem uma só origem.
              Por isso meu trabalho é integrativo: uso a psicanálise para
              investigar o inconsciente, a TCC para reorganizar padrões, a
              hipnoterapia e a constelação sistêmica quando o caso pede uma
              chave diferente.
            </p>
            <p>
              A maior parte das pessoas chega até mim por não se reconhecer
              mais — o estresse do dia a dia, decepções nas relações, mudanças
              de humor e de comportamento que parecem vir do nada. No
              consultório, esse &ldquo;nada&rdquo; começa a fazer sentido.
            </p>
            <p>
              Meu compromisso é simples: ser técnico no método e acolhedor na
              escuta, para que você se sinta protegido durante todo o processo.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 md:order-2"
        >
          {/* TODO: substituir /consultorio.png por foto pessoal do Rogério quando disponível */}
          <img
            src="/consultorio.png"
            alt="Rogério Viana"
            className="grayscale-20 hover:grayscale-0 rounded-4xl w-full object-cover aspect-square transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sobre/SobreHistoria.tsx
git commit -m "feat(sobre): add SobreHistoria component"
```

---

## Task 5: Criar `SobreModalidades.tsx`

**Files:**
- Create: `src/components/sobre/SobreModalidades.tsx`

- [ ] **Step 1: Criar o arquivo com o conteúdo abaixo**

Layout: grid 2 colunas (3 cards na primeira linha, 2 na segunda) no desktop. 1 coluna no mobile. Estilo dos cards alinhado com `Specialties.tsx`.

```tsx
"use client";

import {
  AudioWaveform,
  Brain,
  Compass,
  Flower2,
  Network,
} from "lucide-react";
import { motion } from "motion/react";

const modalidades = [
  {
    title: "Psicanálise Clínica e Infantil",
    description:
      "Investigação do inconsciente com base em Freud, Anna Freud e Winnicott. Para adultos, adolescentes e crianças.",
    icon: Brain,
  },
  {
    title: "Terapia Cognitivo-Comportamental",
    description:
      "Identificação e reorganização de padrões de pensamento e comportamento que sustentam o sofrimento.",
    icon: Compass,
  },
  {
    title: "Hipnoterapia",
    description:
      "Acesso a conteúdos profundos do psiquismo em estado de relaxamento, com segurança e direcionamento clínico.",
    icon: AudioWaveform,
  },
  {
    title: "Constelação Sistêmica",
    description:
      "Olhar para padrões familiares e relacionais que se repetem na sua história — e o que está por trás deles.",
    icon: Network,
  },
  {
    title: "Florais de Bach",
    description:
      "Apoio sutil ao processo emocional, integrado à condução terapêutica.",
    icon: Flower2,
  },
];

export default function SobreModalidades() {
  return (
    <section className="bg-surface px-6 py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide">
            Modalidades & métodos
          </span>
          <h2 className="mb-6 font-serif text-on-surface text-4xl md:text-5xl">
            O método certo para cada momento do processo
          </h2>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          {modalidades.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-surface-container-high p-10 rounded-4xl flex flex-col transition-all duration-500 hover:scale-[1.02]"
            >
              <mod.icon className="w-12 h-12 mb-8 text-primary" />
              <h3 className="mb-4 font-serif text-2xl text-on-surface leading-tight">
                {mod.title}
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sobre/SobreModalidades.tsx
git commit -m "feat(sobre): add SobreModalidades component with 5 method cards"
```

---

## Task 6: Criar `SobrePublico.tsx`

**Files:**
- Create: `src/components/sobre/SobrePublico.tsx`

- [ ] **Step 1: Criar o arquivo com o conteúdo abaixo**

```tsx
"use client";

import { Briefcase, HeartHandshake, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

const publico = [
  {
    label: "Adultos",
    description: "em busca de autoconhecimento e equilíbrio emocional",
    icon: Users,
  },
  {
    label: "Adolescentes",
    description: "atravessando questões de identidade e relações",
    icon: Sparkles,
  },
  {
    label: "Líderes religiosos",
    description: "que precisam de um espaço próprio de escuta",
    icon: HeartHandshake,
  },
  {
    label: "Empresários",
    description: "lidando com o peso da decisão e da liderança",
    icon: Briefcase,
  },
];

export default function SobrePublico() {
  return (
    <section className="bg-surface-container-low px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide">
            Para quem
          </span>
          <h2 className="mb-6 font-serif text-on-surface text-4xl md:text-5xl">
            O atendimento é para você que…
          </h2>
        </motion.div>

        <ul className="space-y-6">
          {publico.map((p, i) => (
            <motion.li
              key={p.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-6 bg-surface-container-lowest p-6 md:p-8 rounded-3xl border border-outline-variant"
            >
              <p.icon className="mt-1 w-8 h-8 text-primary shrink-0" />
              <div>
                <p className="font-serif text-2xl text-on-surface mb-1">
                  {p.label}
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-on-surface-variant text-lg md:text-xl leading-relaxed text-center italic"
        >
          Meu trabalho funciona melhor para quem chega disposto a se olhar — não
          para receber respostas prontas, mas para construir, junto, perguntas
          mais honestas.
        </motion.p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sobre/SobrePublico.tsx
git commit -m "feat(sobre): add SobrePublico component"
```

---

## Task 7: Criar `SobreComoFunciona.tsx`

**Files:**
- Create: `src/components/sobre/SobreComoFunciona.tsx`

- [ ] **Step 1: Criar o arquivo com o conteúdo abaixo**

Layout: 2 colunas (texto + card de sonoterapia), CTA destacado abaixo.

```tsx
"use client";

import {
  ArrowRight,
  AudioWaveform,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Button } from "../Button";

export default function SobreComoFunciona() {
  const router = useRouter();

  return (
    <section className="bg-surface px-6 py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide">
            Como funciona
          </span>
          <h2 className="font-serif text-on-surface text-4xl md:text-5xl leading-tight">
            Atendimento 100% online, com a profundidade de um consultório
          </h2>
        </motion.div>

        <div className="gap-12 grid md:grid-cols-2 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-on-surface-variant text-lg leading-relaxed"
          >
            <p>
              Atendo exclusivamente pelo Google Meet — plataforma criptografada
              de ponta a ponta, com infraestrutura profissional. Você precisa
              apenas de um lugar tranquilo, fones e conexão estável. A sessão é
              tão íntima quanto presencial.
            </p>
            <p className="flex items-start gap-3 text-on-surface text-base font-medium">
              <ShieldCheck className="mt-0.5 w-5 h-5 text-secondary shrink-0" />
              Sigilo absoluto e ambiente protegido durante todo o processo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container p-10 rounded-4xl border border-outline-variant"
          >
            <AudioWaveform className="w-12 h-12 mb-6 text-primary" />
            <h3 className="mb-4 font-serif text-2xl text-on-surface leading-tight">
              Sonoterapia & higiene do sono
            </h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              Para pacientes com dificuldades de sono, complemento o trabalho
              terapêutico com sessões de frequências sonoras voltadas à redução
              de estresse e melhora da qualidade do sono.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-high p-10 md:p-16 rounded-4xl border border-outline-variant text-center mx-auto max-w-4xl"
        >
          <h3 className="mb-4 font-serif text-3xl md:text-4xl text-on-surface leading-tight">
            Pronto para começar?
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-on-surface-variant text-lg leading-relaxed">
            Marque uma conversa inicial. Sem compromisso, só uma escuta.
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              iconLeft={<Calendar />}
              onClick={() => router.push("/contato")}
            >
              Agendar consulta
            </Button>
            <Button
              variant="tertiary"
              size="lg"
              iconRight={<ArrowRight />}
              onClick={() => router.push("/contato")}
            >
              Ir para Contato
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sobre/SobreComoFunciona.tsx
git commit -m "feat(sobre): add SobreComoFunciona component with online care details and CTA"
```

---

## Task 8: Criar a rota `app/sobre/page.tsx`

**Files:**
- Create: `app/sobre/page.tsx`

- [ ] **Step 1: Criar o arquivo com a composição da página**

```tsx
import type { Metadata } from "next";
import SobreHero from "@/src/components/sobre/SobreHero";
import SobreHistoria from "@/src/components/sobre/SobreHistoria";
import SobreModalidades from "@/src/components/sobre/SobreModalidades";
import SobrePublico from "@/src/components/sobre/SobrePublico";
import SobreComoFunciona from "@/src/components/sobre/SobreComoFunciona";

export const metadata: Metadata = {
  title: "Sobre · Rogério Viana",
  description:
    "Psicanalista clínico e infantil com abordagem integrativa (Freud, Winnicott, TCC, hipnoterapia, constelação sistêmica). Atendimento 100% online.",
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
```

- [ ] **Step 2: Commit**

```bash
git add app/sobre/page.tsx
git commit -m "feat(sobre): add /sobre route composing all sections"
```

---

## Task 9: Verificação de build + QA visual

**Files:** nenhum a modificar — apenas verificação.

- [ ] **Step 1: Build estático completo**

Run: `pnpm build`
Expected: build passa sem erros. A rota `/sobre` deve aparecer na lista de rotas geradas. Tipos OK, sem warnings de lint relevantes.

- [ ] **Step 2: Subir o dev server**

Run: `pnpm dev`
Expected: servidor sobe em `http://localhost:3000` (ou porta indicada).

- [ ] **Step 3: QA visual — home (`/`)**

Verifique no navegador:
- [ ] Seção "Sobre Mim" mostra a nova headline "Escuta clínica com olhar integrativo"
- [ ] Os 3 itens da lista são os corretos (psicanálise, integrativa, online)
- [ ] Badge mostra "100%" + "Atendimento Online"
- [ ] Botão `Conhecer minha história →` aparece e, ao clicar, navega para `/sobre`
- [ ] Animações de entrada funcionam (scroll → fade in)

- [ ] **Step 4: QA visual — `/sobre`**

Acesse `http://localhost:3000/sobre`. Verifique:
- [ ] **SobreHero**: eyebrow + título + lead, centralizado, sem sobreposição com a navbar
- [ ] **SobreHistoria**: foto à direita (desktop), 3 parágrafos à esquerda, layout invertido em mobile
- [ ] **SobreModalidades**: 5 cards, 3+2 layout no desktop, 1 coluna em mobile, ícones aparecem
- [ ] **SobrePublico**: 4 itens com ícone, fecho italicizado abaixo, max-w-3xl
- [ ] **SobreComoFunciona**: 2 colunas (texto + card sonoterapia), CTA destacado abaixo, ambos botões navegam para `/contato`
- [ ] Animações de entrada disparam ao scroll
- [ ] Cores e tipografia consistentes com o resto do site

- [ ] **Step 5: QA visual — Navbar**

- [ ] Em `/`, ao scrollar para a seção "Sobre Mim", o item "Sobre" da navbar **NÃO** fica em destaque (porque agora aponta para `/sobre`)
- [ ] Em `/sobre`, o item "Sobre" da navbar fica em destaque (estado `page` ativo)
- [ ] Em `/`, scrollar para "Especialidades" / "Depoimentos" continua destacando os respectivos itens
- [ ] Menu mobile: item "Sobre" funciona (navega para `/sobre` e fecha o menu)

- [ ] **Step 6: QA responsivo**

Reduza a viewport para mobile (~375px):
- [ ] Home `About`: foto vai para baixo do texto, badge fica oculto (esperado: `hidden md:block`)
- [ ] `/sobre` todas as seções colapsam para 1 coluna
- [ ] Cards de modalidades empilham verticalmente
- [ ] CTA final do `SobreComoFunciona`: botões empilham verticalmente

- [ ] **Step 7: Se algo quebrar**

Não use `--no-verify` no commit nem suprima warnings. Investigue o root cause:
- Erro de tipo: cheque se nomes de props batem com a definição de `Button`/Lucide
- Hidratação: garanta `"use client"` em componentes com `motion` ou hooks
- Layout quebrado: cheque se classes Tailwind seguem padrão `surface-*`/`on-surface-*` (não invente tokens novos)

- [ ] **Step 8: Commit final (apenas se houver ajustes)**

Se durante o QA precisou ajustar algum dos componentes, faça commits específicos antes de fechar a task. Se nada precisou mudar, pule este step.

---

## Self-Review

**Spec coverage:**
- ✅ Refator do `About.tsx` (Task 1) — copy nova, badge novo, CTA, foto preservada
- ✅ Atualização do `Navbar.tsx` (Task 2) — Sobre vira page, removido de HOME_SECTION_IDS
- ✅ `SobreHero` (Task 3)
- ✅ `SobreHistoria` (Task 4) — layout invertido, foto à direita
- ✅ `SobreModalidades` (Task 5) — 5 cards com ícones especificados no spec
- ✅ `SobrePublico` (Task 6) — 4 perfis + fecho italicizado
- ✅ `SobreComoFunciona` (Task 7) — texto + card sonoterapia + CTA agendar/contato
- ✅ Rota `app/sobre/page.tsx` (Task 8) — metadata + composição
- ✅ TODO de foto pessoal incluído nos componentes que usam `/consultorio.png`
- ✅ Tokens do design system usados consistentemente

**Placeholder scan:** nenhum "TBD"/"TODO implement" encontrado nos passos. Os comentários `TODO: substituir /consultorio.png` são intencionais e explícitos no spec.

**Type consistency:** todos os componentes usam o mesmo `<Button>` (variants `primary`/`tertiary`), mesmo padrão `motion.div`, ícones Lucide importados explicitamente. `useRouter` de `next/navigation` (não `next/router`).

**Conformidade com a tech stack:** `"use client"` em todos os componentes interativos, `next/navigation` para rotas, Tailwind com tokens, `motion/react` consistente.
