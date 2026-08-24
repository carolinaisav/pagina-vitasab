import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { clinic } from "@/lib/seo/clinic";
import { whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Formas de pago",
  description:
    "Paga tu tratamiento en línea y en cuotas, de forma simple y segura, con Kuotas. El pago se realiza en la plataforma segura de Kuotas.",
  path: "/formas-de-pago",
});

/**
 * ⟦DATO: LINK DE PAGO DE KUOTAS⟧
 * Pega entre las comillas el enlace fijo que te entrega Kuotas (debe empezar con https://).
 * Mientras esté vacío, la página muestra un aviso "próximamente" en lugar del botón.
 * Ejemplo:  const KUOTAS_PAYMENT_URL = "https://kuotas.cl/pagar/vitasab";
 */
const KUOTAS_PAYMENT_URL = "";

export default function FormasDePagoPage() {
  const wa = whatsappLink("Hola, tengo una consulta sobre las formas de pago.");
  const tel = `tel:${clinic.telephone}`;
  const kuotasReady = KUOTAS_PAYMENT_URL.trim().length > 0;

  return (
    <PageLayout
      eyebrow="Pagos"
      title="Formas de pago"
      lead="Queremos que tu tratamiento sea posible sin que el pago sea una barrera. Puedes pagarlo en línea, de forma simple y segura, y financiarlo en cuotas a través de Kuotas."
    >
      <Prose>
        <h2>Paga y financia en cuotas con Kuotas</h2>
        <p>
          A través de <strong>Kuotas</strong> puedes pagar tu tratamiento en línea y dividirlo en
          cuotas. El pago se realiza en la <strong>plataforma segura de Kuotas</strong>: nosotros no
          vemos ni almacenamos los datos de tu tarjeta.
        </p>
        <p>
          El número de cuotas y las condiciones se muestran en la misma plataforma de Kuotas al
          momento de pagar.
        </p>
      </Prose>

      <div className="mt-8">
        {kuotasReady ? (
          <CTA href={KUOTAS_PAYMENT_URL} variant="primary">
            Pagar en cuotas con Kuotas
          </CTA>
        ) : (
          <p className="inline-flex rounded-full border border-accent/30 bg-warm-tint px-6 py-3 text-base text-ink-soft">
            Estamos habilitando el pago en línea. Muy pronto podrás pagar aquí.
          </p>
        )}
      </div>

      <div className="mt-12">
        <Prose>
          <h2>¿Prefieres otra forma de pago o tienes dudas?</h2>
          <p>
            Si quieres usar otro medio de pago o tienes cualquier duda sobre el financiamiento,
            escríbenos y te ayudamos.
          </p>
        </Prose>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <CTA href={wa} variant="secondary">
          Consultar por WhatsApp
        </CTA>
        <CTA href={tel} variant="secondary">
          Llamar
        </CTA>
      </div>
    </PageLayout>
  );
}
