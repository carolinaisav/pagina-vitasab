import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { CTA } from "@/components/ui/CTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { whatsappIntentLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Alianzas",
  description:
    "Las marcas con las que trabajamos y los productos de cuidado dental que puedes encontrar en la consulta.",
  path: "/alianzas",
});

const CATEGORIES = [
  {
    title: "Implantes",
    desc: "Los sistemas de implantes que usamos, de marcas reconocidas.",
    dato: "DATO: marcas de implantes",
  },
  {
    title: "Estética y cremas",
    desc: "Productos de cuidado y estética disponibles en la consulta.",
    dato: "DATO: marcas de cremas / estética",
  },
  {
    title: "Cepillos dentales",
    desc: "Cepillos que recomendamos y que puedes comprar aquí.",
    dato: "DATO: marcas de cepillos",
  },
  {
    title: "Pastas dentales",
    desc: "Pastas y productos de higiene para el día a día.",
    dato: "DATO: marcas de pastas dentales",
  },
] as const;

export default function AlianzasPage() {
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout
      title="Alianzas"
      lead="Trabajamos con marcas reconocidas, y varios de sus productos también los puedes encontrar y comprar en la consulta."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {CATEGORIES.map((c) => (
          <div
            key={c.title}
            className="rounded-[2rem] border border-accent/25 bg-sand p-8"
          >
            <h2 className="font-serif text-h4">{c.title}</h2>
            <p className="mt-2 text-base text-ink-soft">{c.desc}</p>
            <p className="mt-4">
              <Placeholder>{c.dato}</Placeholder>
            </p>
            <p className="mt-2 text-caption text-ink-soft">
              <Placeholder>FOTO: logos de las marcas</Placeholder>
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-xl text-base text-ink-soft">
        ¿Buscas un producto en particular? Escríbenos y te contamos si lo tenemos disponible.
      </p>
      <div className="mt-6">
        <CTA href={wa} variant="primary">
          Consultar por WhatsApp
        </CTA>
      </div>
    </PageLayout>
  );
}
