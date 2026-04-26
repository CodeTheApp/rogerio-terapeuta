import AgendarCalendar from "@/src/components/agendar/AgendarCalendar";
import AgendarHero from "@/src/components/agendar/AgendarHero";
import AgendarReflection from "@/src/components/agendar/AgendarReflection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agendar consulta · Viana Terapia",
  description:
    "Reserve sua sessão online com Rogério Viana. Atendimento via Google Meet para Brasil e Portugal.",
};

export default function AgendarPage() {
  return (
    <>
      <AgendarHero />
      <AgendarCalendar />
      <AgendarReflection />
    </>
  );
}
