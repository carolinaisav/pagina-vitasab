import { PageLayout } from "@/components/site/PageLayout";
import { ServiceBlock, type Service } from "@/components/site/ServiceBlock";
import { CTA } from "@/components/ui/CTA";
import { pageMetadata } from "@/lib/seo/metadata";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Estética facial",
  description:
    "Armonización y estética facial en Las Condes: cuidado de la piel, bioestimulación de colágeno, toxina botulínica, ácido hialurónico e hilos tensores, con evaluación personalizada.",
  path: "/estetica-facial",
});

const LEAD =
  "Nuestros tratamientos de estética facial buscan realzar los rasgos y mejorar la calidad de la piel " +
  "respetando las proporciones y características de cada rostro. Trabajamos con una evaluación " +
  "personalizada para definir tratamientos como bioestimulación de colágeno, toxina botulínica, " +
  "ácido hialurónico, vitaminas y otros procedimientos de armonización facial.";

const CATEGORIES: readonly Service[] = [
  {
    id: "cuidado-piel",
    name: "Cuidado y calidad de la piel",
    items: [
      "Vitaminas y tratamientos revitalizantes",
      "Máscaras y protocolos faciales",
      "Tratamientos de hidratación",
    ],
  },
  {
    id: "radiesse",
    name: "Radiesse",
    items: [
      "Tratamientos inyectables orientados a estimular la producción natural de colágeno y mejorar progresivamente la firmeza, calidad y apariencia de la piel",
    ],
  },
  {
    id: "toxina-botulinica",
    name: "Toxina botulínica",
    items: [
      "Tratamiento de líneas de expresión",
      "Suavización de arrugas dinámicas",
      "Aplicaciones estéticas según evaluación profesional",
    ],
  },
  {
    id: "acido-hialuronico",
    name: "Ácido hialurónico",
    items: [
      "Reposición o aporte de volumen",
      "Definición de determinados rasgos faciales",
      "Armonización de proporciones",
      "Hidratación de determinados tejidos según el producto utilizado",
    ],
  },
  {
    id: "hilos-tensores",
    name: "Hilos tensores",
    items: [
      "Tratamientos mínimamente invasivos destinados a mejorar determinados grados de flacidez y favorecer una apariencia más firme, previa evaluación profesional",
    ],
  },
];

export default function EsteticaFacialPage() {
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout eyebrow="Armonización y estética facial" title="Estética facial" lead={LEAD}>
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-12">
          {CATEGORIES.map((category, i) => (
            <div key={category.id} className={i > 0 ? "border-t border-ink/10 pt-12" : ""}>
              <ServiceBlock service={category} titleClassName="font-serif text-h4 text-ink" />
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10">
          <p className="max-w-2xl text-lead text-ink-soft">
            Cada tratamiento parte por una evaluación personalizada. Agenda una hora y definimos el plan
            adecuado para ti.
          </p>
          <div className="mt-6">
            <CTA href={wa} variant="primary">
              Agendar una hora
            </CTA>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
