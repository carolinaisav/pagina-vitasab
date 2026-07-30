# Sistema de diseño — base (Fase 0)

> **Alcance:** esto es el **sistema base + exploración de color**, permitido en Fase 0 (§7 paso 7).
> **No es la dirección de arte final** — esa se congela cuando Marco elija una de las 3 direcciones.
> Los números de contraste son **calculados, no asumidos** (§4.2, §9).
> Última actualización: 2026-07-15.

## 1. Tipografía

**Base 18px, no 16** (§1.2). El sesgo del diseñador tira hacia tipografías chicas; acá no.

### Escala modular (razón 1.25 — tercera mayor), sobre base 18px

| Rol | px | rem* | Interlínea |
|---|---|---|---|
| Nota / caption | 14 | 0.875 | 1.5 |
| **Cuerpo** | **18** | **1.125** | **1.6** |
| Entrada / lead | 22 | 1.375 | 1.5 |
| H4 | 28 | 1.75 | 1.3 |
| H3 | 35 | 2.1875 | 1.2 |
| H2 | 44 | 2.75 | 1.15 |
| H1 | 55 | 3.4375 | 1.1 |
| Display (hero) | 68+ | 4.25+ | 1.05 |

*rem con raíz 16px. En código: `html { font-size: 100% }` y `body { font-size: 1.125rem }`.

- **Interlínea del cuerpo ≥1.5** (usamos 1.6). **Medida 50–75 caracteres** (`max-width: ~65ch`).
- Nunca fijar tamaños "al azar": todo sale de la escala.

### Familias — default **libre** (§4.2)

- **Títulos:** Instrument Serif o Newsreader (serif display con **itálica real**, no oblicua sintética).
  *(Dato verificado: Aventura usa Instrument Serif, que es gratis.)*
- **Cuerpo/UI:** Geist o Inter (sans humanista, legible a 18px).
- Fuente comercial premium = **propuesta con número para Marco**, no default (§4.2, ADR-004 pendiente).

### El "gesto editorial"

**Uno, bien puesto** (no en cada H2). Es un problema a resolver por dirección, no un gesto a copiar:
Aventura usa romana/itálica; Arbor usa kerning y palabras espaciadas; MINEMAL texto rotado.
El de VITASAB se define al elegir dirección.

## 2. Espaciado y grilla

- **Escala base 8px:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Ritmo vertical generoso — el espacio en blanco es lo que hace "caro", no la decoración (§1.1).
- Grilla de 12 columnas en desktop, 4 en móvil; contenido de lectura a una sola columna angosta.

## 3. Objetivos táctiles (§1.2)

- **Piso obligatorio (WCAG 2.2 AA, SC 2.5.8): 24×24 px.**
- **Decisión de proyecto: 44×44 px** en todo CTA de **Agendar / Llamar / WhatsApp**, por el perfil etario.
- Header sticky con esos 3 CTAs → **1 clic al agendamiento desde cualquier página**.

## 4. Color — Dirección ACTIVA: "Cercanía" versión TIERRA (2026-07-18)

> **Activa** (ajustada a tonos tierra por pedido de Caro, ref. AS Odontología Digital). Toda
> verificada WCAG AA en `src/app/globals.css`:
>
> | Rol | Hex | Uso |
> |---|---|---|
> | Fondo (paper) | `#F4ECDD` | beige cálido |
> | Texto (ink) | `#2E2620` | café oscuro (12.65:1) |
> | Texto secundario (ink-soft) | `#665847` | café cálido (5.86:1 / 4.96:1 en arena) |
> | **Acento (terracota)** | `#8F4520` | botones + eyebrows + firma (blanco encima 6.91:1) |
> | Superficie (sand) | `#E9D9C0` | tarjetas y bandas (ink 10.71:1) |
> | Realce (warm-tint) | `#F1E4D3` | urgencias / destacados |
>
> El verde salvia de la exploración inicial quedó descartado. Firma de marca: la palabra en
> itálica de la serif con trazo terracota (`.mark`), + eyebrows en terracota (`.eyebrow`).

**Reglas duras (§4.2):** prohibido el celeste clínico · máximo 2 acentos · todo par verificado
programáticamente (4.5:1 texto normal, 3:1 texto grande / componentes).

Ratios **calculados** (script WCAG, ver `INVESTIGACION-FASE0.md` para el método):

### Dirección 1 — "Galería" (editorial oscuro)
| Par | Colores | Ratio | Veredicto |
|---|---|---|---|
| Texto sobre fondo | `#F2EFE9` / `#0E0E0E` | **16.82** | AA ✓ |
| Acento terracota sobre fondo | `#E08A5F` / `#0E0E0E` | **7.33** | AA ✓ |
| Texto oscuro sobre botón terracota | `#0E0E0E` / `#E08A5F` | **7.33** | AA ✓ |

### Dirección 2 — "Cercanía" (cálido luminoso)
| Par | Colores | Ratio | Veredicto |
|---|---|---|---|
| Texto sobre fondo | `#2A2724` / `#FBF8F3` | **14.02** | AA ✓ |
| Acento salvia sobre fondo | `#3F5E3C` / `#FBF8F3` | **6.89** | AA ✓ |
| Blanco sobre botón salvia | `#FFFFFF` / `#3F5E3C` | **7.30** | AA ✓ |

### Dirección 3 — "Índice" (contemporáneo, acento audaz)
| Par | Colores | Ratio | Veredicto |
|---|---|---|---|
| Texto sobre fondo | `#17181A` / `#FCFCFA` | **17.30** | AA ✓ |
| Acento verde profundo sobre fondo | `#1F5C3D` / `#FCFCFA` | **7.70** | AA ✓ |
| Blanco sobre botón verde | `#FFFFFF` / `#1F5C3D` | **7.91** | AA ✓ |
| **Coral decorativo** sobre fondo | `#FF6B4A` / `#FCFCFA` | **2.74** | ⚠️ **FALLA para texto** |

> **Restricción verificada:** el coral `#FF6B4A` **no se usa nunca para texto ni UI pequeña** (2.74 < 3).
> Solo como gráfico grande o bloque de color. Si se quiere coral como acento de texto, hay que
> oscurecerlo. Esto es exactamente lo que pide el documento: verificar en vez de confiar en el ojo.

Ninguna de las 3 usa celeste. Cada una tiene 1 acento (+ neutros). A7 auditará estos valores.

## 5. Movimiento (§4.2, §4.3)

- **`prefers-reduced-motion` respetado — no negociable.**
- Reveals sutiles y transiciones de página. **Nada de parallax agresivo.**
- **Prohibido:** carrusel de hero, contadores animados (anti-patrones §4.3).

## 6. Checklist de anti-patrones (antes de cada entrega, §4.3)

- ❌ Carrusel de hero · ❌ texto quemado en imágenes · ❌ contadores animados
- ❌ Bloque de 4 adjetivos intercambiables · ❌ "somos la mejor…" · ❌ iconos de diente clipart
- ❌ Muro de logos de proveedor (e.max/Invisalign/iTero) · ❌ copy de miedo o vanidad
- ❌ Stock · ❌ `user-scalable=0` / `maximum-scale` · ❌ `href="#"`
