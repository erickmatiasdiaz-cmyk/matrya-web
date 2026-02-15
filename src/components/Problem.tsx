/**
 * Sección Problema
 * Versión estratégica alineada a Transformación Digital
 * Mantiene shimmer + efectos hover
 */

export default function Problem() {
  return (
    <section
  id="enfoque"
  className="py-32 px-6 bg-[#0E1424]"
>
      <div className="max-w-6xl mx-auto">

        {/* ==============================
           Título
        ============================== */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Muchas empresas digitalizan herramientas.
            <span className="block mt-4 shimmer-text">
              Pero no transforman su estructura.
            </span>
          </h2>
        </div>

        {/* ==============================
           Grid de problemas
        ============================== */}
        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              title: "Procesos operativos fragmentados",
              text: "Áreas que trabajan con herramientas aisladas sin integración estratégica.",
            },
            {
              title: "Dependencia de tareas manuales",
              text: "Equipos que pierden horas en actividades repetitivas que deberían estar automatizadas.",
            },
            {
              title: "Crecimiento sin eficiencia",
              text: "Empresas que aumentan ventas pero no optimizan sus sistemas internos.",
            },
            {
              title: "Falta de visión digital integral",
              text: "Inversión en tecnología sin una arquitectura que conecte procesos, datos y decisiones.",
            },
          ].map((item, index) => (
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
              <h3 className="text-xl font-semibold mb-4 text-white transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
