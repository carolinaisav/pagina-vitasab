"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { CTA } from "@/components/ui/CTA";
import { whatsappIntentLink } from "@/lib/whatsapp";

const NAV = [
  { href: "/#clinica-vitasab", label: "Clínica Vitasab" },
  { href: "/odontologia", label: "Odontología" },
  { href: "/resultados", label: "Casos reales" },
  { href: "/estetica-facial", label: "Estética Facial" },
  { href: "/equipo", label: "Equipo" },
  { href: "/primera-visita", label: "Primera Visita" },
  { href: "/alianzas", label: "Alianzas" },
  { href: "/formas-de-pago", label: "Formas de pago" },
  { href: "/#contacto", label: "Contacto" },
] as const;

const NAV_LINK = "font-serif text-[0.875rem] tracking-[0.01em] transition-colors";

/**
 * Header sticky: logo + navegación repartida + botón "Agendar hora". Marca la página
 * activa (aria-current) y el menú móvil (<details>) se cierra al tocar un enlace.
 */
export function Header() {
  const wa = whatsappIntentLink("agendar");
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  const isActive = (href: string) => !href.includes("#") && pathname === href;
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-accent/15 bg-sand/90 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:outline focus:outline-2"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-5 sm:px-8 sm:py-6">
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
          className="hidden flex-1 items-center justify-between gap-x-3 xl:flex"
        >
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${NAV_LINK} ${active ? "text-accent" : "text-ink hover:text-accent"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <CTA href={wa} variant="primary" className="hidden shrink-0 xl:inline-flex">
          Agendar hora
        </CTA>

        <details ref={menuRef} className="relative ml-auto xl:hidden">
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
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`tap-target justify-start font-serif text-lead ${active ? "text-accent" : "text-ink"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <CTA href={wa} variant="primary" className="mt-3 w-full">
              Agendar hora
            </CTA>
          </div>
        </details>
      </div>
    </header>
  );
}
