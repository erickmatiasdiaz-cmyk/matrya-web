import SectionReveal from "@/components/SectionReveal";

const solutions = [
  {
    label: "Captacion digital",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    pain: "Tu sitio recibe visitas pero no contactos.",
    title: "Sitios que convierten visitas en clientes reales.",
    text: "No basta con que te vean. Diseñamos cada pagina para que el visitante entienda que ofreces, confie en tu empresa y de el siguiente paso: llame, escriba o reserve.",
    items: [
      "Mensaje comercial claro y orientado a accion",
      "Llamados a la accion estrategicos",
      "Formularios y WhatsApp integrados",
      "Lista para campañas y trafico organico",
    ],
    idealFor: "Ideal si tu empresa ya vende por recomendacion pero necesita convertir mejor su trafico digital.",
  },
  {
    label: "Operacion comercial",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    pain: "Coordinar reservas y pedidos es un caos manual.",
    title: "Reservas, pedidos y solicitudes en un solo lugar.",
    text: "Creamos sistemas donde disponibilidad, formularios, pagos o derivaciones dejan de depender de WhatsApps perdidos y pasan a un flujo ordenado que funciona solo.",
    items: [
      "Sistema adaptado a tu proceso real",
      "Validaciones y disponibilidad automatica",
      "Notificaciones y recordatorios clave",
      "Panel para administrar con control",
    ],
    idealFor: "Pensado para turismo, servicios con agenda y negocios que hoy pierden tiempo coordinando a mano.",
  },
  {
    label: "Eficiencia interna",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    pain: "Tu equipo pierde horas en tareas que deberian ser automaticas.",
    title: "Automatizaciones que eliminan trabajo repetitivo.",
    text: "Conectamos las herramientas que ya usas, eliminamos tareas que consumen tiempo y dejamos trazabilidad para que tu equipo opere con mas control y menos friccion.",
    items: [
      "Integracion de herramientas existentes",
      "Eliminacion de tareas manuales clave",
      "Flujos automaticos con seguimiento",
      "Reportes y visibilidad del proceso",
    ],
    idealFor: "Funciona cuando el negocio crece pero la operacion se vuelve lenta o dependiente de personas clave.",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="bg-[#0b0f17] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Soluciones
            </span>

            <h2 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Cada solucion digital nace de un problema real de negocio.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              No vendemos tecnologia por vender. Construimos <strong className="text-white/80">activos digitales</strong> que resuelven dolores concretos:
              captar mas, operar mejor y crecer sin que todo se vuelva caos.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SectionReveal key={solution.title} delay={index * 100} direction="up">
              <article
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/35 hover:shadow-[0_0_40px_rgba(0,240,181,0.12)] focus-within:border-emerald-400/35 focus-within:shadow-[0_0_40px_rgba(0,240,181,0.12)]"
                tabIndex={0}
              >
                {/* Icono */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-400/20">
                  {solution.icon}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                    {solution.label}
                  </span>
                  <span className="h-px w-14 bg-gradient-to-r from-emerald-400/70 to-transparent" />
                </div>

                {/* Pain point */}
                <p className="mt-6 text-sm font-medium italic text-white/40">
                  {solution.pain}
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                  {solution.title}
                </h3>

                <p className="mt-5 leading-relaxed text-white/60">
                  {solution.text}
                </p>

                {/* Features list */}
                <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-white/55">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal for */}
                <p className="mt-6 text-xs leading-relaxed text-white/35">
                  {solution.idealFor}
                </p>

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
