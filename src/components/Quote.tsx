"use client";

import { motion } from "motion/react";
import { ReflectionQuote } from "./ReflectionQuote";

export default function Quote() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <ReflectionQuote
          quote="Curar-se não é tornar-se outra pessoa, mas permitir-se ser quem você sempre foi sob o peso das dores."
          label="ESCRITAS DA ALMA"
          variant="default"
        />
      </motion.div>
    </section>
  );
}
