"use client";

import { motion } from "motion/react";
import { TestimonialCard } from "./Card";

const testimonials = [
  {
    text: "O Rogério tem uma calma que preenche a sala. Senti que pela primeira vez não fui apenas ouvido, mas verdadeiramente compreendido em todas as minhas nuances.",
    author: "A.M.",
    role: "Paciente há 2 anos",
  },
  {
    text: "Encontrei no Espaço de Escuta o suporte que precisava para atravessar o luto e redescobrir o sentido de seguir adiante.",
    author: "R.F.",
    role: "Paciente há 8 meses",
  },
  {
    text: "Sua abordagem sobre as questões de raça e masculinidade mudou completamente minha forma de ver o mundo e a mim mesmo.",
    author: "J.P.",
    role: "Paciente há 1 ano",
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-surface-container-low px-6 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-on-surface text-center">Relatos de Caminhadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="hover:-translate-y-2 transition-transform duration-500"
            >
              <TestimonialCard
                quote={t.text}
                author={t.author}
                role={t.role}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
