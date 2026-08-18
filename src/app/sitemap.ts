import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/clinic";

/**
 * VITASAB — Sitemap.
 * Solo se listan páginas con contenido REAL y listo. Las páginas aún incompletas
 * (con contenido pendiente) NO se incluyen y se marcan noindex en src/middleware.ts;
 * cuando se redacte su contenido, se agregan aquí y se sacan del noindex.
 * baseUrl (con www) desde `SITE_URL`.
 */

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

interface RouteConfig {
  readonly path: string;
  readonly priority: number;
  readonly changeFrequency: ChangeFrequency;
}

const routes: readonly RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/odontologia", priority: 0.9, changeFrequency: "monthly" },
  { path: "/estetica-facial", priority: 0.9, changeFrequency: "monthly" },
  { path: "/resultados", priority: 0.8, changeFrequency: "monthly" },
  { path: "/equipo", priority: 0.7, changeFrequency: "monthly" },
  { path: "/primera-visita", priority: 0.7, changeFrequency: "monthly" },
  { path: "/alianzas", priority: 0.6, changeFrequency: "monthly" },
  { path: "/legales/privacidad", priority: 0.3, changeFrequency: "yearly" },
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
