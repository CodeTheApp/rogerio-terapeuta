import type { Metadata } from "next";
import FaqHero from "@/src/components/FaqHero";
import FaqSections from "@/src/components/FaqSections";
import FaqCta from "@/src/components/FaqCta";
import FaqReflection from "@/src/components/FaqReflection";

export const metadata: Metadata = {
  title: "Perguntas Frequentes · Rogério Viana",
  description:
    "Respostas sobre o processo terapêutico, agendamento e valores. Atendimento online no Brasil e Portugal, e presencial em Pombal, Leiria.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqSections />
      <FaqCta />
      <FaqReflection />
    </>
  );
}
