import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirecciones permanentes (308) para direcciones antiguas que ya no existen,
  // de modo que enlaces guardados o resultados de Google no caigan en un 404.
  async redirects() {
    return [
      { source: "/primera-visita", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
