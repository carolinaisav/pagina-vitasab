import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IconInstagram, IconLocation, IconPhone, IconWhatsApp } from "@/components/ui/icons";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-24 bg-sand">
      <Container className="grid gap-10 py-12 sm:grid-cols-2">
        <div>
          <Image
            src="/vitasab-logo-10a-v2.png"
            alt="VITASAB — Implantología & Estética Dental"
            width={914}
            height={388}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-base text-ink-soft">
            Clínica dental en Las Condes, Santiago.
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Contacto</h2>
          <ul className="mt-4 flex flex-col gap-3 text-base">
            <li className="flex items-start gap-3">
              <IconLocation className="mt-1 shrink-0 text-accent" />
              <span>
                {clinic.address.streetAddress}, {clinic.address.addressLocality}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone className="shrink-0 text-accent" />
              <a
                href={`tel:${clinic.telephone}`}
                className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline"
              >
                {clinic.telephone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconWhatsApp className="shrink-0 text-accent" />
              <a
                href={whatsappIntentLink("agendar")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline"
              >
                Agendar por WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconInstagram className="shrink-0 text-accent" />
              <a
                href="https://www.instagram.com/clinica.vitasab/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
          <p className="mt-3 text-caption text-ink-soft">
            Estacionamientos de visita disponibles en el edificio.
          </p>
        </div>
      </Container>

      <Container className="border-t border-ink/10 py-5">
        <Link
          href="/legales/privacidad"
          className="text-caption text-ink-soft underline-offset-4 hover:underline"
        >
          Política de Privacidad
        </Link>
      </Container>
    </footer>
  );
}
