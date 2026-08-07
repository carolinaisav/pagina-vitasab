import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/clinic";

/**
 * VITASAB — Sitemap.
 * Rutas según docs/ESQUELETO-CONTENIDO.md. Regla §3: NO hay páginas por comuna
 * (doorway pages); solo las rutas reales del mapa del sitio.
 * baseUrl desde `NEXT_PUBLIC_SITE_URL` (fallback https://vitasab.cl) vía `SITE_URL`.
 */

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

interface RouteConfig {
  readonly path: string;
  readonly priority: number;
  readonly changeFrequency: ChangeFrequency;
}

/** Slugs de las 8 especialidades (viven en /especialidades/, fuera del nav de primer nivel). */
const specialtySlugs: readonly string[] = [
  "estetica-facial",
  "rehabilitacion",
  "implantologia",
  "endodoncia",
  "odontologia-general",
  "periodoncia",
  "odontopediatria",
  "ortodoncia",
];

const routes: readonly RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  // Páginas de servicios del menú principal.
  { path: "/odontologia", priority: 0.9, changeFrequency: "monthly" },
  { path: "/estetica-facial", priority: 0.9, changeFrequency: "monthly" },
  // 4 categorías paraguas.
  { path: "/estetica", priority: 0.8, changeFrequency: "monthly" },
  { path: "/restauracion", priority: 0.8, changeFrequency: "monthly" },
  { path: "/prevencion-y-salud", priority: 0.8, changeFrequency: "monthly" },
  { path: "/familia", priority: 0.8, changeFrequency: "monthly" },
  // 8 especialidades.
  ...specialtySlugs.map(
    (slug): RouteConfig => ({
      path: `/especialidades/${slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    }),
  ),
  // Páginas de información / conversión.
  { path: "/equipo", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resultados", priority: 0.6, changeFrequency: "monthly" },
  { path: "/primera-visita", priority: 0.7, changeFrequency: "monthly" },
  { path: "/miedo-al-dentista", priority: 0.6, changeFrequency: "monthly" },
  { path: "/convenios", priority: 0.6, changeFrequency: "monthly" },
  { path: "/urgencias", priority: 0.7, changeFrequency: "monthly" },
  { path: "/como-llegar", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.6, changeFrequency: "monthly" },
  // Legales.
  { path: "/legales/privacidad", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legales/terminos", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legales/accesibilidad", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
