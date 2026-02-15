/**
 * Sección Intervención Estratégica
 * Explica cómo actúa MATRYA en una empresa
 */

export default function Intervention() {
  return (
    <section className="py-32 px-6 bg-[#0b0f17]">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Cómo intervenimos en una
            <span className="block mt-4 shimmer-text">
              transformación empresarial.
            </span>
          </h2>
        </div>

        <div className="space-y-16">

          {/* Paso 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                01. Diagnóstico estructural del negocio
              </h3>
              <p className="text-white/60 leading-relaxed">
                Analizamos procesos, herramientas y estructura operativa.
                Identificamos cuellos de botella, duplicidad de tareas y oportunidades
                de integración digital.
              </p>
            </div>
            <div className="h-40 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-xl border border-white/10"></div>
          </div>

          {/* Paso 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                02. Diseño del sistema digital
              </h3>
              <p className="text-white/60 leading-relaxed">
                Definimos una arquitectura digital coherente que conecte procesos,
                automatización, datos y experiencia del cliente.
              </p>
            </div>
            <div className="h-40 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-xl border border-white/10 md:order-1"></div>
          </div>

          {/* Paso 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                03. Implementación tecnológica estratégica
              </h3>
              <p className="text-white/60 leading-relaxed">
                Desarrollamos e integramos soluciones alineadas al crecimiento
                del negocio, priorizando impacto y eficiencia operativa.
              </p>
            </div>
            <div className="h-40 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-xl border border-white/10"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
