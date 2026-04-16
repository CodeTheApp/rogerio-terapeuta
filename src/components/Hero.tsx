"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-surface">
      <div className="max-w-screen-2xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-[1.1] mb-8 tracking-tight">
            Espaço de Escuta e <br />
            <span className="italic text-primary">Transformação</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Um refúgio para acolher suas dores, redescobrir suas forças e trilhar caminhos de cura através de uma abordagem empática e fundamentada.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/10">
              Começar minha jornada
            </button>
            <button className="flex items-center gap-2 px-8 py-4 text-primary font-medium hover:underline group">
              Conhecer Rogério
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-surface-container-high relative z-10 transform md:rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Rogério Viana" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative organic shape */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}
