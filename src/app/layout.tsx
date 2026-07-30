import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";
import { rootMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/lib/seo/JsonLd";
import { buildDentistJsonLd } from "@/lib/seo/schema";

// Tipografía inspirada en AS Odontología Digital (ambas libres en Google Fonts):
// Cormorant Garamond para títulos, EB Garamond para el cuerpo.
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
        {children}
      </body>
    </html>
  );
}
