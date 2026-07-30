# Datos de la clínica — fuente única de verdad

> Todo dato factual del sitio sale de acá. Nada se inventa (§0). Lo que falta se marca **PENDIENTE**.
> `CONFIRMADO` = entregado por Caro/Marco. Última actualización: 2026-07-15.

## Identificación legal

| Campo | Valor | Estado |
|---|---|---|
| Razón social | **Marco Antonio Barthelemiez Molina E.I.R.L.** | CONFIRMADO |
| RUT | **76.272.502-9** | CONFIRMADO ✓ (validado por módulo 11) |
| Nombre de marca | VITASAB | CONFIRMADO |

## Contacto y ubicación

| Campo | Valor | Estado |
|---|---|---|
| Dirección | **Rosario Sur 91, oficina 303** | CONFIRMADO |
| Comuna | **Las Condes** | CONFIRMADO |
| Teléfono | **+56 9 6668 2941** | CONFIRMADO |
| Estación de metro más cercana | — | **PENDIENTE** (§1.4 "el metro es la dirección real"; puedo verificarlo en mapa si me lo pides) |
| Horarios de atención | — | PENDIENTE |
| ¿Atienden sábados? | — | PENDIENTE (diferenciador, §1.4) |
| Horario/teléfono de urgencias | — | PENDIENTE |
| WhatsApp (número) | ¿mismo +56 9 6668 2941? | PENDIENTE confirmar |

## Equipo profesional

> Cada uno debe enlazarse a su ficha en el **RNPI** (rnpi.superdesalud.gob.cl), art. 48 Código de Ética.
> ⚠️ **A8 / verificación pendiente:** confirmar que cada especialidad declarada es una **especialidad
> reconocida en Chile** (art. 50) y que cada profesional aparece en el RNPI. En particular revisar
> cómo se declara "Implantología Bucomaxilofacial" (nombre exacto de la especialidad reconocida).

### 1. Marco Barthelemiez Molina — Director / dueño
- **Título:** Cirujano Dentista — **Universidad de los Andes**
- **Especialidad:** Implantología Bucomaxilofacial — **Universidad Autónoma**
- **Además realiza:** Rehabilitación, Periodoncia ⟦y las demás del prompt — ver nota abajo⟧
- RNPI: PENDIENTE (link) · Foto: PENDIENTE (sesión dirigida)
- *Nota interna:* al ser cirujano dentista habilitado, **podría ser el dentista supervisor** que
  firma la base de conocimiento **si** se hace el agente de IA (§6.4). A confirmar con él.

### 2. Daniela Figueroa
- **Título:** Cirujano Dentista — **Universidad de los Andes**
- **Especialidad:** Endodoncia
- RNPI: PENDIENTE · Foto: PENDIENTE

### 3. María Ignacia Chacón
- **Título:** Cirujano Dentista — **Universidad del Desarrollo**
- **Especialidad:** Ortodoncia
- RNPI: PENDIENTE · Foto: PENDIENTE

### Mapeo especialidades (§5.1) → profesional

| Especialidad (prompt) | Profesional | Estado |
|---|---|---|
| Implantología | Marco | CONFIRMADO |
| Endodoncia | Daniela | CONFIRMADO |
| Ortodoncia | María Ignacia | CONFIRMADO |
| Rehabilitación | Marco | CONFIRMADO |
| Periodoncia | Marco | CONFIRMADO |
| **Estética facial** | ¿Marco? | **PENDIENTE confirmar** (⚠️ es la de mayor sensibilidad legal, §6.3 + SERNAC) |
| **Odontología general** | ¿Marco? | **PENDIENTE confirmar** |
| **Odontopediatría** | ¿? | **PENDIENTE — nadie designado.** ¿Quién atiende niños? |

> "Sigue las que están en el prompt" quedó registrado, pero **no asigno a Marco Estética facial,
> Odontología general ni Odontopediatría sin confirmación explícita** — especialmente Odontopediatría
> (atención de niños) y Estética facial (régimen legal propio). Cuando me confirmes, actualizo.

## Checklist de datos PENDIENTES — para que Caro complete

> Ordenado por prioridad. Nada de esto se inventa; el sitio ya tiene los huecos marcados esperándolos.

### Bloquea contenido del sitio (lo pidió A1 al redactar)
- **Horarios de atención** (semana) y **¿atienden sábados?** + horario
- **Urgencias:** horario, teléfono directo (¿mismo número general?), y **qué pasa fuera de horario** (para no prometer 24/7)
- **Número de WhatsApp** (¿es el mismo +56 9 6668 2941?)
- **Estación de metro más cercana** a Rosario Sur 91 (§1.4)
- **Medios de pago** (efectivo, débito, crédito, transferencia)
- **Cuotas sin interés:** cuántas y con qué tarjetas/condiciones (§1.4, decisión de compra clave)
- **Años de trayectoria** (para la barra de diferenciadores del home)
- **Convenios:** modalidad Fonasa, isapres con convenio (o política de reembolso), seguros complementarios, uso de excedentes
- **Duración aproximada de la primera consulta**

### Equipo / especialidades (veracidad, art. 46)
- **¿Quién atiende odontopediatría?** Hoy nadie. Si no se ofrece, se retira de la categoría "Familia"
- **¿Marco hace estética facial y odontología general?** Confirmar (estética facial = régimen legal propio, §6.3)
- Links **RNPI** de los 3 profesionales

### Legal / producción
- **N° de resolución sanitaria SEREMI** (por sala) — diferenciador defensivo (§6.7)
- **Credenciales API Dentalink** y si está contratada
- **¿Escáner intraoral / DSD?** (⚠️ crítico, §1.1 — publicar DSD sin tenerlo es publicidad engañosa)

### Presupuesto y decisiones de Marco
- **Presupuesto total y plazo** (bloquea números de tipografía y fotografía)
- **4 decisiones:** 3D→foto · agente IA→v2 · publicar precio 1ª consulta · tipografía libre vs. comercial
- **2 decisiones de copy** (A1 dejó opciones): nombre paraguas de estética (A "Estética y armonía facial" / B "Más allá de la sonrisa" / C "Rostro y sonrisa") · mensaje de hero del home (A/B/C en `docs/contenido/home.md`)
