import type { BookingProvider } from './provider'
import { MockProvider } from './mock-provider'
import { DentalinkApiProvider } from './dentalink-provider'

export type { BookingProvider } from './provider'
export type {
  Sucursal,
  Profesional,
  Especialidad,
  DisponibilidadQuery,
  Bloque,
  ReservaInput,
  Reserva,
  PacienteInput,
  EstadoReserva,
  FechaISO,
  HoraHHmm,
} from './types'
export { MockProvider } from './mock-provider'
export { DentalinkApiProvider } from './dentalink-provider'
export { validarRut, canonicalizarRut } from './rut'

/**
 * Valores validos de la env `BOOKING_PROVIDER`. Default: `mock`.
 * `dentalink` solo funcionara cuando la API este contratada (ADR-003); hoy su
 * provider es un stub que lanza en cada metodo.
 */
export type BookingProviderId = 'mock' | 'dentalink'

/**
 * Factory del `BookingProvider` (ADR-003).
 *
 * Lee `process.env.BOOKING_PROVIDER` (variable de SERVIDOR; nunca `NEXT_PUBLIC_*`
 * porque el proveedor real usa un token secreto) y devuelve la implementacion
 * correspondiente. Por defecto — y ante cualquier valor no reconocido — devuelve
 * `MockProvider`, de modo que el desarrollo avanza sin credenciales.
 */
export function getBookingProvider(): BookingProvider {
  const id = process.env.BOOKING_PROVIDER

  switch (id) {
    case 'dentalink':
      return new DentalinkApiProvider()
    case 'mock':
    case undefined:
    case '':
      return new MockProvider()
    default:
      // Valor desconocido: fallar seguro hacia el mock, no romper el arranque.
      return new MockProvider()
  }
}
