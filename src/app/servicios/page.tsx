import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";
import { CTA } from "@/components/ui/CTA";
import { whatsappIntentLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Servicios",
  description:
    "Los servicios de VITASAB en Las Condes, agrupados en cuatro áreas, cada una a cargo de su especialista.",
  path: "/servicios",
});

const CATEGORIES = [
  {
    href: "/estetica",
    title: "Estética",
    blurb: "Para cómo se ve tu sonrisa y tu rostro, sin perder de vista la salud.",
  },
  {
    href: "/restauracion",
    title: "Restauración",
    blurb: "Reparar, reponer y sacar el dolor: que tu boca vuelva a funcionar.",
  },
  {
    href: "/prevencion-y-salud",
    title: "Prevención y salud",
    blurb: "Revisar, limpiar y cuidar a tiempo.",
  },
  {
    href: "/familia",
    title: "Familia",
    blurb: "Atención para todas las edades de la casa.",
  },
] as const;

export default function ServiciosPage() {
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout
      title="Servicios"
      lead="Agrupamos lo que hacemos en cuatro áreas, cada una a cargo de su especialista. Entra a la que te acomode para ver el detalle."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {CATEGORIES.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group flex flex-col rounded-[2rem] border border-accent/25 bg-sand p-8 transition-[box-shadow,border-color] hover:border-accent/50 hover:shadow-[0_12px_44px_rgba(34,52,60,0.10)]"
          >
            <h2 className="font-serif text-h4">{c.title}</h2>
            <p className="mt-2 text-base text-ink-soft">{c.blurb}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-base font-medium text-accent group-hover:gap-2">
              Ver más <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <CTA href={wa} variant="primary">
          Agendar Cita
        </CTA>
      </div>
    </PageLayout>
  );
}
