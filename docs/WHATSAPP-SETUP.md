# Configuración de WhatsApp Business — para la asistente

> El agendamiento es por WhatsApp (ADR-007, Opción A). Usamos la **app gratis de WhatsApp Business**
> con su automatización nativa. **No hay bot con IA ni programación.** Esta guía tiene los textos
> listos para copiar y pegar. Los textos cumplen las reglas legales (§6.4): el mensaje se identifica
> como automático, no da diagnósticos ni precios, y pide no compartir datos de salud por el canal.
> Última actualización: 2026-07-15.

## Qué se configura (todo dentro de la app WhatsApp Business)

1. **Mensaje de bienvenida** (se envía solo la primera vez que alguien escribe).
2. **Mensaje de ausencia** (se envía solo fuera de horario).
3. **Respuestas rápidas** (atajos que usa la asistente al responder).

> Después del mensaje automático, **la asistente humana toma la conversación**, agenda en Dentalink
> y responde las dudas (incluidas las médicas). El mensaje automático es solo el "hola" inicial.

---

## 1. Mensaje de bienvenida (copiar/pegar)

> Ajustes → Herramientas para la empresa → **Mensaje de bienvenida** → activar y pegar:

```
¡Hola! 👋 Este es un mensaje automático de VITASAB. En un momento te responde nuestra asistente
para ayudarte a agendar tu hora.

Por este medio no entregamos diagnósticos, indicaciones ni presupuestos. Por tu seguridad, por
favor no compartas información de salud por aquí.

Si es una urgencia, llámanos al +56 9 6668 2941.
```

## 2. Mensaje de ausencia (copiar/pegar)

> Ajustes → Herramientas para la empresa → **Mensaje de ausencia** → activar, elegir horario y pegar:

```
¡Hola! 👋 Este es un mensaje automático de VITASAB. En este momento estamos fuera de horario de
atención ⟦DATO: horario de atención⟧. Te responderemos apenas volvamos.

Si es una urgencia, llámanos al +56 9 6668 2941.
```

## 3. Respuestas rápidas sugeridas (para la asistente)

> Ajustes → Herramientas para la empresa → **Respuestas rápidas**. Se activan escribiendo `/atajo`.

- `/agendar` → «Con gusto te agendo. ¿Qué necesitas atenderte y qué días u horarios te acomodan?»
- `/direccion` → «Estamos en Rosario Sur 91, oficina 303, Las Condes. ⟦DATO: estación de metro⟧»
- `/convenios` → «Trabajamos con ⟦DATO: convenios⟧. Los montos y la aprobación dependen siempre de tu aseguradora.»
- `/pago` → «Aceptamos ⟦DATO: medios de pago⟧ y ⟦DATO: N° cuotas sin interés⟧ cuotas sin interés.»
- `/primera` → «Tu primera consulta es una evaluación. Dura aproximadamente ⟦DATO: duración⟧ y con eso te preparamos un presupuesto.»

## Reglas para la asistente (importante, legal — §6.4)

- **No dar diagnósticos ni indicaciones por escrito antes de la evaluación presencial.** Ante síntomas → invitar a evaluación o, si es urgencia, derivar a llamar/atención presencial.
- **No prometer resultados** ("infalible", "garantizado"). Los resultados son *predecibles o esperables*, no garantizados (art. 54).
- **No comparar precios con otras clínicas** (falta grave, art. 48).
- Los presupuestos se entregan **tras la evaluación**, nunca un precio "al aire".

## Datos que faltan para dejar los textos finales

- Horario de atención (para el mensaje de ausencia) · Estación de metro · Convenios · Medios de pago y cuotas sin interés · Duración de la primera consulta · Confirmar que el WhatsApp es el +56 9 6668 2941.
