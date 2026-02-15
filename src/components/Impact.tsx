/**
 * Sección Impacto Empresarial
 * Enfoque ejecutivo y estratégico
 */

export default function Impact() {
  return (
    <section id="impacto"className="py-32 px-6 bg-[#0E1424]">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            El impacto de una
            <span className="block mt-4 shimmer-text">
              Transformación Digital estructurada.
            </span>
          </h2>
        </div>

        {/* Grid impacto */}
        <div className="grid md:grid-cols-2 gap-12">

          <div className="p-8 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">
              Mayor eficiencia operativa
            </h3>
            <p className="text-gray-400">
              Reducción de tareas manuales, automatización de procesos y optimización de recursos internos.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">
              Integración de sistemas y datos
            </h3>
            <p className="text-gray-400">
              Conexión entre herramientas digitales para una toma de decisiones basada en información unificada.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">
              Escalabilidad estructurada
            </h3>
            <p className="text-gray-400">
              Sistemas preparados para crecer sin aumentar proporcionalmente la carga operativa.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">
              Ventaja competitiva sostenible
            </h3>
            <p className="text-gray-400">
              Empresas con arquitectura digital sólida responden más rápido y con mayor control estratégico.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
