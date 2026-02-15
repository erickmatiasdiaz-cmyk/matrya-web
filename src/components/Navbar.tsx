"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05080f]/95 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-black/40 backdrop-blur-xl border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO + NOMBRE (NO TOCADO) */}
        <Link href="#diagnostico" className="group flex items-center gap-4">


          <div
  className="
    relative
    flex
    items-center
    justify-center
    w-13
    h-13
    rounded-xl
    bg-white/5
    border border-white/10
    transition-all
    duration-300
    hover:scale-[1.04]
    hover:border-emerald-400/50
    hover:bg-white/10
    hover:shadow-[0_0_20px_rgba(0,240,181,0.25)]
  "
>


           <Image
  src="/logo-matrya.svg"
  alt="Matrya Logo"
  width={34}
  height={34}
  priority
  className="
    transition-all
    duration-300
    group-hover:brightness-110
    group-hover:drop-shadow-[0_0_6px_rgba(0,240,181,0.6)]
  "
/>


          </div>

          <span className="text-white/80 font-semibold tracking-widest text-lg">
            MATRYA
          </span>
        </Link>

        {/* MENU ULTRA PREMIUM */}
        <div className="hidden md:flex items-center gap-10 text-white/60 text-sm">

          <a href="#enfoque" className="hover:text-white transition-colors duration-300">
            Enfoque
          </a>

          <a href="#metodo" className="hover:text-white transition-colors duration-300">
            Método
          </a>

          <a href="#impacto" className="hover:text-white transition-colors duration-300">
            Impacto
          </a>

          <button
            onClick={openModal}
            className="px-6 py-2 rounded-lg bg-emerald-400 text-black font-medium hover:scale-105 transition-all duration-300"
          >
            Diagnóstico
          </button>

        </div>
      </div>

      {/* Línea inferior ultra sutil (NO TOCADA) */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"></div>
    </nav>
  );
}
