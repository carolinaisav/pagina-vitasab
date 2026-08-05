"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  readonly children: ReactNode;
  readonly className?: string;
}

/**
 * Aparición suave al hacer scroll: la sección entra con un fade + leve desplazamiento.
 * Respeta `prefers-reduced-motion` (§4.2): si el usuario lo pide, aparece de inmediato.
 * El contenido siempre está en el DOM (SEO / lectores de pantalla); sin JS, un `<noscript>`
 * en el layout fuerza la visibilidad.
 */
export function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
