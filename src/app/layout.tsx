import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";
import { rootMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/lib/seo/JsonLd";
import { buildDentistJsonLd } from "@/lib/seo/schema";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

// Títulos y menú: Cormorant Garamond · Cuerpo: EB Garamond (libres, ref. AS Odontología).
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  ...rootMetadata,
  description:
    "Clínica dental en Las Condes, Santiago. Agenda tu atención por WhatsApp o teléfono.",
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body className={`${cormorant.variable} ${ebGaramond.variable} antialiased`}>
        <JsonLd data={buildDentistJsonLd()} />
        <noscript>
          {/* Sin JavaScript, el contenido con aparición al scroll se muestra igual. */}
          <style
            dangerouslySetInnerHTML={{
              __html: "[data-reveal]{opacity:1 !important;transform:none !important}",
            }}
          />
        </noscript>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
