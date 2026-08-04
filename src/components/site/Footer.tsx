import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

const LEGAL = [
  { href: "/legales/privacidad", label: "Privacidad" },
  { href: "/legales/terminos", label: "Términos y condiciones" },
  { href: "/legales/accesibilidad", label: "Accesibilidad" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-sand">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-h4">
            VITASAB<span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-base text-ink-soft">
            Clínica dental en Las Condes, Santiago.
          </p>
        </div>

        <div>
          <h2 className="eyebrow">
            Contacto
          </h2>
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
            <li className="text-foreground/70">
              Horario: <Placeholder>DATO: horario de atención</Placeholder>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">
            Legales
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-base">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">
            Empresa
          </h2>
          <p className="mt-3 text-base text-ink-soft">{clinic.legalName}</p>
          <p className="text-base text-ink-soft">RUT {clinic.rut}</p>
          <p className="mt-2 text-caption text-ink-soft">
            Resolución sanitaria SEREMI: <Placeholder>DATO: N° resolución</Placeholder>
          </p>
        </div>
      </Container>

      <Container className="border-t border-ink/10 py-6">
        <p className="text-caption text-ink-soft">
          © {year} VITASAB · {clinic.legalName}
        </p>
      </Container>
    </footer>
  );
}
