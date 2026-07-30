import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Cómo contactar a VITASAB: teléfono, WhatsApp, dirección y horario de atención en Las Condes.",
  path: "/contacto",
});

export default function ContactoPage() {
  const { address, telephone } = clinic;
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout
      title="Contacto"
      lead="Escríbenos o llámanos y coordinamos tu hora. Te respondemos por WhatsApp."
    >
      <Prose>
        <h2>Teléfono</h2>
        <p>
          <a href={`tel:${telephone}`}>{telephone}</a>
        </p>

        <h2>Dirección</h2>
        <p>
          {address.streetAddress}, {address.addressLocality}, {address.addressCity}.
        </p>

        <h2>Horario de atención</h2>
        <p>
          <Placeholder>DATO: horario</Placeholder>
        </p>
      </Prose>

      <div className="mt-8">
        <CTA href={wa} variant="primary">
          Agendar por WhatsApp
        </CTA>
      </div>
    </PageLayout>
  );
}
