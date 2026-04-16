"use client";

/**
 * Terra e Alma — Card
 *
 * 1:1 mapping with the Figma Component Set:
 *   node-id: 65:29
 *   property: Variant (article | testimonial | newsletter)
 *
 * Stack:
 *   - Next.js 16 (App Router)
 *   - React 19
 *   - Tailwind v4
 *
 * Approach: instead of a single Card with 30 props, we expose THREE
 * dedicated components — one per Figma variant — so each stays small,
 * typed, and composable. They share the same visual foundation
 * (radius xl, tinted ambient shadow) but diverge in structure.
 *
 * Usage:
 *   <ArticleCard
 *     image={<Image src="/blog/escuta.jpg" alt="" width={380} height={220} />}
 *     metadata="15 ABR · 5 MIN DE LEITURA"
 *     title="Escuta ativa: o primeiro passo para a transformação"
 *     excerpt="Por que ouvir com atenção plena é um ato de cuidado."
 *     tags={[
 *       { label: "Ansiedade", variant: "sage" },
 *       { label: "Autoconhecimento", variant: "sage" },
 *     ]}
 *   />
 *
 *   <TestimonialCard
 *     quote="Encontrei no Rogério um espaço seguro para me redescobrir..."
 *     author="Clara Mendes"
 *     role="Paciente desde 2023"
 *   />
 *
 *   <NewsletterCard
 *     label="ESCRITAS DA ALMA"
 *     title="Reflexões quinzenais no seu e-mail"
 *     description="Textos sobre psicologia, relações e autoconhecimento."
 *     onSubmit={(email) => subscribe(email)}
 *   />
 */

import { useState } from "react";
import type { ReactNode, FormEvent } from "react";
import { Tag } from "./Tag";

const cardBase =
  "rounded-xl overflow-hidden bg-surface-container-lowest";
const cardShadow = "shadow-ambient";

// ============================================================
// Article Card
// ============================================================

export interface ArticleCardProps {
  image: ReactNode;
  metadata?: string;
  title: string;
  excerpt?: string;
  tags?: Array<{
    label: string;
    variant?: "terracotta" | "sage" | "taupe" | "neutral";
  }>;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function ArticleCard({
  image,
  metadata,
  title,
  excerpt,
  tags,
  href,
  onClick,
  className = "",
}: ArticleCardProps) {
  const isInteractive = Boolean(href || onClick);

  const content = (
    <article
      className={[
        cardBase,
        cardShadow,
        "flex flex-col",
        isInteractive
          ? "transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="aspect-[380/220] bg-terciaria-container overflow-hidden">
        {image}
      </div>
      <div className="flex flex-col gap-xs px-xl py-[1.75rem]">
        {metadata && (
          <p className="font-sans font-medium text-xs tracking-rotulo text-primaria-container">
            {metadata}
          </p>
        )}
        <h3 className="font-serif text-title-md text-on-surface tracking-titulo">
          {title}
        </h3>
        {excerpt && (
          <p className="font-sans text-[0.9375rem] leading-[1.6] text-on-surface-variant">
            {excerpt}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex gap-2xs flex-wrap pt-2xs">
            {tags.map((tag, i) => (
              <Tag key={i} variant={tag.variant ?? "sage"} size="sm">
                {tag.label}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {content}
      </a>
    );
  }
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="block text-left w-full"
      >
        {content}
      </button>
    );
  }
  return content;
}

// ============================================================
// Testimonial Card
// ============================================================

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  className = "",
}: TestimonialCardProps) {
  return (
    <figure
      className={[
        cardBase,
        cardShadow,
        "flex flex-col gap-md px-2xl pt-3xl pb-2xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden="true"
        className="font-serif text-7xl leading-[0.6] text-primaria-container"
      >
        &ldquo;
      </span>

      <blockquote>
        <p className="font-serif italic text-body-lg leading-[1.65] text-on-surface">
          {quote}
        </p>
      </blockquote>

      <div className="w-8 h-px bg-outline-variant" />

      <figcaption className="flex flex-col gap-[2px]">
        <p className="font-sans font-semibold text-[0.9375rem] text-on-surface not-italic">
          {author}
        </p>
        {role && (
          <p className="font-sans text-[0.8125rem] text-on-surface-variant not-italic">
            {role}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

// ============================================================
// Newsletter Card
// ============================================================

export interface NewsletterCardProps {
  label?: string;
  title: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: (email: string) => void | Promise<void>;
  className?: string;
}

export function NewsletterCard({
  label = "ESCRITAS DA ALMA",
  title,
  description,
  placeholder = "Seu e-mail",
  buttonLabel = "Inscrever",
  onSubmit,
  className = "",
}: NewsletterCardProps) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;
    setSubmitting(true);
    try {
      await onSubmit(email);
      setEmail("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className={[
        "rounded-xl bg-secundaria-container px-3xl py-3xl flex flex-col gap-lg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <p className="font-sans font-medium text-xs tracking-rotulo text-on-secundaria-container">
          {label}
        </p>
      )}

      <h3 className="font-serif text-title-lg text-on-secundaria-container tracking-titulo leading-[1.25]">
        {title}
      </h3>

      {description && (
        <p className="font-sans text-[0.9375rem] leading-[1.6] text-on-secundaria-container">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2xs pt-2xs">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          disabled={submitting}
          className="flex-1 h-[3.25rem] px-md rounded-md bg-surface-container-lowest font-sans text-[0.9375rem] text-on-surface placeholder:text-outline outline-none focus:ring-2 focus:ring-primaria"
        />
        <button
          type="submit"
          disabled={submitting}
          className="h-[3.25rem] px-lg rounded-md bg-primaria text-on-primaria font-sans font-semibold text-[0.9375rem] hover:bg-primaria-container transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {submitting ? "..." : buttonLabel}
        </button>
      </form>
    </section>
  );
}
