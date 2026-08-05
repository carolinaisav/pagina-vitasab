import { whatsappIntentLink } from "@/lib/whatsapp";

/**
 * Botón flotante de WhatsApp — patrón muy usado en Chile (§1.4). Fijo abajo a la derecha,
 * siempre visible al hacer scroll. Usa el acento cálido (coral) como energía puntual.
 * En móvil se muestra compacto (solo ícono); desde `sm` incluye el texto.
 */
export function FloatingWhatsApp() {
  const wa = whatsappIntentLink("agendar");

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="tap-target fixed bottom-5 right-5 z-40 gap-2 rounded-full bg-warm-accent px-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(184,84,64,0.4)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:px-5"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 3.2c-5 0-9 3.5-9 7.9 0 1.9.8 3.7 2.1 5.1-.2.9-.7 2.4-1.1 3.4 0 .1.1.2.2.1 1.1-.3 2.6-.8 3.5-1.2 1.3.6 2.8.9 4.3.9 5 0 9-3.5 9-7.9s-4-7.9-9-7.9z" />
      </svg>
      <span className="hidden sm:inline">Agendar Cita</span>
    </a>
  );
}
