/**
 * Boton flotante WhatsApp
 * Canal de contacto directo
 */

export default function WhatsappFloat() {
  const message = encodeURIComponent(
    "Hola, vi la web de MATRYA y me gustaria conversar sobre una solucion digital para mi empresa."
  );

  return (
    <a
      href={`https://wa.me/56984795290?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-emerald-300/25 bg-[linear-gradient(135deg,rgba(16,185,129,0.92),rgba(6,214,160,0.92))] px-4 py-3 text-black shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,240,181,0.28)] md:bottom-6 md:right-6 md:px-5"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/12 ring-1 ring-white/20">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
        >
          <path d="M19.05 4.94A9.87 9.87 0 0 0 12 2a9.94 9.94 0 0 0-8.67 14.8L2 22l5.38-1.3A9.94 9.94 0 0 0 12 22a10 10 0 0 0 7.05-17.06Zm-7.05 15.37a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.2.77.86-3.12-.2-.32A8.27 8.27 0 1 1 12 20.31Zm4.53-6.2c-.25-.13-1.47-.73-1.7-.82-.23-.08-.4-.12-.56.13-.17.25-.65.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.07-.39-2.03-1.26-.75-.66-1.26-1.48-1.41-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.3.37-.45.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.59.21-1.1.15-1.19-.07-.1-.23-.15-.48-.28Z" />
        </svg>
      </span>

      <span className="pr-1">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-black/55">
          Contacto directo
        </span>
        <span className="block text-sm font-semibold text-black md:text-[15px]">
          WhatsApp
        </span>
      </span>

      <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
}
