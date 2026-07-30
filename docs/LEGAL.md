# LEGAL — Bloqueantes para abogado

> **Esto es investigación documental, NO asesoría legal.** Cada punto ⚠️ debe validarlo un
> **abogado antes de producción**. Contratar al abogado es **prerrequisito de producción**, no un
> "nice-to-have". Fuentes completas en §10 del prompt maestro.
> Última actualización: 2026-07-15 · Fase 0 (lista inicial, A8 la mantiene).

## Estado general

- **Ley 21.719** (datos personales): publicada 13-12-2024, **entra en vigencia 01-12-2026**.
  Se diseña para ella desde ahora. La Agencia de Protección de Datos **no está constituida**
  (Senado rechazó la terna 20-05-2026). Sin reglamentos ni lista de países adecuados.
  ⚠️ Último dato verificado 03-06-2026 → **re-verificar**.
- El sitio web de una clínica es, en sí mismo, **ejercicio profesional** (art. 313 a CP,
  "aunque sea a título gratuito"). No es "marketing con requisitos legales encima".

## Bloqueantes ⚠️ que requieren abogado

1. **Transferencia internacional (art. 27 b)** — Supabase (São Paulo), Vercel, Resend, Anthropic,
   Plausible. Redactar cláusulas contractuales propias, autoevaluadas contra art. 28, documentadas
   por proveedor. Datos de salud identificables **no** deben salir del país (anonimizar ≠ seudonimizar).
2. **Contratos de encargo (art. 15 bis)** con cada proveedor. Subencargo prohibido salvo
   autorización específica por escrito.
3. **EIPD — Evaluación de Impacto (art. 15 ter d)** obligatoria si se tratan datos de salud
   apoyándose en el art. 16 bis e), sin importar el tamaño de la clínica.
4. **Política de privacidad (art. 14 ter)** — 12 contenidos mínimos, nombrando hosting y
   proveedores extranjeros (letra h) y declarando el chatbot con su lógica si perfila (letra l).
5. **Correo art. 12 A + retracto (Ley 19.496)** — la confirmación debe llevar copia íntegra del
   contrato; con log de envío el retracto es de 10 días, sin él salta a 90. Validar contenido.
6. **Retracto: contradicción no resuelta** — Ley 21.398 vs. texto vigente BCN. **No excluir el
   retracto sin visto bueno del abogado** (§6.6).
7. **Consentimiento parental < 16 años** — obligatorio para datos sensibles de menores; el flujo
   lo pide antes de cualquier captura. Validar redacción.
8. **Fotos de pacientes (§6.3)** — release fotográfico propio, expreso, específico, previo,
   revocable; flujo de despublicación real en el CMS; hosting analizado. Validar.
9. **Agente de IA y art. 313 a CP** — no hay jurisprudencia chilena sobre chatbots. Validar la
   estructura de mitigación (dentista habilitado responsable + herramienta bajo su responsabilidad)
   **antes** de lanzar cualquier agente. Boletín 16.821-19 (identificación de IA) — ⚠️ re-verificar
   estado legislativo.
10. **Autorización sanitaria SEREMI** — obligatoria por sala; publicar el N° de resolución es
    diferenciador defensivo. Confirmar que existe y su número (dato bloqueante de §0).
11. **Publicidad odontológica** — ⚠️ no se halló norma MINSAL específica (argumento *ex silentio*).
    Confirmar con abogado sanitario.
12. **Reglamento de Comercio Electrónico (Decreto 6/2021)** — ⚠️ no verificado si aplica a salud;
    lectura razonable es que sí. Confirmar.
13. **WhatsApp como canal de agendamiento (ADR-007)** — WhatsApp es **Meta**: (a) **transferencia
    internacional** (art. 27) y Meta como **encargado** → contrato de encargo; (b) el mensaje
    automático debe **identificarse como automático** y advertir **"no ingreses información de salud
    por este canal"** (§6.4 regla 12), sin diagnóstico ni precio; (c) **re-analizar art. 12 A /
    retracto (§6.6):** al agendar por conversación (no e-commerce automatizado) cambia el encuadre de
    "contrato electrónico a distancia" — confirmar si aplica y cómo se documenta la confirmación
    (probablemente la emite Dentalink cuando la asistente agenda).

## Sanciones de referencia (para dimensionar el riesgo)

- Ley 21.719: leves ≤5.000 UTM · graves ≤10.000 UTM · **gravísimas ≤20.000 UTM** (filtrar ficha de
  paciente u ocultar una brecha = gravísima).
- Ley 19.496: publicidad engañosa ≤1.500 UTM · **≤2.250 UTM si implica daños a la salud**.

## Correcciones a "copiemos el RGPD"

- **No** hay RoPA obligatorio para privados en Chile. **No** es obligatorio el DPO. Brechas: a la
  Agencia "sin dilaciones indebidas" (no hay plazo de 72 h); a titulares, siempre que haya datos
  sensibles → siempre en una clínica dental.
