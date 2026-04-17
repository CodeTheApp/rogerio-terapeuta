"use client";

import {
  ArrowRight,
  AudioWaveform,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Button } from "../Button";

export default function SobreComoFunciona() {
  const router = useRouter();

  return (
    <section className="bg-surface px-6 py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="block mb-6 font-bold text-secondary text-sm uppercase tracking-ultra-wide">
            Como funciona
          </span>
          <h2 className="font-serif text-on-surface text-4xl md:text-5xl leading-tight">
            Atendimento 100% online, com a profundidade de um consultório
          </h2>
        </motion.div>

        <div className="gap-12 grid md:grid-cols-2 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-on-surface-variant text-lg leading-relaxed"
          >
            <p>
              Atendo exclusivamente pelo Google Meet — plataforma criptografada
              de ponta a ponta, com infraestrutura profissional. Você precisa
              apenas de um lugar tranquilo, fones e conexão estável. A sessão é
              tão íntima quanto presencial.
            </p>
            <p className="flex items-start gap-3 text-on-surface text-base font-medium">
              <ShieldCheck className="mt-0.5 w-5 h-5 text-secondary shrink-0" />
              Sigilo absoluto e ambiente protegido durante todo o processo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container p-10 rounded-4xl border border-outline-variant"
          >
            <AudioWaveform className="w-12 h-12 mb-6 text-primary" />
            <h3 className="mb-4 font-serif text-2xl text-on-surface leading-tight">
              Sonoterapia & higiene do sono
            </h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              Para pacientes com dificuldades de sono, complemento o trabalho
              terapêutico com sessões de frequências sonoras voltadas à redução
              de estresse e melhora da qualidade do sono.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-high p-10 md:p-16 rounded-4xl border border-outline-variant text-center mx-auto max-w-4xl"
        >
          <h3 className="mb-4 font-serif text-3xl md:text-4xl text-on-surface leading-tight">
            Pronto para começar?
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-on-surface-variant text-lg leading-relaxed">
            Marque uma conversa inicial. Sem compromisso, só uma escuta.
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              iconLeft={<Calendar />}
              onClick={() => router.push("/contato")}
            >
              Agendar consulta
            </Button>
            <Button
              variant="tertiary"
              size="lg"
              iconRight={<ArrowRight />}
              onClick={() => router.push("/contato")}
            >
              Ir para Contato
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
