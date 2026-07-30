import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Estética",
  description:
    "Tratamientos pensados para cómo se ve tu sonrisa y tu rostro, sin perder de vista la salud. Partimos por entender qué te gustaría cambiar y te explicamos qué es posible y qué implica.",
  path: "/estetica",
});

// Intro y mapeo de especialidades: docs/contenido/categorias.md (§Estética, §5.1).
// El estado PENDIENTE se deriva de clinic.pendingSpecialties (fuente única de verdad).

const INTRO =
  "Tratamientos pensados para cómo se ve tu sonrisa y tu rostro, sin perder de vista la salud. " +
  "Acá partimos por entender qué te gustaría cambiar y te explicamos qué es posible, qué no, y qué " +
  "implica cada opción en tiempo y cuidados.";

interface SpecialtyLink {
  readonly slug: string;
  readonly name: string;
  readonly note?: string;
}

const SPECIALTIES: readonly SpecialtyLink[] = [
  { slug: "estetica-facial", name: "Estética facial" },
  { slug: "rehabilitacion", name: "Rehabilitación", note: "parte estética" },
];

export default function EsteticaPage() {
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout title="Estética" lead={INTRO}>
      <div className="reading-measure flex flex-col gap-8">
        <section>
          <h2 className="font-serif text-h4">Qué incluye</h2>
          <ul className="mt-3 flex flex-col gap-2 pl-5 text-base text-foreground/90 [&_li]:list-disc">
            {SPECIALTIES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/especialidades/${s.slug}`}
                  className="underline underline-offset-4"
                >
                  {s.name}
                </Link>
                {s.note ? ` (${s.note})` : ""}
                {clinic.pendingSpecialties.includes(s.name) ? (
                  <>
                    {" "}
                    <Placeholder>PENDIENTE: profesional a cargo</Placeholder>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <div>
          <CTA href={wa} variant="primary">
            Agendar una evaluación
          </CTA>
        </div>
      </div>
    </PageLayout>
  );
}
