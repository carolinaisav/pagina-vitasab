"use client";

import { useRef } from "react";

/**
 * Carrusel de reseñas de Google. Contenido estático (se completa en `REVIEWS` en
 * la página): cada tarjeta muestra autor, estrellas, antigüedad y texto (si tiene).
 * Se desplaza de a un ancho de vista con las flechas, o deslizando/scroll horizontal.
 */
export interface Review {
  readonly author: string;
  readonly rating: number; // 1–5
  readonly time?: string;
  readonly text?: string;
}

function Stars({ rating }: { readonly rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      style={{ color: "#f4b400" }}
      role="img"
      aria-label={`${rating} de 5 estrellas`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsCarousel({ reviews }: { readonly reviews: readonly Review[] }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <div>
      <div className="mb-5 flex justify-end gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Ver reseñas anteriores" className={arrowClass}>
          <span aria-hidden className="text-xl">←</span>
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Ver más reseñas" className={arrowClass}>
          <span aria-hidden className="text-xl">→</span>
        </button>
      </div>

      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            className="flex shrink-0 basis-[85%] snap-start flex-col rounded-[1.5rem] border border-accent/25 bg-sand p-7 sm:basis-[47%] lg:basis-[31%]"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 font-serif text-lg text-accent"
                aria-hidden
              >
                {r.author.trim().charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="truncate font-medium text-ink">{r.author}</div>
                {r.time ? <div className="text-caption text-ink-soft">{r.time}</div> : null}
              </div>
            </div>

            <div className="mt-4">
              <Stars rating={r.rating} />
            </div>

            {r.text ? <p className="mt-3 text-base text-ink-soft">{r.text}</p> : null}
          </article>
        ))}
      </div>
    </div>
  );
}
