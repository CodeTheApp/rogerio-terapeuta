"use client";

/**
 * Terra e Alma — Reflection Quote
 *
 * 1:1 mapping with the Figma Component Set:
 *   node-id: 67:12
 *   property: Variant (default | subtle)
 *
 * Stack:
 *   - Next.js 16 (App Router)
 *   - React 19
 *   - Tailwind v4
 *
 * This is the signature/hero component of Terra e Alma — the editorial
 * quote block used for emotional anchoring throughout the site.
 *
 * Variants:
 *   - default: terracotta gradient background, white text, hero-scale
 *   - subtle:  surface-container-low background, dark text, inline-scale
 *
 * Usage:
 *   // Hero section (top of homepage, end of article)
 *   <ReflectionQuote
 *     quote="Onde não se pode falar, deve-se calar."
 *     author="Ludwig Wittgenstein"
 *   />
 *
 *   // Secondary context (inside articles, sidebar)
 *   <ReflectionQuote
 *     variant="subtle"
 *     quote="O inconsciente é estruturado como uma linguagem."
 *     author="Jacques Lacan"
 *     label="CITAÇÃO DO DIA"
 *   />
 */

import type { ReactNode } from "react";

type Variant = "default" | "subtle";

export interface ReflectionQuoteProps {
  quote: string | ReactNode;
  author?: string;
  label?: string;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<
  Variant,
  {
    container: string;
    label: string;
    quote: string;
    quoteSize: string;
    divider: string;
    author: string;
  }
> = {
  default: {
    container: "bg-gradient-hero p-[6rem]",
    label: "text-on-primary-container",
    quote: "text-on-primary",
    quoteSize: "text-[3rem] leading-[1.2] tracking-[-0.015em]",
    divider: "bg-on-primary-container opacity-60",
    author: "text-on-primary-container",
  },
  subtle: {
    container: "bg-surface-container-low px-20 py-[4.5rem]",
    label: "text-primary",
    quote: "text-on-surface",
    quoteSize: "text-headline-md",
    divider: "bg-primary opacity-40",
    author: "text-on-surface-variant",
  },
};

export function ReflectionQuote({
  quote,
  author,
  label = "ESCRITAS DA ALMA",
  variant = "default",
  className = "",
}: ReflectionQuoteProps) {
  const s = variantStyles[variant];

  return (
    <figure
      className={[
        "rounded-2xl flex flex-col items-center justify-center text-center",
        variant === "default" ? "gap-8" : "gap-6",
        s.container,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <p
          className={`font-sans font-medium text-xs tracking-[0.15em] ${s.label}`}
        >
          {label}
        </p>
      )}

      <blockquote>
        <p
          className={`font-serif tracking-[-0.015em] ${s.quoteSize} ${s.quote} max-w-[20ch]`}
        >
          {quote}
        </p>
      </blockquote>

      <div className={`w-12 h-px ${s.divider}`} />

      {author && (
        <figcaption
          className={`font-sans font-medium text-xs tracking-[0.15em] uppercase ${s.author}`}
        >
          {author}
        </figcaption>
      )}
    </figure>
  );
}
