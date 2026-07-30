import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinic } from "@/lib/seo/clinic";
import { whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Convenios y financiamiento",
  description:
    "Cómo se paga y qué cubre tu previsión, sin letra chica. Con qué trabajamos y qué depende de tu aseguradora.",
  path: "/convenios",
});

export default function ConveniosPage() {
  const wa = whatsappLink("Hola, quiero consultar por convenios y formas de pago");
  const tel = `tel:${clinic.telephone}`;

  return (
    <PageLayout
      title="Convenios y financiamiento"
      lead="Queremos que sepas de antemano cómo se paga y qué cubre tu previsión, sin letra chica. Acá te explicamos con qué trabajamos y qué depende de tu aseguradora."
    >
      <Prose>
        <h2>Previsión y convenios</h2>
        <p>Atendemos a pacientes de:</p>
        <ul>
          <li>
            <strong>Fonasa:</strong>{" "}
            <Placeholder>DATO: modalidad(es) que aplican</Placeholder>
          </li>
          <li>
            <strong>Isapres:</strong>{" "}
            <Placeholder>DATO: isapres con convenio o “reembolso según tu plan”</Placeholder>
          </li>
          <li>
            <strong>Seguros complementarios:</strong>{" "}
            <Placeholder>DATO: con cuáles se trabaja o cómo se gestiona el reembolso</Placeholder>
          </li>
          <li>
            <strong>Excedentes:</strong>{" "}
            <Placeholder>DATO: si se pueden usar y cómo</Placeholder>
          </li>
        </ul>
        <p>El detalle de coberturas y topes lo revisamos contigo al presupuestar.</p>

        <h2>Formas de pago</h2>
        <ul>
          <li>
            <Placeholder>DATO: medios de pago (efectivo, débito, crédito, transferencia…)</Placeholder>
          </li>
          <li>
            <Placeholder>DATO: N° de cuotas sin interés</Placeholder> cuotas sin interés{" "}
            <Placeholder>DATO: con qué tarjetas / condiciones</Placeholder>
          </li>
        </ul>

        <h2>Lo que sí podemos decirte con certeza</h2>
        <p>
          Antes de empezar cualquier tratamiento, te entregamos el presupuesto por escrito, con los
          valores detallados. No hay costos ocultos: si algo cambia durante el tratamiento, lo
          conversamos antes.
        </p>

        <h2>Lo honesto: dónde está el límite</h2>
        <p>
          Podemos ayudarte a preparar los documentos y a entender tu cobertura, pero{" "}
          <strong>la aprobación y los montos finales dependen siempre de tu aseguradora</strong>, no
          de nosotros. Te decimos lo que sabemos y lo que no, para que no te lleves sorpresas.
        </p>
        <p>
          Si tienes dudas sobre tu plan, escríbenos y lo revisamos juntos antes de que agendes.
        </p>
      </Prose>

      <div className="mt-8 flex flex-wrap gap-3">
        <CTA href={wa} variant="primary">
          Consultar por WhatsApp
        </CTA>
        <CTA href={tel} variant="secondary">
          Llamar
        </CTA>
      </div>
    </PageLayout>
  );
}
