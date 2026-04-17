"use client";

import { Brain, Compass, Flower2, Network, Waves } from "lucide-react";
import { motion } from "motion/react";

const modalidades = [
  {
    title: "Psicanálise Clínica e Infantil",
    description:
      "Investigação do inconsciente com base em Freud, Anna Freud e Winnicott. Para adultos, adolescentes e crianças.",
    icon: Brain,
  },
  {
    title: "Terapia Cognitivo-Comportamental",
    description:
      "Identificação e reorganização de padrões de pensamento e comportamento que sustentam o sofrimento.",
    icon: Compass,
  },
  {
    title: "Hipnoterapia",
    description:
      "Acesso a conteúdos profundos do psiquismo em estado de relaxamento, com segurança e direcionamento clínico.",
    icon: Waves,
  },
  {
    title: "Constelação Sistêmica",
    description:
      "Olhar para padrões familiares e relacionais que se repetem na sua história — e o que está por trás deles.",
    icon: Network,
  },
  {
    title: "Florais de Bach",
    description:
      "Apoio sutil ao processo emocional, integrado à condução terapêutica.",
    icon: Flower2,
  },
];

export default function SobreModalidades() {
  return (
    <section className="bg-surface px-6 py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide">
            Modalidades & métodos
          </span>
          <h2 className="mb-6 font-serif text-on-surface text-4xl md:text-5xl">
            O método certo para cada momento do processo
          </h2>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          {modalidades.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-surface-container-high p-10 rounded-4xl flex flex-col transition-all duration-500 hover:scale-[1.02]"
            >
              <mod.icon className="w-12 h-12 mb-8 text-primary" />
              <h3 className="mb-4 font-serif text-2xl text-on-surface leading-tight">
                {mod.title}
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
