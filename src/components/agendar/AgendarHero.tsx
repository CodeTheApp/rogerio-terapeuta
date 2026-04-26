"use client";

import { motion } from "motion/react";

export default function AgendarHero() {
  return (
    <section className="pt-32 md:pt-48 pb-12 md:pb-16 px-6 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center flex flex-col gap-6"
      >
        <h1 className="font-serif text-5xl md:text-display-sm text-on-surface tracking-title">
          Agendar consulta
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
          Escolha o horário que faz sentido para você. A primeira sessão é um
          espaço de escuta — sem compromisso de continuidade.
        </p>
      </motion.div>
    </section>
  );
}
