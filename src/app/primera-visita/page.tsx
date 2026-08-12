import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Tu primera visita",
  description:
    "Tu primera visita comienza con una evaluación integral de tu salud bucal: revisamos cada pieza dental, tu mordida y la musculatura asociada, y te presentamos un plan de tratamiento personalizado con su presupuesto.",
  path: "/primera-visita",
});

export default function PrimeraVisitaPage() {
  const wa = whatsappIntentLink("primeraVisita");
  const tel = `tel:${clinic.telephone}`;

  return (
    <PageLayout
      title="Tu primera visita"
      lead="Tu primera visita comienza con una evaluación integral de tu salud bucal. Revisamos cada pieza dental, tu mordida y la musculatura asociada para detectar necesidades de tratamiento y posibles signos de bruxismo."
    >
      <Prose>
        <p>
          Si necesitamos complementar el diagnóstico, contamos con equipamiento radiográfico en la
          clínica.
        </p>
        <p>
          Con toda la información, definimos urgencias y prioridades y te presentamos un plan de
          tratamiento personalizado junto con su presupuesto, explicándote claramente cada etapa.
        </p>
        <p className="font-serif text-lead text-accent">
          Evaluamos · Diagnosticamos · Priorizamos · Planificamos.
        </p>

        <h2>Cómo agendar</h2>
        <p>Escríbenos y coordinamos tu hora:</p>
        <ul>
          <li>Por WhatsApp.</li>
          <li>Por teléfono: {clinic.telephone}.</li>
        </ul>
      </Prose>

      <div className="mt-8 flex flex-wrap gap-3">
        <CTA href={wa} variant="primary">
          Agendar mi primera consulta
        </CTA>
        <CTA href={tel} variant="secondary">
          Llamar
        </CTA>
      </div>
    </PageLayout>
  );
}
