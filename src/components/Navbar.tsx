import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 border-b border-primary/5"
    >
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-headline text-on-surface tracking-tighter font-semibold">
          Rogério Viana
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-headline font-medium tracking-tight">
          <Link 
            to="/" 
            className={`${isHome ? "text-primary font-semibold border-b-2 border-primary pb-1" : "text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200"}`}
          >
            Início
          </Link>
          {isHome ? (
            <>
              <a href="#sobre" className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200">Sobre</a>
              <a href="#especialidades" className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200">Especialidades</a>
              <a href="#depoimentos" className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200">Depoimentos</a>
            </>
          ) : (
            <Link to="/" className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200">Sobre Rogério</Link>
          )}
          <Link 
            to="/blog" 
            className={`${location.pathname.startsWith("/blog") ? "text-primary font-semibold border-b-2 border-primary pb-1" : "text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200"}`}
          >
            Blog
          </Link>
        </div>

        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium transition-all hover:opacity-90 active:scale-95">
          Agendar Consulta
        </button>
      </div>
    </motion.nav>
  );
}
