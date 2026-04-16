"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function FaqReflection() {
  return (
    <section className="border-t border-b border-outline-variant/30 px-6 py-16 md:py-20 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6"
      >
        <Quote className="w-8 h-8 text-tertiary" aria-hidden />
        <blockquote className="font-serif italic text-2xl md:text-3xl text-tertiary leading-snug max-w-2xl">
          &ldquo;O autoconhecimento é o primeiro passo para uma vida com mais
          sentido e leveza. Não há pressa, apenas o seu tempo.&rdquo;
        </blockquote>
        <div className="w-12 h-1 rounded-full bg-primary" />
      </motion.div>
    </section>
  );
}
