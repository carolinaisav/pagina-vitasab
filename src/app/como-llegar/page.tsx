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

        <p>
          ¿Prefieres coordinar por mensaje? Escríbenos y te orientamos para llegar.
        </p>
      </Prose>

      <section className="mt-10">
        <h2 className="font-serif text-h3">Mapa</h2>
        {/* Google Maps embed (sin API key). NOTA A8: iframe de un tercero (Google) —
            declararlo en el aviso de cookies / política de privacidad. */}
        <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-accent/25">
          <iframe
            title="Mapa de la ubicación de VITASAB — Rosario Sur 91, Las Condes"
            src="https://maps.google.com/maps?q=Rosario%20Sur%2091,%20Las%20Condes,%20Santiago,%20Chile&z=16&output=embed"
            className="block h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <div className="mt-8">
        <CTA href={wa} variant="primary">
          Escríbenos por WhatsApp
        </CTA>
      </div>
    </PageLayout>
  );
}
