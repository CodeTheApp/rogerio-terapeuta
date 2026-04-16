"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar, Menu, X } from "lucide-react";
import { Button } from "./Button";

const sections = [
  { label: "Início", id: "inicio" },
  { label: "Sobre", id: "sobre" },
  { label: "Especialidades", id: "especialidades" },
  { label: "Depoimentos", id: "depoimentos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname.startsWith("/blog");
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["sobre", "especialidades", "depoimentos", "blog"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        } else {
          if (window.scrollY < 200) {
            setActiveSection("inicio");
          }
        }
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("inicio");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkClass = (id: string) => {
    const isActive = isHome && activeSection === id;
    return isActive
      ? "text-primary font-semibold border-b-2 border-primary pb-1"
      : "text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass transition-all duration-300 border-b border-outline-variant/40"
    >
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-6 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-serif text-on-surface tracking-tighter font-semibold"
        >
          Rogério Viana
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-serif font-medium tracking-tight">
          {isHome ? (
            <>
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={getLinkClass(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </>
          ) : (
            <Link
              href="/"
              className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200"
            >
              Início
            </Link>
          )}
          <Link
            href="/blog"
            className={
              isBlog || (isHome && activeSection === "blog")
                ? "text-primary font-semibold border-b-2 border-primary pb-1"
                : "text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200"
            }
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button variant="primary" size="sm" iconLeft={<Calendar />}>
              Agendar Consulta
            </Button>
          </div>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden glass border-t border-outline-variant/40"
          >
            <div className="flex flex-col items-start px-6 py-8 gap-6 font-serif text-lg">
              {isHome ? (
                sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`text-left ${getLinkClass(s.id)}`}
                  >
                    {s.label}
                  </button>
                ))
              ) : (
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Início
                </Link>
              )}
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={
                  isBlog || (isHome && activeSection === "blog")
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary transition-colors"
                }
              >
                Blog
              </Link>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  iconLeft={<Calendar />}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
