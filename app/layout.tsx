import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rogério Viana - Psicólogo Clínico",
  description:
    "Espaço de Escuta e Transformação. Um refúgio para acolher suas dores, redescobrir suas forças e trilhar caminhos de cura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
