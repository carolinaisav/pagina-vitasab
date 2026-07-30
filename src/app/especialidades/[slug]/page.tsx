import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/site/PageLayout";
import { Prose } from "@/components/ui/Prose";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { whatsappIntentLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";
import { SPECIALTIES, getSpecialty } from "@/lib/specialties";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) {
    return { title: "Especialidad no encontrada" };
  }
  return pageMetadata({
    title: specialty.name,
    description: `${specialty.name} en VITASAB, Las Condes. Qué es, qué esperar, sus riesgos y resultados, y quién lo realiza.`,
    path: `/especialidades/${specialty.slug}`,
  });
}

export default async function EspecialidadPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) {
    notFound();
  }
  const wa = whatsappIntentLink("agendar");

  // Estructura §5.2. El copy detallado se redacta después ("después vemos el detalle
  // del contenido"); por ahora la estructura es real y cada texto pendiente va marcado.
  return (
    <PageLayout title={specialty.name}>
      <Prose>
        <p>
          Parte de{" "}
          {specialty.categories.map((c, i) => (
            <span key={c.href}>
              {i > 0 ? " y " : ""}
              <Link href={c.href}>{c.label}</Link>
            </span>
          ))}
          .
        </p>

        <h2>Qué es</h2>
        <p>
          <Placeholder>COPY: qué es {specialty.name}, en lenguaje de paciente (§5.2)</Placeholder>
        </p>

        <h2>Cómo funciona</h2>
        <p>
          <Placeholder>
            COPY: el mecanismo, no el nombre comercial (§5.2 — como Malta explica el DSD)
          </Placeholder>
        </p>

        <h2>Qué esperar</h2>
        <ul>
          <li>
            Sesiones: <Placeholder>COPY/DATO: cuántas sesiones</Placeholder>
          </li>
          <li>
            Duración: <Placeholder>COPY/DATO: cuánto dura el tratamiento</Placeholder>
          </li>
          <li>
            Molestias: <Placeholder>COPY: cuánto duele — la ansiedad es la objeción real (§5.2)</Placeholder>
          </li>
        </ul>

        <h2>Riesgos y resultados esperables</h2>
        <p>
          <Placeholder>
            COPY: riesgos y resultados esperables (obligatorio, §5.2 punto 4). Los resultados son
            predecibles o esperables, nunca infalibles (art. 54)
          </Placeholder>
        </p>

        <h2>Quién lo realiza</h2>
        {specialty.professional ? (
          <p>
            <Link href="/equipo">{specialty.professional}</Link>. Puedes verificar su título en la
            página del equipo.
          </p>
        ) : (
          <p>
            <Placeholder>
              PENDIENTE: profesional a cargo de {specialty.name} — no se publica sin confirmar
              (art. 46)
            </Placeholder>
          </p>
        )}

        <h2>Convenios y financiamiento</h2>
        <p>
          Revisa <Link href="/convenios">convenios y formas de pago</Link>; te ayudamos a entender
          qué cubre tu previsión.
        </p>

        <h2>Preguntas frecuentes</h2>
        <p>
          <Placeholder>COPY: preguntas frecuentes de {specialty.name}</Placeholder>
        </p>
      </Prose>

      <div className="mt-8">
        <CTA href={wa} variant="primary">
          Agendar una evaluación
        </CTA>
      </div>
    </PageLayout>
  );
}
