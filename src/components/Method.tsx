/**
 * Sección Metodología
 * Framework MATRYA de Transformación Digital
 */

export default function Method() {
  return (
    <section
  id="metodo"
  className="py-32 px-6 bg-[#05080f]"
>

      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Nuestro enfoque de
            <span className="block mt-4 shimmer-text">
              Transformación Digital
            </span>
          </h2>
        </div>

        {/* Fases */}
        <div className="grid md:grid-cols-4 gap-10">

          {[
            {
              number: "01",
              title: "Diagnóstico Estratégico",
              text: "Evaluamos procesos, herramientas y estructura digital actual para identificar brechas y oportunidades.",
            },
            {
              number: "02",
              title: "Arquitectura Digital",
              text: "Diseñamos un sistema integral que conecta áreas, datos y flujos operativos.",
            },
            {
              number: "03",
              title: "Implementación Inteligente",
              text: "Desarrollamos e integramos soluciones tecnológicas alineadas a los objetivos del negocio.",
            },
            {
              number: "04",
              title: "Optimización Continua",
              text: "Medimos resultados, optimizamos procesos y escalamos el sistema digital.",
            },
          ].map((phase, index) => (
            <div
              key={index}
              className="
                group
                p-8
                rounded-xl
                bg-black/30
                border border-white/10
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[var(--color-primary)]
                hover:shadow-[0_0_40px_rgba(0,240,181,0.15)]
              "
            >
              <div className="text-emerald-400 text-sm font-semibold mb-4">
                {phase.number}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {phase.title}
              </h3>

              <p className="text-gray-400">
                {phase.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
