import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { whatsappIntentLink } from "@/lib/whatsapp";
import { clinic } from "@/lib/seo/clinic";

const CATEGORIES = [
  {
    href: "/estetica",
    title: "Estética",
    blurb: "Para cómo se ve tu sonrisa y tu rostro, sin perder de vista la salud.",
  },
  {
    href: "/restauracion",
    title: "Restauración",
    blurb: "Reparar, reponer y sacar el dolor: que tu boca vuelva a funcionar.",
  },
  {
    href: "/prevencion-y-salud",
    title: "Prevención y salud",
    blurb: "Revisar, limpiar y cuidar a tiempo.",
  },
  {
    href: "/familia",
    title: "Familia",
    blurb: "Atención para todas las edades de la casa.",
  },
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

const STATS: readonly {
  readonly value: string;
  readonly label: string;
  readonly pending?: boolean;
}[] = [
  { value: "DATO: años", label: "de experiencia", pending: true },
  { value: "DATO: N° cuotas", label: "cuotas sin interés", pending: true },
  { value: "DATO: sábados", label: "días de atención", pending: true },
  { value: "Manquehue", label: "a pasos del metro" },
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
        {/* Hero — nombre + ubicación, con foto orgánica ancha a la derecha (§4.3) */}
        <section>
          <Container className="grid items-center gap-12 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
            <div>
              <h1 className="font-serif text-h2 leading-[1.05] sm:text-h1 sm:leading-[1.04] lg:text-display">
                Clínica <span className="mark">Vitasab</span>
              </h1>
              <p className="mt-6 max-w-xl text-lead text-ink-soft">
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

            <div className="organic mx-auto aspect-[3/2] w-full max-w-md overflow-hidden border-2 border-accent/50 lg:max-w-none">
              <Image
                src="/foto-inicio.png"
                alt="Recepción de la clínica VITASAB en Las Condes"
                width={1540}
                height={1021}
                priority
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
                    <div className="font-serif text-h3 text-accent">
                      {s.pending ? <Placeholder>{s.value}</Placeholder> : s.value}
                    </div>
                    <div className="mt-3 text-base text-ink-soft">{s.label}</div>
                  </div>
                ))}
              </div>
            </Container>
          </Reveal>
        </section>

        {/* Servicios — índice curado */}
        <section className="mt-20 sm:mt-32">
          <Reveal>
            <Container>
              <span className="eyebrow">Servicios</span>
              <h2 className="mt-4 max-w-2xl font-serif text-h2">
                Cuatro formas de cuidarte, cada una con su especialista.
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {CATEGORIES.map((c) => (
                  <CardLink key={c.href} href={c.href} title={c.title} blurb={c.blurb} />
                ))}
              </div>
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
                  <p className="text-lead">Rosario Sur 91, oficina 303 · Las Condes</p>
                  <p className="mt-2 text-base text-ink-soft">
                    A pasos del Metro Manquehue.
                  </p>
                  <ul className="mt-6 flex flex-col gap-3 text-base">
                    <li>
                      Teléfono:{" "}
                      <a
                        href={`tel:${clinic.telephone}`}
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        {clinic.telephone}
                      </a>
                    </li>
                    <li>
                      Horario: <Placeholder>DATO: horario de atención</Placeholder>
                    </li>
                  </ul>
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
