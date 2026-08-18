import type { ReactNode } from "react";

/**
 * `template.tsx` se re-monta en cada navegación (a diferencia de `layout.tsx`),
 * así que dispara la animación `.page-fade` (fundido suave al cambiar de página).
 * Respeta prefers-reduced-motion vía el bloque de movimiento en globals.css.
 */
export default function Template({ children }: { readonly children: ReactNode }) {
  return <div className="page-fade">{children}</div>;
}
