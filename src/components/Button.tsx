"use client";

/**
 * Terra e Alma — Button
 *
 * 1:1 mapping with the Figma Component Set:
 *   node-id: 31:291
 *   properties: Variant × Size × State × Icon-Left × Icon-Right
 *
 * Stack:
 *   - Next.js 16 (App Router)
 *   - React 19 (ref as a regular prop, no forwardRef needed)
 *   - Tailwind v4
 *   - Lucide React for icons
 *
 * Reference icons used in Figma (any lucide-react icon works):
 *   - iconLeft:  <Calendar />   (scheduling context)
 *   - iconRight: <ArrowRight /> (CTA / navigation)
 *   Color is inherited from the text color via `currentColor` (Lucide default).
 *
 * Usage:
 *   import { Button } from "@/components/Button";
 *   import { Calendar, ArrowRight } from "lucide-react";
 *
 *   <Button variant="primary" size="md">Agendar Consulta</Button>
 *   <Button variant="primary" iconLeft={<Calendar />}>Agendar</Button>
 *   <Button variant="tertiary" iconRight={<ArrowRight />}>Ler Artigo</Button>
 *   <Button variant="outlined" disabled>Indisponível</Button>
 */

import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "outlined";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

const baseClasses = [
  "inline-flex items-center justify-center font-sans font-semibold",
  "rounded-md transition-colors duration-200 ease-out cursor-pointer",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaria focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
  "disabled:cursor-not-allowed disabled:opacity-60",
].join(" ");

const variantClasses: Record<Variant, string> = {
  primary: [
    "bg-primaria text-on-primaria",
    "hover:bg-primaria-container",
    "disabled:bg-surface-container-highest disabled:text-outline",
  ].join(" "),
  secondary: [
    "bg-secundaria-container text-on-secundaria-container",
    "hover:bg-secundaria hover:text-on-secundaria",
    "disabled:bg-surface-container-highest disabled:text-outline",
  ].join(" "),
  tertiary: [
    "bg-transparent text-primaria",
    "hover:bg-surface-container-low hover:text-primaria-container",
    "disabled:text-outline disabled:hover:bg-transparent",
  ].join(" "),
  outlined: [
    "bg-transparent text-primaria border-[1.5px] border-primaria",
    "hover:bg-primaria hover:text-on-primaria",
    "disabled:border-outline-variant disabled:text-outline",
    "disabled:hover:bg-transparent disabled:hover:text-outline",
  ].join(" "),
};

const sizeClasses: Record<Size, string> = {
  sm: "px-md py-2xs gap-1.5 text-body-sm",
  md: "px-[1.75rem] py-xs gap-2xs text-[0.9375rem]",
  lg: "px-xl py-sm gap-2.5 text-body-md",
};

// Icon sizes match Figma: sm=16, md=18, lg=20
const iconSizeClasses: Record<Size, string> = {
  sm: "[&>svg]:w-4 [&>svg]:h-4",
  md: "[&>svg]:w-[1.125rem] [&>svg]:h-[1.125rem]",
  lg: "[&>svg]:w-5 [&>svg]:h-5",
};

export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  className = "",
  children,
  ref,
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button ref={ref} className={classes} {...props}>
      {iconLeft && (
        <span
          className={`inline-flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`}
          aria-hidden="true"
        >
          {iconLeft}
        </span>
      )}
      <span>{children}</span>
      {iconRight && (
        <span
          className={`inline-flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`}
          aria-hidden="true"
        >
          {iconRight}
        </span>
      )}
    </button>
  );
}
