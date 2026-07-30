import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Tu primera visita",
  description:
    "La primera hora es, sobre todo, una conversación. Revisamos con calma, te explicamos lo que vemos en palabras simples, y sales sabiendo en qué estás.",
  path: "/primera-visita",
});

const STEPS: readonly { title: string; body: string }[] = [
  {
    title: "Te recibimos.",
    body: "Llegas, te registramos y esperas poco. Si vienes acompañando a un familiar, puedes entrar con él o ella al box.",
  },
  {
    title: "Conversamos.",
    body: "Antes de mirar nada, escuchamos: qué te molesta, desde cuándo, qué te gustaría resolver y qué te preocupa. También cómo te ha ido en dentistas anteriores.",
  },
  {
    title: "Revisamos.",
    body: "Hacemos un examen de tu boca sin apuro. Si hace falta una radiografía u otro examen para ver bien, te lo explicamos antes de tomarlo.",
  },
  {
    title: "Te explicamos lo que vemos.",
    body: "Con lenguaje claro, sin tecnicismos innecesarios. Puedes preguntar todo lo que quieras las veces que necesites.",
  },
  {
    title: "Plan y presupuesto.",
    body: "Si hay algo que tratar, te presentamos las opciones con su costo por escrito. Te decimos qué es urgente y qué puede esperar.",
  },
  {
    title: "Tú decides.",
    body: "No firmas ni pagas un tratamiento en esa misma hora si no quieres. Puedes llevarte el presupuesto, pensarlo y volver cuando estés listo.",
  },
];

export default function PrimeraVisitaPage() {
  const wa = whatsappIntentLink("primeraVisita");
  const tel = `tel:${clinic.telephone}`;

  return (
    <PageLayout
      title="Tu primera visita"
      lead="La primera hora es, sobre todo, una conversación. Nos cuentas qué te trae, revisamos con calma y te explicamos lo que vemos, en palabras simples. No empezamos ningún tratamiento ese mismo día: sales sabiendo en qué estás y qué opciones tienes."
    >
      <Prose>
        <h2>Qué pasa, paso a paso</h2>
        <ol className="flex flex-col gap-3 pl-5 [&_li]:list-decimal">
          {STEPS.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong> {s.body}
            </li>
          ))}
        </ol>

        <h2>Cuánto dura</h2>
        <p>
          Reserva algo de holgura en tu día. La primera hora suele tomar{" "}
          <Placeholder>DATO: duración aproximada (p. ej. 40–60 min)</Placeholder>.
          Preferimos darte el tiempo de conversar bien a apurarte.
        </p>

        <h2>Qué llevar</h2>
        <ul>
          <li>Tu <strong>cédula de identidad</strong>.</li>
          <li>
            Los datos de tu <strong>previsión</strong> (isapre o Fonasa) y, si tienes, tu{" "}
            <strong>seguro complementario</strong>.
          </li>
          <li>
            <strong>Radiografías o exámenes previos</strong>, si los tienes a mano. No es
            obligatorio.
          </li>
          <li>
            La <strong>lista de medicamentos</strong> que tomas, si tomas alguno, y alergias
            conocidas.
          </li>
          <li>
            Si el paciente es un niño o un adulto que necesita acompañamiento, quien lo acompaña
            es bienvenido en el box.
          </li>
        </ul>

        <h2>Cómo se paga</h2>
        <p>
          Te entregamos el presupuesto por escrito antes de empezar. Aceptamos{" "}
          <Placeholder>DATO: medios de pago</Placeholder> y ofrecemos{" "}
          <Placeholder>DATO: N° de cuotas sin interés</Placeholder> cuotas sin interés.
        </p>
        <p>
          Si tienes convenio o seguro, en{" "}
          <Link href="/convenios">Convenios y financiamiento</Link> te explicamos cómo funciona y
          qué depende de tu aseguradora.
        </p>
        <p>
          El valor de la primera consulta te lo confirmamos al agendar.{" "}
          <Placeholder>DATO: precio 1ª consulta — publicar solo si Marco aprueba (§5.4)</Placeholder>
        </p>

        <h2>Cómo agendar</h2>
        <p>Escríbenos y coordinamos tu hora:</p>
        <ul>
          <li>Por WhatsApp, con el mensaje ya escrito para ti.</li>
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
