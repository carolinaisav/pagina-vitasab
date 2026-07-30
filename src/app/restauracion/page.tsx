import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Restauración",
  description:
    "Cuando falta una pieza, está dañada o duele, el objetivo es devolverle a tu boca la función: masticar, hablar y estar sin dolor. Te explicamos siempre las alternativas antes de decidir.",
  path: "/restauracion",
});

// Intro y mapeo de especialidades: docs/contenido/categorias.md (§Restauración, §5.1).
// El estado PENDIENTE se deriva de clinic.pendingSpecialties (fuente única de verdad).

const INTRO =
  "Cuando falta una pieza, está dañada o duele, el objetivo es devolverle a tu boca la función: " +
  "masticar, hablar y estar sin dolor. Reparamos lo que se puede reparar y reponemos lo que falta, " +
  "explicándote siempre las alternativas antes de decidir.";

interface SpecialtyLink {
  readonly slug: string;
  readonly name: string;
  readonly note?: string;
}

const SPECIALTIES: readonly SpecialtyLink[] = [
  { slug: "implantologia", name: "Implantología" },
  { slug: "rehabilitacion", name: "Rehabilitación" },
  { slug: "endodoncia", name: "Endodoncia" },
];

export default function RestauracionPage() {
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout title="Restauración" lead={INTRO}>
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
