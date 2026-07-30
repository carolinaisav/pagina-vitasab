/**
 * VITASAB — Helpers de metadatos para Next.js (App Router).
 *
 * `rootMetadata` lleva la plantilla de título "%s — VITASAB" y los defaults de Open Graph;
 * está pensado para que el layout raíz lo integre (lo hace otro agente). `pageMetadata`
 * genera los metadatos por página: título simple (la plantilla del layout lo envuelve),
 * canonical y Open Graph con locale es_CL. Regla §0: sin claims inventados.
 */

import type { Metadata } from "next";
import { clinic, SITE_URL } from "@/lib/seo/clinic";

/** Plantilla de título aplicada por el layout raíz. */
export const TITLE_TEMPLATE = "%s — VITASAB" as const;

/** Título por defecto (home) — la plantilla NO se aplica al `default`. */
export const DEFAULT_TITLE = clinic.brandName;

/**
 * Metadatos base para el layout raíz.
 * El otro agente hará `export const metadata = rootMetadata` (o lo fusionará) en layout.tsx.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: TITLE_TEMPLATE,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: clinic.brandName,
    url: SITE_URL,
  },
};

export interface PageMetadataParams {
  /** Título de la página (sin marca; la plantilla añade "— VITASAB"). */
  readonly title: string;
  readonly description: string;
  /** Ruta absoluta del sitio, p. ej. "/equipo" o "/". */
  readonly path: string;
}

/** Devuelve la URL canónica absoluta para una ruta del sitio. */
function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}

/**
 * Genera los metadatos de una página.
 * El título se devuelve como string simple para que la plantilla "%s — VITASAB"
 * del layout raíz lo envuelva. Incluye canonical y Open Graph con locale es_CL.
 */
export function pageMetadata({ title, description, path }: PageMetadataParams): Metadata {
  const canonical = canonicalUrl(path);
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "es_CL",
      siteName: clinic.brandName,
      title,
      description,
      url: canonical,
    },
  };
}
