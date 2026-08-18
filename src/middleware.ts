import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Canonicaliza el dominio (evita páginas duplicadas en Google) y marca noindex las
 * páginas aún incompletas (contenido pendiente), para que Google no las indexe.
 * - Cualquier host que NO sea www.vitasab.cl (apex o *.vercel.app) → 308 a www.
 * - Rutas incompletas → cabecera X-Robots-Tag: noindex.
 */
const CANONICAL_HOST = "www.vitasab.cl";

// Páginas con contenido pendiente. Cuando se redacte su texto real, sacarlas de aquí
// y volver a agregarlas al sitemap (src/app/sitemap.ts).
const NOINDEX_EXACT = new Set<string>([
  "/convenios",
  "/urgencias",
  "/como-llegar",
  "/miedo-al-dentista",
  "/familia",
  "/prevencion-y-salud",
  "/restauracion",
  "/estetica",
  "/legales/terminos",
  "/legales/accesibilidad",
]);

function isNoindex(pathname: string): boolean {
  return NOINDEX_EXACT.has(pathname) || pathname.startsWith("/especialidades");
}

function served(request: NextRequest) {
  if (isNoindex(request.nextUrl.pathname)) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, follow");
    return res;
  }
  return NextResponse.next();
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();

  if (
    host === CANONICAL_HOST ||
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1")
  ) {
    return served(request);
  }

  if (host === "vitasab.cl" || host.endsWith(".vercel.app")) {
    const url = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      `https://${CANONICAL_HOST}`,
    );
    return NextResponse.redirect(url, 308);
  }

  return served(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
