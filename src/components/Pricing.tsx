const plans = [
  {
    name: "Presencia comercial",
    audience: "Para empresas que necesitan ordenar su propuesta y convertir mejor.",
    summary: "Una base digital clara para presentar servicios, captar oportunidades y facilitar el primer contacto.",
    items: [
      "Landing o sitio orientado a conversion",
      "Estructura de mensaje y llamados a la accion",
      "Integracion de formularios, WhatsApp o agenda",
      "Base lista para campanas o trafico organico",
    ],
  },
  {
    name: "Operacion digital",
    audience: "Para negocios que ya venden, pero coordinan demasiado a mano.",
    summary: "Un flujo mas ordenado para reservas, solicitudes, pedidos o derivaciones internas sin depender de seguimiento manual constante.",
    items: [
      "Sistema adaptado al proceso comercial u operativo",
      "Estados, disponibilidad o validaciones segun necesidad",
      "Automatizaciones y notificaciones clave",
      "Panel o estructura para administrar con control",
    ],
  },
  {
    name: "Estructura de crecimiento",
    audience: "Para empresas que necesitan una capa digital mas estrategica.",
    summary: "Acompañamiento para diseñar una arquitectura que conecte procesos, herramientas y decisiones de negocio.",
    items: [
      "Diagnostico del punto actual",
      "Definicion de arquitectura y prioridades",
      "Implementacion por etapas con foco en impacto",
      "Optimizacion y evolucion del sistema",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="bg-[#0b0f17] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Formatos de trabajo
          </span>

          <h2 className="mt-8 text-3xl font-semibold text-white md:text-5xl">
            No todos los negocios necesitan lo mismo.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Por eso trabajamos con formatos adaptados al momento de cada empresa:
            desde mejorar la captacion hasta ordenar una operacion que ya crecio.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,240,181,0.12)] ${
                index === 1
                  ? "border-emerald-400/30 bg-[linear-gradient(180deg,rgba(0,240,181,0.1),rgba(255,255,255,0.03))]"
                  : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                {plan.name}
              </span>

              <p className="mt-6 text-lg font-medium leading-relaxed text-white">
                {plan.audience}
              </p>

              <p className="mt-4 leading-relaxed text-white/60">
                {plan.summary}
              </p>

              <ul className="mt-8 space-y-4 border-t border-white/8 pt-6 text-sm text-white/55">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(0,240,181,0.7)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
