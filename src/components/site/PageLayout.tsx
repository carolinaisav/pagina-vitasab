import type { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";

interface PageLayoutProps {
  readonly title: string;
  readonly eyebrow?: string;
  readonly lead?: string;
  readonly children: ReactNode;
}

/**
 * Envoltorio estándar de una página interior: Header sticky + hero de título +
 * contenido + Footer. El `<main id="contenido">` es el destino del skip-link.
 */
export function PageLayout({ title, eyebrow, lead, children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main id="contenido">
        <section className="border-b border-ink/10">
          <Container className="py-14 sm:py-20">
            <div className="reading-measure">
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
              <h1 className={`font-serif text-h1${eyebrow ? " mt-4" : ""}`}>{title}</h1>
              {lead ? <p className="mt-5 text-lead text-ink-soft">{lead}</p> : null}
            </div>
          </Container>
        </section>
        <Container className="py-12">{children}</Container>
      </main>
      <Footer />
    </>
  );
}
