"use client";

import { motion } from "motion/react";

export default function FaqHero() {
  return (
    <section className="pt-32 md:pt-48 pb-12 md:pb-16 px-6 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center flex flex-col gap-6"
      >
        <h1 className="font-serif text-5xl md:text-display-sm text-on-surface tracking-title">
          Perguntas Frequentes
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
          Encontre respostas para as principais dúvidas sobre o processo
          terapêutico, logística e agendamentos. Um espaço transparente para sua
          tranquilidade.
        </p>
      </motion.div>
    </section>
  );
}
