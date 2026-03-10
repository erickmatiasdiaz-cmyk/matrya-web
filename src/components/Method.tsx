/**
 * Framework MATRYA
 * Sintetiza enfoque estrategico y metodo en una sola seccion.
 */

const pillars = [
  {
    title: "Diagnostico estrategico",
    text: "Leemos la operacion completa para detectar fricciones, cuellos de botella y oportunidades reales de mejora.",
  },
  {
    title: "Arquitectura digital",
    text: "Definimos una estructura clara para conectar procesos, datos, equipos y herramientas sin improvisacion.",
  },
  {
    title: "Implementacion inteligente",
    text: "Construimos soluciones enfocadas en ventas, eficiencia y control operativo, no solo presencia visual.",
  },
  {
    title: "Optimizacion continua",
    text: "Medimos comportamiento, ajustamos flujos y reforzamos el sistema para acompanar el crecimiento.",
  },
];

const signals = [
  "Procesos fragmentados entre areas",
  "Demasiadas tareas manuales",
  "Crecimiento sin eficiencia operativa",
  "Herramientas sueltas sin sistema",
];

export default function Method() {
  return (
    <section id="framework" className="bg-[#0b0f17] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1.4fr]">
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Framework Matrya
            </span>

            <h2 className="mt-8 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Un solo enfoque para convertir desorden operativo en
              <span className="mt-4 block shimmer-text">
                estructura digital escalable.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              No partimos por tecnologia. Partimos por entender como funciona tu
              empresa, donde se pierde energia y que sistema necesita para vender
              mejor, operar con mas control y crecer sin friccion.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                Senales frecuentes
              </p>

              <div className="mt-6 space-y-4">
                {signals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-4 rounded-xl border border-white/8 bg-black/20 px-4 py-4"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(0,240,181,0.7)]" />
                    <p className="text-sm text-white/70">{signal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(0,240,181,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.3em] text-emerald-300/80">
                    0{index + 1}
                  </span>
                  <span className="h-px w-16 bg-gradient-to-r from-emerald-400/60 to-transparent" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/60">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
