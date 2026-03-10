"use client";

import { useEffect, useRef } from "react";

interface Props {
  openModal: () => void;
}

export default function Hero({ openModal }: Props) {
  const heroRef = useRef<HTMLElement | null>(null);
  const mouseGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const mouseGlow = mouseGlowRef.current;

    if (!hero || !mouseGlow) {
      return;
    }

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
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018] via-[#05080f] to-[#05080f]" />
      <div className="hero-aurora absolute inset-0" />
      <div className="network-lines absolute inset-0 opacity-40" />
      <div className="hero-glow glow-pulse" />
      <div ref={mouseGlowRef} className="hero-mouse-glow" />

      <div className="particles absolute inset-0 pointer-events-none">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-container relative z-10 mx-auto max-w-4xl">
        <h1 className="hero-title text-4xl font-semibold leading-tight md:text-6xl">
          Construimos sistemas digitales
          <br />
          <span className="hero-gradient inline-block">
            que generan clientes y crecimiento
          </span>
        </h1>

        <p className="hero-sub mx-auto mt-8 max-w-2xl text-lg text-white/60 md:text-xl">
          Creamos paginas web, sistemas de reservas y automatizaciones que
          ayudan a empresas a vender mas y trabajar con menos friccion.
        </p>

        <div className="mt-10">
          <button onClick={openModal} className="hero-button">
            Solicitar Diagnostico
          </button>
        </div>
      </div>
    </section>
  );
}
