import { PageLayout } from "@/components/site/PageLayout";
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
              className="border-t border-foreground/10 pt-8 first:border-t-0 first:pt-0"
            >
              <article className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                {p.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.photoUrl}
                    alt={`Retrato de ${p.name}`}
                    className="w-full max-w-[240px] shrink-0 rounded-2xl sm:w-56"
                  />
                ) : null}
                <div className="reading-measure flex flex-col gap-3">
                  <h2 className="font-serif text-h4">{p.name}</h2>
                  <p className="text-base text-foreground/90">
                    {p.title} · {p.university}
                  </p>
                  {p.bio ? (
                    <p className="text-base text-foreground/90">{p.bio}</p>
                  ) : (
                    <p className="text-base text-foreground/90">
                      Especialista en {p.specialty}
                      {p.specialtyUniversity ? ` · ${p.specialtyUniversity}` : ""}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
