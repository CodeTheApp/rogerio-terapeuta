"use client";

import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import type { ElementType, ReactNode } from "react";

interface InfoItem {
  icon: ElementType;
  label: string;
  value: ReactNode;
  href?: string;
}

const MAPS_URL = "https://maps.google.com/?q=Pombal,+Leiria,+Portugal";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Pombal%2C+Leiria%2C+Portugal&z=13&output=embed";

const infoItems: InfoItem[] = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "+351 XXX XXX XXX",
    href: "https://wa.me/351000000000",
  },
  {
    icon: Mail,
    label: "E-mail Direto",
    value: "contato@rogerioviana.com",
    href: "mailto:contato@rogerioviana.com",
  },
  {
    icon: MapPin,
    label: "Endereço Presencial",
    value: (
      <>
        <span className="block">Pombal, Leiria</span>
        <span className="block">Portugal</span>
      </>
    ),
    href: MAPS_URL,
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/351000000000" },
];

export default function ContatoInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col gap-12"
    >
      <div className="flex flex-col gap-8">
        {infoItems.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <span className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary inline-flex items-center justify-center">
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-serif text-xl text-on-surface leading-7">
                  {label}
                </span>
                <span className="font-sans text-base text-on-surface-variant leading-6">
                  {value}
                </span>
              </span>
            </>
          );

          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 group"
            >
              {content}
            </a>
          ) : (
            <div key={label} className="flex items-start gap-4">
              {content}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-sans font-medium text-on-surface-variant text-label-md">
          CONECTE-SE NAS REDES
        </p>
        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary inline-flex items-center justify-center transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="relative rounded-3xl overflow-hidden shadow-subtle aspect-[4/3] md:aspect-auto md:h-80">
        <iframe
          title="Mapa - Pombal, Leiria, Portugal"
          src={MAP_EMBED_URL}
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm text-on-surface px-4 py-2 rounded-lg text-sm font-medium shadow-subtle hover:bg-surface transition-colors"
        >
          Consultório Rogério Viana · Pombal
        </a>
      </div>
    </motion.div>
  );
}
