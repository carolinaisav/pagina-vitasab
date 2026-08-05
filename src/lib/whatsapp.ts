/**
 * VITASAB — Enlaces de WhatsApp con intención pre-cargada (ADR-007).
 *
 * El agendamiento es por WhatsApp: un primer mensaje automático saluda e identifica que es
 * automático, y luego la asistente humana toma la conversación, agenda en Dentalink y responde
 * las dudas médicas. El sitio nunca diagnostica ni cotiza (§6.4).
 */

// Formato para wa.me: código de país + número, sin '+', espacios ni signos.
// WhatsApp de la asistente de la consulta: +56 9 6668 2941 (confirmado).
export const WHATSAPP_NUMBER = "56966682941";

/** Intenciones pre-escritas. Nunca piden datos de salud por el canal (§6.4 regla 12). */
export const WHATSAPP_INTENTS = {
  agendar: "Hola, me gustaría agendar una hora para una evaluación.",
  primeraVisita: "Hola, quiero agendar mi primera consulta.",
  urgencia: "Hola, tengo una urgencia dental y necesito orientación.",
  convenios: "Hola, quisiera consultar por convenios y formas de pago.",
} as const;

export type WhatsappIntentKey = keyof typeof WHATSAPP_INTENTS;

/** Construye un enlace wa.me con texto pre-cargado. */
export function whatsappLink(intent: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(intent)}`;
}

/** Atajo para las intenciones predefinidas. */
export function whatsappIntentLink(key: WhatsappIntentKey): string {
  return whatsappLink(WHATSAPP_INTENTS[key]);
}
