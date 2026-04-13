"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
}

/**
 * Modal Diagnostico con validacion
 */
export default function DiagnosisModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    teamSize: "",
    digitalLevel: "",
    message: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  // Bloqueo de scroll cuando esta abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus en el primer input cuando se abre
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      if (!isOpen) {
        // Resetear solo cuando el modal se desmonta/cierra
        setIsSubmitted(false);
        setErrors({});
        setFormData({ name: "", company: "", teamSize: "", digitalLevel: "", message: "", email: "" });
      }
    };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap dentro del modal
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    modal.addEventListener("keydown", handleKeyDown);
    return () => modal.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.company.trim()) {
      newErrors.company = "La empresa es requerida";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email valido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Describe tu desafio principal";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simular envio (aqui iria la integracion con API/email)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E1424] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
      >
        {/* Cerrar */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          aria-label="Cerrar modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          // Estado de exito
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/10">
              <svg className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Diagnstico recibido
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed max-w-lg mx-auto">
              Gracias por confiar en MATRYA. Revisaremos tu informacion y te contactaremos en 24-48 horas con un analisis personalizado.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 rounded-xl bg-emerald-400 px-8 py-3 font-medium text-black transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            >
              Entendido
            </button>
          </div>
        ) : (
          <>
            {/* Encabezado */}
            <h2 id="modal-title" className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Diagnostico Ejecutivo de Transformacion Digital
            </h2>

            <p className="text-white/60 mb-8 leading-relaxed max-w-2xl">
              Evaluamos la estructura digital actual de tu empresa para identificar
              oportunidades de optimizacion, integracion y escalabilidad.
            </p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Fila 1 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                    Nombre <span className="text-red-400">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-white/30 transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
                      errors.name ? "border-red-400/50" : "border-white/10"
                    }`}
                    placeholder="Tu nombre"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-white/30 transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
                      errors.email ? "border-red-400/50" : "border-white/10"
                    }`}
                    placeholder="tu@empresa.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Fila 2 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-sm text-white/60 mb-2">
                    Empresa <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-white/30 transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
                      errors.company ? "border-red-400/50" : "border-white/10"
                    }`}
                    placeholder="Nombre de tu empresa"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm text-white/60 mb-2">
                    Tamano del equipo
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                  >
                    <option value="">Seleccionar</option>
                    <option value="1-5">1-5 personas</option>
                    <option value="6-20">6-20 personas</option>
                    <option value="21-50">21-50 personas</option>
                    <option value="50+">Mas de 50</option>
                  </select>
                </div>
              </div>

              {/* Nivel de digitalizacion */}
              <div>
                <label htmlFor="digitalLevel" className="block text-sm text-white/60 mb-2">
                  Nivel de digitalizacion actual
                </label>
                <select
                  id="digitalLevel"
                  name="digitalLevel"
                  value={formData.digitalLevel}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                >
                  <option value="">Seleccionar</option>
                  <option value="basico">Muy basico</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado pero desintegrado</option>
                </select>
              </div>

              {/* Desafio */}
              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                  Principal desafio digital hoy <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-white/30 transition resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
                    errors.message ? "border-red-400/50" : "border-white/10"
                  }`}
                  placeholder="Describe brevemente el principal problema que enfrenta tu empresa."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Boton */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-400 text-black font-semibold py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-[#0E1424] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Solicitar Evaluacion Estrategica"
                )}
              </button>
            </form>

            {/* Nota inferior */}
            <p className="mt-6 text-white/40 text-xs text-center">
              Evaluacion confidencial - Respuesta en 24-48 horas
            </p>
          </>
        )}
      </div>
    </div>
  );
}

