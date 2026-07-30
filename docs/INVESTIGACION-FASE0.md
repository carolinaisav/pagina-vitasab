# Investigación — Fase 0

> Registro de lo verificado en vivo durante el alineamiento. No es asesoría legal.
> Última actualización: 2026-07-15.

## 1. Reverificación en vivo de la API de Dentalink (§2.3)

**Método:** se renderizó la SPA `https://api.dentalink.healthatom.com/docs/` con el navegador
(un `fetch` simple devuelve vacío, tal como advierte el documento). Base real de la API:
`https://api.dentalink.healthatom.com/api/v1`.

**Inventario de endpoints:** coincide con §2.3. Confirmadas las secciones Agendas, Citas,
Configuraciones, Dentistas, Especialidades, Estados de cita, **Nuevos Estados de cita (v2)**,
Prestaciones, Pacientes, Sucursales, Tratamientos, Convenios, Horarios.

### Trampas verificadas contra la doc en vivo

| Trampa (§2.3) | Estado | Hallazgo literal |
|---|---|---|
| **1 — Formato de fecha** | ⚠️ **Refinada** | La doc distingue por endpoint: la fecha de **búsqueda/disponibilidad** es `AAAA-MM-DD`, pero la **fecha para agendar una cita** es `DD/MM/AAAA`, y **toda salida** es `DD/MM/AAAA`. No es "input siempre AAAA-MM-DD" como resume el documento. El adaptador debe normalizar **según la operación**, no de forma uniforme. Test obligatorio. |
| **6 — Filtros** | ✅ Confirmada | Parámetro `q` con JSON `{"columna":{"operador":"valor"}}`. Operadores exactos: `eq, neq, gt, gte, lt, lte, lk`. El ejemplo de la doc usa `encodeURI(baseUrl + query_string)` — **no** `encodeURIComponent`. Varios operadores por columna = arreglo. |
| **7 — Paginación por cursor** | ✅ Confirmada | Objeto `links` con `current/next/prev` y parámetro `cursor` codificado. `links` **solo aparece** cuando hay más elementos que el límite por página. |
| **2 — Estado por defecto** | ✅ Factible la mitigación | Existen endpoints `POST /citas/estados`, `PUT /citas/estados/{id}`, `GET /citas/estados`. Se puede crear el estado propio **"Web — por confirmar"** como pide el documento. |

**Pendiente para A4 antes de implementar (Fase 3):** reverificar las trampas 3, 4, 5, 8, 9, 10 y
el endpoint `/horariosdisponibles` (el documento afirma "máx. 100 IDs, rango 2 semanas, GET con
body JSON" — patrón inusual y de riesgo porque algunos clientes HTTP descartan el body en GET).

## 2. Auditoría de referencias (§4.1) — spot-check en vivo

Se confirmó que los sitios siguen vivos y que las notas del documento se sostienen, con una
evolución detectada. No es un teardown completo de los 8 — ese trabajo va cuando se apruebe la
dirección de arte.

- **Aventura** — `theme-color: #0e0e0e` (casi negro, **no celeste clínico**) ✓. Las 4 categorías
  viven en el nav: *Esthetic / Restorative / Preventive Care / Beyond the Smile* ✓. Hero con vídeo ✓.
  Tipografía: **Instrument Serif** — que es una fuente **libre**. Valida el default de tipografía
  libre de §4.2. ⚠️ El `<h1>` documentado ("Premium Esthetic Dentistry") hoy es "Your smile,
  effortlessly enhanced": el sitio cambió desde la auditoría de julio 2026.
- **MINEMAL** — Positioning literal: **"HIGH-END DENTISTRY ACCESSIBLE TO ALL"** — es exactamente
  la tensión de VITASAB. La marca explica su nombre: "MINEMAL STANDS FOR ENAMEL" ✓. Serif clásica.

**Lección transversal:** los sitios de referencia evolucionan; las notas de §4.1 son de julio 2026
y deben tratarse como punto de partida, no como verdad congelada.
