"use client";

/**
 * Página principal MATRYA
 * Control central del Modal Diagnóstico
 */

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Problem from "@/components/Problem";
import Method from "@/components/Method";
import Impact from "@/components/Impact";
import Intervention from "@/components/Intervention";
import Partnership from "@/components/Partnership";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main className="bg-[#05080f] text-white overflow-x-hidden">

      <Navbar openModal={openModal} />



    
    {/* HERO */}
    
<section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-[#05080f]">

 {/* Fondo base degradado vertical */}
<div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#05080f] to-[#05080f]" />

{/* Glow central premium */}
<div
  className="
    absolute
    left-1/2
    top-[45%]
    -translate-x-1/2
    -translate-y-1/2
    w-[900px]
    h-[500px]
    bg-emerald-500/10
    rounded-full
    blur-[140px]
    pointer-events-none
  "
/>


{/* Refuerzo central más sutil */}
<div
  className="
    absolute
    top-[50%]
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[900px]
    h-[900px]
    rounded-full
    bg-cyan-400/10
    blur-[220px]
    opacity-60
    pointer-events-none
  "
/>
{/* Corrección inferior */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05080f]" />

  {/* ==============================
     Shooting Lines (estrellas fugaces)
  ============================== */}
  
<div className="shooting-line top-[30%]" />

<div
  className="shooting-line top-[48%]"
  style={{ animationDelay: "3.5s" }}
/>

<div
  className="shooting-line top-[65%]"
  style={{ animationDelay: "7s" }}
/>


  {/* ==============================
     CONTENIDO
  ============================== */}
  <div className="relative z-10 max-w-4xl mx-auto">

    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">

      Transformación Digital
      <br />

      <span
        className="
          bg-gradient-to-r 
          from-emerald-400 
          via-cyan-400 
          to-emerald-400
          bg-clip-text 
          text-transparent
          text-animated-gradient
        "
      >
        para empresas que están listas para crecer.
      </span>

    </h1>

    <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
      Diseñamos sistemas digitales que ordenan tu operación,
      integran tus herramientas y preparan tu empresa
      para escalar con control estratégico.
    </p>

    <div className="mt-10">
      <button
        onClick={openModal}
        className="
          button-sheen
          px-8 py-3
          rounded-lg
          bg-emerald-400
          text-black
          font-medium
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Solicitar Diagnóstico Estratégico
      </button>
    </div>

  </div>

</section>




      <Problem />
      <Method />
      <Impact />
      <Intervention />
      <Partnership />

      {/* CTA FINAL conectado al mismo modal */}
    <FinalCTA onOpen={openModal} />



      <Footer />

      {/* Modal centralizado */}
      <DiagnosisModal
        isOpen={isOpen}
        onClose={closeModal}
      />

    </main>
  );
}
