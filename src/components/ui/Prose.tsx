import type { ReactNode } from "react";

/**
 * Contenedor de texto largo con medida de lectura (~65ch) y ritmo vertical.
 * Estiliza los elementos hijos (h2/h3/p/ul/a) sin plugin de typography.
 */
export function Prose({ children }: { readonly children: ReactNode }) {
  return (
    <div className="reading-measure flex flex-col gap-5 text-base text-foreground/90 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-6 [&_h2]:font-serif [&_h2]:text-h3 [&_h2]:text-foreground [&_h3]:mt-4 [&_h3]:font-serif [&_h3]:text-h4 [&_h3]:text-foreground [&_li]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}
