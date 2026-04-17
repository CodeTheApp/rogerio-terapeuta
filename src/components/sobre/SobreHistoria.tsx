"use client";

import { motion } from "motion/react";

export default function SobreHistoria() {
  return (
    <section className="bg-surface-container-low px-6 py-24 md:py-32">
      <div className="items-center gap-20 grid md:grid-cols-2 mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <span className="block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide">
            Como cheguei até aqui
          </span>
          <h2 className="mb-8 font-serif text-on-surface text-4xl md:text-5xl leading-tight">
            Compreender a complexidade humana com método e cuidado
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Acredito que o sofrimento psíquico raramente tem uma só origem.
              Por isso meu trabalho é integrativo: uso a psicanálise para
              investigar o inconsciente, a TCC para reorganizar padrões, a
              hipnoterapia e a constelação sistêmica quando o caso pede uma
              chave diferente.
            </p>
            <p>
              A maior parte das pessoas chega até mim por não se reconhecer
              mais — o estresse do dia a dia, decepções nas relações, mudanças
              de humor e de comportamento que parecem vir do nada. No
              consultório, esse &ldquo;nada&rdquo; começa a fazer sentido.
            </p>
            <p>
              Meu compromisso é simples: ser técnico no método e acolhedor na
              escuta, para que você se sinta protegido durante todo o processo.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 md:order-2"
        >
          <img
            src="/rogerioviana.png"
            alt="Rogério Viana"
            className="grayscale-20 hover:grayscale-0 rounded-4xl w-full object-cover object-center aspect-square transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
