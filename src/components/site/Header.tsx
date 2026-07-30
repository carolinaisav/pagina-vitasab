import Link from "next/link";
import { CTA } from "@/components/ui/CTA";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

const NAV = [
  { href: "/estetica", label: "Estética" },
  { href: "/restauracion", label: "Restauración" },
  { href: "/prevencion-y-salud", label: "Prevención" },
  { href: "/familia", label: "Familia" },
  { href: "/primera-visita", label: "Primera visita" },
  { href: "/resultados", label: "Casos reales" },
] as const;

const NAV_LINK =
  "text-caption uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-accent";

/**
 * Header sticky en dos filas (ref. AS Odontología): logo + acciones arriba, navegación
 * centrada debajo. Banda beige más cálida que el cuerpo. Cumple "1 clic al agendamiento
 * desde cualquier página" (§1.2): el CTA de WhatsApp está siempre visible. Menú móvil con
 * `<details>` nativo (sin JS).
 */
export function Header() {
  const tel = `tel:${clinic.telephone}`;
  const wa = whatsappIntentLink("agendar");

  return (
    <header className="sticky top-0 z-50 border-b border-accent/15 bg-sand/90 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:outline focus:outline-2"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        {/* Fila 1 — logo + acciones */}
        <div className="flex items-center justify-between gap-6 py-4 sm:py-5">
          <Link href="/" aria-label="VITASAB — ir al inicio" className="leading-tight">
            <span className="block font-serif text-lead tracking-[0.2em]">
              VITASAB
              <span className="text-accent" aria-hidden>
                .
              </span>
            </span>
            <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.22em] text-ink-soft">
              Odontología · Las Condes
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <CTA
              href={tel}
              variant="secondary"
              className="hidden sm:inline-flex"
              ariaLabel={`Llamar a VITASAB al ${clinic.telephone}`}
            >
              Llamar
            </CTA>
            <CTA href={wa} variant="primary">
              <span className="sm:hidden">Agendar</span>
              <span className="hidden sm:inline">Agendar por WhatsApp</span>
            </CTA>

            <details className="relative lg:hidden">
              <summary className="tap-target cursor-pointer list-none rounded-md text-caption uppercase tracking-[0.1em] [&::-webkit-details-marker]:hidden">
                Menú
              </summary>
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-sand p-4 shadow-[0_10px_40px_rgba(46,42,36,0.12)]">
                <nav
                  aria-label="Navegación principal (móvil)"
                  className="flex flex-col gap-1"
                >
                  {NAV.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="tap-target justify-start text-base"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-3">
                  <CTA href={tel} variant="secondary" className="w-full">
                    Llamar
                  </CTA>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Fila 2 — navegación centrada (solo escritorio) */}
        <nav
          aria-label="Navegación principal"
          className="hidden justify-center gap-8 pb-4 lg:flex"
        >
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={NAV_LINK}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
