import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { IconInstagram, IconLocation, IconPhone, IconWhatsApp } from "@/components/ui/icons";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { whatsappIntentLink } from "@/lib/whatsapp";
import { clinic } from "@/lib/seo/clinic";

const AREAS = [
  { name: "Ortodoncia invisible", href: "/odontologia#ortodoncia" },
  { name: "Ortodoncia convencional", href: "/odontologia#ortodoncia" },
  { name: "Estética dental", href: "/odontologia#estetica-dental" },
  { name: "Carillas", href: "/odontologia#estetica-dental" },
  { name: "Bruxismo", href: "/odontologia#bruxismo" },
  { name: "Rehabilitación", href: "/odontologia#rehabilitacion" },
  { name: "Odontología general", href: "/odontologia#odontologia-general" },
  { name: "Implantes dentales", href: "/odontologia#implantes" },
  { name: "Endodoncia", href: "/odontologia#endodoncia" },
  { name: "Blanqueamiento dental", href: "/odontologia#estetica-dental" },
] as const;

const HIGHLIGHTS = [
  {
    href: "/primera-visita",
    title: "Tu primera visita",
    blurb: "Qué pasa paso a paso, cuánto dura y qué llevar.",
  },
  {
    href: "/convenios",
    title: "Convenios y financiamiento",
    blurb: "Qué cubre tu previsión, con la verdad por delante.",
  },
  {
    href: "/equipo",
    title: "Conoce al equipo",
    blurb: "Especialistas con título verificable en el RNPI.",
  },
] as const;

const STATS: readonly { readonly value: string; readonly label: string }[] = [
  { value: "15", label: "años de experiencia" },
  { value: "Facilidades de pago", label: "con tarjeta de crédito" },
  { value: "Lunes a Viernes", label: "9.30 a 19.15 hrs" },
  { value: "Rosario Sur / Apoquindo", label: "a pasos del Metro Manquehue" },
];

function CardLink({
  href,
  title,
  blurb,
}: {
  readonly href: string;
  readonly title: string;
  readonly blurb: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[2rem] border border-accent/25 bg-sand p-8 transition-[box-shadow,border-color] hover:border-accent/50 hover:shadow-[0_12px_44px_rgba(34,52,60,0.10)]"
    >
      <h3 className="font-serif text-h4">{title}</h3>
      <p className="mt-2 text-base text-ink-soft">{blurb}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-base font-medium text-accent group-hover:gap-2">
        Ver más <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

export default function Home() {
  const wa = whatsappIntentLink("agendar");

  return (
    <>
      <Header />
      <main id="contenido">
        {/* Hero — foto a sangre por la derecha con borde izquierdo curvo (ref. AS) */}
        <section className="relative overflow-hidden">
          <svg aria-hidden className="pointer-events-none absolute h-0 w-0">
            <defs>
              <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
                <path d="M0.025 0 C0.008 0.4, 0.008 0.6, 0.025 1 L1 1 L1 0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Foto (escritorio): a sangre por la derecha, borde izquierdo curvo */}
          <div
            className="absolute inset-y-0 right-0 hidden w-1/2 lg:block"
            style={{ clipPath: "url(#hero-curve)" }}
          >
            <Image
              src="/foto-inicio.png"
              alt="Recepción de la clínica VITASAB en Las Condes"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>

          <Container className="relative z-10 py-16 sm:py-24 lg:min-h-[600px] lg:py-32">
            <div className="lg:max-w-[46%]">
              <h1 className="focus-in font-serif leading-[0.92]">
                <span className="block text-h3 text-ink-soft sm:text-h2">Clínica</span>
                <span className="block text-[3.5rem] text-ink sm:text-[4.5rem] lg:text-[6rem]">
                  VITASAB
                </span>
              </h1>
              <p className="mt-6 max-w-md font-serif text-h4 text-ink-soft">
                Clínica dental ubicada en Las Condes, a pasos del Metro Manquehue.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA href={wa} variant="primary">
                  Agendar Cita
                </CTA>
                <CTA href="/primera-visita" variant="secondary">
                  Cómo es tu primera visita
                </CTA>
              </div>
            </div>

            {/* Foto (móvil): a lo ancho, abajo */}
            <div className="mt-10 aspect-[4/3] overflow-hidden rounded-[1.5rem] lg:hidden">
              <Image
                src="/foto-inicio.png"
                alt="Recepción de la clínica VITASAB en Las Condes"
                width={1540}
                height={1021}
                sizes="100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Container>
        </section>

        {/* Diferenciadores concretos (antídoto al bloque de 4 adjetivos, §4.3) */}
        <section className="mt-20 sm:mt-32">
          <Reveal>
            <Container>
              <div className="grid gap-10 rounded-[2rem] border border-accent/25 bg-sand px-8 py-14 sm:grid-cols-2 sm:px-12 lg:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-h4 text-accent">{s.value}</div>
                    <div className="mt-2 text-base text-ink-soft">{s.label}</div>
                  </div>
                ))}
              </div>
            </Container>
          </Reveal>
        </section>

        {/* Servicios — índice curado (destino de "Servicios" en el menú) */}
        <section id="servicios" className="mt-20 scroll-mt-32 sm:mt-32">
          <Reveal>
            <Container>
              <span className="eyebrow">Servicios</span>
              <h2 className="mt-4 max-w-2xl font-serif text-h2">
                Nuestras áreas de atención
              </h2>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {AREAS.map((area) => (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className="group flex h-full items-center gap-3 rounded-2xl border border-accent/25 bg-sand px-6 py-5 transition-[border-color,box-shadow] hover:border-accent/50 hover:shadow-[0_10px_36px_rgba(34,52,60,0.08)]"
                    >
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span className="font-serif text-lead group-hover:text-accent">
                        {area.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </Reveal>
        </section>

        {/* Urgencias — realce cálido, no alarmista (§5.3) */}
        <section className="mt-20 sm:mt-32">
          <Reveal>
            <Container>
              <div className="flex flex-col gap-5 rounded-[2rem] border border-accent/30 bg-warm-tint px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12">
                <div className="max-w-xl">
                  <span className="eyebrow">Urgencias</span>
                  <h2 className="mt-3 font-serif text-h3">¿Algo que no puede esperar?</h2>
                  <p className="mt-2 text-base text-ink-soft">
                    Dolor fuerte, un golpe o una hinchazón. Escríbenos o llámanos y te orientamos
                    de inmediato.
                  </p>
                </div>
                <CTA href="/urgencias" variant="secondary">
                  Ver urgencias
                </CTA>
              </div>
            </Container>
          </Reveal>
        </section>

        {/* Enlaces destacados */}
        <section className="mt-20 sm:mt-32">
          <Reveal>
            <Container>
              <div className="grid gap-5 sm:grid-cols-3">
                {HIGHLIGHTS.map((h) => (
                  <CardLink key={h.href} href={h.href} title={h.title} blurb={h.blurb} />
                ))}
              </div>
            </Container>
          </Reveal>
        </section>

        {/* Contacto — mapa + dirección al final (destino de "Contacto" en el menú) */}
        <section id="contacto" className="mt-20 scroll-mt-32 sm:mt-32">
          <Reveal>
            <Container>
              <span className="eyebrow">Contacto</span>
              <h2 className="mt-4 font-serif text-h2">Dónde estamos</h2>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <ul className="flex flex-col gap-4 text-base">
                    <li className="flex items-start gap-3">
                      <IconLocation className="mt-1 shrink-0 text-accent" />
                      <span>
                        Rosario Sur 91, oficina 303 · Las Condes. A pasos del Metro Manquehue.
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <IconPhone className="shrink-0 text-accent" />
                      <a
                        href={`tel:${clinic.telephone}`}
                        className="underline-offset-4 hover:underline"
                      >
                        {clinic.telephone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <IconWhatsApp className="shrink-0 text-accent" />
                      <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
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
                        className="underline-offset-4 hover:underline"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                  <p className="mt-4 text-caption text-ink-soft">
                    Estacionamientos de visita disponibles en el edificio.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <CTA href={wa} variant="primary">
                      Agendar Cita
                    </CTA>
                    <CTA href="/como-llegar" variant="secondary">
                      Cómo llegar
                    </CTA>
                  </div>
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-accent/25">
                  {/* Google Maps embed (sin API key). NOTA A8: iframe de tercero (Google) —
                      declararlo en el aviso de cookies / política de privacidad. */}
                  <iframe
                    title="Mapa de la ubicación de VITASAB — Rosario Sur 91, Las Condes"
                    src="https://maps.google.com/maps?q=Rosario%20Sur%2091,%20Las%20Condes,%20Santiago,%20Chile&z=16&output=embed"
                    className="block h-[340px] w-full lg:h-[400px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Container>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
