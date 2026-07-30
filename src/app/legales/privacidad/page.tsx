import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad",
  description:
    "Política de privacidad de VITASAB. Documento en preparación, pendiente de revisión legal.",
  path: "/legales/privacidad",
});

// §0: NO se inventa texto legal. Página honesta marcada como "En preparación".
// El detalle de bloqueantes está en docs/LEGAL.md (revisión por abogado = prerrequisito de producción).
export default function PrivacidadPage() {
  return (
    <PageLayout
      title="Política de privacidad"
      lead="Esta política aún está en preparación."
    >
      <Prose>
        <p>
          <Placeholder>
            EN PREPARACIÓN — la política de privacidad está siendo redactada y debe
            ser revisada por un abogado antes de publicarse (prerrequisito de
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
