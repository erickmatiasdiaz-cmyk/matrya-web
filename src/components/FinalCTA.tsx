"use client";

import SectionReveal from "@/components/SectionReveal";

interface Props {
  onOpen: () => void;
}

/**
 * CTA Final con copy de alto impacto y prueba social
 */
export default function FinalCTA({ onOpen }: Props) {
  return (
    <section className="relative overflow-hidden px-6 py-32 bg-[#060b14]">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          {/* Badge de urgencia */}
          <SectionReveal>
            <div className="mb-8 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-300">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Cada dia sin estructura digital cuesta oportunidades
              </span>
            </div>
          </SectionReveal>

          {/* Headline principal */}
          <SectionReveal delay={100}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Tu competencia ya esta invirtiendo en digital.
              <span className="mt-4 block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                &iquest;Vas a seguir mirando?
              </span>
            </h2>
          </SectionReveal>

          {/* Subheadline */}
          <SectionReveal delay={200}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
              Cada semana que pasa sin un sistema digital claro, <strong className="text-white/80">pierdes clientes que van a la competencia</strong>.
              Agendar un diagnostico no te cuesta nada. No hacerlo, si te puede costar.
            </p>
          </SectionReveal>

          {/* CTA Principal */}
          <SectionReveal delay={300}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={onOpen}
                className="group relative w-full overflow-hidden rounded-xl bg-emerald-400 px-10 py-5 text-lg font-bold text-black shadow-[0_0_40px_rgba(0,240,181,0.2)] transition-all duration-300 hover:scale-105 hover:bg-emerald-300 hover:shadow-[0_0_60px_rgba(0,240,181,0.3)] sm:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-[#060b14]"
                aria-label="Agendar diagnostico estrategico gratuito ahora"
              >
                <span className="relative z-10">Agendar Diagnostico Gratuito Ahora</span>
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              </button>

              <a
                href="https://wa.me/56984795290?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.05 4.94A9.87 9.87 0 0 0 12 2a9.94 9.94 0 0 0-8.67 14.8L2 22l5.38-1.3A9.94 9.94 0 0 0 12 22a10 10 0 0 0 7.05-17.06Zm-7.05 15.37a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.2.77.86-3.12-.2-.32A8.27 8.27 0 1 1 12 20.31Zm4.53-6.2c-.25-.13-1.47-.73-1.7-.82-.23-.08-.4-.12-.56.13-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.07-.39-2.03-1.26-.75-.66-1.26-1.48-1.41-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.3.37-.45.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.59.21-1.1.15-1.19-.07-.1-.23-.15-.48-.28Z" />
                </svg>
                O escribenos directo por WhatsApp
              </a>
            </div>
          </SectionReveal>

          {/* Prueba social y garantia */}
          <SectionReveal delay={400}>
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              {/* Trust badges */}
              <div className="flex items-center gap-6 text-xs text-white/35">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  100% confidencial
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Respuesta en 24-48h
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                  Sin compromiso
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Nota final persuasiva */}
          <SectionReveal delay={500}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/30">
              <strong className="text-white/45">No necesitas tener todo claro.</strong> Solo necesitas querer cambiar.
              En la llamada entendemos tu situacion y te decimos con honestidad si podemos ayudarte.
              Si no podemos, te lo decimos igual.
            </p>
          </SectionReveal>
        </div>
      </div>

      {/* Glow inferior */}
      <div
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />
    </section>
  );
}
