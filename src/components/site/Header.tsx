import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Clínica Vitasab" },
  { href: "/odontologia", label: "Odontología" },
  { href: "/estetica-facial", label: "Estética Facial" },
  { href: "/equipo", label: "Equipo" },
  { href: "/primera-visita", label: "Primera Visita" },
  { href: "/alianzas", label: "Alianzas" },
  { href: "/#contacto", label: "Contacto" },
] as const;

const NAV_LINK =
  "font-serif text-base tracking-[0.02em] text-ink transition-colors hover:text-accent";

/**
 * Header sticky en una franja amplia: logo (fondo transparente) integrado a la izquierda y
 * la navegación repartida a lo ancho (serif elegante). Menú móvil con `<details>` nativo.
 * El CTA de agendar vive en el botón flotante. "Contacto" baja al mapa del home (/#contacto).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-accent/15 bg-sand/90 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:outline focus:outline-2"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto flex w-full max-w-6xl items-center gap-10 px-6 py-5 sm:px-8 sm:py-6">
        <Link href="/" aria-label="VITASAB — ir al inicio" className="shrink-0">
          <Image
            src="/vitasab-logo-10a-v2.png"
            alt="VITASAB — Implantología & Estética Dental"
            width={914}
            height={388}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden flex-1 items-center justify-between lg:flex"
        >
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={NAV_LINK}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative ml-auto lg:hidden">
          <summary
            aria-label="Menú"
            className="tap-target cursor-pointer list-none rounded-md text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
              className="[details[open]_&]:hidden"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
              className="hidden [details[open]_&]:block"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-sand p-4 shadow-[0_10px_40px_rgba(34,52,60,0.14)]">
            <nav
              aria-label="Navegación principal (móvil)"
              className="flex flex-col gap-1"
            >
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="tap-target justify-start font-serif text-lead text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
