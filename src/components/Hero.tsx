"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  openModal: () => void;
}

export default function Hero({ openModal }: Props) {
  const heroRef = useRef<HTMLElement | null>(null);
  const mouseGlowRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Usar useEffect solo para setup, setState en callback
  useEffect(() => {
    // Request animation frame para evitar parpadeo inicial
    const raf = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const mouseGlow = mouseGlowRef.current;

    if (!hero || !mouseGlow) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const offsetX = (x / rect.width - 0.5) * 28;
      const offsetY = (y / rect.height - 0.5) * 28;

      hero.style.setProperty("--parallax-x", `${offsetX}px`);
      hero.style.setProperty("--parallax-y", `${offsetY}px`);
      mouseGlow.style.left = `${x - 220}px`;
      mouseGlow.style.top = `${y - 220}px`;
      mouseGlow.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      hero.style.setProperty("--parallax-x", "0px");
      hero.style.setProperty("--parallax-y", "0px");
      mouseGlow.style.opacity = "0";
    };

    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
      role="banner"
      aria-label="Presentacion principal de MATRYA"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#05080f] to-[#05080f]" />
      <div className="hero-aurora" aria-hidden="true" />
      <div className="network-lines" aria-hidden="true" />
      <div className="hero-glow glow-pulse" aria-hidden="true" />
      <div
        ref={mouseGlowRef}
        className="hero-mouse-glow"
        aria-hidden="true"
      />

      <div className="particles pointer-events-none absolute inset-0" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div
        className={`hero-container relative z-10 mx-auto max-w-4xl transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge de credibilidad */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Consultora de Transformacion Digital
          </span>
        </div>

        <h1 className="hero-title text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Tu empresa merece vender mas.
          <br />
          <span className="hero-gradient inline-block">
            Nosotros construimos el sistema.
          </span>
        </h1>

        <p className="hero-sub mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
          Diseñamos la <strong className="text-white/80">arquitectura digital</strong> que conecta tu propuesta de valor con clientes reales:
          sitios que convierten visitas en contactos, reservas que se gestionan solas
          y automatizaciones que eliminan el trabajo manual repetitivo.
        </p>

        {/* CTAs duales: primario + secundario */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={openModal}
            className="hero-button w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-[#05080f]"
            aria-label="Solicitar diagnostico estrategico gratuito"
          >
            Solicitar Diagnostico Gratuito
          </button>
          <a
            href="#casos"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#casos");
              if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Ver casos de exito
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Micro-copy de confianza debajo del CTA */}
        <p className="mt-8 text-center text-xs text-white/35">
          Diagnostico sin costo · Respuesta en 24-48h · 100% confidencial
        </p>
      </div>
    </section>
  );
}
