"use client";

import { motion } from "motion/react";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-tertiary-container relative rounded-[3rem] p-16 md:p-24 overflow-hidden text-center shadow-2xl shadow-tertiary/20"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10">
          <QuoteIcon className="w-16 h-16 text-on-tertiary-container mx-auto mb-8 opacity-40" />
          <p className="text-3xl md:text-5xl font-headline text-on-tertiary-container italic leading-tight tracking-tight">
            "Curar-se não é tornar-se outra pessoa, mas permitir-se ser quem você sempre foi sob o peso das dores."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
