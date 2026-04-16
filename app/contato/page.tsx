import type { Metadata } from "next";
import ContatoHero from "@/src/components/ContatoHero";
import ContatoForm from "@/src/components/ContatoForm";
import ContatoInfo from "@/src/components/ContatoInfo";
import ContatoReflection from "@/src/components/ContatoReflection";

export const metadata: Metadata = {
  title: "Contato · Rogério Viana",
  description:
    "Entre em contato com Rogério Viana. Atendimento online no Brasil e Portugal, e presencial em Pombal, Leiria.",
};

export default function ContatoPage() {
  return (
    <>
      <ContatoHero />
      <section className="px-6 pb-16 md:pb-24 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <ContatoForm />
          <ContatoInfo />
        </div>
      </section>
      <ContatoReflection />
    </>
  );
}
