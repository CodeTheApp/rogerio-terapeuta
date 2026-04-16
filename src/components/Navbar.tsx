"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
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

  const scrollToSection = (id: string) => {
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

        <Button variant="primary" size="sm" iconLeft={<Calendar />}>
          Agendar Consulta
        </Button>
      </div>
    </motion.nav>
  );
}
