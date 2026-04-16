import { Share2, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-primaria/10 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-2xl font-serif font-bold text-on-surface mb-4">Rogério Viana</span>
            <p className="text-sm uppercase tracking-ultra-wide text-on-surface-variant/60 font-bold">
              © 2024 Rogério Viana. CRP 06/XXXXX. <br className="md:hidden" />
              Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-ultra-wide text-on-surface-variant/80">
            <a href="#" className="hover:text-primaria transition-colors">Políticas</a>
            <a href="#" className="hover:text-primaria transition-colors">Termos</a>
            <a href="#" className="hover:text-primaria transition-colors">FAQ</a>
            <a href="#" className="hover:text-primaria transition-colors">Contato</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-primaria hover:opacity-70 transition-opacity p-2 bg-primaria/5 rounded-full">
              <Share2 className="w-6 h-6" />
            </a>
            <a href="#" className="text-primaria hover:opacity-70 transition-opacity p-2 bg-primaria/5 rounded-full">
              <MapPin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
