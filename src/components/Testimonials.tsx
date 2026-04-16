import { motion } from "motion/react";

const testimonials = [
  {
    text: "O Rogério tem uma calma que preenche a sala. Senti que pela primeira vez não fui apenas ouvido, mas verdadeiramente compreendido em todas as minhas nuances.",
    author: "A.M.",
    time: "Paciente há 2 anos",
    color: "bg-primary/10",
    textColor: "text-primary"
  },
  {
    text: "Encontrei no Espaço de Escuta o suporte que precisava para atravessar o luto e redescobrir o sentido de seguir adiante.",
    author: "R.F.",
    time: "Paciente há 8 meses",
    color: "bg-secondary/10",
    textColor: "text-secondary"
  },
  {
    text: "Sua abordagem sobre as questões de raça e masculinidade mudou completamente minha forma de ver o mundo e a mim mesmo.",
    author: "J.P.",
    time: "Paciente há 1 ano",
    color: "bg-tertiary/10",
    textColor: "text-tertiary"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-surface-container-low px-6 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline mb-16 text-on-surface text-center">Relatos de Caminhadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-primary/5"
            >
              <p className="text-on-surface-variant italic mb-10 text-lg leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold ${t.textColor} text-lg`}>
                  {t.author}
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{t.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
