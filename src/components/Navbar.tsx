"use client";

import { useEffect, useState } from "react";
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

export default function Navbar({ openModal }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
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

  const handleOpenModal = () => {
    setIsMenuOpen(false);
    openModal();
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#05080f]/95 py-3 backdrop-blur-xl"
          : "border-b border-white/5 bg-black/40 py-5 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center" aria-label="Ir al hero">
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
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-emerald-400/40 hover:text-emerald-300 md:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={openModal}
            className="rounded-lg bg-emerald-400 px-6 py-2 font-medium text-black transition-all duration-300 hover:scale-105"
          >
            Diagnostico
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 mt-4 rounded-2xl border border-white/10 bg-[#07111c]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="flex flex-col gap-4 text-base text-white/75">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-xl border border-transparent px-3 py-3 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={handleOpenModal}
              className="mt-2 rounded-xl bg-emerald-400 px-5 py-3 font-medium text-black transition-transform duration-300 hover:scale-[1.01]"
            >
              Diagnostico
            </button>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
    </nav>
  );
}
