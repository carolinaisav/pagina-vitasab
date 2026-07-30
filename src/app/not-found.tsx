import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { whatsappIntentLink } from "@/lib/whatsapp";

export default function NotFound() {
  const wa = whatsappIntentLink("agendar");

  return (
    <>
      <Header />
      <main id="contenido">
        <Container className="flex flex-col items-center gap-6 py-28 text-center">
          <p className="font-serif text-h4 text-foreground/60">404</p>
          <h1 className="font-serif text-h2">No encontramos esta página</h1>
          <p className="reading-measure text-lead text-foreground/80">
            Puede que el enlace esté roto o que la página se haya movido. Volvamos a un lugar
            conocido.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTA href="/" variant="primary">
              Ir al inicio
            </CTA>
            <CTA href={wa} variant="secondary">
              Agendar por WhatsApp
            </CTA>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
