import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad",
  description: "Cómo Clínica Vitasab trata y protege tus datos personales.",
  path: "/legales/privacidad",
});

export default function PrivacidadPage() {
  return (
    <PageLayout title="Política de privacidad">
      <Prose>
        <p>
          En Clínica Vitasab ({clinic.legalName}) valoramos tu privacidad. Esta política explica
          qué datos recopilamos, con qué fin y cómo los cuidamos, de acuerdo con la normativa
          chilena de protección de datos personales (Ley N.º 19.628).
        </p>

        <h2>Responsable</h2>
        <p>
          {clinic.legalName}, con domicilio en {clinic.address.streetAddress},{" "}
          {clinic.address.addressLocality}, {clinic.address.addressCity}. Contacto:{" "}
          {clinic.telephone}.
        </p>

        <h2>Qué datos recopilamos</h2>
        <ul>
          <li>
            Datos de contacto que nos entregas al escribirnos por WhatsApp, llamarnos o completar
            un formulario: nombre, teléfono y el motivo de tu consulta.
          </li>
          <li>
            Datos de salud que se generan en el contexto de tu atención odontológica, tratados con
            especial reserva y solo por el equipo clínico.
          </li>
        </ul>

        <h2>Para qué los usamos</h2>
        <ul>
          <li>Coordinar y agendar tus horas de atención.</li>
          <li>Realizar tu diagnóstico, tratamiento y seguimiento.</li>
          <li>Responder tus consultas y mantener contacto contigo.</li>
        </ul>
        <p>No vendemos ni cedemos tus datos a terceros con fines comerciales.</p>

        <h2>Terceros y herramientas</h2>
        <p>
          Este sitio usa servicios de terceros que pueden procesar datos técnicos: el mapa de
          Google Maps (Google), el enlace de contacto por WhatsApp (Meta) y el alojamiento del
          sitio (Vercel). Cada uno se rige por sus propias políticas de privacidad.
        </p>

        <h2>Conservación y seguridad</h2>
        <p>
          Conservamos tus datos el tiempo necesario para los fines descritos y según las
          obligaciones legales aplicables a una prestación de salud. Aplicamos medidas razonables
          para proteger tu información frente a accesos no autorizados.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes solicitar el acceso, la rectificación, la cancelación o la oposición al
          tratamiento de tus datos personales escribiéndonos al {clinic.telephone} o de forma
          presencial en la clínica.
        </p>

        <h2>Cookies</h2>
        <p>
          El sitio no usa cookies de seguimiento propias. El mapa de Google incrustado puede
          instalar cookies de Google al cargarse.
        </p>

        <h2>Cambios</h2>
        <p>
          Podemos actualizar esta política. La versión vigente estará siempre publicada en esta
          página.
        </p>
      </Prose>
    </PageLayout>
  );
}
