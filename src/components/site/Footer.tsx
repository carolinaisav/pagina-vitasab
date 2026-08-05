import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-24 bg-sand">
      <Container className="grid gap-10 py-12 sm:grid-cols-2">
        <div>
          <Image
            src="/vitasab-logo-full.png"
            alt="VITASAB — Implantología y Estética Dental"
            width={838}
            height={397}
            className="h-auto w-44"
          />
          <p className="mt-4 text-base text-ink-soft">
            Clínica dental en Las Condes, Santiago.
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Contacto</h2>
          <ul className="mt-3 flex flex-col gap-2 text-base">
            <li>
              {clinic.address.streetAddress}, {clinic.address.addressLocality}
            </li>
            <li>
              <a
                href={`tel:${clinic.telephone}`}
                className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline"
              >
                {clinic.telephone}
              </a>
            </li>
            <li>
              <a
                href={whatsappIntentLink("agendar")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline"
              >
                Agendar por WhatsApp
              </a>
            </li>
            <li className="text-ink-soft">
              Horario: <Placeholder>DATO: horario de atención</Placeholder>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
