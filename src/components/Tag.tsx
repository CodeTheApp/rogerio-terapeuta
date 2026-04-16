"use client";

import type { ReactNode } from "react";

type Variant = "terracotta" | "sage" | "taupe" | "neutral";
type Size = "sm" | "md";

export interface TagProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  terracotta: "bg-primaria/10 text-primaria",
  sage: "bg-secundaria-container text-on-secundaria-container",
  taupe: "bg-terciaria-container text-on-terciaria-container",
  neutral: "bg-surface-container-high text-on-surface-variant",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
};

export function Tag({
  variant = "sage",
  size = "sm",
  children,
  className = "",
}: TagProps) {
  return (
    <span
      className={`inline-flex items-center font-sans font-semibold rounded-full tracking-wide ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
