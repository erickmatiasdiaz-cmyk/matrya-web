"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  openModal: () => void;
}

const navItems = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#casos", label: "Casos" },
  { href: "#framework", label: "Framework" },
  { href: "#impacto", label: "Impacto" },
  { href: "#planes", label: "Planes" },
];

const NAV_OFFSET = 80; // px de offset para el scroll

/**
 * Hook para detectar la seccion activa
 */
function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY + NAV_OFFSET;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(sectionIds[i]);
        return;
      }
    }
    // Default to first section if none found
    setActiveSection("");
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check after mount
    const timeout = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [handleScroll]);

  return activeSection;
}

/**
 * Scroll suave con offset para el navbar
 */
function smoothScrollTo(href: string) {
  const target = document.querySelector(href);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar({ openModal }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = navItems.map((item) => item.href.slice(1));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar menu con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleOpenModal = () => {
    setIsMenuOpen(false);
    openModal();
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    smoothScrollTo(href);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#05080f]/95 py-3 backdrop-blur-xl"
          : "border-b border-white/5 bg-black/40 py-5 backdrop-blur-xl"
      }`}
      role="navigation"
      aria-label="Navegacion principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("#hero");
          }}
          className="group flex items-center"
          aria-label="Ir al inicio"
        >
          <Image
            src="/logo-nav-transparent.png"
            alt="Matrya Logo"
            width={700}
            height={520}
            priority
            className="h-12 w-auto object-contain object-center transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(94,255,202,0.45)] md:h-14"
          />
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-emerald-400/40 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 md:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white ${
                  isActive ? "text-white" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-emerald-400 transition-all duration-300" />
                )}
              </a>
            );
          })}

          <button
            onClick={openModal}
            className="rounded-lg bg-emerald-400 px-6 py-2 font-medium text-black transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-[#05080f]"
          >
            Diagnostico
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        role="menu"
        aria-label="Menu de navegacion movil"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 mt-4 rounded-2xl border border-white/10 bg-[#07111c]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="flex flex-col gap-4 text-base text-white/75">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  role="menuitem"
                  className={`rounded-xl border px-3 py-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30 ${
                    isActive
                      ? "border-emerald-400/30 bg-emerald-400/5 text-white"
                      : "border-transparent"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}

            <button
              onClick={handleOpenModal}
              role="menuitem"
              className="mt-2 rounded-xl bg-emerald-400 px-5 py-3 font-medium text-black transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            >
              Diagnostico
            </button>
          </div>
        </div>
      </div>

      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
        aria-hidden="true"
      />
    </nav>
  );
}
