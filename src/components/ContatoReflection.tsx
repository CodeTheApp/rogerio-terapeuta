"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function ContatoReflection() {
  return (
    <section className="px-6 pb-16 md:pb-24 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-tertiary rounded-[3rem] px-8 md:px-20 py-20 md:py-28 flex flex-col items-center text-center gap-6"
      >
        <Quote className="w-8 h-8 text-on-tertiary/70" aria-hidden />
        <blockquote className="font-serif italic text-on-tertiary text-3xl md:text-4xl leading-snug max-w-2xl">
          &ldquo;Onde há dor, há também a possibilidade de um novo
          florescer.&rdquo;
        </blockquote>
      </motion.div>
    </section>
  );
}
