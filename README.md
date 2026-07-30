# VITASAB — sitio web

Sitio de **VITASAB**, clínica dental boutique en Las Condes, Santiago.
Next.js 15 (App Router) · TypeScript · Tailwind v4.

## Cómo correrlo en tu computador

1. Instala Node.js (ver `docs/INSTALAR-NODE.md`).
2. En la carpeta del proyecto, instala las dependencias una vez:
   ```
   npm install
   ```
3. Levanta el sitio en modo desarrollo:
   ```
   npm run dev
   ```
4. Abre **http://localhost:3000** en tu navegador.

## Comandos útiles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el sitio para trabajar (con recarga automática). |
| `npm run build` | Construye la versión de producción. |
| `npm run start` | Sirve la versión ya construida. |
| `npm run verify` | Corre todo el control de calidad: tipos + lint + build. |

## Cómo está organizado

```
src/app/            Páginas del sitio (una carpeta por ruta).
src/components/      Piezas de interfaz reutilizables (Header, Footer, botones…).
src/lib/             Lógica: datos de la clínica, WhatsApp, SEO, agendamiento (inactivo).
docs/                Decisiones, datos de la clínica, contenido y temas legales.
```

## Documentos clave (en `docs/`)

- **`DECISIONES.md`** — todas las decisiones de arquitectura y su porqué (ADR).
- **`DATOS-CLINICA.md`** — la fuente única de datos de la clínica y el checklist de lo que falta.
- **`LEGAL.md`** — la lista de temas para el abogado (prerrequisito de producción).
- **`WHATSAPP-SETUP.md`** — cómo configurar el WhatsApp de la asistente.
- **`SISTEMA-DISENO.md`** · **`ESQUELETO-CONTENIDO.md`** · **`INVESTIGACION-FASE0.md`**.

## Estado actual

- ✅ Sitio público completo (home, 4 categorías, 8 especialidades, equipo, primera visita,
  miedo al dentista, convenios, urgencias, cómo llegar, contacto, legales) + SEO (Schema.org,
  sitemap, robots). Todo compila; tipos y lint en verde.
- ⏳ Los datos que faltan aparecen marcados en el sitio con recuadros `⟦DATO: …⟧`
  (búscalos con el atributo `data-placeholder`). Se rellenan desde `docs/DATOS-CLINICA.md`.
- ⏳ Dirección de arte: base **neutral**, a la espera de que Marco elija una de las 3 direcciones.
- 🚫 Agendamiento: por **WhatsApp + asistente** (ADR-007). No hay reserva self-service ni chatbot de IA.

## Configuración

Copia `.env.example` como `.env.local` y ajusta si hace falta. Ningún secreto va con prefijo
`NEXT_PUBLIC_`.
