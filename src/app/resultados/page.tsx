import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Casos reales",
  description: "Casos reales de estética dental tratados en VITASAB: antes y después.",
  path: "/resultados",
});

const CASOS = [
  { src: "/casos/caso-1.jpg", label: "Estética Dental" },
  { src: "/casos/caso-2.jpg", label: "Estética Dental" },
  { src: "/casos/caso-3.jpg", label: "Estética Dental" },
  { src: "/casos/caso-4.jpg", label: "Estética Dental" },
];

export default function ResultadosPage() {
  return (
    <PageLayout eyebrow="Casos reales" title="Antes y Después">
      <ul className="grid gap-8 sm:grid-cols-2">
        {CASOS.map((c, i) => (
          <li key={i}>
            <figure>
              <div className="overflow-hidden rounded-[1.5rem] border border-accent/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={`Caso de ${c.label} — antes y después`}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 text-center font-serif text-base text-ink-soft">
                {c.label}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
