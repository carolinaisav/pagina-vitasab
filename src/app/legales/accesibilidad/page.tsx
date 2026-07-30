import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Accesibilidad",
  description:
    "Declaración de accesibilidad de VITASAB: objetivo WCAG 2.2 AA, navegación por teclado, zoom y lectores de pantalla.",
  path: "/legales/accesibilidad",
});

export default function AccesibilidadPage() {
  const { telephone } = clinic;
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout
      title="Accesibilidad"
      lead="Queremos que este sitio sea usable para todas las personas."
    >
      <Prose>
        <h2>Nuestro objetivo</h2>
        <p>
          En VITASAB buscamos cumplir con las Pautas de Accesibilidad para el
          Contenido Web (WCAG 2.2), nivel AA.
        </p>

        <h2>Qué soporta el sitio</h2>
        <ul>
          <li>Navegación por teclado.</li>
          <li>Ampliación (zoom) del contenido sin pérdida de información.</li>
          <li>Uso con lectores de pantalla.</li>
          <li>Cuerpo de texto de 18px para facilitar la lectura.</li>
        </ul>

        <h2>Si encuentras una barrera</h2>
        <p>
          Si algo te dificulta usar el sitio, cuéntanos: puedes escribirnos por
          WhatsApp o llamarnos al{" "}
          <a href={`tel:${telephone}`}>{telephone}</a>. Lo revisamos y buscamos
          una solución.
        </p>

        <h2>Última revisión</h2>
        <p>
          <Placeholder>DATO: fecha de última revisión de accesibilidad</Placeholder>
        </p>
      </Prose>

      <div className="mt-8">
        <CTA href={wa} variant="secondary">
          Reportar una barrera por WhatsApp
        </CTA>
      </div>
    </PageLayout>
  );
}
