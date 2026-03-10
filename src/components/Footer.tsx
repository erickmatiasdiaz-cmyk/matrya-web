/**
 * Footer Corporativo MATRYA
 * Versión ejecutiva minimal
 */

export default function Footer() {
  return (
    <footer className="bg-[#03060c] border-t border-white/5 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-white font-semibold text-lg tracking-widest mb-4">
              MATRYA
            </h3>

            <p className="text-white/50 leading-relaxed text-sm">
              Consultora de Transformación Digital especializada en 
              estructurar sistemas tecnológicos que impulsan eficiencia, 
              integración y crecimiento empresarial.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Navegación
            </h4>

            <ul className="space-y-3 text-white/50 text-sm">
              <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#framework" className="hover:text-white transition">Framework</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Contacto
            </h4>

            <p className="text-white/50 text-sm">
              contacto@matrya.cl
            </p>

            <p className="text-white/50 text-sm mt-2">
              Chile
            </p>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-16 pt-8 border-t border-white/5 text-white/30 text-xs text-center">
          © {new Date().getFullYear()} MATRYA. Todos los derechos reservados.
        </div>

      </div>

    </footer>
  );
}
