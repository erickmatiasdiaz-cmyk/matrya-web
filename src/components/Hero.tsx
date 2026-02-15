"use client";

/**
 * Hero MATRYA
 * - Glow pulsante
 * - Shimmer premium
 * - Botón sheen
 * - Shooting lines lentas
 * - Parallax sutil al mover mouse
 */

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 10;
      const y = (clientY / innerHeight - 0.5) * 10;

      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden">
      
      {/* Glow pulsante */}
      <div
        className="
          absolute 
          w-[600px] 
          h-[600px] 
          rounded-full 
          blur-3xl 
          glow-pulse
        "
        style={{
          background:
            "radial-gradient(circle, var(--color-primary), transparent 70%)",
          top: "-200px",
          left: "50%",
        }}
      />

      {/* Shooting lines más lentas */}
      <div className="shooting-line top-[10%]"></div>
      <div
        className="shooting-line"
        style={{ animationDelay: "4s", top: "40%" }}
      ></div>
      <div
        className="shooting-line"
        style={{ animationDelay: "8s", top: "70%" }}
      ></div>

      {/* Contenido con parallax */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center text-center px-6"
      >
        <div className="max-w-4xl mx-auto">

          {/* H1 PRINCIPAL */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">

  Transformación Digital
  <br />

  <span
    className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 
               bg-clip-text text-transparent text-animated-gradient"
  >
    para empresas que quieren escalar.
  </span>

</h1>


          {/* SUBTÍTULO */}
          <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Diseñamos e implementamos sistemas digitales que optimizan procesos, 
            aumentan eficiencia y generan crecimiento sostenible.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#diagnostico"
              className="px-8 py-3 rounded-lg bg-emerald-400 text-black font-medium hover:scale-105 transition-all duration-300"
            >
              Solicitar Diagnóstico Estratégico
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
