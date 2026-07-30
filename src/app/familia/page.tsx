import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Familia",
  description:
    "Atención para las distintas edades de una familia, desde los más chicos hasta la corrección de la mordida y la posición de los dientes.",
  path: "/familia",
});

// Intro y mapeo de especialidades: docs/contenido/categorias.md (§Familia, §5.1).
// El estado PENDIENTE se deriva de clinic.pendingSpecialties (fuente única de verdad).

const INTRO =
  "Atención para las distintas edades de una familia, desde los más chicos hasta la corrección de " +
  "la mordida y la posición de los dientes. La idea es que ir al dentista sea parte de la rutina y " +
  "no un evento que da susto.";

interface SpecialtyLink {
  readonly slug: string;
  readonly name: string;
}

const SPECIALTIES: readonly SpecialtyLink[] = [
  { slug: "odontopediatria", name: "Odontopediatría" },
  { slug: "ortodoncia", name: "Ortodoncia" },
];

export default function FamiliaPage() {
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout title="Familia" lead={INTRO}>
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
            Agendar una hora
          </CTA>
        </div>
      </div>
    </PageLayout>
  );
}
