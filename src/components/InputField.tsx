"use client";

/**
 * Terra e Alma — Input Field
 *
 * 1:1 mapping with the Figma Component Set:
 *   node-id: 33:254
 *   properties: Size × State × Has-Icon × Has-Label
 *
 * Stack:
 *   - Next.js 16 (App Router)
 *   - React 19
 *   - Tailwind v4
 *   - Lucide React for icons
 *
 * Reference icon used in Figma: <Mail />
 * Any lucide-react icon works — the icon color is inherited from the text
 * color via `currentColor` (Lucide default).
 *
 * States:
 *   - rest:     no border, placeholder in outline color
 *   - focus:    ghost border in primaria (DESIGN.md)
 *   - filled:   value in on-surface
 *   - error:    red border + helper text
 *   - disabled: 50% opacity + recessed background
 *
 * Usage:
 *   import { InputField } from "@/components/InputField";
 *   import { Mail, User, Search } from "lucide-react";
 *
 *   <InputField label="E-mail" icon={<Mail />} placeholder="Seu melhor e-mail" />
 *   <InputField label="Nome" icon={<User />} size="lg" />
 *   <InputField label="Buscar" icon={<Search />} placeholder="Digite um tema..." />
 *   <InputField label="E-mail" error="Formato inválido" value={email} />
 */

import { useId, useState } from "react";
import type { InputHTMLAttributes, ReactNode, Ref } from "react";

type Size = "sm" | "md" | "lg";

export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  label?: string;
  icon?: ReactNode;
  error?: string;
  helperText?: string;
  ref?: Ref<HTMLInputElement>;
}

const sizeClasses: Record<Size, string> = {
  sm: "h-10 px-3.5 gap-2 text-body-sm rounded-[0.625rem]",
  md: "h-[3.25rem] px-5 gap-2.5 text-[0.9375rem] rounded-xl",
  lg: "h-[3.75rem] px-6 gap-3 text-body-md rounded-xl",
};

// Icon sizes match Figma: sm=16, md=18, lg=20
const iconSizeClasses: Record<Size, string> = {
  sm: "[&>svg]:w-4 [&>svg]:h-4",
  md: "[&>svg]:w-[1.125rem] [&>svg]:h-[1.125rem]",
  lg: "[&>svg]:w-5 [&>svg]:h-5",
};

export function InputField({
  size = "md",
  label,
  icon,
  error,
  helperText,
  disabled = false,
  className = "",
  id,
  onFocus,
  onBlur,
  ref,
  ...props
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const hasError = Boolean(error);
  const hasValue = Boolean(props.value ?? props.defaultValue);

  const fieldBg = disabled
    ? "bg-surface-container-low opacity-50 cursor-not-allowed"
    : "bg-surface-container-highest";

  const fieldBorder = hasError
    ? "border-[1.5px] border-erro"
    : focused && !disabled
    ? "border-[1.5px] border-primaria"
    : "border-[1.5px] border-transparent";

  const fieldClasses = [
    "flex items-center transition-colors duration-200 w-full",
    fieldBg,
    fieldBorder,
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const textColor = disabled || !hasValue ? "text-outline" : "text-on-surface";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="font-sans font-medium text-on-surface-variant text-label-md"
        >
          {label.toUpperCase()}
        </label>
      )}

      <div className={fieldClasses}>
        {icon && (
          <span
            className={`inline-flex items-center justify-center shrink-0 text-outline ${iconSizeClasses[size]}`}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          className={`flex-1 bg-transparent border-none outline-none font-sans placeholder:text-outline ${textColor}`}
          {...props}
        />
      </div>

      {error && (
        <p id={`${inputId}-error`} role="alert" className="font-sans text-xs text-erro">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${inputId}-helper`} className="font-sans text-xs text-on-surface-variant">
          {helperText}
        </p>
      )}
    </div>
  );
}
