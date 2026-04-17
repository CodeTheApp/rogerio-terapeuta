# Página `/sobre` + refator do `About` da home

**Data:** 2026-04-17
**Status:** Aprovado para implementação
**Fonte de conteúdo:** biografia escrita pelo próprio Rogério Viana (`Biografia google.docx`)

## Contexto e motivação

A seção `About` atual da home (`src/components/About.tsx`) contém credenciais **fictícias** que não correspondem à formação real do Rogério:

- "Graduado em Psicologia pela USP" → falso
- "Mestre em Psicologia Clínica e Social" → falso
- "Especialista em Fenomenologia Existencial" → falso

A biografia real descreve um profissional com perfil distinto:

- Psicanalista clínico e infantil (abordagem Anna Freud)
- Terapeuta cognitivo-comportamental
- Hipnoterapeuta
- Constelador sistêmico
- Florais de Bach
- Atuando desde 2020
- Atendimento 100% online via Google Meet
- Trabalha sonoterapia/frequências sonoras para higiene do sono
- Público: adultos, adolescentes, líderes religiosos, empresários
- Abordagem psicanalítica integrativa (Freud, Anna Freud, Winnicott)

A correção é **prioridade ética** (credenciais profissionais não podem ser inventadas). Aproveitamos a refatoração para criar uma página `/sobre` dedicada que dê espaço à riqueza da biografia sem sobrecarregar a home.

## Decisões de design

| Decisão | Escolha |
| --- | --- |
| Escopo | Híbrido: refator do `About` na home + nova página `/sobre` |
| Voz e tom | Misto — abertura acolhedora/literária, blocos técnicos quando necessário |
| Estrutura da `/sobre` | Completa, 5 seções verticais |
| Foto pessoal do Rogério | TODO — reusa `/consultorio.png` temporariamente |
| Badge "7+ Anos de Prática" | Substituir por "100% Online" (diferencial real) |
| Navbar | Item `Sobre` passa de `anchor` (`/#sobre`) para `page` (`/sobre`) |

## Parte 1 — Refator de `src/components/About.tsx`

**Layout preservado:** 2 colunas (foto + texto), badge sobreposto, animações `motion`.

### Conteúdo novo

- **Eyebrow:** `Sobre Mim` (mantém)
- **Headline:** `Escuta clínica com olhar integrativo`
- **Parágrafo 1:**
  > "Sou Rogério Viana, psicanalista clínico e infantil. Desde 2020, recebo pessoas que buscam mais clareza emocional, equilíbrio mental e um lugar seguro para se reconhecer."
- **Parágrafo 2:**
  > "Meu trabalho integra psicanálise (com base em Freud, Anna Freud e Winnicott), TCC, hipnoterapia, constelação sistêmica e Florais de Bach — escolhendo o método que cada momento do processo pede."
- **Lista de 3 itens** (substitui credenciais falsas):
  - `Psicanálise clínica e infantil`
  - `Abordagem integrativa (Freud · Winnicott · TCC)`
  - `Atendimento 100% online via Google Meet`
- **CTA novo abaixo da lista:** botão `tertiary`, `Conhecer minha história →`, `href="/sobre"`
- **Badge sobreposto:**
  - Antes: `7+` + `Anos de Prática`
  - Depois: `100%` + `Atendimento Online`
- **Foto:** mantém `/consultorio.png`. **TODO** no código: substituir por foto pessoal do Rogério quando disponível.

## Parte 2 — Nova página `/sobre`

### Rota e arquivos

- Rota: `app/sobre/page.tsx`
- Componentes novos em `src/components/sobre/`:
  - `SobreHero.tsx`
  - `SobreHistoria.tsx`
  - `SobreModalidades.tsx`
  - `SobrePublico.tsx`
  - `SobreComoFunciona.tsx`

### Metadata

```ts
export const metadata: Metadata = {
  title: "Sobre · Rogério Viana",
  description:
    "Psicanalista clínico e infantil com abordagem integrativa (Freud, Winnicott, TCC, hipnoterapia, constelação sistêmica). Atendimento 100% online.",
};
```

### Composição da página

```tsx
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

### Seção 1 — `SobreHero`

Espelha `ContatoHero` (hero curto, sem foto).

- Eyebrow: `Quem é Rogério Viana`
- Headline (serif): `Um espaço onde técnica e escuta caminham juntas`
- Lead:
  > "Psicanalista clínico e infantil. Desde 2020, ajudo pessoas a recuperar o controle das emoções, encontrar equilíbrio mental e voltar a se reconhecer."

### Seção 2 — `SobreHistoria`

Layout: 2 colunas como o `About` da home, **invertido** (foto à direita). Tom acolhedor.

- Eyebrow: `Como cheguei até aqui`
- Headline: `Compreender a complexidade humana com método e cuidado`
- Texto (3 parágrafos):
  > "Acredito que o sofrimento psíquico raramente tem uma só origem. Por isso meu trabalho é integrativo: uso a psicanálise para investigar o inconsciente, a TCC para reorganizar padrões, a hipnoterapia e a constelação sistêmica quando o caso pede uma chave diferente."
  >
  > "A maior parte das pessoas chega até mim por não se reconhecer mais — o estresse do dia a dia, decepções nas relações, mudanças de humor e de comportamento que parecem vir do nada. No consultório, esse 'nada' começa a fazer sentido."
  >
  > "Meu compromisso é simples: ser técnico no método e acolhedor na escuta, para que você se sinta protegido durante todo o processo."
- Foto: reusa `/consultorio.png` (mesma TODO da home).

### Seção 3 — `SobreModalidades`

Layout: grid 2 colunas no desktop (3 + 2), 1 coluna no mobile. Reusa o estilo de cards do `Specialties.tsx`. Tom técnico-acessível.

- Eyebrow: `Modalidades & métodos`
- Headline: `O método certo para cada momento do processo`
- 5 cards (ícone Lucide + título + descrição):

| Card | Ícone (sugestão) | Descrição |
| --- | --- | --- |
| Psicanálise Clínica e Infantil | `Brain` | "Investigação do inconsciente com base em Freud, Anna Freud e Winnicott. Para adultos, adolescentes e crianças." |
| Terapia Cognitivo-Comportamental | `Compass` | "Identificação e reorganização de padrões de pensamento e comportamento que sustentam o sofrimento." |
| Hipnoterapia | `Waves` | "Acesso a conteúdos profundos do psiquismo em estado de relaxamento, com segurança e direcionamento clínico." |
| Constelação Sistêmica | `Network` | "Olhar para padrões familiares e relacionais que se repetem na sua história — e o que está por trás deles." |
| Florais de Bach | `Flower2` | "Apoio sutil ao processo emocional, integrado à condução terapêutica." |

### Seção 4 — `SobrePublico`

Layout: 1 coluna centrada (`max-w-3xl`), respiro generoso.

- Eyebrow: `Para quem`
- Headline: `O atendimento é para você que…`
- Lista de 4 perfis (com ícones Lucide):
  - **Adultos** — em busca de autoconhecimento e equilíbrio emocional
  - **Adolescentes** — atravessando questões de identidade e relações
  - **Líderes religiosos** — que precisam de um espaço próprio de escuta
  - **Empresários** — lidando com o peso da decisão e da liderança
- Fecho:
  > "Meu trabalho funciona melhor para quem chega disposto a se olhar — não para receber respostas prontas, mas para construir, junto, perguntas mais honestas."

### Seção 5 — `SobreComoFunciona`

Layout: 2 colunas (texto + card destacado de sonoterapia), CTA full-width abaixo.

- Eyebrow: `Como funciona`
- Headline: `Atendimento 100% online, com a profundidade de um consultório`

**Coluna 1 — texto:**
> "Atendo exclusivamente pelo Google Meet — plataforma criptografada de ponta a ponta, com infraestrutura profissional. Você precisa apenas de um lugar tranquilo, fones e conexão estável. A sessão é tão íntima quanto presencial."

**Coluna 2 — card destacado** (`bg-surface-container`):
- Ícone: `AudioWaveform` (Lucide)
- Título: `Sonoterapia & higiene do sono`
- Texto: "Para pacientes com dificuldades de sono, complemento o trabalho terapêutico com sessões de frequências sonoras voltadas à redução de estresse e melhora da qualidade do sono."

**CTA final** (full-width, fundo `bg-surface-container-high` com `border` `outline-variant` e `rounded-4xl`, dentro de container com padding generoso — visual sereno alinhado com o resto do site, sem competir visualmente com o `Hero` da home):
- Título: `Pronto para começar?`
- Subtítulo: "Marque uma conversa inicial. Sem compromisso, só uma escuta."
- Botões: `<Button variant="primary" iconLeft={<Calendar />}>Agendar consulta</Button>` + `<Button variant="tertiary" iconRight={<ArrowRight />}>Ir para Contato →</Button>` (link para `/contato`)

## Parte 3 — Atualização do `Navbar`

Em `src/components/Navbar.tsx`:

```ts
const navItems: NavItem[] = [
  { label: "Início", href: "/", id: "inicio", kind: "anchor" },
  { label: "Sobre", href: "/sobre", id: "sobre", kind: "page" }, // mudou
  { label: "Especialidades", href: "/#especialidades", id: "especialidades", kind: "anchor" },
  { label: "Depoimentos", href: "/#depoimentos", id: "depoimentos", kind: "anchor" },
  { label: "Blog", href: "/blog", id: "blog", kind: "page" },
  { label: "Contato", href: "/contato", id: "contato", kind: "page" },
];
```

O `id="sobre"` na seção `About` da home **permanece** (compatibilidade com links externos antigos para `/#sobre`). Remover `"sobre"` de `HOME_SECTION_IDS` (linha 26) já que não é mais usado para navegação ativa.

## Conformidade com o Design System

Todos os componentes usam exclusivamente tokens do design system "Terra e Alma":

- Cores: `primary` (terracotta), `secondary` (sage), `surface-container-*`, `on-surface-variant`
- Tipografia: `font-serif` para headlines, `font-body` para texto, `tracking-ultra-wide` para eyebrows
- Radius: `rounded-2xl`, `rounded-4xl`, `rounded-5xl`
- Animações: `motion.div` com `whileInView` (consistente com `About`/`Hero` atuais)
- Botões: componente `<Button />` com variantes `primary`, `secondary`, `tertiary`

## Checklist de implementação (resumo)

1. Criar diretório `src/components/sobre/` e os 5 componentes da página.
2. Criar `app/sobre/page.tsx` com metadata + composição.
3. Refatorar `src/components/About.tsx` (texto, lista, badge, CTA).
4. Atualizar `src/components/Navbar.tsx` (item `Sobre` vira `page`, remover de `HOME_SECTION_IDS`).
5. Verificar build (`pnpm build`) e navegação manual em `/`, `/sobre`, navbar ativo entre páginas.

## TODOs deixados para depois

- **Foto pessoal do Rogério** em `/sobre` (Seção 2) e em `About` da home — substituir `/consultorio.png` quando disponível.
- Considerar OG image dedicada para `/sobre` no futuro.
