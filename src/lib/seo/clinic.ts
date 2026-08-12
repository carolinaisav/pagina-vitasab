/**
 * VITASAB — NAP y datos confirmados de la clínica.
 *
 * Fuente única de verdad: `docs/DATOS-CLINICA.md`.
 * Regla §0 del proyecto: NADA se inventa. Todo dato factual sale de ese documento.
 * Los campos marcados PENDIENTE se dejan en `null` con un `// TODO PENDIENTE` explícito
 * y se rellenan cuando Caro/Marco los confirmen.
 */

/** Dirección postal (subconjunto Schema.org PostalAddress). */
export interface PostalAddressData {
  /** Calle + número + oficina. */
  readonly streetAddress: string;
  /** Comuna (Schema.org addressLocality). */
  readonly addressLocality: string;
  /** Ciudad. */
  readonly addressCity: string;
  /** Región (Schema.org addressRegion). */
  readonly addressRegion: string;
  /** País, ISO 3166-1 alpha-2. */
  readonly addressCountry: string;
  /** Código postal — PENDIENTE. */
  readonly postalCode: string | null;
}

/** Coordenadas geográficas (Schema.org GeoCoordinates). */
export interface GeoCoordinatesData {
  readonly latitude: number;
  readonly longitude: number;
}

/** Especificación de horario (Schema.org OpeningHoursSpecification). */
export interface OpeningHoursData {
  /** Días en formato Schema.org, p. ej. "https://schema.org/Monday" o "Monday". */
  readonly dayOfWeek: readonly string[];
  /** Hora de apertura "HH:MM". */
  readonly opens: string;
  /** Hora de cierre "HH:MM". */
  readonly closes: string;
}

/** Profesional del equipo. */
export interface ProfessionalData {
  readonly name: string;
  /** Título profesional, p. ej. "Cirujano Dentista". */
  readonly title: string;
  /** Universidad del título (alma mater). */
  readonly university: string;
  /** Especialidad declarada. */
  readonly specialty: string;
  /** Universidad de la especialidad, si aplica. */
  readonly specialtyUniversity: string | null;
  /** Reseña / trayectoria del profesional (texto provisto por Caro). Opcional. */
  readonly bio?: string;
  /** Ficha en el RNPI (rnpi.superdesalud.gob.cl) — PENDIENTE. */
  readonly rnpiUrl: string | null;
  /** Retrato (sesión dirigida, nunca stock) — PENDIENTE. */
  readonly photoUrl: string | null;
}

/** Datos completos de la clínica. */
export interface ClinicData {
  /** Nombre de marca. */
  readonly brandName: string;
  /** Razón social. */
  readonly legalName: string;
  /** RUT (validado por módulo 11). */
  readonly rut: string;
  /** Teléfono en formato E.164. */
  readonly telephone: string;
  /** WhatsApp de la asistente de la consulta (E.164). */
  readonly whatsapp: string | null;
  readonly address: PostalAddressData;
  /** Coordenadas — PENDIENTE. */
  readonly geo: GeoCoordinatesData | null;
  /** Horarios de atención — PENDIENTE (incl. si atienden sábados). */
  readonly openingHours: readonly OpeningHoursData[] | null;
  /** Rango de precios (Schema.org priceRange, p. ej. "$$") — PENDIENTE. */
  readonly priceRange: string | null;
  /** Imagen real de la clínica — PENDIENTE. */
  readonly imageUrl: string | null;
  /** N.º de resolución sanitaria SEREMI (por sala) — PENDIENTE. */
  readonly seremiResolution: string | null;
  readonly professionals: readonly ProfessionalData[];
  /** Especialidades CONFIRMADAS que se ofrecen. */
  readonly confirmedSpecialties: readonly string[];
  /** Especialidades cuya asignación a un profesional está PENDIENTE. */
  readonly pendingSpecialties: readonly string[];
}

/**
 * URL canónica del sitio.
 * Lee `NEXT_PUBLIC_SITE_URL` del entorno con fallback a producción.
 * Se normaliza sin barra final para concatenar rutas de forma segura.
 */
export const SITE_URL: string = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vitasab.cl")
  .replace(/\/+$/, "")
  // Fuerza el dominio canónico con www (aunque el entorno traiga el apex), para
  // que canonical, sitemap y robots apunten siempre a la misma URL.
  .replace(/^https?:\/\/vitasab\.cl/i, "https://www.vitasab.cl");

/**
 * Datos confirmados de la clínica (docs/DATOS-CLINICA.md, actualizado 2026-07-15).
 * Los `null` con `// TODO PENDIENTE` esperan confirmación; NO rellenar con inventos.
 */
export const clinic: ClinicData = {
  brandName: "VITASAB",
  legalName: "Marco Antonio Barthelemiez Molina E.I.R.L.",
  rut: "76.272.502-9",
  telephone: "+56966682941",
  whatsapp: "+56966682941", // Confirmado: WhatsApp de la asistente (+56 9 6668 2941).
  address: {
    streetAddress: "Rosario Sur 91, oficina 303",
    addressLocality: "Las Condes",
    addressCity: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
    postalCode: null, // TODO PENDIENTE.
  },
  geo: null, // TODO PENDIENTE: latitud/longitud (§1.4 "el metro es la dirección real").
  openingHours: null, // TODO PENDIENTE: horarios de atención y si atienden sábados.
  priceRange: null, // TODO PENDIENTE: rango de precios / valor 1.ª consulta (solo si Marco aprueba).
  imageUrl: null, // TODO PENDIENTE: foto real (sesión dirigida, nunca stock).
  seremiResolution: null, // TODO PENDIENTE: N.º resolución sanitaria SEREMI por sala.
  professionals: [
    {
      name: "Marco Barthelemiez Molina",
      title: "Cirujano Dentista",
      university: "Universidad de los Andes",
      specialty: "Implantología Bucomaxilofacial",
      specialtyUniversity: "Universidad Autónoma",
      bio:
        "Especialista en Implantología Bucomaxilofacial de la Universidad Autónoma, con amplia experiencia en cirugía bucal y en la resolución de desafíos estéticos en todo tipo de dentaduras. Cuenta con más de 15 años de experiencia en rejuvenecimiento facial y tratamientos estéticos en rostro y cuello. A lo largo de su trayectoria, se ha destacado por ofrecer tratamientos integrales y resolutivos, atendiendo tanto a niños como a adultos, con un enfoque completo y personalizado.",
      rnpiUrl: null, // TODO PENDIENTE.
      photoUrl: "/marco-barthelemiez.jpg", // Retrato provisto por Caro (extraído del PDF).
    },
    {
      name: "Daniela Figueroa",
      title: "Cirujano Dentista",
      university: "Universidad de los Andes",
      specialty: "Endodoncia",
      specialtyUniversity: null,
      rnpiUrl: null, // TODO PENDIENTE.
      photoUrl: null, // TODO PENDIENTE.
    },
    {
      name: "María Ignacia Chacón",
      title: "Cirujano Dentista",
      university: "Universidad del Desarrollo",
      specialty: "Ortodoncia",
      specialtyUniversity: null,
      rnpiUrl: null, // TODO PENDIENTE.
      photoUrl: null, // TODO PENDIENTE.
    },
  ],
  // Especialidades CONFIRMADAS (DATOS-CLINICA.md §5.1 → profesional).
  confirmedSpecialties: [
    "Implantología Bucomaxilofacial",
    "Endodoncia",
    "Ortodoncia",
    "Rehabilitación",
    "Periodoncia",
  ],
  // TODO PENDIENTE: asignación de profesional sin confirmar (no se declara sin confirmación explícita).
  pendingSpecialties: ["Estética facial", "Odontología general", "Odontopediatría"],
};
