/**
 * VITASAB — Componente server que inyecta JSON-LD en el `<head>`/`<body>`.
 *
 * Patrón estándar y seguro para JSON-LD propio: `<script type="application/ld+json">`
 * con `dangerouslySetInnerHTML`. El objeto es controlado (no hay entrada de usuario);
 * además se escapa `<` a `<` como defensa en profundidad contra un `</script>` breakout.
 */

import type { ReactElement } from "react";
import type { DentistJsonLd } from "@/lib/seo/schema";

export interface JsonLdProps {
  readonly data: DentistJsonLd;
}

export function JsonLd({ data }: JsonLdProps): ReactElement {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
