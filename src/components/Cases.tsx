"use client";

import Image from "next/image";

const cases = [
  {
    title: "Centro Turistico Caviahue",
    type: "Sistema de Reservas",
    result: "Gestion automatica de disponibilidad y reservas",
    image: "/image/Caviahue.jpeg",
    imageClassName: "object-[center_top]",
  },
  {
    title: "Movimiento de tierra El Puente",
    type: "Landing de Servicios",
    result: "Cotiza directo por WhatsApp",
    image: "/image/elpuente.jpeg",
    imageClassName: "object-[center_22%]",
  },
  {
    title: "Hospedaje Santa Barbara",
    type: "Landing Turistica",
    result: "Captacion directa de reservas",
    image: "/image/hospedaje-sb.jpeg",
    imageClassName: "object-[center_top]",
  },
];

export default function Cases() {
  return (
    <section id="casos" className="bg-[#05080f] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Proyectos reales
            <span className="mt-4 block shimmer-text">
              construidos para empresas
            </span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(0,240,181,0.15)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#09111c]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.imageClassName}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <span className="text-xs font-medium tracking-wide text-emerald-400">
                  {item.type}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
