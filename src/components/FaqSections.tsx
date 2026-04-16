"use client";

import { motion } from "motion/react";
import { HelpCircle, MessageCircle, Wallet } from "lucide-react";
import type { ElementType } from "react";
import { FaqItem } from "./FaqItem";

interface FaqCategory {
  title: string;
  icon: ElementType;
  items: { question: string; answer: string }[];
}

const categories: FaqCategory[] = [
  {
    title: "Sobre a Terapia",
    icon: MessageCircle,
    items: [
      {
        question: "Como funciona a primeira sessão?",
        answer:
          "A primeira sessão é um espaço de acolhimento e escuta. Conversamos sobre o que te trouxe até aqui, suas expectativas e como pode ser nosso trabalho juntos. Não há compromisso em dar continuidade — é um encontro para sentir se faz sentido para você.",
      },
      {
        question: "Qual a duração e frequência das sessões?",
        answer:
          "Cada sessão dura 50 minutos. A frequência recomendada é semanal, para manter a continuidade do processo terapêutico, mas podemos ajustar conforme seu momento e sua necessidade.",
      },
    ],
  },
  {
    title: "Agendamento e Valores",
    icon: Wallet,
    items: [
      {
        question: "Você atende convênios médicos?",
        answer:
          "Não atendo convênios diretamente, mas forneço recibo para solicitação de reembolso junto ao plano de saúde ou dedução no imposto de renda. Os valores e formas de pagamento são conversados na primeira sessão.",
      },
      {
        question: "Como funciona a política de desmarcação?",
        answer:
          "Desmarcações com até 24 horas de antecedência não têm custo. Sessões canceladas com menos de 24 horas são cobradas integralmente, exceto em situações de emergência.",
      },
    ],
  },
  {
    title: "Dúvidas Gerais",
    icon: HelpCircle,
    items: [
      {
        question: "Onde fica o consultório? Atende online?",
        answer:
          "O consultório presencial fica em Pombal, Leiria — Portugal. Também atendo online por videochamada para pacientes no Brasil e em qualquer lugar do mundo.",
      },
      {
        question: "As sessões são sigilosas?",
        answer:
          "Sim. O sigilo profissional é princípio fundamental da prática clínica, garantido pelo Código de Ética Profissional do Psicólogo. Tudo o que é compartilhado em sessão permanece confidencial.",
      },
    ],
  },
];

export default function FaqSections() {
  return (
    <section className="bg-surface px-6 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        {categories.map((category, i) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                <Icon className="w-6 h-6 text-primary shrink-0" />
                <h2 className="font-serif text-3xl text-on-surface leading-tight">
                  {category.title}
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {category.items.map((item) => (
                  <FaqItem key={item.question} {...item} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
