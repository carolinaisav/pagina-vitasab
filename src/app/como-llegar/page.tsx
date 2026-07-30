import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Cómo llegar",
  description:
    "Dónde estamos y cómo llegar a VITASAB en Las Condes: metro, estacionamiento y referencias.",
  path: "/como-llegar",
});

// El metro es la dirección real (§1.4): va primero, antes del mapa.
export default function ComoLlegarPage() {
  const { address } = clinic;
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout
      title="Cómo llegar"
      lead="Estamos en Las Condes. Aquí te dejamos las referencias para llegar con calma."
    >
      <Prose>
        <h2>En metro</h2>
        <p>
          Estación más cercana:{" "}
          <Placeholder>DATO: estación de metro más cercana</Placeholder>.
        </p>

        <h2>Dirección</h2>
        <p>
          {address.streetAddress}, {address.addressLocality}, {address.addressCity}.
        </p>

        <h2>Estacionamiento</h2>
        <p>
          <Placeholder>DATO: ¿hay estacionamiento?</Placeholder>
        </p>

        <h2>Mapa</h2>
        <p>
          <Placeholder>FOTO/MAPA: mapa embebido pendiente</Placeholder>
        </p>

        <p>
          ¿Prefieres coordinar por mensaje? Escríbenos y te orientamos para llegar.
        </p>
      </Prose>

      <div className="mt-8">
        <CTA href={wa} variant="primary">
          Escríbenos por WhatsApp
        </CTA>
      </div>
    </PageLayout>
  );
}
