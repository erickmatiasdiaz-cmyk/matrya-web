"use client";

interface Props {
  onOpen: () => void;
}

/**
 * CTA Ejecutivo Final MATRYA
 * Versión estable sin bloqueo de eventos
 */

export default function FinalCTA({ onOpen }: Props) {
  return (
    <section className="relative py-32 px-6 bg-[#060b14]">

      <div className="max-w-5xl mx-auto text-center">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          Tu empresa ya está creciendo.
          <span className="block mt-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Ahora necesita estructura digital.
          </span>
        </h2>

        {/* SUBTÍTULO */}
        <p className="mt-10 text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Agenda un diagnóstico estratégico y descubre cómo optimizar procesos,
          integrar herramientas y construir un sistema digital preparado
          para escalar con control.
        </p>

        {/* BOTÓN */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={onOpen}
            className="
              relative
              group
              px-10 py-4
              rounded-xl
              bg-emerald-400
              text-black
              font-semibold
              text-lg
              transition-all
              duration-300
              hover:scale-105
              overflow-hidden
            "
          >
            Solicitar Diagnóstico Ejecutivo

            {/* Efecto brillo sin bloquear click */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                opacity-0
                group-hover:opacity-20
                bg-white
                transition-opacity
                duration-300
              "
            />
          </button>
        </div>

        {/* Nota inferior */}
        <p className="mt-6 text-white/40 text-sm">
          Diagnóstico confidencial · Enfoque estratégico · Sin compromiso inicial
        </p>

      </div>

      {/* Glow de fondo SIN interferir eventos */}
      <div
        className="
          pointer-events-none
          absolute
          w-[600px]
          h-[600px]
          rounded-full
          bg-emerald-400/10
          blur-3xl
          -bottom-64
          left-1/2
          -translate-x-1/2
        "
      />

    </section>
  );
}
