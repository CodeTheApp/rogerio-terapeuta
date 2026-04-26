"use client";

import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FaqCta() {
  const router = useRouter();
  return (
    <section className="px-6 py-12 md:py-16 bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl bg-primary-container px-8 md:px-12 pt-16 pb-12"
      >
        <div
          aria-hidden
          className="absolute -top-28 -right-32 w-64 h-64 rounded-full bg-primary opacity-20 blur-3xl"
        />
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl flex flex-col gap-4">
            <h3 className="font-serif text-3xl text-on-primary-container leading-tight">
              Ainda tem dúvidas?
            </h3>
            <p className="text-on-primary-container/90 text-lg leading-relaxed">
              Se sua pergunta não foi respondida acima, entre em contato
              diretamente. Estou à disposição para conversar e esclarecer
              qualquer ponto.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            {/* Botões raw porque o fundo é bg-primary-container — o <Button>
                padrão é desenhado para fundo neutro e perde contraste aqui. */}
            <button
              type="button"
              onClick={() => router.push("/contato")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface text-primary font-sans font-semibold rounded-xl shadow-subtle hover:bg-surface-container-low transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-primary-container"
            >
              <MessageSquare className="w-5 h-5" aria-hidden />
              <span>Enviar Mensagem</span>
            </button>
            <button
              type="button"
              onClick={() => router.push("/contato")}
              className="inline-flex items-center justify-center px-8 py-4 border border-on-primary-container/30 text-on-primary-container font-sans font-semibold rounded-xl hover:bg-on-primary-container/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-primary-container"
            >
              Ver Contatos
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
