import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { IconClock, IconInstagram, IconLocation, IconPhone, IconWhatsApp } from "@/components/ui/icons";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ReviewsCarousel, type Review } from "@/components/site/ReviewsCarousel";
import { whatsappIntentLink } from "@/lib/whatsapp";
import { clinic } from "@/lib/seo/clinic";

export const metadata: Metadata = {
  title: { absolute: "Dentistas en Las Condes | Clínica dental VITASAB" },
  description:
    "Clínica Vitasab: clínica dental boutique en Las Condes, a pasos del Metro Manquehue. Dentistas especialistas en odontología, ortodoncia, implantes, estética dental y facial. Agenda por WhatsApp.",
};

const AREAS = [
  {
    href: "/odontologia",
    title: "Odontología",
    blurb:
      "Odontología general, ortodoncia, estética dental, rehabilitación oral, implantes, endodoncia y tratamiento del bruxismo.",
  },
  {
    href: "/estetica-facial",
    title: "Estética Facial",
    blurb:
      "Armonización y estética facial: cuidado de la piel, bioestimulación, toxina botulínica, ácido hialurónico e hilos tensores.",
  },
] as const;

const HIGHLIGHTS = [
  {
    href: "/primera-visita",
    title: "Tu primera visita",
    blurb: "Una evaluación integral de tu salud bucal y un plan de tratamiento personalizado.",
  },
  {
    href: "/equipo",
    title: "Conoce al equipo",
    blurb: "Conoce a los profesionales que te atienden.",
  },
] as const;

const STATS: readonly { readonly value: string; readonly label: string }[] = [
  { value: "15", label: "años de experiencia" },
  { value: "Lunes a Viernes", label: "9.30 a 19.15 hrs" },
  { value: "Rosario Sur / Apoquindo", label: "a pasos del Metro Manquehue" },
];

// Reseñas de Google (Caro las va agregando a medida que llegan). Sin marcas de
// tiempo relativas ("Hace X"): eran fijas y con el tiempo se leían como inventadas.
const REVIEWS: readonly Review[] = [
  { author: "Constanza Ragal Chaigneau", rating: 5, time: "Opinión en Google" },
  { author: "verena Barthelemiez", rating: 5, time: "Opinión en Google", text: "Tiene pasión por su profesión!" },
  { author: "centro psicologicoalma", rating: 5, time: "Opinión en Google", text: "recomiendo" },
  { author: "Carolina Valenzuela", rating: 5, time: "Opinión en Google" },
];

function CardLink({
  href,
  title,
  blurb,
  centered = false,
}: {
  readonly href: string;
  readonly title: string;
  readonly blurb: string;
  readonly centered?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-[2rem] border border-accent/25 bg-sand p-8 transition-[box-shadow,border-color] hover:border-accent/50 hover:shadow-[0_12px_44px_rgba(34,52,60,0.10)]${
        centered ? " items-center text-center" : ""
      }`}
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
              src="/foto-inicio.jpg"
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
                <span className="block text-h3 text-ink-soft sm:text-h2">Clínica dental</span>
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
              <p className="mt-4 max-w-md text-caption text-ink-soft">
                O llámanos al{" "}
                <a
                  href={`tel:${clinic.telephone}`}
                  className="font-medium text-ink underline-offset-4 hover:underline"
                >
                  {clinic.telephone}
                </a>
                . Respondemos por WhatsApp de lunes a viernes, 9:30 a 19:15 hrs.
              </p>
            </div>

            {/* Foto (móvil): a lo ancho, abajo */}
            <div className="mt-10 aspect-[4/3] overflow-hidden rounded-[1.5rem] lg:hidden">
              <Image
                src="/foto-inicio.jpg"
                alt="Recepción de la clínica VITASAB en Las Condes"
                width={1540}
                height={1021}
                sizes="100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Container>
        </section>

        {/* Clínica Vitasab — presentación (destino de "Clínica Vitasab" en el menú) */}
        <section id="clinica-vitasab" className="mt-16 scroll-mt-32 sm:mt-24">
          <Reveal>
            <Container>
              <div className="max-w-3xl">
                <span className="eyebrow">Clínica Vitasab</span>
                <h2 className="mt-4 font-serif text-h2">
                  Experiencia, especialización y atención personalizada
                </h2>

                <div className="mt-10 flex flex-col gap-5 text-base text-ink-soft">
                  <p>
                    Vitasab es una{" "}
                    <strong className="font-semibold text-ink">
                      clínica boutique especializada en odontología, estética dental y estética
                      facial
                    </strong>
                    , con más de 15 años de trayectoria y una forma de atender centrada en cada
                    paciente.
                  </p>
                  <p>
                    Contamos con un{" "}
                    <strong className="font-semibold text-ink">
                      equipo multidisciplinario de profesionales y especialistas
                    </strong>{" "}
                    que trabajan de manera coordinada, permitiéndonos abordar cada caso desde una
                    mirada integral y desarrollar planes de tratamiento de acuerdo con las
                    necesidades y objetivos de cada persona.
                  </p>
                  <p>
                    Nuestra propuesta combina{" "}
                    <strong className="font-semibold text-ink">
                      experiencia clínica, especialización y tecnología
                    </strong>
                    , junto con insumos de primera calidad y productos premium, seleccionados para
                    ofrecer tratamientos de alto estándar y favorecer resultados duraderos.
                  </p>
                </div>

                <div className="mt-12 flex flex-col gap-10">
                  <div>
                    <h3 className="font-serif text-h4">Una mirada integral</h3>
                    <p className="mt-3 text-base text-ink-soft">
                      Entendemos que salud, función y estética están conectadas. Por eso, nuestras
                      distintas especialidades trabajan en conjunto cuando un tratamiento lo
                      requiere, desde la prevención y el cuidado de la salud bucal hasta
                      procedimientos de rehabilitación, implantología, estética dental y armonización
                      facial.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-h4">Una clínica boutique</h3>
                    <p className="mt-3 text-base text-ink-soft">
                      Para nosotros, ser una clínica boutique significa privilegiar una atención más
                      personalizada, cuidando tanto la calidad del tratamiento como la experiencia de
                      cada paciente.
                    </p>
                    <p className="mt-4 text-base text-ink-soft">
                      Nos importa escuchar, evaluar con detalle y explicar las distintas alternativas
                      antes de comenzar. Cada tratamiento parte de un diagnóstico y una planificación
                      individual, respetando las características, necesidades y expectativas de quien
                      nos consulta.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-h4">Más de 15 años cuidando a nuestros pacientes</h3>
                    <p className="mt-3 text-base text-ink-soft">
                      Nuestra trayectoria nos ha permitido construir una práctica basada en la
                      experiencia, la confianza y el trabajo de un equipo especializado.
                    </p>
                    <p className="mt-4 text-base text-ink-soft">
                      En Vitasab buscamos que cada paciente encuentre en un mismo lugar las distintas
                      especialidades que necesita, acompañado por profesionales que trabajan con un
                      objetivo común:{" "}
                      <strong className="font-semibold text-ink">
                        cuidar su salud y lograr resultados funcionales, armónicos y naturales.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Reveal>
        </section>

        {/* Diferenciadores concretos (antídoto al bloque de 4 adjetivos, §4.3) */}
        <section className="mt-20 sm:mt-32">
          <Reveal>
            <Container>
              <div className="grid gap-10 rounded-[2rem] border border-accent/25 bg-sand px-8 py-14 sm:grid-cols-3 sm:px-12">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-serif text-h4 text-accent lining-nums tabular-nums">
                      {s.value}
                    </div>
                    <div className="mt-2 text-base text-ink-soft">{s.label}</div>
                  </div>
                ))}
              </div>
            </Container>
          </Reveal>
        </section>

        {/* Áreas de atención — índice a las dos páginas de servicios */}
        <section id="servicios" className="mt-20 scroll-mt-32 sm:mt-32">
          <Reveal>
            <Container>
              <h2 className="max-w-2xl font-serif text-h2">
                Nuestras áreas de atención
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {AREAS.map((area) => (
                  <CardLink key={area.href} href={area.href} title={area.title} blurb={area.blurb} />
                ))}
              </div>
            </Container>
          </Reveal>
        </section>

        {/* Reseñas de Google — carrusel (reemplaza la antigua sección de Urgencias) */}
        <section className="mt-20 sm:mt-32">
          <Reveal>
            <Container>
              <span className="eyebrow">Opiniones</span>
              <h2 className="mt-4 max-w-2xl font-serif text-h2">
                Lo que dicen nuestros pacientes en Google
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-serif text-h4 text-ink">5,0</span>
                <span aria-hidden style={{ color: "#C8880B" }} className="text-lg">
                  ★★★★★
                </span>
                <span className="text-base text-ink-soft">en Google</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dr.%20Marco%20Barthelemiez%2C%20Rosario%20Sur%2091%2C%20Las%20Condes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-accent underline underline-offset-4"
                >
                  Ver opiniones
                </a>
              </div>
              <div className="mt-8">
                <ReviewsCarousel reviews={REVIEWS} />
              </div>
            </Container>
          </Reveal>
        </section>

        {/* Enlaces destacados */}
        <section className="mt-20 sm:mt-32">
          <Reveal>
            <Container>
              <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
                {HIGHLIGHTS.map((h) => (
                  <CardLink key={h.href} href={h.href} title={h.title} blurb={h.blurb} centered />
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
                      <IconClock className="shrink-0 text-accent" />
                      <span>Lunes a Viernes, 9:30 a 19:15 hrs</span>
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
                    <CTA
                      href="https://www.google.com/maps/dir/?api=1&destination=Rosario+Sur+91,+Las+Condes,+Santiago,+Chile"
                      variant="secondary"
                    >
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
