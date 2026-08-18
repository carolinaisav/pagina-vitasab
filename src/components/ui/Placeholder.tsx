import type { ReactNode } from "react";

/**
 * Placeholder OBVIAMENTE marcado para datos aún no confirmados (§0, §8 "placeholders
 * obviamente marcados"). El atributo `data-placeholder` permite a QA detectar restos
 * con un grep antes de producción.
 */
export function Placeholder({ children }: { readonly children: ReactNode }) {
  // En producción NO se muestra: evita exponer notas internas de trabajo al público
  // (§0, §8). En desarrollo sigue visible para que QA detecte lo que falta.
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span
      data-placeholder
      className="rounded border border-dashed border-foreground/40 bg-foreground/5 px-1.5 py-0.5 text-caption text-foreground/70"
    >
      ⟦{children}⟧
    </span>
  );
}
