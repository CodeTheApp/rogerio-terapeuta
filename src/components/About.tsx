"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-surface-container-low px-6">
      <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
            alt="Consultório"
            className="rounded-4xl w-full aspect-square object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -top-6 -right-6 bg-surface-container-lowest p-8 rounded-2xl shadow-xl hidden md:block border border-primaria/5">
            <p className="font-serif text-3xl text-primaria font-bold">15+</p>
            <p className="text-xs uppercase tracking-ultra-wide text-on-surface-variant font-semibold">Anos de Prática</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <span className="text-secundaria font-bold uppercase tracking-ultra-wide text-sm mb-6 block">Sobre Mim</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-on-surface leading-tight">Um olhar atento às profundezas da alma</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Minha jornada na psicologia nasceu do desejo de compreender a complexidade humana sob uma ótica de acolhimento e respeito. Sou Rogério Viana, psicólogo clínico dedicado a proporcionar um ambiente de segurança absoluta.
            </p>
            <p>
              Acredito que a terapia é um solo fértil onde, com o cuidado adequado, qualquer indivíduo pode florescer. Meu trabalho integra técnicas contemporâneas com uma escuta sensível às questões raciais, sociais e existenciais.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Graduado em Psicologia pela USP",
                "Mestre em Psicologia Clínica e Social",
                "Especialista em Fenomenologia Existencial"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primaria shrink-0 mt-0.5" />
                  <span className="text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
