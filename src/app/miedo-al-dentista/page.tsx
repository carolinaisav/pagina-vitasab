import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinic } from "@/lib/seo/clinic";
import { whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Pacientes con miedo al dentista",
  description:
    "Tenerle miedo al dentista es común y tiene explicación. Si es tu caso, hacemos las cosas de otra manera: a tu ritmo y explicándote cada paso.",
  path: "/miedo-al-dentista",
});

export default function MiedoAlDentistaPage() {
  const wa = whatsappLink(
    "Hola, me da miedo el dentista y me gustaría agendar una primera hora con calma",
  );
  const tel = `tel:${clinic.telephone}`;

  return (
    <PageLayout
      title="Pacientes con miedo al dentista"
      lead="Tenerle miedo al dentista es común y tiene explicación: casi siempre viene de una experiencia concreta, muchas veces de la infancia. No es un defecto tuyo ni algo que tengas que justificar. Si es tu caso, esta página es para ti."
    >
      <Prose>
        <h2>Lo que reconocemos</h2>
        <p>
          Sabemos que para algunas personas pedir la hora ya cuesta. Que a veces se posterga una
          molestia durante años por no volver a sentarse en el sillón. No venimos a decirte que “no
          es para tanto”. Venimos a hacer las cosas de otra manera.
        </p>

        <h2>Qué hacemos distinto</h2>
        <ul>
          <li>
            <strong>Partimos conversando, no atendiendo.</strong> La primera hora puede ser solo
            para conocernos, mirar sin hacer nada y armar un plan a tu ritmo. Tú marcas la velocidad.
          </li>
          <li>
            <strong>Te explicamos antes de cada paso.</strong> Nada pasa sin que sepas qué es, por
            qué y cuánto va a durar. Sin sorpresas.
          </li>
          <li>
            <strong>Acordamos una señal para parar.</strong> Si en algún momento necesitas un
            descanso, lo haces. Levantas la mano y nos detenemos.
          </li>
          <li>
            <strong>Vamos por partes.</strong> No es obligatorio resolver todo de una vez. Podemos
            empezar por lo más simple y avanzar cuando te sientas cómodo.
          </li>
          <li>
            <strong>Puedes venir acompañado.</strong> Si te ayuda tener a alguien de confianza al
            lado, es bienvenido.
          </li>
        </ul>
        <p>
          <Placeholder>
            COPY: sedación consciente u otra técnica de manejo de ansiedad — incluir solo con
            confirmación de Marco (§0)
          </Placeholder>
        </p>

        <h2>Cómo empezar</h2>
        <p>
          No hace falta que llegues con todo decidido. Un primer paso posible es escribirnos y
          contarnos que te da miedo o que hace tiempo que no vas al dentista. Esa sola frase nos
          basta para recibirte con más calma.
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
