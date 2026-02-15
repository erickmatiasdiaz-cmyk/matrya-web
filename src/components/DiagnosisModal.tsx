"use client";

import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal Diagnóstico Ejecutivo MATRYA
 * Versión profesional para PYMEs en crecimiento
 */

export default function DiagnosisModal({ isOpen, onClose }: Props) {

  // Bloqueo de scroll cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-6">

      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-[#0E1424] border border-white/10 rounded-2xl p-12 shadow-2xl">

        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition"
        >
          ✕
        </button>

        {/* Encabezado */}
        <h2 className="text-3xl font-semibold text-white mb-4">
          Diagnóstico Ejecutivo de Transformación Digital
        </h2>

        <p className="text-white/60 mb-10 leading-relaxed max-w-2xl">
          Evaluamos la estructura digital actual de tu empresa para identificar
          oportunidades de optimización, integración y escalabilidad.
        </p>

        {/* Formulario */}
        <form className="space-y-8">

          {/* Fila 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/60 mb-2">
                Nombre
              </label>
              <input
                type="text"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                Empresa
              </label>
              <input
                type="text"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition"
              />
            </div>
          </div>

          {/* Fila 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/60 mb-2">
                Tamaño del equipo
              </label>
              <select
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition"
              >
                <option>1-5 personas</option>
                <option>6-20 personas</option>
                <option>21-50 personas</option>
                <option>Más de 50</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                Nivel de digitalización actual
              </label>
              <select
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition"
              >
                <option>Muy básico</option>
                <option>Intermedio</option>
                <option>Avanzado pero desintegrado</option>
              </select>
            </div>
          </div>

          {/* Desafío */}
          <div>
            <label className="block text-sm text-white/60 mb-2">
              Principal desafío digital hoy
            </label>
            <textarea
              rows={4}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition"
              placeholder="Describe brevemente el principal problema que enfrenta tu empresa."
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="
              w-full
              bg-emerald-400
              text-black
              font-semibold
              py-4
              rounded-xl
              text-lg
              hover:scale-[1.02]
              transition-all
              duration-300
            "
          >
            Solicitar Evaluación Estratégica
          </button>

        </form>

        {/* Nota inferior */}
        <p className="mt-6 text-white/40 text-xs text-center">
          Evaluación confidencial · Respuesta en 24-48 horas
        </p>

      </div>
    </div>
  );
}

