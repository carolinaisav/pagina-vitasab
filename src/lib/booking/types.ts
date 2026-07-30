/**
 * Tipos de dominio del agendamiento VITASAB.
 *
 * Estos tipos son el modelo interno, independiente del proveedor (§2.2, ADR-003).
 * Cada implementacion de `BookingProvider` traduce desde/hacia estos tipos:
 * el `MockProvider` los produce directamente; el `DentalinkApiProvider` mapea
 * la forma de la API de Dentalink (y sus trampas de formato de fecha) hacia aca.
 *
 * Principio de minimizacion de datos (Ley 21.719, art. 6 c): solo se modelan
 * los datos personales estrictamente necesarios para reservar una hora. No hay
 * datos de salud (motivo clinico, diagnostico, tratamiento) en estos tipos.
 */

/**
 * Fecha calendario en formato ISO `AAAA-MM-DD`.
 *
 * Es el formato de dominio interno y coincide con el que Dentalink usa para
 * BUSQUEDA/DISPONIBILIDAD. OJO: para CREAR una cita, Dentalink exige
 * `DD/MM/AAAA` y toda su salida viene en `DD/MM/AAAA` — esa conversion vive
 * dentro del `DentalinkApiProvider`, nunca en el modelo de dominio.
 * (Ver INVESTIGACION-FASE0.md, trampa 1, y `dentalink-provider.ts`.)
 */
export type FechaISO = string

/** Hora del dia en formato 24h `HH:mm` (por ejemplo `"09:30"`). */
export type HoraHHmm = string

/** Sucursal / centro de atencion. */
export interface Sucursal {
  readonly id: string
  readonly nombre: string
  readonly comuna: string
  readonly direccion: string
  /** Telefono de contacto de la sucursal, en formato E.164 chileno cuando exista. */
  readonly telefono?: string
}

/**
 * Profesional agendable.
 *
 * `agendaOnline` es la bandera que decide si el profesional se ofrece en el
 * flujo publico de reserva. `getProfesionales()` DEBE devolver solo aquellos
 * con `agendaOnline === true` (ver `BookingProvider`).
 */
export interface Profesional {
  readonly id: string
  readonly nombre: string
  /** IDs de las especialidades que este profesional atiende (referencia a `Especialidad.id`). */
  readonly especialidadIds: readonly string[]
  /** Si es true, el profesional aparece en el agendamiento online. */
  readonly agendaOnline: boolean
}

/** Especialidad clinica ofrecida (ej. Implantologia, Endodoncia, Ortodoncia). */
export interface Especialidad {
  readonly id: string
  readonly nombre: string
}

/**
 * Parametros para consultar disponibilidad.
 *
 * `fechaDesde`/`fechaHasta` van en `AAAA-MM-DD` (formato de busqueda de Dentalink).
 * El rango es inclusivo. Al menos un criterio de profesional o especialidad
 * deberia acompanar la sucursal para acotar resultados.
 */
export interface DisponibilidadQuery {
  readonly sucursalId: string
  readonly profesionalId?: string
  readonly especialidadId?: string
  readonly fechaDesde: FechaISO
  readonly fechaHasta: FechaISO
}

/** Bloque horario ofrecido para reservar. */
export interface Bloque {
  readonly id: string
  readonly sucursalId: string
  readonly profesionalId: string
  readonly fecha: FechaISO
  readonly horaInicio: HoraHHmm
  readonly horaFin: HoraHHmm
  /** Un bloque libre para reservar. Los ocupados normalmente no se devuelven. */
  readonly disponible: boolean
}

/**
 * Datos minimos del paciente para reservar.
 *
 * Solo lo indispensable para identificar la cita y enviar la confirmacion
 * legal del art. 12 A. Sin datos de salud.
 */
export interface PacienteInput {
  /**
   * RUT del paciente. Se acepta en cualquier formato de entrada (con o sin
   * puntos, con o sin guion) y se canonicaliza con `canonicalizarRut` antes
   * de persistir o enviar a Dentalink. Ver `rut.ts`.
   */
  readonly rut: string
  readonly nombre: string
  readonly apellido: string
  readonly email: string
  /** Telefono de contacto en formato E.164 chileno (ej. `+56966682941`). */
  readonly telefono: string
}

/** Datos para crear una reserva. */
export interface ReservaInput {
  readonly sucursalId: string
  readonly profesionalId: string
  /** Bloque elegido; su fecha/hora son la fuente de verdad de la cita. */
  readonly bloqueId: string
  readonly fecha: FechaISO
  readonly horaInicio: HoraHHmm
  readonly especialidadId?: string
  readonly paciente: PacienteInput
}

/** Estado de una reserva en el modelo de dominio. */
export type EstadoReserva =
  | 'pendiente'
  | 'confirmada'
  | 'cancelada'

/** Reserva creada. */
export interface Reserva {
  readonly id: string
  readonly estado: EstadoReserva
  readonly sucursalId: string
  readonly profesionalId: string
  readonly fecha: FechaISO
  readonly horaInicio: HoraHHmm
  readonly especialidadId?: string
  /** RUT del paciente ya canonicalizado (sin puntos, con guion, DV en mayuscula). */
  readonly pacienteRut: string
  /** Codigo de confirmacion legible para mostrar al paciente, cuando exista. */
  readonly codigoConfirmacion?: string
}
