import type { BookingProvider } from './provider'
import type {
  Sucursal,
  Profesional,
  Especialidad,
  DisponibilidadQuery,
  Bloque,
  ReservaInput,
  Reserva,
  FechaISO,
  HoraHHmm,
} from './types'
import { validarRut, canonicalizarRut } from './rut'

/**
 * Implementacion en memoria de `BookingProvider` para desarrollo local (ADR-003).
 * Default en dev. Datos de prueba realistas basados en DATOS-CLINICA.md.
 *
 * DETERMINISTA a proposito: sin `Math.random`, sin `Date.now()` a nivel modulo.
 * La disponibilidad y los IDs de reserva se derivan por hash de la entrada, de
 * modo que las mismas consultas producen siempre el mismo resultado (necesario
 * para tests reproducibles).
 */

const SUCURSAL_LAS_CONDES: Sucursal = {
  id: 'suc-lascondes',
  nombre: 'VITASAB — Las Condes',
  comuna: 'Las Condes',
  direccion: 'Rosario Sur 91, oficina 303',
  telefono: '+56966682941',
}

const ESPECIALIDADES: readonly Especialidad[] = [
  { id: 'esp-implantologia', nombre: 'Implantología' },
  { id: 'esp-endodoncia', nombre: 'Endodoncia' },
  { id: 'esp-ortodoncia', nombre: 'Ortodoncia' },
]

// Los 3 profesionales reales confirmados (DATOS-CLINICA.md). agendaOnline: true.
const PROFESIONALES: readonly Profesional[] = [
  {
    id: 'prof-marco',
    nombre: 'Marco Barthelemiez Molina',
    especialidadIds: ['esp-implantologia'],
    agendaOnline: true,
  },
  {
    id: 'prof-daniela',
    nombre: 'Daniela Figueroa',
    especialidadIds: ['esp-endodoncia'],
    agendaOnline: true,
  },
  {
    id: 'prof-maria-ignacia',
    nombre: 'María Ignacia Chacón',
    especialidadIds: ['esp-ortodoncia'],
    agendaOnline: true,
  },
]

// Horas de inicio ofrecidas (jornada manana y tarde). Bloques de 30 min.
const HORAS_INICIO: readonly HoraHHmm[] = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
]

const DURACION_MIN = 30

/** Hash FNV-1a de 32 bits (determinista, sin dependencias). */
function hash32(input: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i)
    // Multiplicacion FNV con desbordamiento a 32 bits sin signo.
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h >>> 0
}

/** Parsea `AAAA-MM-DD` a epoch UTC (ms) o `null` si no es valido. */
function parseFechaISO(fecha: FechaISO): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(fecha)
  if (m === null) return null
  const year = Number(m[1])
  const month = Number(m[2])
  const day = Number(m[3])
  if (month < 1 || month > 12 || day < 1 || day > 31) return null
  const ts = Date.UTC(year, month - 1, day)
  const d = new Date(ts)
  // Rechaza fechas "desbordadas" (ej. 2026-02-31 -> marzo).
  if (
    d.getUTCFullYear() !== year ||
    d.getUTCMonth() !== month - 1 ||
    d.getUTCDate() !== day
  ) {
    return null
  }
  return ts
}

/** Formatea epoch UTC (ms) a `AAAA-MM-DD`. */
function formatFechaISO(ts: number): FechaISO {
  const d = new Date(ts)
  const y = String(d.getUTCFullYear()).padStart(4, '0')
  const mo = String(d.getUTCMonth() + 1).padStart(2, '0')
  const da = String(d.getUTCDate()).padStart(2, '0')
  return `${y}-${mo}-${da}`
}

/** Suma minutos a una hora `HH:mm` (asume no cruza medianoche en este mock). */
function sumarMinutos(hora: HoraHHmm, minutos: number): HoraHHmm {
  const [h, m] = hora.split(':').map(Number)
  const total = h * 60 + m + minutos
  const hh = Math.floor(total / 60) % 24
  const mm = total % 60
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
}

const MS_POR_DIA = 24 * 60 * 60 * 1000
// Tope defensivo: el mock no genera mas de 60 dias por consulta.
const MAX_DIAS = 60

export class MockProvider implements BookingProvider {
  async getSucursales(): Promise<Sucursal[]> {
    return [{ ...SUCURSAL_LAS_CONDES }]
  }

  async getProfesionales(): Promise<Profesional[]> {
    // Contrato de la interfaz: solo agendaOnline === true.
    return PROFESIONALES.filter((p) => p.agendaOnline).map((p) => ({
      ...p,
      especialidadIds: [...p.especialidadIds],
    }))
  }

  async getEspecialidades(): Promise<Especialidad[]> {
    return ESPECIALIDADES.map((e) => ({ ...e }))
  }

  async getDisponibilidad(params: DisponibilidadQuery): Promise<Bloque[]> {
    if (params.sucursalId !== SUCURSAL_LAS_CONDES.id) return []

    const desde = parseFechaISO(params.fechaDesde)
    const hasta = parseFechaISO(params.fechaHasta)
    if (desde === null || hasta === null || desde > hasta) return []

    // Profesionales candidatos segun filtros de la consulta.
    const candidatos = PROFESIONALES.filter((p) => {
      if (!p.agendaOnline) return false
      if (params.profesionalId !== undefined && p.id !== params.profesionalId) {
        return false
      }
      if (
        params.especialidadId !== undefined &&
        !p.especialidadIds.includes(params.especialidadId)
      ) {
        return false
      }
      return true
    })
    if (candidatos.length === 0) return []

    const bloques: Bloque[] = []
    let ts = desde
    let dias = 0
    while (ts <= hasta && dias < MAX_DIAS) {
      const fecha = formatFechaISO(ts)
      const diaSemana = new Date(ts).getUTCDay() // 0=domingo, 6=sabado
      const esHabil = diaSemana >= 1 && diaSemana <= 5 // lunes a viernes
      if (esHabil) {
        for (const prof of candidatos) {
          for (const horaInicio of HORAS_INICIO) {
            // Disponibilidad determinista: ~2 de cada 3 bloques libres.
            const libre = hash32(`${prof.id}|${fecha}|${horaInicio}`) % 3 !== 0
            if (!libre) continue
            bloques.push({
              id: `blq-${prof.id}-${fecha}-${horaInicio.replace(':', '')}`,
              sucursalId: SUCURSAL_LAS_CONDES.id,
              profesionalId: prof.id,
              fecha,
              horaInicio,
              horaFin: sumarMinutos(horaInicio, DURACION_MIN),
              disponible: true,
            })
          }
        }
      }
      ts += MS_POR_DIA
      dias += 1
    }
    return bloques
  }

  async crearReserva(params: ReservaInput): Promise<Reserva> {
    if (!validarRut(params.paciente.rut)) {
      throw new Error('MockProvider.crearReserva: RUT del paciente invalido')
    }
    const pacienteRut = canonicalizarRut(params.paciente.rut)

    // ID y codigo deterministas derivados de la entrada (sin random ni Date.now).
    const semilla = hash32(
      `${params.sucursalId}|${params.profesionalId}|${params.bloqueId}|${pacienteRut}`,
    )
    const id = `res-${semilla.toString(16).padStart(8, '0')}`
    const codigoConfirmacion = `VS-${(semilla % 1_000_000).toString().padStart(6, '0')}`

    return {
      id,
      estado: 'pendiente', // equivale al estado "Web — por confirmar" (ADR-003)
      sucursalId: params.sucursalId,
      profesionalId: params.profesionalId,
      fecha: params.fecha,
      horaInicio: params.horaInicio,
      especialidadId: params.especialidadId,
      pacienteRut,
      codigoConfirmacion,
    }
  }
}
