/**
 * VITASAB — Catálogo de especialidades (fuente única de verdad).
 *
 * Las 8 especialidades (§5.1). Los `slug` coinciden con los enlaces de las páginas de categoría.
 * La asignación de profesional sale de `docs/DATOS-CLINICA.md`; lo que está PENDIENTE de confirmar
 * queda en `professional: null` (§0, no se inventa). "Rehabilitación" pertenece a dos categorías.
 */

export interface SpecialtyCategory {
  readonly label: string;
  readonly href: string;
}

export interface Specialty {
  readonly slug: string;
  readonly name: string;
  readonly categories: readonly SpecialtyCategory[];
  /** Nombre del profesional a cargo, o `null` si está PENDIENTE de confirmar. */
  readonly professional: string | null;
}

const CAT = {
  estetica: { label: "Estética", href: "/estetica" },
  restauracion: { label: "Restauración", href: "/restauracion" },
  prevencion: { label: "Prevención y salud", href: "/prevencion-y-salud" },
  familia: { label: "Familia", href: "/familia" },
} as const;

export const SPECIALTIES: readonly Specialty[] = [
  {
    slug: "estetica-facial",
    name: "Estética facial",
    categories: [CAT.estetica],
    professional: null, // PENDIENTE (§6.3, mayor sensibilidad legal).
  },
  {
    slug: "rehabilitacion",
    name: "Rehabilitación",
    categories: [CAT.estetica, CAT.restauracion],
    professional: "Marco Barthelemiez Molina",
  },
  {
    slug: "implantologia",
    name: "Implantología",
    categories: [CAT.restauracion],
    professional: "Marco Barthelemiez Molina",
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    categories: [CAT.restauracion],
    professional: "Daniela Figueroa",
  },
  {
    slug: "odontologia-general",
    name: "Odontología general",
    categories: [CAT.prevencion],
    professional: null, // PENDIENTE de confirmar.
  },
  {
    slug: "periodoncia",
    name: "Periodoncia",
    categories: [CAT.prevencion],
    professional: "Marco Barthelemiez Molina",
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatría",
    categories: [CAT.familia],
    professional: null, // PENDIENTE — nadie designado (atención de niños).
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    categories: [CAT.familia],
    professional: "María Ignacia Chacón",
  },
];

export function getSpecialty(slug: string): Specialty | undefined {
  return SPECIALTIES.find((s) => s.slug === slug);
}
