"use client";

import { motion } from "motion/react";
import { ShieldCheck, Calendar, HelpCircle } from "lucide-react";
import { Button } from "./Button";

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Vamos dar o primeiro passo juntos?</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto leading-relaxed">
            Sua saúde mental é a base de tudo. Escolha cuidar de você hoje.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Button variant="primary" size="lg" iconLeft={<Calendar />}>
              Agendar minha consulta
            </Button>
            <Button variant="outlined" size="lg" iconLeft={<HelpCircle />}>
              Perguntas Frequentes
            </Button>
          </div>
          <p className="mt-10 text-on-surface-variant text-sm font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            Atendimento online e presencial (São Paulo/SP)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
