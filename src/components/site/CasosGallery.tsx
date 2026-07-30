"use client";

import { useState } from "react";
import { CASO_CATEGORIAS, CASOS, categoriaLabel } from "@/lib/casos";

/**
 * Galería de casos con filtros por categoría (ref. AS Odontología). Componente cliente:
 * el filtro se aplica en el navegador sin recargar. Las imágenes son espacios reservados
 * hasta tener consentimiento (§6.3) — nunca fotos de pacientes sin autorización.
 */
export function CasosGallery() {
  const [activa, setActiva] = useState<string>("todos");
  const visibles = CASOS.filter((c) => activa === "todos" || c.categoria === activa);

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3">
        {CASO_CATEGORIAS.map((cat) => {
          const on = cat.slug === activa;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActiva(cat.slug)}
              aria-pressed={on}
              className={`tap-target rounded-full border px-5 text-caption uppercase tracking-[0.1em] transition-colors ${
                on
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-accent/30 text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grilla de casos */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((caso) => (
          <figure key={caso.id} className="flex flex-col">
            <div
              data-placeholder
              className="organic flex aspect-[4/3] items-center justify-center overflow-hidden border-2 border-accent/50 bg-sand px-4 text-center"
            >
              {caso.imagen ? (
                // eslint-disable-next-line @next/next/no-img-element -- imagen desde CMS, no build-time
                <img src={caso.imagen} alt={`Caso de ${caso.titulo}`} className="h-full w-full object-cover" />
              ) : (
                <span className="text-caption italic text-ink-soft">
                  Antes / Después ⟦foto pendiente de consentimiento⟧
                </span>
              )}
            </div>
            <figcaption className="mt-4">
              <span className="eyebrow">{categoriaLabel(caso.categoria)}</span>
              <p className="mt-1 font-serif text-h4">{caso.titulo}</p>
              <p className="mt-1 text-base text-ink-soft">{caso.nota}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
