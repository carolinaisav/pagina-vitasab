import type { CSSProperties } from "react";
import type { Metadata } from "next";

// Página de PREVIEW interna para que Marco elija la dirección de arte.
// No es parte del sitio público; se puede borrar al cerrar la decisión.
export const metadata: Metadata = {
  title: "Direcciones de arte — preview",
  robots: { index: false, follow: false },
};

interface Swatch {
  readonly label: string;
  readonly hex: string;
  readonly note: string;
}

interface Direction {
  readonly n: number;
  readonly name: string;
  readonly subtitle: string;
  readonly mood: string;
  readonly bg: string;
  readonly fg: string;
  readonly accent: string;
  readonly accentOn: string;
  readonly swatches: readonly Swatch[];
}

const DIRECTIONS: readonly Direction[] = [
  {
    n: 1,
    name: "Galería",
    subtitle: "Editorial oscuro",
    mood: "De autor y caro. Lienzo casi negro con un acento terracota cálido. Se siente como una galería o un estudio, no como una clínica.",
    bg: "#0E0E0E",
    fg: "#F2EFE9",
    accent: "#E08A5F",
    accentOn: "#0E0E0E",
    swatches: [
      { label: "Fondo", hex: "#0E0E0E", note: "" },
      { label: "Texto", hex: "#F2EFE9", note: "16.8:1 ✓" },
      { label: "Acento", hex: "#E08A5F", note: "7.3:1 ✓" },
    ],
  },
  {
    n: 2,
    name: "Cercanía",
    subtitle: "Cálido y luminoso",
    mood: "Acogedor y confiable. Fondo crema/papel con un verde salvia. Se siente humano y tranquilo — ideal para el público mayor sin verse “para viejos”.",
    bg: "#FBF8F3",
    fg: "#2A2724",
    accent: "#3F5E3C",
    accentOn: "#FFFFFF",
    swatches: [
      { label: "Fondo", hex: "#FBF8F3", note: "" },
      { label: "Texto", hex: "#2A2724", note: "14.0:1 ✓" },
      { label: "Acento", hex: "#3F5E3C", note: "6.9:1 ✓" },
    ],
  },
  {
    n: 3,
    name: "Índice",
    subtitle: "Contemporáneo, acento audaz",
    mood: "Claro, ordenado y seguro. Casi blanco con un verde profundo. Se siente preciso y actual, tipo revista bien diagramada.",
    bg: "#FCFCFA",
    fg: "#17181A",
    accent: "#1F5C3D",
    accentOn: "#FFFFFF",
    swatches: [
      { label: "Fondo", hex: "#FCFCFA", note: "" },
      { label: "Texto", hex: "#17181A", note: "17.3:1 ✓" },
      { label: "Acento", hex: "#1F5C3D", note: "7.7:1 ✓" },
    ],
  },
];

function DirectionBlock({ d }: { readonly d: Direction }) {
  const paletteVars = {
    "--color-background": d.bg,
    "--color-foreground": d.fg,
    "--background": d.bg,
    "--foreground": d.fg,
  } as CSSProperties;

  return (
    <section className="overflow-hidden rounded-3xl border border-black/10 shadow-sm">
      {/* Etiqueta de la dirección (fuera de la paleta, para leerla siempre) */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-neutral-100 px-6 py-4 text-neutral-800">
        <span className="font-serif text-h4">
          Dirección {d.n} — “{d.name}”
        </span>
        <span className="text-base text-neutral-500">{d.subtitle}</span>
      </div>

      {/* Portada real en la paleta de la dirección */}
      <div style={paletteVars} className="bg-background px-6 py-12 text-foreground sm:px-10">
        <div className="reading-measure">
          <h2 className="font-serif text-h1 sm:text-display">
            Primero conversamos, después decidimos.
          </h2>
          <p className="mt-5 text-lead text-foreground/80">
            Un equipo pequeño de especialistas en Las Condes. Te explicamos lo que vemos, en
            palabras simples, y tú decides con calma.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span
              className="tap-target rounded-full px-6 text-base font-medium"
              style={{ backgroundColor: d.accent, color: d.accentOn }}
            >
              Agendar por WhatsApp
            </span>
            <span className="tap-target rounded-full border border-foreground/30 px-6 text-base font-medium">
              Llamar
            </span>
          </div>
        </div>

        {/* Un par de tarjetas de categoría, como en el home */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6">
            <h3 className="font-serif text-h4">Estética</h3>
            <p className="mt-2 text-base text-foreground/80">
              Para cómo se ve tu sonrisa y tu rostro, sin perder de vista la salud.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6">
            <h3 className="font-serif text-h4">Restauración</h3>
            <p className="mt-2 text-base text-foreground/80">
              Reparar, reponer y sacar el dolor: que tu boca vuelva a funcionar.
            </p>
          </div>
        </div>

        {/* Muestras de color con su contraste verificado */}
        <div className="mt-10 flex flex-wrap gap-5">
          {d.swatches.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-caption text-foreground/70">
              <span
                className="inline-block h-7 w-7 rounded-full border border-foreground/20"
                style={{ backgroundColor: s.hex }}
              />
              <span>
                {s.label} {s.hex} {s.note}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Descripción del ánimo */}
      <div className="bg-neutral-50 px-6 py-4 text-base text-neutral-700">{d.mood}</div>
    </section>
  );
}

export default function PreviewDireccionesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 text-neutral-900">
      <h1 className="font-serif text-h1">Tres direcciones de arte</h1>
      <p className="mt-4 max-w-2xl text-lead text-neutral-600">
        La misma portada de VITASAB en tres estilos distintos. Los colores están verificados para
        que el texto siempre se lea bien (contraste WCAG AA). Marco elige una; después le sumamos el
        gesto tipográfico propio, la fotografía real y los ajustes finos.
      </p>
      <p className="mt-2 text-base text-neutral-500">
        Nota: esta es una página de comparación interna, no forma parte del sitio público.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {DIRECTIONS.map((d) => (
          <DirectionBlock key={d.n} d={d} />
        ))}
      </div>
    </main>
  );
}
