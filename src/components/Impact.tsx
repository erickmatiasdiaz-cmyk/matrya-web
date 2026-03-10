const outcomes = [
  {
    eyebrow: "Operacion",
    title: "Menos coordinacion manual, mas capacidad para ejecutar.",
    text: "Cuando formularios, reservas, seguimientos y tareas repetitivas dejan de depender de mensajes dispersos, el equipo recupera tiempo para vender y atender mejor.",
  },
  {
    eyebrow: "Control",
    title: "Informacion mas ordenada para decidir con mas claridad.",
    text: "Un sistema bien planteado conecta datos, contactos y procesos. Eso reduce la improvisacion y mejora la velocidad para responder al negocio.",
  },
  {
    eyebrow: "Escala",
    title: "Crecimiento sostenido sin multiplicar friccion interna.",
    text: "La estructura digital correcta permite absorber mas demanda sin aumentar al mismo ritmo el caos operativo o la dependencia de personas clave.",
  },
  {
    eyebrow: "Marca",
    title: "Una presencia digital que transmite solidez y criterio.",
    text: "No se trata solo de verse bien. Se trata de que el cliente perciba una empresa seria, clara y preparada para responder de forma profesional.",
  },
];

export default function Impact() {
  return (
    <section id="impacto" className="bg-[#0e1424] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.35fr]">
          <div>
            <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Impacto
            </span>

            <h2 className="mt-8 text-3xl font-semibold leading-tight text-white md:text-5xl">
              El valor no esta en tener mas herramientas.
              <span className="mt-4 block shimmer-text">
                Esta en operar mejor con ellas.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              Una estructura digital bien diseñada mejora la experiencia del cliente,
              ordena la operacion y da mas capacidad para crecer con criterio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {outcomes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/35 hover:shadow-[0_0_40px_rgba(0,240,181,0.12)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                  {item.eyebrow}
                </span>

                <h3 className="mt-6 text-2xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
