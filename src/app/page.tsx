import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { whatsappIntentLink } from "@/lib/whatsapp";

// Hero: "Especialistas que se toman el tiempo" (Caro descartó "Primero conversamos").
// ⟦PENDIENTE: confirmar titular final; alternativas listadas en docs/contenido/home.md⟧.

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
      className="group flex flex-col rounded-[2rem] border border-accent/25 bg-sand p-8 transition-[box-shadow,border-color] hover:border-accent/50 hover:shadow-[0_12px_44px_rgba(46,42,36,0.10)]"
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
        {/* Hero — un solo mensaje + foto en forma orgánica a la derecha (§4.3) */}
        <section>
          <Container className="grid items-center gap-10 pt-16 pb-16 sm:pt-24 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <span className="eyebrow">Clínica dental · Las Condes</span>
              <h1 className="mt-5 font-serif text-h1 leading-[1.04] sm:text-display">
                Especialistas que se toman el <span className="mark">tiempo</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lead text-ink-soft">
                Te explicamos lo que vemos, en palabras simples, y decides con calma. Sin apuro y
                sin sorpresas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA href={wa} variant="primary">
                  Agendar por WhatsApp
                </CTA>
                <CTA href="/primera-visita" variant="secondary">
                  Cómo es tu primera visita
                </CTA>
              </div>
            </div>

            <div
              data-placeholder
              className="organic mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-hidden border-2 border-accent/50 bg-sand px-8 text-center lg:max-w-none"
            >
              <p className="max-w-xs text-base italic text-ink-soft">
                Aquí va una foto real de la clínica — el espacio, las manos, el equipo. Nunca
                stock.
              </p>
            </div>
          </Container>
        </section>

        {/* Diferenciadores concretos (antídoto al bloque de 4 adjetivos, §4.3) */}
        <section className="mt-16 sm:mt-24">
          <Container>
            <div className="grid gap-10 rounded-[2rem] border border-accent/25 bg-sand px-8 py-14 sm:grid-cols-2 sm:px-12 lg:grid-cols-4">
              {[
                { data: "DATO: años", label: "de experiencia" },
                { data: "DATO: N° cuotas", label: "cuotas sin interés" },
                { data: "DATO: sábados", label: "días de atención" },
                { data: "DATO: metro", label: "a pasos del metro" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-h3 text-accent">
                    <Placeholder>{s.data}</Placeholder>
                  </div>
                  <div className="mt-3 text-base text-ink-soft">{s.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Categorías — índice curado */}
        <section className="mt-16 sm:mt-24">
          <Container>
            <span className="eyebrow">Qué hacemos</span>
            <h2 className="mt-4 max-w-2xl font-serif text-h2">
              Cuatro formas de cuidarte, cada una con su especialista.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {CATEGORIES.map((c) => (
                <CardLink key={c.href} href={c.href} title={c.title} blurb={c.blurb} />
              ))}
            </div>
          </Container>
        </section>

        {/* Urgencias — realce cálido en tono salvia, no alarmista (§5.3) */}
        <section className="mt-16 sm:mt-24">
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
        </section>

        {/* Enlaces destacados */}
        <section className="mt-16 sm:mt-24">
          <Container>
            <div className="grid gap-5 sm:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <CardLink key={h.href} href={h.href} title={h.title} blurb={h.blurb} />
              ))}
            </div>
          </Container>
        </section>

        {/* Cómo llegar — metro primero (§5.3) */}
        <section className="mt-16 sm:mt-24">
          <Container>
            <span className="eyebrow">Cómo llegar</span>
            <h2 className="mt-4 font-serif text-h3">Rosario Sur 91, oficina 303 · Las Condes</h2>
            <p className="mt-3 max-w-xl text-base text-ink-soft">
              <Placeholder>DATO: estación de metro</Placeholder> a pocos pasos. Te esperamos.
            </p>
            <div className="mt-5">
              <CTA href="/como-llegar" variant="secondary">
                Cómo llegar
              </CTA>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
