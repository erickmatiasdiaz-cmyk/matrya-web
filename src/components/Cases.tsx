"use client";

import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

const cases = [
  {
    title: "Centro Turistico Caviahue",
    type: "Sistema de Reservas",
    challenge: "Gestion manual de disponibilidad que consumia horas del equipo",
    solution: "Automatizamos reservas y disponibilidad online",
    result: "Reduccion del 80% en tiempo de gestion de reservas",
    image: "/image/Caviahue.jpeg",
    imageClassName: "object-[center_top]",
    quote: "Ahora el equipo se enfoca en atender mejor al huesped, no en coordinar disponibilidad.",
  },
  {
    title: "Movimiento de tierra El Puente",
    type: "Landing de Servicios",
    challenge: "Cotizaciones dispersas por WhatsApp sin seguimiento",
    solution: "Landing con cotizacion directa y contacto por WhatsApp",
    result: "Cotizaciones automatizadas con respuesta inmediata",
    image: "/image/elpuente.jpeg",
    imageClassName: "object-[center_22%]",
    quote: "Los clientes ahora entienden el servicio y cotizan en el momento, sin ida y vuelta.",
  },
  {
    title: "Hospedaje Santa Barbara",
    type: "Landing Turistica",
    challenge: "Dependencia total de plataformas de terceros para reservas",
    solution: "Captacion directa con landing orientada a conversion",
    result: "Canal propio de reservas sin comisiones de terceros",
    image: "/image/hospedaje-sb.jpeg",
    imageClassName: "object-[center_top]",
    quote: "Pasamos de depender de plataformas a recibir reservas directas de nuestros clientes.",
  },
];

export default function Cases() {
  return (
    <section id="casos" className="bg-[#05080f] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Casos de exito
            </span>
            <h2 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Problemas reales.
              <span className="mt-4 block shimmer-text">
                Soluciones que funcionan.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Cada proyecto nace de un dolor concreto del negocio. Aqui ves como lo resolvimos
              y el impacto que genero en la operacion diaria de cada empresa.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {cases.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 150}>
              <article
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/30 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(0,240,181,0.15)] focus-within:border-emerald-400/40"
                tabIndex={0}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#09111c]">
                  <Image
                    src={item.image}
                    alt={`Captura de pantalla del proyecto ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.imageClassName}`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Badge de resultado */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 backdrop-blur-sm">
                      <p className="text-xs font-semibold text-emerald-300">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium tracking-wide text-emerald-400">
                    {item.type}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Challenge / Solution */}
                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/30">Desafio</span>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        {item.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/30">Solucion</span>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-5 border-t border-white/8 pt-4">
                    <p className="text-sm italic leading-relaxed text-white/40">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
