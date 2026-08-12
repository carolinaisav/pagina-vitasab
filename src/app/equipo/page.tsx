import { PageLayout } from "@/components/site/PageLayout";
import { Placeholder } from "@/components/ui/Placeholder";
import { pageMetadata } from "@/lib/seo/metadata";
import { clinic } from "@/lib/seo/clinic";

export const metadata = pageMetadata({
  title: "Equipo",
  description:
    "En Vitasab contamos con un equipo multidisciplinario de profesionales y especialistas que trabajan de manera coordinada para entregar una atención integral y personalizada.",
  path: "/equipo",
});

const LEAD =
  "En Vitasab contamos con un equipo multidisciplinario de profesionales y especialistas que " +
  "trabajan de manera coordinada para entregar una atención integral y personalizada.";

export default function EquipoPage() {
  return (
    <PageLayout title="Nuestro equipo" lead={LEAD}>
      <div className="flex flex-col gap-10">
        <div className="reading-measure flex flex-col gap-5 text-base text-foreground/90">
          <p>
            Cada paciente es evaluado según sus necesidades y, cuando el tratamiento lo requiere, las
            distintas especialidades se complementan para definir el mejor plan a seguir.
          </p>
          <p>
            Nos une una misma forma de trabajar: experiencia, cercanía, criterio clínico y atención
            personalizada, buscando que cada paciente se sienta acompañado y en confianza durante todo
            su tratamiento.
          </p>
        </div>

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
                {p.bio ? <p className="text-base text-foreground/90">{p.bio}</p> : null}
                {p.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.photoUrl}
                    alt={`Retrato de ${p.name}`}
                    className="max-w-full rounded-2xl"
                  />
                ) : null}
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
