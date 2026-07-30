/**
 * VITASAB — Casos / resultados (estructura).
 *
 * ⚠️ LEGAL (§6.3): publicar fotos de pacientes identificables con fin promocional exige
 * consentimiento escrito, específico y revocable, + flujo de despublicación en el admin, +
 * análisis de hosting (transferencia internacional). Mientras eso no exista, `imagen` es `null`
 * y se muestra un espacio reservado. NO se inventan casos ni resultados (art. 54: los resultados
 * son esperables, no garantizados).
 */

export interface CasoCategoria {
  readonly slug: string;
  readonly label: string;
}

/** "todos" es el filtro por defecto; las demás son categorías reales de tratamiento. */
export const CASO_CATEGORIAS: readonly CasoCategoria[] = [
  { slug: "todos", label: "Todos" },
  { slug: "implantologia", label: "Implantología" },
  { slug: "rehabilitacion", label: "Rehabilitación" },
  { slug: "ortodoncia", label: "Ortodoncia" },
  { slug: "estetica", label: "Estética" },
];

export interface Caso {
  readonly id: string;
  /** slug de categoría (no "todos"). */
  readonly categoria: string;
  /** Tipo de tratamiento (dato neutro, no una promesa de resultado). */
  readonly titulo: string;
  readonly nota: string;
  /** URL de la imagen. `null` = pendiente de consentimiento (§6.3). */
  readonly imagen: string | null;
}

/**
 * Estructura de ejemplo para mostrar la grilla y los filtros. Son TIPOS de tratamiento, no
 * pacientes reales. Las imágenes quedan en `null` hasta tener consentimiento firmado (§6.3).
 */
export const CASOS: readonly Caso[] = [
  { id: "c1", categoria: "implantologia", titulo: "Implante unitario", nota: "Reposición de una pieza perdida.", imagen: null },
  { id: "c2", categoria: "implantologia", titulo: "Rehabilitación sobre implantes", nota: "Reposición de varias piezas.", imagen: null },
  { id: "c3", categoria: "rehabilitacion", titulo: "Carillas de porcelana", nota: "Mejora de forma y color.", imagen: null },
  { id: "c4", categoria: "rehabilitacion", titulo: "Corona y reconstrucción", nota: "Recuperación de una pieza dañada.", imagen: null },
  { id: "c5", categoria: "ortodoncia", titulo: "Ortodoncia invisible", nota: "Alineación con placas transparentes.", imagen: null },
  { id: "c6", categoria: "ortodoncia", titulo: "Corrección de mordida", nota: "Ordenamiento de la mordida.", imagen: null },
  { id: "c7", categoria: "estetica", titulo: "Diseño de sonrisa", nota: "Plan estético integral.", imagen: null },
  { id: "c8", categoria: "estetica", titulo: "Blanqueamiento", nota: "Aclaramiento del color dental.", imagen: null },
];

export function categoriaLabel(slug: string): string {
  return CASO_CATEGORIAS.find((c) => c.slug === slug)?.label ?? slug;
}
