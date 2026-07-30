import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/clinic";

/**
 * VITASAB — robots.txt.
 * Permite todo el rastreo y apunta al sitemap.
 * baseUrl desde `NEXT_PUBLIC_SITE_URL` (fallback https://vitasab.cl) vía `SITE_URL`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
