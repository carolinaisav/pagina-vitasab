import type { BookingProvider } from './provider'
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
 * Adaptador a la API de Dentalink (HealthAtom) — STUB no implementado.
 *
 * Estado: bloqueado para produccion hasta CONTRATAR el modulo de API (ADR-003).
 * Cada metodo lanza a proposito. NO implementar el cuerpo real hasta que la API
 * este contratada y las trampas pendientes (3,4,5,8,9,10 y /horariosdisponibles)
 * esten reverificadas contra la doc en vivo (INVESTIGACION-FASE0.md §1).
 *
 * =============================================================================
 * HALLAZGOS VERIFICADOS EN VIVO (INVESTIGACION-FASE0.md, ADR-003) — para la
 * futura implementacion. No son suposiciones: se constataron contra la doc.
 * =============================================================================
 *
 * BASE URL
 *   https://api.dentalink.healthatom.com/api/v1
 *   (La SPA de docs en /docs/ requiere render de navegador; un `fetch` simple
 *    devuelve vacio. La base de la API es la de arriba.)
 *
 * AUTENTICACION  — SOLO EN SERVIDOR
 *   Header:  Authorization: Token {token}
 *   El token es un secreto de servidor. JAMAS exponerlo al cliente: nada de
 *   `NEXT_PUBLIC_*`, nada de enviarlo a componentes de cliente. Debe vivir en
 *   una env de servidor (p.ej. DENTALINK_API_TOKEN) y usarse solo dentro de
 *   route handlers / server actions / este provider en el servidor.
 *
 * FILTROS  (trampa 6 — CONFIRMADA)
 *   Parametro `q` con JSON: {"columna":{"operador":"valor"}}
 *   Operadores exactos: eq, neq, gt, gte, lt, lte, lk
 *   Varios operadores sobre una misma columna => arreglo de condiciones.
 *   CODIFICACION: el ejemplo de la doc usa encodeURI(baseUrl + query_string),
 *   NO encodeURIComponent. Usar encodeURIComponent romperia el JSON del filtro.
 *
 * PAGINACION POR CURSOR  (trampa 7 — CONFIRMADA)
 *   Respuesta trae objeto `links` con current/next/prev y parametro `cursor`
 *   (ya codificado). `links` SOLO aparece cuando hay mas elementos que el
 *   limite por pagina => hay que seguir `next` hasta que no exista.
 *
 * ESTADOS DE CITA  (trampa 2 — mitigacion FACTIBLE)
 *   Endpoints GET/POST /citas/estados y PUT /citas/estados/{id}. Se crea el
 *   estado propio "Web — por confirmar" y se asigna al agendar desde el sitio,
 *   para no caer en el estado por defecto de Dentalink.
 *
 * ⚠️ TRAMPA DE FECHA  (trampa 1 — REFINADA, test obligatorio)
 *   NO es un formato uniforme. Depende de la OPERACION:
 *     - BUSQUEDA / DISPONIBILIDAD (input):   AAAA-MM-DD
 *     - CREAR CITA (input):                  DD/MM/AAAA
 *     - TODA SALIDA de la API:               DD/MM/AAAA
 *   El adaptador normaliza SEGUN la operacion:
 *     - dominio (FechaISO, AAAA-MM-DD)  -> API busqueda: tal cual
 *     - dominio (FechaISO, AAAA-MM-DD)  -> API crear cita: convertir a DD/MM/AAAA
 *     - API salida (DD/MM/AAAA)         -> dominio: convertir a AAAA-MM-DD
 *   Helpers de referencia (implementar y testear al integrar):
 *     isoToDentalink('2026-07-15') === '15/07/2026'
 *     dentalinkToIso('15/07/2026') === '2026-07-15'
 *
 * ⚠️ /horariosdisponibles  (PENDIENTE de reverificar)
 *   La doc afirma "max 100 IDs, rango 2 semanas, GET con body JSON". El GET con
 *   body es un patron inusual y de riesgo: algunos clientes HTTP descartan el
 *   body en GET. Verificar el comportamiento real antes de depender de el.
 *
 * ⚠️ FORMATO DE RUT EN FILTRO eq  (PENDIENTE de confirmar — ver rut.ts)
 *   Confirmar contra la doc el formato exacto del RUT del paciente que Dentalink
 *   espera en el filtro `eq` (con/sin puntos, con/sin guion) antes de produccion.
 * =============================================================================
 */

const NO_IMPLEMENTADO =
  'DentalinkApiProvider: no implementado — requiere API contratada (ver ADR-003)'

export class DentalinkApiProvider implements BookingProvider {
  async getSucursales(): Promise<Sucursal[]> {
    throw new Error(NO_IMPLEMENTADO)
  }

  async getProfesionales(): Promise<Profesional[]> {
    throw new Error(NO_IMPLEMENTADO)
  }

  async getEspecialidades(): Promise<Especialidad[]> {
    throw new Error(NO_IMPLEMENTADO)
  }

  async getDisponibilidad(_params: DisponibilidadQuery): Promise<Bloque[]> {
    throw new Error(NO_IMPLEMENTADO)
  }

  async crearReserva(_params: ReservaInput): Promise<Reserva> {
    throw new Error(NO_IMPLEMENTADO)
  }
}
