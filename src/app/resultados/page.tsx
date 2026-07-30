import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { CasosGallery } from "@/components/site/CasosGallery";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Resultados",
  description:
    "Casos de pacientes tratados en VITASAB, ordenados por tipo de tratamiento. Los resultados son esperables, no garantizados.",
  path: "/resultados",
});

export default function ResultadosPage() {
  return (
    <PageLayout
      eyebrow="Casos"
      title="Resultados reales"
      lead="Casos de pacientes tratados en la clínica, ordenados por tipo de tratamiento. Cada caso parte de una evaluación y un plan a medida."
    >
      <p className="reading-measure text-base text-ink-soft">
        Cada persona es distinta: los resultados son{" "}
        <strong>predecibles o esperables, no garantizados</strong>. Las fotos se publican solo con
        la autorización escrita del paciente y se pueden retirar cuando el paciente lo solicite.
      </p>

      <div className="mt-12">
        <CasosGallery />
      </div>
    </PageLayout>
  );
}
