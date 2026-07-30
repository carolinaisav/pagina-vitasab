import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de VITASAB. Documento en preparación, pendiente de revisión legal.",
  path: "/legales/terminos",
});

// §0: NO se inventa texto legal. Página honesta marcada como "En preparación".
// El detalle de bloqueantes está en docs/LEGAL.md (revisión por abogado = prerrequisito de producción).
export default function TerminosPage() {
  return (
    <PageLayout
      title="Términos y condiciones"
      lead="Estos términos aún están en preparación."
    >
      <Prose>
        <p>
          <Placeholder>
            EN PREPARACIÓN — los términos y condiciones están siendo redactados y
            deben ser revisados por un abogado antes de publicarse (prerrequisito de
            producción). Aún no hay un texto legal vigente en esta página.
          </Placeholder>
        </p>
        <p>
          Referencia interna del proyecto: docs/LEGAL.md.
        </p>
      </Prose>
    </PageLayout>
  );
}
