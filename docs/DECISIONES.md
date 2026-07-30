# DECISIONES — Registro de decisiones de arquitectura (ADR)

> Cada decisión no obvia del proyecto VITASAB se documenta acá (§9 del prompt maestro).
> **Estados:** `Aceptada` (decisión ya tomada en el prompt, se registra) ·
> `Requiere aprobación de Marco` · `Propuesta` (a validar con Caro/Marco) · `Bloqueada` (falta dato).
> Última actualización: 2026-07-15 · Fase 0.

---

## ADR-000 — Realidad del entorno de herramientas (corrección al prompt)

**Estado:** Aceptada (constatación de hecho)

**Contexto.** El prompt maestro (§3) asume herramientas MCP que **no están conectadas en este
entorno**. Constatado al arrancar Fase 0:

| El prompt asume | Realidad de este entorno |
|---|---|
| `mcp__skills__list_skills`, `mcp__plugins__list_plugins` | No existen. Sí hay un inventario de skills cargado y una herramienta `Skill`. |
| Skills `design:*`, `marketing:*`, `engineering:*`, `product-management:*`, `anthropic-skills:humanizer` | **Ninguna existe con ese nombre.** Hay equivalentes (ver abajo). |
| MCP de **Supabase**, **Vercel**, **Canva** | **No conectados.** Se puede operar por CLI/API cuando toque, pero no hay MCP. |
| "Claude in Chrome" | Disponible, y además hay un navegador integrado (usado en Fase 0). |

**Mapa de skills equivalentes disponibles:**

- Diseño/UX → `ui-ux-pro-max:design-system`, `ui-ux-pro-max:design`, `frontend-design`, `gstack:design-review`, `gstack:design-consultation`
- Copy/marca → no hay `humanizer`; se usa criterio editorial + revisión humana (§9). Marca: `ui-ux-pro-max:brand`
- Accesibilidad/QA → `gstack:qa`, `gstack:review`, `gstack:health`, más axe-core/Lighthouse por CLI
- Ingeniería → `code-review`, `security-review`, `superpowers:*` (TDD, plans, debugging), `gstack:spec`
- Investigación → `deep-research` · Documentos → `9d2f1ae18723:{docx,pdf,pptx,xlsx}`, `make-pdf`

**Consecuencia.** No se bloquea nada, pero los nombres de skill del prompt no se pueden invocar
tal cual. Donde el prompt dice "corre `design:design-critique`", se usa el equivalente disponible.

**Para Caro:** el prompt fue escrito para otra instalación de Claude Code. Las capacidades existen,
pero con otros nombres. No cambia el plan; sí cambia qué comando se llama por debajo.

---

## ADR-001 — Stack técnico

**Estado:** Aceptada (definida en §2.1) · con una salvedad de datos

**Decisión.** Next.js 15 (App Router) + TypeScript estricto · Tailwind + shadcn/ui (Radix) ·
Supabase (DB/Auth/Storage) · Vercel (deploy) · Resend o Postmark (correo transaccional) ·
Claude API vía route handler propio · `next/image` con AVIF/WebP · Plausible cloud ·
**es_CL monolingüe** (sin i18n, decisión explícita).

**Consecuencia crítica de privacidad.** La región Supabase más cercana es **São Paulo** →
**transferencia internacional de datos** (art. 27 b, Ley 21.719). Aplica a Supabase, Vercel,
Resend, Anthropic y Plausible — **no es solo problema del chatbot**. A8 documenta la vía por
proveedor en `docs/LEGAL.md`. El diseño defendible es **no enviar datos de salud identificables
al extranjero**.

**El correo transaccional NO es opcional:** es prueba legal del art. 12 A (§6.4). Exige
SPF/DKIM/DMARC + **log persistido y auditable de cada envío**.

**Para Caro:** stack moderno y estándar. El punto delicado no es técnico sino legal: los
servidores están fuera de Chile, y eso obliga a papeleo (contratos y un análisis por proveedor)
que hace el abogado.

---

## ADR-002 — Reinterpretación del "3D" del encargo

**Estado:** ⚠️ **Requiere aprobación explícita de Marco** (§1.1) — cambio al encargo original

**Contexto.** El encargo pedía "3D". La investigación (9 sitios dentales premiados 2024–2026)
muestra que **cero** usan render 3D de dientes. Lo editorial-premium sale de **tipografía +
espacio en blanco + fotografía propia dirigida**. El molar 3D flotante es el cliché del sector.

**Decisión propuesta.** Regla dura: *un render 3D solo va si muestra el resultado real de un
paciente real (DSD) o un objeto físico que la clínica efectivamente tiene.* Nunca dientes
decorativos, iconos clipart ni implante en hueso translúcido (eso transfiere la marca al proveedor).

**Consecuencia presupuestaria propuesta.** Reasignar el presupuesto de 3D a una **sesión de
fotografía dirigida**. ⚠️ **No se puede cuantificar sin saber cuánto era el presupuesto de 3D** →
dato bloqueante (§0).

**Riesgo si se ignora.** Publicar DSD sin tener el equipo real = **publicidad engañosa**
(art. 28 b LPC). Por eso también se necesita saber si la clínica tiene escáner intraoral / DSD.

**Para Caro:** proponemos cambiar "dientes en 3D" por **fotografía profesional real de la clínica**.
Se ve más caro, es más creíble y evita un riesgo legal. Necesitamos el OK de Marco y saber cuánto
se había presupuestado para el 3D.

---

## ADR-003 — Adaptador de agendamiento (`BookingProvider`)

**Estado:** ⚠️ **REVISADA por ADR-007 (2026-07-15).** El agendamiento self-service en el sitio queda
**descartado**: se agenda por **WhatsApp + asistente humana** (ADR-007). El código `BookingProvider`
/ `MockProvider` se conserva **inactivo**, como vía opcional a futuro si algún día se contrata la API
de Dentalink para self-service. **La API de Dentalink ya NO bloquea el lanzamiento.**

**Decisión.** Interfaz `BookingProvider` con tres implementaciones:

| Provider | Uso permitido |
|---|---|
| `MockProvider` | Desarrollo local. Default en dev. **Avanza ya, sin esperar a nadie.** |
| `DentalinkLinkProvider` | Solo v0/preproducción. Aun así, el sitio captura consentimientos y manda el correo del art. 12 A **antes** de redirigir. |
| `DentalinkApiProvider` | **Requisito de producción.** Flujo completo controlado. |

**Por qué el link nativo no sirve para producción.** Si la reserva ocurre en el link alojado por
Dentalink, VITASAB no controla el correo de confirmación → **no hay copia íntegra del contrato**
del art. 12 A → la exposición al retracto salta de 10 a **90 días**, y se rompen el consentimiento
parental, el de marketing y la corrección de errores (art. 32). **Decisión firme del prompt, no
se cambia en silencio.** Si contratar la API no es viable, se escala a Jaime.

**Hallazgos verificados en vivo** (ver `INVESTIGACION-FASE0.md`): filtros con `encodeURI` y
operadores `eq/neq/gt/gte/lt/lte/lk` ✓; paginación por cursor con objeto `links` ✓; estados de
cita personalizables ✓; **y una corrección**: la fecha para *crear* una cita es `DD/MM/AAAA`
(no `AAAA-MM-DD`) — el adaptador normaliza según la operación.

**~~Bloqueante de producción~~ — YA NO (ver ADR-007).** Con el agendamiento por WhatsApp, la
asistente maneja el calendario directamente en Dentalink y el sitio no necesita la API. Cotizar la
API a `integraciones@healthatom.com` pasa a ser **opcional**, solo si en el futuro se quiere
agendamiento self-service en el sitio.

**Para Caro:** dejamos construido el "enchufe" de agendamiento por si algún día quieres que la
gente reserve sola en el sitio, pero **hoy no se usa**: se agenda por WhatsApp y la asistente lleva
el calendario. Eso significa que **ya no necesitas contratar la API de Dentalink para lanzar** — un
bloqueante y un costo menos.

---

## ADR-004 — Arquitectura del agente de IA

**Estado:** ⚠️ **REVISADA por ADR-007 (2026-07-15).** No habrá chat de IA en el sitio. El único
"bot" es el **primer mensaje automático de WhatsApp**, que saluda, se identifica como automático y
deriva a la asistente humana. **Las respuestas médicas las da la asistente** (persona), no el bot →
retira casi toda la superficie de riesgo penal del §6.4. Las reglas duras de abajo **siguen
aplicando a lo que diga el bot** (identificarse, no diagnosticar, no cotizar, corte de urgencia,
"no ingreses datos de salud por este canal").

**Contexto.** El agente exige clasificador de intención, RAG, guardrails de dos capas, evals,
bandeja humana, logs, presupuesto de tokens y **un dentista que firme la base de conocimiento** —
todo para responder preguntas informativas. Y arrastra **riesgo penal** (art. 313 a: ejercicio
ilegal "aunque sea a título gratuito") + transferencia internacional de datos sensibles.

**Propuesta.** Diferir el agente a v2. **Una FAQ estática** escrita con cuidado y validada por el
dentista responde lo mismo con **riesgo penal cero, costo cero y sin transferencia internacional**.
El sitio con Fases 0–3 + WhatsApp con intención pre-cargada ya le gana al mercado chileno (§1.3).

**Si Marco igual lo quiere (Fase 4), reglas duras no negociables:** nunca diagnostica, nunca
prescribe, nunca cotiza, nunca compara aranceles, nunca se atribuye calidad profesional; se
identifica como IA desde el primer mensaje; disclaimer persistente; protocolo de urgencia con
corte duro; clasificador de intención **antes** del LLM; RAG sobre base curada y **firmada por un
dentista**; evals que A7 escribe y A8 audita; toda la defensa de §2.5 (rate limit, captcha,
presupuesto tope). Sin dentista supervisor firmante, **la Fase 4 no cierra**.

**Para Caro:** recomendamos **dejar el chatbot para una segunda versión** y partir con una sección
de preguntas frecuentes bien hecha + WhatsApp. Es más barato, más seguro y suficiente para ganar.
Si Marco quiere el chatbot igual, se puede — pero necesita un dentista que se haga responsable por
escrito, y sube el costo y el riesgo.

---

## ADR-005 — Política de retención de datos

**Estado:** Aceptada (§6.2), a firmar por A8

**Decisión.** Resuelve el conflicto entre "suprimir leads no convertidos" (art. 14 d) y "conservar
logs del chat":

| Dato | Retención | Después |
|---|---|---|
| Lead no convertido (formulario) | 90 días | Supresión |
| Conversación del chat (contenido) | 6 meses | **Anonimización irreversible** (art. 2° k). Seudonimizar NO exime. |
| Métricas agregadas del chat (temas) | Indefinido | Ya anonimizadas en origen |
| Log de envío del correo art. 12 A | **5 años** | Prueba legal. Solo metadatos + contenido renderizado |
| Logs de abuso / rate limit | 30 días | — |

**Consecuencia.** Cron documentado, testeado, con log de ejecución. Se implementa en Fase 3/5.

**Para Caro:** reglas claras de cuánto se guarda cada cosa y cuándo se borra. Es obligación legal
y lo revisa el abogado.

---

## ADR-006 — Alcance de contenido y arquitectura de información

**Estado:** Propuesta (a validar con A1 y Marco, §5.1)

**Decisión.** 8 especialidades agrupadas en **4 categorías** en el nav de primer nivel (las 8
mantienen página y URL propias). Páginas obligatorias: "Tu primera visita", "Pacientes con miedo
al dentista", "Convenios y financiamiento", "Equipo" (con universidad + link RNPI), "Urgencias",
"Cómo llegar" (metro primero), "Legales". **A9 NO hace páginas por comuna** (doorway pages).

**Precios (§5.4).** Decisión de Marco: no se publican, salvo primera consulta (propuesta de A1 a
validar). El agente **nunca cotiza**.

**Para Caro:** el menú tendrá 4 grandes áreas en vez de 8, para no marear. Proponemos publicar solo
el precio de la **primera consulta** (es el diferenciador más barato); el resto queda como
"presupuesto tras evaluación", como pidió Marco.

---

## ADR-007 — Agendamiento y contacto por WhatsApp + asistente humana

**Estado:** Aceptada (decisión de Caro, 2026-07-15). Reemplaza el self-service de ADR-003 y el chat
de IA de ADR-004.

**Decisión.** El canal de agendamiento y contacto es **WhatsApp**. Flujo:
1. El paciente toca "Agendar por WhatsApp" (intención pre-cargada) o escribe al número.
2. Un **primer mensaje automático** (el "bot") saluda, **se identifica como automático** y avisa que
   la asistente responderá; **no diagnostica, no cotiza, no da respuestas médicas**.
3. La **asistente humana** toma la conversación, **agenda en Dentalink a mano** y responde las dudas.

Se **descarta**: el agendamiento self-service en el sitio y el chat de IA en el sitio. El código de
`BookingProvider` queda inactivo como vía opcional a futuro (ADR-003).

**Cómo se implementa "el bot" — DECIDIDO (Caro, 2026-07-15): Opción A** (WhatsApp Business nativo).
Sin bot con IA, sin Meta Cloud API, sin código. La configuración va en `docs/WHATSAPP-SETUP.md`.

| Opción | Qué es | Costo / riesgo |
|---|---|---|
| **A — recomendada** | **WhatsApp Business (app gratis)** con automatización nativa: mensaje de bienvenida, mensaje de ausencia (fuera de horario), respuestas rápidas. | **Cero código, cero API, cero análisis de agente IA.** Cumple "un bot contesta, la asistente toma". |
| B — opcional | **Bot conversacional propio** (WhatsApp Cloud API + Claude). Más capaz. | Reintroduce costo, la defensa de §2.5 (rate limit/captcha/presupuesto), Meta Cloud API + webhook/servidor, y el análisis penal del §6.4. Solo si se justifica. |

**Del lado del sitio (común a A y B, ya construido):** los CTA "Agendar" abren `wa.me/<número>?text=<intención>` (`src/lib/whatsapp.ts`). Header: **"Agendar por WhatsApp"** (primario) + **"Llamar"** (secundario).

**Legal / privacidad (A8, ver `LEGAL.md`):**
- WhatsApp = **Meta** → **transferencia internacional** (art. 27) y Meta es **encargado** → contrato de encargo. Agregar a `LEGAL.md`.
- El mensaje automático **debe identificar que es automático** y **advertir "no ingreses información de salud por este canal"** (§6.4 regla 12). No diagnóstico ni precio.
- **Re-analizar art. 12 A / retracto (§6.6):** con reserva por conversación (no e-commerce automatizado), el encuadre de "contrato electrónico a distancia" cambia; la confirmación probablemente la emite Dentalink cuando la asistente agenda. A8 confirma si aplica y cómo se documenta.
- La ficha clínica **sigue en Dentalink**, no en el sitio.

**Para Caro:** agendar por WhatsApp es exactamente cómo funciona el mercado chileno (§1.4) y te ahorra
dos cosas caras: la API de Dentalink y el chatbot con IA. La única decisión que queda es si el "bot"
es la **respuesta automática gratis de WhatsApp Business** (lo recomiendo) o un **bot con IA de
verdad** (más caro y con más reglas legales). Mientras decides, el sitio ya queda listo para abrir
WhatsApp con el mensaje escrito.

---

## Decisiones pendientes de dato (bloqueadas)

Ninguna de estas se inventa (§0). Están listadas en la presentación a Caro/Marco de Fase 0:
dirección/comuna/teléfono/horarios, N° resolución sanitaria SEREMI, nombres/títulos/universidades
de profesionales, razón social + RUT, convenios y medios de pago, credenciales Dentalink (y si está
contratada), **presupuesto total y plazo**, dentista supervisor firmante, y **si existe escáner
intraoral / DSD**.
