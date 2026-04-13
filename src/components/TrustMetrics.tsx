import SectionReveal from "@/components/SectionReveal";

const metrics = [
  {
    value: "3+",
    label: "Anos de experiencia",
    description: "Transformando pymes en Chile",
  },
  {
    value: "100%",
    label: "Proyectos a medida",
    description: "Sin plantillas genericas",
  },
  {
    value: "24-48h",
    label: "Tiempo de respuesta",
    description: "Contacto rapido y directo",
  },
  {
    value: "360°",
    label: "Enfoque integral",
    description: "Diagnostico, construccion y optimizacion",
  },
];

const industries = [
  "Turismo y Hoteleria",
  "Servicios Profesionales",
  "Construccion",
  "Salud y Bienestar",
  "Comercio",
  "Educacion",
];

export default function TrustMetrics() {
  return (
    <section className="relative border-y border-white/5 bg-[#080d18] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
              Por que empresas nos eligen
            </p>
          </div>
        </SectionReveal>

        {/* Metricas */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <SectionReveal key={metric.label} delay={index * 100}>
              <div className="text-center">
                <div className="text-3xl font-bold tracking-tight text-emerald-400 md:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/70">
                  {metric.label}
                </div>
                <div className="mt-1 text-xs text-white/40">
                  {metric.description}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Linea divisora */}
        <div className="mx-auto my-12 h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Industrias */}
        <SectionReveal delay={400}>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
              Industrias que atendemos
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/50 transition-colors duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/5 hover:text-emerald-300/70"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
