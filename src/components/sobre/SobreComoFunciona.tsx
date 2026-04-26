"use client";

import {
  ArrowRight,
  AudioWaveform,
  BookOpen,
  Calendar,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ElementType } from "react";
import { Button } from "../Button";

interface Complemento {
  icon: ElementType;
  title: string;
  description: string;
}

const COMPLEMENTOS: Complemento[] = [
  {
    icon: AudioWaveform,
    title: "Sonoterapia & higiene do sono",
    description:
      "Para pacientes com dificuldades de sono, complemento o trabalho terapêutico com sessões de frequências sonoras voltadas à redução de estresse e melhora da qualidade do sono.",
  },
  {
    icon: MessageCircle,
    title: "Acompanhamento entre sessões",
    description:
      "Suporte breve por mensagem ao longo da semana para sustentar o que abriu na sessão e fazer pequenos alinhamentos quando o processo pede.",
  },
  {
    icon: BookOpen,
    title: "Material de apoio personalizado",
    description:
      "Áudios, exercícios e referências enviados após a sessão, escolhidos para o seu momento — para que o trabalho continue mesmo fora do encontro.",
  },
];

const AUTO_ADVANCE_MS = 5000;

export default function SobreComoFunciona() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % COMPLEMENTOS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const current = COMPLEMENTOS[index];
  const Icon = current.icon;

  return (
    <section className="bg-surface-container-low px-6 py-24 md:py-32">
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

        <div className="gap-12 grid md:grid-cols-2 items-center mb-20">
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
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative"
            aria-roledescription="carousel"
            aria-label="Complementos do atendimento online"
          >
            <div className="relative bg-surface-container p-10 rounded-4xl border border-outline-variant min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  aria-live="polite"
                >
                  <Icon className="w-12 h-12 mb-6 text-primary" />
                  <h3 className="mb-4 font-serif text-2xl text-on-surface leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {COMPLEMENTOS.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  aria-label={`Mostrar ${c.title}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? "w-8 h-2 rounded-full bg-primary transition-all duration-300"
                      : "w-2 h-2 rounded-full bg-outline-variant hover:bg-primary/50 transition-all duration-300 cursor-pointer"
                  }
                />
              ))}
            </div>
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
              onClick={() => router.push("/agendar")}
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
