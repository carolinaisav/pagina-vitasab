import { redirect } from "next/navigation";

/**
 * La sección de contacto vive en el inicio (#contacto), más completa (mapa, teléfono,
 * WhatsApp, Instagram, horario). Esta ruta antigua redirige allí para no duplicar.
 */
export default function ContactoPage() {
  redirect("/#contacto");
}
