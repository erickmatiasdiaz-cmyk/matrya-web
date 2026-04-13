import SectionReveal from "@/components/SectionReveal";

const footerLinks = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#casos", label: "Casos de exito" },
  { href: "#framework", label: "Framework" },
  { href: "#impacto", label: "Impacto" },
  { href: "#planes", label: "Planes" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03060c] border-t border-white/5 px-6" role="contentinfo">
      <SectionReveal>
        <div className="mx-auto max-w-7xl py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Marca */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-lg tracking-widest mb-4">
                MATRYA
              </h3>

              <p className="text-white/50 leading-relaxed text-sm max-w-md">
                Consultora de Transformacion Digital especializada en
                estructurar sistemas tecnologicos que impulsan eficiencia,
                integracion y crecimiento empresarial.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://wa.me/56984795290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-400"
                  aria-label="Contactar por WhatsApp"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.05 4.94A9.87 9.87 0 0 0 12 2a9.94 9.94 0 0 0-8.67 14.8L2 22l5.38-1.3A9.94 9.94 0 0 0 12 22a10 10 0 0 0 7.05-17.06Zm-7.05 15.37a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.2.77.86-3.12-.2-.32A8.27 8.27 0 1 1 12 20.31Zm4.53-6.2c-.25-.13-1.47-.73-1.7-.82-.23-.08-.4-.12-.56.13-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.07-.39-2.03-1.26-.75-.66-1.26-1.48-1.41-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.3.37-.45.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.59.21-1.1.15-1.19-.07-.1-.23-.15-.48-.28Z" />
                  </svg>
                </a>
                <a
                  href="mailto:contacto@matrya.cl"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-400"
                  aria-label="Enviar email"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Enlaces */}
            <div>
              <h4 className="text-white font-medium mb-4">
                Navegacion
              </h4>

              <ul className="space-y-3 text-white/50 text-sm">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-block transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-white font-medium mb-4">
                Contacto
              </h4>

              <address className="not-italic space-y-3 text-white/50 text-sm">
                <p>
                  <a
                    href="mailto:contacto@matrya.cl"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    contacto@matrya.cl
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/56984795290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    +56 9 8479 5290
                  </a>
                </p>
                <p className="text-white/35">Chile</p>
              </address>
            </div>

          </div>

          {/* Linea inferior */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-xs text-white/30">
            <p>
              &copy; {currentYear} MATRYA. Todos los derechos reservados.
            </p>
            <p>
              Arquitectura Digital Estrategica
            </p>
          </div>

        </div>
      </SectionReveal>
    </footer>
  );
}
