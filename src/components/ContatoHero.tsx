"use client";

import { motion } from "motion/react";

export default function ContatoHero() {
  return (
    <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-6 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center flex flex-col gap-6"
      >
        <h1 className="font-serif text-5xl md:text-display-sm text-on-surface tracking-title">
          Entre em Contato
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Dar o primeiro passo em direção ao autoconhecimento e bem-estar é um
          ato de coragem. Estou aqui para caminhar ao seu lado nessa jornada.
        </p>
      </motion.div>
    </section>
  );
}
