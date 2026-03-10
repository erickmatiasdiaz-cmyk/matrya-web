const solutions = [
  {
    label: "Captacion digital",
    title: "Sitios y landings pensados para que el cliente avance, no solo mire.",
    text: "Estructuramos la informacion, el mensaje comercial y los llamados a la accion para que una visita entienda rapido que ofreces y como contactarte.",
    details: "Ideal para empresas que ya venden por recomendacion pero necesitan convertir mejor su trafico digital.",
  },
  {
    label: "Operacion comercial",
    title: "Reservas, solicitudes y pedidos centralizados en un flujo claro.",
    text: "Creamos sistemas donde disponibilidad, formularios, pagos o derivaciones dejan de depender de mensajes dispersos y pasan a un proceso ordenado.",
    details: "Pensado para turismo, servicios con agenda y negocios que hoy pierden tiempo coordinando manualmente.",
  },
  {
    label: "Eficiencia interna",
    title: "Automatizaciones que reducen carga operativa y mejoran seguimiento.",
    text: "Conectamos herramientas, eliminamos tareas repetitivas y dejamos trazabilidad para que el equipo opere con mas control y menos friccion.",
    details: "Funciona especialmente bien cuando el negocio crece pero la operacion empieza a volverse lenta o dependiente de personas clave.",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="bg-[#0b0f17] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Soluciones
          </span>

          <h2 className="mt-8 text-3xl font-semibold text-white md:text-5xl">
            Construimos piezas digitales que resuelven problemas concretos del negocio.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            No vendemos tecnologia aislada. Diseñamos activos digitales que ayudan
            a captar mejor, ordenar la operacion y sostener el crecimiento con mas control.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="group rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/35 hover:shadow-[0_0_40px_rgba(0,240,181,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                  {solution.label}
                </span>
                <span className="h-px w-14 bg-gradient-to-r from-emerald-400/70 to-transparent" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold leading-snug text-white">
                {solution.title}
              </h3>

              <p className="mt-5 leading-relaxed text-white/60">
                {solution.text}
              </p>

              <p className="mt-8 border-t border-white/8 pt-6 text-sm leading-relaxed text-white/45">
                {solution.details}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
