/**
 * VITASAB — JSON-LD Schema.org para la clínica (tipo Dentist).
 *
 * Regla §0: solo datos confirmados (docs/DATOS-CLINICA.md). Los campos que dependen
 * de datos PENDIENTES (`geo`, `openingHoursSpecification`, `priceRange`, `image`) NO
 * se emiten: quedan documentados abajo con TODO para añadirlos cuando lleguen los datos.
 */

import { clinic, SITE_URL, type ClinicData } from "@/lib/seo/clinic";

/** PostalAddress de Schema.org. */
export interface JsonLdPostalAddress {
  readonly "@type": "PostalAddress";
  readonly streetAddress: string;
  readonly addressLocality: string;
  readonly addressRegion: string;
  readonly addressCountry: string;
}

/** EducationalOrganization (alma mater). */
export interface JsonLdCollegeOrUniversity {
  readonly "@type": "CollegeOrUniversity";
  readonly name: string;
}

/** Profesional del equipo como Dentist embebido. */
export interface JsonLdEmployee {
  readonly "@type": "Dentist";
  readonly name: string;
  readonly alumniOf: JsonLdCollegeOrUniversity;
}

/** Ciudad/comuna servida. */
export interface JsonLdCity {
  readonly "@type": "City";
  readonly name: string;
}

/** Horario de atención (Schema.org OpeningHoursSpecification). */
export interface JsonLdOpeningHours {
  readonly "@type": "OpeningHoursSpecification";
  readonly dayOfWeek: readonly string[];
  readonly opens: string;
  readonly closes: string;
}

/** Documento JSON-LD raíz de la clínica. */
export interface DentistJsonLd {
  readonly "@context": "https://schema.org";
  readonly "@type": "Dentist";
  readonly name: string;
  readonly legalName: string;
  readonly address: JsonLdPostalAddress;
  readonly telephone: string;
  readonly url: string;
  readonly image: string;
  readonly areaServed: readonly JsonLdCity[];
  readonly medicalSpecialty: readonly string[];
  readonly openingHoursSpecification?: readonly JsonLdOpeningHours[];
  readonly sameAs: readonly string[];
  readonly employee: readonly JsonLdEmployee[];
  // ── Campos PENDIENTES — NO inventar (docs/DATOS-CLINICA.md). Añadir cuando existan: ──
  // geo:        { "@type": "GeoCoordinates", latitude, longitude }   // clinic.geo
  // priceRange: string                                               // clinic.priceRange
}

/**
 * Construye el JSON-LD `Dentist` a partir de los datos confirmados de la clínica.
 * @param data    Datos de la clínica (por defecto, el singleton `clinic`).
 * @param siteUrl URL canónica del sitio (por defecto, `SITE_URL`).
 */
export function buildDentistJsonLd(
  data: ClinicData = clinic,
  siteUrl: string = SITE_URL,
): DentistJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: data.brandName,
    legalName: data.legalName,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      addressCountry: data.address.addressCountry,
    },
    telephone: data.telephone,
    url: siteUrl,
    image: `${siteUrl}/foto-inicio.jpg`,
    areaServed: [
      { "@type": "City", name: "Las Condes" },
      { "@type": "City", name: "Santiago" },
    ],
    medicalSpecialty: [...data.confirmedSpecialties],
    openingHoursSpecification: data.openingHours
      ? data.openingHours.map(
          (h): JsonLdOpeningHours => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [...h.dayOfWeek],
            opens: h.opens,
            closes: h.closes,
          }),
        )
      : undefined,
    sameAs: ["https://www.instagram.com/clinica.vitasab/"],
    employee: data.professionals.map(
      (p): JsonLdEmployee => ({
        "@type": "Dentist",
        name: p.name,
        alumniOf: { "@type": "CollegeOrUniversity", name: p.university },
      }),
    ),
  };
}
