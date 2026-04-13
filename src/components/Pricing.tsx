import SectionReveal from "@/components/SectionReveal";

const plans = [
  {
    name: "Presencia comercial",
    subtitle: "Desde landing hasta sistema de captacion",
    audience: "Para empresas que necesitan ordenar su propuesta y convertir mejor.",
    summary: "Una base digital clara para presentar servicios, captar oportunidades y facilitar el primer contacto.",
    items: [
      "Landing o sitio orientado a conversion",
      "Estructura de mensaje y llamados a la accion",
      "Integracion de formularios, WhatsApp o agenda",
      "Base lista para campanas o trafico organico",
    ],
    cta: "Quiero mi presencia digital",
  },
  {
    name: "Operacion digital",
    subtitle: "Sistema completo de gestion",
    audience: "Para negocios que ya venden, pero coordinan demasiado a mano.",
    summary: "Un flujo mas ordenado para reservas, solicitudes, pedidos o derivaciones internas sin depender de seguimiento manual constante.",
    items: [
      "Sistema adaptado al proceso comercial u operativo",
      "Estados, disponibilidad o validaciones segun necesidad",
      "Automatizaciones y notificaciones clave",
      "Panel o estructura para administrar con control",
    ],
    featured: true,
    cta: "Automatizar mi operacion",
  },
  {
    name: "Estructura de crecimiento",
    subtitle: "Acompanamiento estrategico continuo",
    audience: "Para empresas que necesitan una capa digital mas estrategica.",
    summary: "Acompanamiento para diseñar una arquitectura que conecte procesos, herramientas y decisiones de negocio.",
    items: [
      "Diagnostico del punto actual",
      "Definicion de arquitectura y prioridades",
      "Implementacion por etapas con foco en impacto",
      "Optimizacion y evolucion del sistema",
    ],
    cta: "Conversar sobre mi caso",
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="bg-[#0b0f17] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Formatos de trabajo
            </span>

            <h2 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Cada negocio esta en un momento distinto.
              <span className="mt-4 block shimmer-text">
                El tuyo merece la solucion correcta.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              No vendemos paquetes genericos. Adaptamos nuestro trabajo al punto exacto
              donde esta tu empresa: desde mejorar la captacion hasta ordenar una operacion que ya crecio.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <SectionReveal key={plan.name} delay={index * 120} direction="up">
              <article
                className={`group relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,240,181,0.12)] focus-within:shadow-[0_0_40px_rgba(0,240,181,0.12)] ${
                  plan.featured
                    ? "border-emerald-400/30 bg-[linear-gradient(180deg,rgba(0,240,181,0.1),rgba(255,255,255,0.03))]"
                    : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
                }`}
                tabIndex={0}
                aria-label={`Plan ${plan.name}${plan.featured ? " - Mas popular" : ""}`}
              >
                {plan.featured && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Mas elegido por pymes en crecimiento
                    </span>
                  </div>
                )}

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                  {plan.name}
                </span>

                <p className="mt-2 text-sm text-white/40">
                  {plan.subtitle}
                </p>

                <p className="mt-6 text-lg font-medium leading-relaxed text-white">
                  {plan.audience}
                </p>

                <p className="mt-4 leading-relaxed text-white/60">
                  {plan.summary}
                </p>

                <ul className="mt-8 space-y-4 border-t border-white/8 pt-6 text-sm text-white/55">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setTimeout(() => {
                        const btn = document.querySelector(".hero-button") as HTMLButtonElement;
                        btn?.click();
                      }, 800);
                    }}
                    className={`block w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
                      plan.featured
                        ? "bg-emerald-400 text-black hover:bg-emerald-300 hover:scale-[1.02]"
                        : "border border-white/10 bg-white/5 text-white/70 hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/0 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:from-emerald-400/[0.03] group-hover:to-cyan-400/[0.03] group-hover:opacity-100"
                  aria-hidden="true"
                />
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
