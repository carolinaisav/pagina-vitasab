import { PageLayout } from "@/components/site/PageLayout";
import { ServiceBlock, type Service } from "@/components/site/ServiceBlock";
import { CTA } from "@/components/ui/CTA";
import { pageMetadata } from "@/lib/seo/metadata";
import { whatsappIntentLink } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Odontología",
  description:
    "Odontología general, ortodoncia, estética dental, rehabilitación oral, implantes, endodoncia y tratamiento del bruxismo en Las Condes. Conoce en detalle cada área de atención.",
  path: "/odontologia",
});

const LEAD =
  "Prevención, diagnóstico y tratamiento para el cuidado integral de tu salud bucal. " +
  "Estas son nuestras áreas de atención, con el detalle de lo que incluye cada una.";

const SERVICES: readonly Service[] = [
  {
    id: "odontologia-general",
    name: "Odontología General",
    description:
      "La odontología general se enfoca en prevenir, diagnosticar y tratar los problemas más frecuentes de la salud bucal. A través de controles periódicos, limpiezas, tratamiento de caries y restauraciones, buscamos mantener dientes y encías sanos y prevenir tratamientos de mayor complejidad.",
    itemsLabel: "Incluye",
    items: [
      "Evaluación y diagnóstico dental",
      "Limpieza dental y profilaxis",
      "Destartraje y eliminación de sarro",
      "Tratamiento de caries",
      "Restauraciones o tapaduras",
      "Control y prevención de enfermedades bucales",
      "Manejo de sensibilidad dental",
      "Urgencias odontológicas simples",
    ],
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia",
    description:
      "La ortodoncia permite corregir la posición de los dientes y mejorar la mordida mediante un tratamiento planificado según las necesidades de cada paciente. Contamos con alternativas convencionales y sistemas de alineadores transparentes.",
    itemsLabel: "Alternativas",
    items: [
      {
        term: "Ortodoncia convencional",
        desc: "Utiliza brackets y arcos para mover progresivamente los dientes hasta alcanzar una posición adecuada. Es una alternativa efectiva para tratar distintos grados de malposición dental y alteraciones de mordida.",
      },
      {
        term: "Ortodoncia invisible",
        desc: "Utiliza una secuencia de alineadores transparentes, removibles y personalizados que permiten mover progresivamente los dientes de una manera más discreta y cómoda.",
      },
    ],
  },
  {
    id: "estetica-dental",
    name: "Estética Dental",
    description:
      "La estética dental reúne tratamientos destinados a mejorar la apariencia de la sonrisa de manera armónica y natural. Evaluamos aspectos como color, forma, tamaño y proporción de los dientes para diseñar un tratamiento personalizado, que puede incluir carillas, blanqueamiento y restauraciones estéticas.",
    itemsLabel: "Incluye",
    items: [
      {
        term: "Carillas dentales",
        desc: "Finas láminas o restauraciones que permiten modificar aspectos como forma, tamaño, color o pequeñas alteraciones de posición de los dientes.",
      },
      {
        term: "Blanqueamiento dental",
        desc: "Tratamiento destinado a aclarar el tono de los dientes mediante productos y protocolos odontológicos indicados de acuerdo con las características de cada paciente.",
      },
      "Correcciones estéticas de forma, tamaño y color",
      "Restauraciones estéticas",
      "Armonización de la sonrisa",
    ],
  },
  {
    id: "rehabilitacion",
    name: "Rehabilitación Oral",
    description:
      "La rehabilitación oral busca recuperar la función, estética y comodidad de la boca cuando existen dientes dañados, desgastados o ausentes. Mediante coronas, prótesis, restauraciones y rehabilitaciones sobre implantes, diseñamos soluciones adaptadas a las necesidades de cada paciente.",
    itemsLabel: "Incluye",
    items: [
      "Coronas dentales",
      "Puentes",
      "Prótesis fijas",
      "Prótesis removibles",
      "Incrustaciones",
      "Rehabilitación sobre implantes",
      "Reconstrucción de dientes muy dañados o desgastados",
      "Recuperación de la mordida y función masticatoria",
    ],
  },
  {
    id: "implantes",
    name: "Implantes Dentales",
    description:
      "Los implantes dentales permiten reemplazar dientes perdidos mediante estructuras de titanio que actúan como soporte para una futura corona o prótesis. El tratamiento se planifica individualmente para recuperar función, estabilidad y una apariencia natural.",
    itemsLabel: "Incluye",
    items: [
      "Evaluación y planificación de implantes",
      "Instalación de implantes dentales",
      "Reposición de una o varias piezas dentales",
      "Coronas sobre implantes",
      "Prótesis sobre implantes",
      "Rehabilitación de pacientes con pérdida de múltiples dientes",
      "Controles posteriores al tratamiento",
    ],
  },
  {
    id: "endodoncia",
    name: "Endodoncia",
    description:
      "La endodoncia, conocida habitualmente como tratamiento de conductos, permite tratar dientes cuyo tejido interno se encuentra inflamado, infectado o dañado. Su objetivo es eliminar la infección o inflamación, aliviar los síntomas y conservar la pieza dental siempre que sea clínicamente posible.",
    itemsLabel: "Incluye",
    items: [
      "Tratamiento de conductos",
      "Diagnóstico de dolor de origen pulpar",
      "Tratamiento de infecciones del interior del diente",
      "Retratamientos endodónticos cuando corresponda",
      "Manejo de piezas dentales con compromiso pulpar",
    ],
  },
  {
    id: "bruxismo",
    name: "Tratamiento del Bruxismo y Trastornos de la Mordida",
    description:
      "El bruxismo se caracteriza por apretar o rechinar los dientes, generalmente de manera involuntaria, y puede provocar desgaste dental, molestias musculares u otros síntomas. Evaluamos cada caso para determinar el tratamiento más adecuado, que puede incluir férulas o planos de relajación y otras medidas según el diagnóstico.",
    itemsLabel: "Incluye",
    items: [
      "Evaluación del desgaste dental",
      "Evaluación de la mordida",
      "Confección de planos o férulas de relajación",
      "Protección de dientes frente al desgaste",
      "Controles y ajustes de la férula",
      "Evaluación de síntomas asociados",
    ],
  },
];

export default function OdontologiaPage() {
  const wa = whatsappIntentLink("agendar");

  return (
    <PageLayout title="Odontología" lead={LEAD}>
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-14">
          {SERVICES.map((service, i) => (
            <div key={service.id} className={i > 0 ? "border-t border-ink/10 pt-14" : ""}>
              <ServiceBlock service={service} />
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10">
          <p className="max-w-2xl text-lead text-ink-soft">
            ¿Con dudas sobre qué tratamiento necesitas? Agenda una evaluación y lo vemos contigo.
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
