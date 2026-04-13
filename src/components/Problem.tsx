import SectionReveal from "@/components/SectionReveal";

const problems = [
  {
    title: "Procesos operativos fragmentados",
    text: "Areas que trabajan con herramientas aisladas sin integracion estrategica.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 12l4.5 0m-4.5 0l4.5-4.5m-4.5 4.5l-4.5-4.5m4.5 4.5l-4.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Dependencia de tareas manuales",
    text: "Equipos que pierden horas en actividades repetitivas que deberian estar automatizadas.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Crecimiento sin eficiencia",
    text: "Empresas que aumentan ventas pero no optimizan sus sistemas internos.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Falta de vision digital integral",
    text: "Inversion en tecnologia sin una arquitectura que conecte procesos, datos y decisiones.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section id="enfoque" className="px-6 py-32 bg-[#0E1424]">
      <div className="max-w-6xl mx-auto">

        <SectionReveal>
          <div className="text-center mb-20">
            <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              El problema
            </span>
            <h2 className="mt-8 text-3xl md:text-5xl font-semibold leading-tight text-white">
              Muchas empresas digitalizan herramientas.
              <span className="block mt-4 shimmer-text">
                Pero no transforman su estructura.
              </span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {problems.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 100}>
              <article
                className="group relative p-8 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:shadow-[0_0_40px_rgba(0,240,181,0.12)] focus-within:border-emerald-400/30"
                tabIndex={0}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-400/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/0 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:from-emerald-400/[0.03] group-hover:to-cyan-400/[0.03] group-hover:opacity-100"
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
