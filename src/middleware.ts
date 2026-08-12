import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Canonicaliza el dominio para evitar páginas duplicadas en Google.
 * Cualquier acceso por un dominio que NO sea el canónico (el apex `vitasab.cl`
 * o las URLs `*.vercel.app` de los despliegues) se redirige con 308 a
 * `www.vitasab.cl` conservando la ruta. En local (`localhost`) no hace nada.
 */
const CANONICAL_HOST = "www.vitasab.cl";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();

  if (
    host === CANONICAL_HOST ||
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1")
  ) {
    return NextResponse.next();
  }

  if (host === "vitasab.cl" || host.endsWith(".vercel.app")) {
    const url = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      `https://${CANONICAL_HOST}`,
    );
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
