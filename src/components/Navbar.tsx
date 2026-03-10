"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  openModal: () => void;
}

export default function Navbar({ openModal }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#soluciones" className="transition-colors duration-300 hover:text-white">
            Soluciones
          </a>

          <a href="#casos" className="transition-colors duration-300 hover:text-white">
            Casos
          </a>

          <a href="#framework" className="transition-colors duration-300 hover:text-white">
            Framework
          </a>

          <a href="#impacto" className="transition-colors duration-300 hover:text-white">
            Impacto
          </a>

          <a href="#planes" className="transition-colors duration-300 hover:text-white">
            Planes
          </a>

          <button
            onClick={openModal}
            className="rounded-lg bg-emerald-400 px-6 py-2 font-medium text-black transition-all duration-300 hover:scale-105"
          >
            Diagnostico
          </button>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
    </nav>
  );
}
