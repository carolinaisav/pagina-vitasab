import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Prevención y salud",
  description:
    "La mayoría de los problemas dentales se manejan mejor cuando se toman a tiempo. Nos enfocamos en revisar, limpiar, cuidar las encías y detener a tiempo lo que recién empieza.",
  path: "/prevencion-y-salud",
});

// Intro y mapeo de especialidades: docs/contenido/categorias.md (§Prevención y salud, §5.1).
// El estado PENDIENTE se deriva de clinic.pendingSpecialties (fuente única de verdad).

const INTRO =
  "La mayoría de los problemas dentales se manejan mejor cuando se toman a tiempo. En esta área nos " +
  "enfocamos en revisar, limpiar, cuidar las encías y detener a tiempo lo que recién empieza, para " +
  "que llegues menos veces a tratamientos grandes.";

interface SpecialtyLink {
  readonly slug: string;
  readonly name: string;
  readonly note?: string;
}

const SPECIALTIES: readonly SpecialtyLink[] = [
  { slug: "odontologia-general", name: "Odontología general" },
  { slug: "periodoncia", name: "Periodoncia" },
];

export default function PrevencionYSaludPage() {
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout title="Prevención y salud" lead={INTRO}>
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
            Agendar un control
          </CTA>
        </div>
      </div>
    </PageLayout>
  );
}
