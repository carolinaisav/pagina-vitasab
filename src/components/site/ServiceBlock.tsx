/**
 * Bloque de servicio para las páginas de Odontología y Estética Facial.
 * Muestra: nombre del servicio, un párrafo de descripción (claramente descriptivo)
 * y una lista ordenada de prestaciones. Un ítem puede ser texto simple o llevar
 * su propia descripción (`{ term, desc }`), que se renderiza como término + descripción.
 */

export type ServiceItem =
  | string
  | { readonly term: string; readonly desc: string };

export interface Service {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly itemsLabel?: string;
  readonly items: readonly ServiceItem[];
}

export function ServiceBlock({
  service,
  titleClassName = "font-serif text-h4 text-ink",
}: {
  readonly service: Service;
  readonly titleClassName?: string;
}) {
  return (
    <section id={service.id} className="scroll-mt-32">
      <h2 className={titleClassName}>{service.name}</h2>

      {service.description ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
          {service.description}
        </p>
      ) : null}

      {service.items.length > 0 ? (
        <>
          {service.itemsLabel ? (
            <p className="eyebrow mt-7">{service.itemsLabel}</p>
          ) : null}
          <ul className="mt-4 flex max-w-2xl flex-col gap-3.5">
            {service.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {typeof item === "string" ? (
                  <span className="text-base text-foreground/90">{item}</span>
                ) : (
                  <span>
                    <span className="font-medium text-ink">{item.term}</span>
                    <span className="mt-1 block text-base text-ink-soft">
                      {item.desc}
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}
