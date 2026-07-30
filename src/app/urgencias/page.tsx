import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinic } from "@/lib/seo/clinic";
import { whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Urgencias",
  description:
    "Si tienes dolor fuerte o algo que no puede esperar, escríbenos o llámanos y te orientamos de inmediato.",
  path: "/urgencias",
});

export default function UrgenciasPage() {
  const wa = whatsappLink("Hola, tengo una urgencia dental y necesito atención hoy");
  const tel = `tel:${clinic.telephone}`;

  return (
    <PageLayout
      title="Urgencias"
      lead="Si tienes dolor fuerte o algo que no puede esperar, no tienes que aguantar hasta la próxima hora disponible. Escríbenos o llámanos y te orientamos de inmediato."
    >
      <Prose>
        <h2>Qué se considera una urgencia</h2>
        <p>Conviene que nos contactes pronto si tienes:</p>
        <ul>
          <li><strong>Dolor de muela intenso</strong> o que no cede con analgésicos.</li>
          <li>Un <strong>golpe</strong> que soltó, movió o quebró un diente.</li>
          <li><strong>Hinchazón</strong> en la encía, la cara o el cuello.</li>
          <li><strong>Sangrado</strong> que no se detiene.</li>
          <li>
            Un <strong>diente que se salió</strong> por completo (guárdalo en leche o suero y
            contáctanos rápido).
          </li>
          <li>
            Una <strong>corona, tapadura o aparato roto</strong> que te molesta o te lastima.
          </li>
        </ul>
        <p>
          Si no estás seguro de si es urgente, escríbenos igual y te ayudamos a decidir. Ante una
          emergencia que afecte tu respiración o un traumatismo grave, acude a un servicio de
          urgencia médica.
        </p>

        <h2>Cómo contactarnos ahora</h2>
        <ul>
          <li><strong>WhatsApp:</strong> con el mensaje ya escrito para ti.</li>
          <li>
            <strong>Teléfono de urgencias:</strong>{" "}
            <Placeholder>DATO: teléfono de urgencias (¿mismo {clinic.telephone}?)</Placeholder>
          </li>
          <li>
            <strong>Horario de urgencias:</strong>{" "}
            <Placeholder>DATO: horario de atención de urgencias</Placeholder>
          </li>
        </ul>
        <p>
          <Placeholder>
            COPY: qué pasa fuera de horario — no prometer atención 24/7 si no existe (art. 46)
          </Placeholder>
        </p>
      </Prose>

      <div className="mt-8 flex flex-wrap gap-3">
        <CTA href={wa} variant="primary">
          Escribir por WhatsApp
        </CTA>
        <CTA href={tel} variant="secondary">
          Llamar
        </CTA>
      </div>
    </PageLayout>
  );
}
