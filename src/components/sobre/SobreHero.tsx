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
