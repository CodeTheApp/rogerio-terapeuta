"use client";

import { Briefcase, HeartHandshake, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

const publico = [
  {
    label: "Adultos",
    description: "em busca de autoconhecimento e equilíbrio emocional",
    icon: Users,
  },
  {
    label: "Adolescentes",
    description: "atravessando questões de identidade e relações",
    icon: Sparkles,
  },
  {
    label: "Líderes religiosos",
    description: "que precisam de um espaço próprio de escuta",
    icon: HeartHandshake,
  },
  {
    label: "Empresários",
    description: "lidando com o peso da decisão e da liderança",
    icon: Briefcase,
  },
];

export default function SobrePublico() {
  return (
    <section className="bg-surface-container-low px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide">
            Para quem
          </span>
          <h2 className="mb-6 font-serif text-on-surface text-4xl md:text-5xl">
            O atendimento é para você que…
          </h2>
        </motion.div>

        <ul className="space-y-6">
          {publico.map((p, i) => (
            <motion.li
              key={p.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-6 bg-surface-container-lowest p-6 md:p-8 rounded-3xl border border-outline-variant"
            >
              <p.icon className="mt-1 w-8 h-8 text-primary shrink-0" />
              <div>
                <p className="font-serif text-2xl text-on-surface mb-1">
                  {p.label}
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-on-surface-variant text-lg md:text-xl leading-relaxed text-center italic"
        >
          Meu trabalho funciona melhor para quem chega disposto a se olhar — não
          para receber respostas prontas, mas para construir, junto, perguntas
          mais honestas.
        </motion.p>
      </div>
    </section>
  );
}
