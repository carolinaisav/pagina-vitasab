# Esqueleto de contenido — estructura del sitio (Fase 0)

> **Cómo leer esto:** es la **forma** del sitio, no el texto final. Todo lo que va entre `⟦ ⟧` es un
> **placeholder obviamente marcado** — un hueco que se llena con **datos reales** (§0), nunca
> inventados. Cuando lleguen los datos de la clínica, esto se convierte en copy de verdad (que pasa
> por revisión humana, §9).
> Basado en §5 del prompt maestro. Última actualización: 2026-07-15.

## Convención de placeholders

- `⟦DATO: …⟧` → dato factual que falta (dirección, RUT, nombre, precio…). **Bloqueante.**
- `⟦COPY: …⟧` → texto a redactar por A1 una vez haya contexto.
- `⟦FOTO: …⟧` → imagen pendiente de la sesión dirigida (nunca stock).

---

## Mapa del sitio

```
/                         Home
/estetica                 Categoría 1 (paraguas)
/restauracion             Categoría 2
/prevencion-y-salud       Categoría 3
/familia                  Categoría 4
  └─ /especialidades/[8 páginas propias, fuera del nav de primer nivel]
/equipo                   Equipo
/primera-visita           "Tu primera visita"  ← nav de primer nivel
/miedo-al-dentista        "Pacientes con miedo al dentista"
/convenios                Convenios y financiamiento
/urgencias                Urgencias
/como-llegar              Cómo llegar
/contacto                 Contacto
/legales/privacidad       Política de privacidad
/legales/terminos         Términos y condiciones
/legales/accesibilidad    Declaración de accesibilidad
```

**Nav de primer nivel (máx. ~5, estilo Arbor/Aventura):**
`Estética · Restauración · Prevención y salud · Familia · Primera visita`
+ CTAs sticky: **Agendar · Llamar · WhatsApp**.

> Las 8 especialidades **existen** con página y URL propias; **no** viven en el nav de primer nivel
> (§5.1). El nombre de la categoría paraguas para meter estética facial sin parecer spa está
> ⟦COPY: encontrar equivalente en castellano de "Beyond the Smile", sin anglicismos⟧.

### Especialidades → 4 categorías (propuesta a validar con A1 y Marco, §5.1)

| Categoría | Especialidades |
|---|---|
| **Estética** | Estética facial · Rehabilitación (parte estética) |
| **Restauración** | Implantología · Rehabilitación · Endodoncia |
| **Prevención y salud** | Odontología general · Periodoncia |
| **Familia** | Odontopediatría · Ortodoncia |

---

## Home

1. **Hero estático** (un solo mensaje — **nunca carrusel**, §4.3). ⟦COPY: una promesa, no adjetivos⟧
   + ⟦FOTO/vídeo: espacio real o manos trabajando⟧. CTA único visible.
2. **Barra de diferenciadores concretos** (antídoto al bloque de 4 adjetivos, §4.3). Ej. estilo Aires:
   ⟦DATO: años de trayectoria⟧ · ⟦DATO: N° de cuotas sin interés⟧ · ⟦DATO: ¿atienden sábados?⟧ ·
   ⟦DATO: metro más cercano⟧.
3. **Las 4 categorías** como índice curado, un CTA cada una (estilo Arbor).
4. **Urgencias** — bloque propio, no enterrado (§5.3). ⟦DATO: horario y teléfono de urgencia⟧.
5. **Primera visita** — enlace destacado.
6. **Convenios / financiamiento** — gancho + enlace. ⟦DATO: isapres/Fonasa/complementarios⟧.
7. **Equipo** — asomo con enlace.
8. **Cómo llegar** — metro primero. ⟦DATO: dirección + estación de metro⟧.
9. **Footer** — ⟦DATO: razón social, RUT, dirección, teléfono, horarios, N° resolución SEREMI⟧,
   `og:locale` = **es_CL**, enlaces legales, WhatsApp con intención pre-cargada.

## Página de categoría (×4)

Intro de la categoría + tarjetas hacia sus especialidades + un CTA. ⟦COPY por categoría⟧.

## Página de especialidad (×8) — estructura fija (§5.2)

1. Qué es, en lenguaje de paciente. ⟦COPY⟧
2. **El mecanismo, no el nombre comercial** (Malta: "el test drive se coloca en tu boca"). ⟦COPY⟧
3. Qué esperar: **cuántas sesiones · cuánto dura · cuánto duele** (la ansiedad es la objeción real). ⟦COPY⟧
4. **Riesgos y resultados esperables** — explicarlos te pone del lado correcto (legal y comercial). ⟦COPY⟧
5. Quién lo hace → enlace al profesional. ⟦DATO: profesional a cargo⟧
6. Convenios y financiamiento aplicables.
7. FAQ de la especialidad. ⟦COPY⟧
8. **Un** CTA.

## Tu primera visita (nav de primer nivel)

Qué pasa paso a paso, cuánto dura, qué llevar, cómo se paga. Baja la ansiedad del tramo 60–80. ⟦COPY⟧
⟦DATO: precio de la primera consulta — solo si Marco aprueba publicarlo (§5.4)⟧.

## Pacientes con miedo al dentista

Servicio de primera clase (Malta). Copy que desarma, sin condescendencia (§1.2). ⟦COPY⟧
Diferencial que cuesta cero.

## Convenios y financiamiento

⟦DATO: isapres, Fonasa, seguros complementarios, excedentes⟧ · ⟦DATO: cuotas sin interés⟧ ·
⟦DATO: medios de pago⟧. **Admitir el límite genera confianza** (Aires: "los montos y la aprobación
dependen siempre de tu aseguradora"). ⟦COPY honesto⟧.

## Equipo

Por profesional: ⟦DATO: nombre⟧ · ⟦DATO: título⟧ · ⟦DATO: universidad⟧ · ⟦DATO: especialidad⟧ ·
enlace al **RNPI** (rnpi.superdesalud.gob.cl) · ⟦FOTO: retrato dirigido, no stock⟧.
Autorizado por el art. 48 del Código de Ética.

## Urgencias

⟦DATO: horario⟧ · ⟦DATO: teléfono directo⟧ · WhatsApp con intención. Qué se considera urgencia. ⟦COPY⟧

## Cómo llegar

⟦DATO: dirección + comuna⟧ · **metro primero** ⟦DATO: estación⟧ · estacionamiento segundo · mapa.

## Contacto

Teléfono grande · WhatsApp con intención pre-cargada
(`?text=Me gustaría agendar una hora para la evaluación`) · horarios · CTA Agendar.
**Sin** "formulario y espera 24–48 h hábiles" (§1.4).

## Legales (3 páginas)

- **Privacidad:** 12 contenidos del art. 14 ter, nombrando Supabase/Vercel/Resend/Anthropic/Plausible.
  A8 la redacta; abogado la valida (ver `LEGAL.md`).
- **Términos y condiciones.**
- **Declaración de accesibilidad** (visible en el footer, estilo LAVA).

---

## Flujo de agendamiento (esqueleto, se construye en Fase 3)

1. Elegir especialidad/motivo → sucursal → profesional → bloque disponible.
   **No pedir sintomatología ni motivo clínico** (§6.2 — eso lo convierte en dato de salud).
2. **Pregunta de edad / consentimiento parental si < 16** antes de cualquier captura (§6.2).
3. Datos mínimos: nombre, teléfono, RUT — **aceptan cualquier formato** (§1.2); RUT se valida por
   módulo 11 en el backend.
4. **Casilla de marketing separada y desmarcada** (nunca junto al agendamiento, §6.2).
5. Pantalla de confirmación con condiciones almacenables + casilla activa no premarcada (art. 32).
6. **Correo art. 12 A** con copia íntegra del contrato + **log auditable** (§6.4) — **antes** de
   cualquier redirección.
7. Modos de fallo de §2.4 (API caída, bloque tomado, timeout idempotente…) — nunca un formulario muerto.
