import { PageLayout } from "@/components/site/PageLayout";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";

export const metadata = pageMetadata({
  title: "Equipo",
  description:
    "Un equipo pequeño de especialistas. Puedes ver quiénes somos, dónde estudiamos y en qué nos especializamos, y verificar cada título en el Registro Nacional de Prestadores.",
  path: "/equipo",
});

// Intro y notas de cierre: docs/contenido/equipo.md. Datos: src/lib/seo/clinic.ts.
// Tono art. 46: objetiva, transparente, veraz y moderada. Sin superlativos.

const INTRO =
  "Te atiende un equipo pequeño de especialistas. Cada tratamiento lo realiza quien tiene la " +
  "formación específica para hacerlo. Acá puedes ver quiénes somos, dónde estudiamos y en qué nos " +
  "especializamos — y verificar cada título en el Registro Nacional de Prestadores.";

export default function EquipoPage() {
  return (
    <PageLayout title="Nuestro equipo" lead={INTRO}>
      <div className="flex flex-col gap-10">
        <ul className="flex flex-col gap-10">
          {clinic.professionals.map((p) => (
            <li
              key={p.name}
              className="reading-measure border-t border-foreground/10 pt-8 first:border-t-0 first:pt-0"
            >
              <article className="flex flex-col gap-3">
                <h2 className="font-serif text-h3">{p.name}</h2>
                <p className="text-base text-foreground/90">
                  {p.title} · {p.university}
                </p>
                <p className="text-base text-foreground/90">
                  Especialista en {p.specialty}
                  {p.specialtyUniversity ? ` · ${p.specialtyUniversity}` : ""}
                </p>
                <p className="text-base text-foreground/80">
                  Ficha en el RNPI:{" "}
                  {p.rnpiUrl ? (
                    <a
                      href={p.rnpiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      Ver ficha en el Registro Nacional de Prestadores
                    </a>
                  ) : (
                    <Placeholder>DATO: link RNPI</Placeholder>
                  )}
                </p>
                <p className="text-base text-foreground/80">
                  {p.photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.photoUrl}
                      alt={`Retrato de ${p.name}`}
                      className="max-w-full rounded-2xl"
                    />
                  ) : (
                    <Placeholder>FOTO: retrato dirigido</Placeholder>
                  )}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {/* Cierre — pendientes de veracidad (art. 46): no se publica especialidad sin
            profesional real detrás. Ver docs/contenido/equipo.md §Pendientes. */}
        <section className="reading-measure border-t border-foreground/10 pt-8">
          <h2 className="font-serif text-h4">Especialidades por confirmar</h2>
          <ul className="mt-3 flex flex-col gap-2 pl-5 text-base text-foreground/80 [&_li]:list-disc">
            <li>
              Odontopediatría (atención de niños) no tiene profesional asignado:{" "}
              <Placeholder>PENDIENTE: quién realiza odontopediatría</Placeholder>
            </li>
            <li>
              Falta confirmar si el equipo ofrece estética facial y odontología general:{" "}
              <Placeholder>
                PENDIENTE: confirmar profesional de estética facial y odontología general
              </Placeholder>
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
