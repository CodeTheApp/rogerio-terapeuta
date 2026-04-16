"use client";

import { motion } from "motion/react";
import { Brain, Users, Heart, Sparkles } from "lucide-react";

const specialties = [
  {
    title: "Ansiedade e Estresse",
    description: "Desenvolvimento de estratégias para lidar com as pressões do cotidiano e reencontrar a calma interior em meio ao caos.",
    icon: Brain,
    tags: ["Crises de Pânico", "Burnout"],
    className: "md:col-span-2 bg-surface-container-high",
    iconColor: "text-primary"
  },
  {
    title: "Relacionamentos",
    description: "Trabalho focado na comunicação assertiva, resolução de conflitos e construção de vínculos saudáveis.",
    icon: Users,
    className: "bg-primary text-on-primary",
    iconColor: "text-on-primary"
  },
  {
    title: "Desenvolvimento Pessoal",
    description: "Processo de autoconhecimento para fortalecer a autoestima e a tomada de decisões conscientes.",
    icon: Heart,
    className: "bg-secondary text-on-primary",
    iconColor: "text-on-primary"
  },
  {
    title: "Psicoterapia e Identidade",
    description: "Abordagem sensível às questões de raça, gênero e pertencimento social na constituição do sujeito.",
    icon: Sparkles,
    className: "md:col-span-2 bg-surface-container-highest",
    iconColor: "text-primary",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-headline mb-6 text-on-surface">Especialidades</h2>
          <p className="text-on-surface-variant text-lg">Frentes de atuação focadas no seu equilíbrio emocional e crescimento pessoal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] ${spec.className}`}
            >
              <div className={spec.image ? "flex flex-col md:flex-row gap-10 items-center" : ""}>
                <div className={spec.image ? "md:w-1/2" : ""}>
                  <spec.icon className={`w-12 h-12 mb-8 ${spec.iconColor}`} />
                  <h3 className="text-3xl font-headline mb-4 leading-tight">{spec.title}</h3>
                  <p className={`text-lg mb-6 ${spec.className.includes('primary') || spec.className.includes('secondary') ? 'opacity-90' : 'text-on-surface-variant'}`}>
                    {spec.description}
                  </p>
                  {spec.tags && (
                    <div className="flex flex-wrap gap-2">
                      {spec.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-surface-container-lowest rounded-full text-sm font-semibold text-secondary shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {spec.image && (
                  <div className="md:w-1/2 w-full">
                    <img 
                      src={spec.image} 
                      alt={spec.title} 
                      className="rounded-3xl w-full h-64 object-cover shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
