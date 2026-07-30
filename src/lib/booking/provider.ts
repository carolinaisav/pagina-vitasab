import type {
  Sucursal,
  Profesional,
  Especialidad,
  DisponibilidadQuery,
  Bloque,
  ReservaInput,
  Reserva,
} from './types'

/**
 * Puerto (patron adaptador) del agendamiento VITASAB — §2.2, ADR-003.
 *
 * El sitio depende SOLO de esta interfaz. Las implementaciones concretas
 * (`MockProvider`, `DentalinkApiProvider`, y el futuro `DentalinkLinkProvider`)
 * son intercambiables sin tocar el resto de la app. El switch de implementacion
 * vive en el factory `getBookingProvider()` (`index.ts`).
 */
export interface BookingProvider {
  getSucursales(): Promise<Sucursal[]>
  /** DEBE devolver solo profesionales con `agendaOnline === true`. */
  getProfesionales(): Promise<Profesional[]>
  getEspecialidades(): Promise<Especialidad[]>
  getDisponibilidad(params: DisponibilidadQuery): Promise<Bloque[]>
  crearReserva(params: ReservaInput): Promise<Reserva>
}
