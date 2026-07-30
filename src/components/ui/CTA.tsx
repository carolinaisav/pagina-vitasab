import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface CTAProps {
  readonly href: string;
  readonly variant?: Variant;
  /** Fuerza tratamiento como enlace externo. Si se omite, se detecta por el esquema. */
  readonly external?: boolean;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly children: ReactNode;
}

const BASE =
  "tap-target gap-2 rounded-full px-6 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-foreground/30 text-foreground hover:bg-foreground/5",
};

/**
 * CTA accesible (target 44×44 vía `.tap-target`). Renderiza `next/link` para rutas
 * internas y `<a>` para externos (WhatsApp / tel / mailto). Los enlaces web externos
 * abren en pestaña nueva con `rel="noopener noreferrer"`.
 */
export function CTA({
  href,
  variant = "primary",
  external,
  className = "",
  ariaLabel,
  children,
}: CTAProps) {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`.trim();
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    const opensNewTab = !href.startsWith("tel:") && !href.startsWith("mailto:");
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={cls}
        {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={cls}>
      {children}
    </Link>
  );
}
