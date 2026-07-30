/**
 * Utilidades de RUT chileno (Rol Unico Tributario).
 *
 * §1.2: se ACEPTA cualquier formato de entrada (con o sin puntos, con o sin
 * guion, con espacios). La puntuacion nunca es motivo de rechazo: primero se
 * normaliza, luego se valida el digito verificador con modulo 11.
 *
 * IMPORTANTE (produccion): el formato EXACTO que Dentalink espera en el filtro
 * `eq` sobre el RUT del paciente debe CONFIRMARSE contra la documentacion antes
 * de produccion. No esta verificado si Dentalink compara contra `12345678-5`,
 * `12.345.678-5` o solo el cuerpo sin DV. Mientras no se confirme, el
 * `DentalinkApiProvider` (stub) NO debe asumir un formato. Ver ADR-003.
 */

/**
 * Extrae cuerpo y digito verificador de un RUT en cualquier formato.
 * Devuelve `null` si no hay al menos un digito de cuerpo mas un DV valido
 * en forma (digito o K). No valida el modulo 11 aca.
 */
function parseRut(rut: string): { cuerpo: string; dv: string } | null {
  // Deja solo digitos y la letra K (DV), descarta puntos/guiones/espacios.
  const limpio = rut.replace(/[^0-9kK]/g, '').toUpperCase()
  if (limpio.length < 2) return null

  const dv = limpio.slice(-1)
  // Solo el ultimo caracter puede ser 'K'; el cuerpo debe ser numerico.
  const cuerpoRaw = limpio.slice(0, -1)
  if (!/^\d+$/.test(cuerpoRaw)) return null

  // Canonicaliza el cuerpo: sin ceros a la izquierda (pero conserva "0").
  const cuerpo = cuerpoRaw.replace(/^0+/, '') || '0'
  return { cuerpo, dv }
}

/** Calcula el digito verificador (modulo 11) de un cuerpo numerico. */
function calcularDv(cuerpo: string): string {
  let suma = 0
  let multiplicador = 2
  // Recorre de derecha a izquierda con la serie 2,3,4,5,6,7 ciclica.
  for (let i = cuerpo.length - 1; i >= 0; i -= 1) {
    suma += Number(cuerpo[i]) * multiplicador
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1
  }
  const resto = 11 - (suma % 11)
  if (resto === 11) return '0'
  if (resto === 10) return 'K'
  return String(resto)
}

/**
 * Valida un RUT chileno por modulo 11. Acepta cualquier formato de entrada.
 * Devuelve `false` (nunca lanza) ante entradas vacias o mal formadas.
 */
export function validarRut(rut: string): boolean {
  const parsed = parseRut(rut)
  if (parsed === null) return false
  return calcularDv(parsed.cuerpo) === parsed.dv
}

/**
 * Canonicaliza un RUT a la forma `CUERPO-DV`: sin puntos, con guion, DV en
 * mayuscula (la K siempre mayuscula), sin ceros a la izquierda.
 *
 * Acepta cualquier formato de entrada. Lanza si el RUT no es estructuralmente
 * un RUT (para el filtrado tolerante usa `validarRut` primero).
 */
export function canonicalizarRut(rut: string): string {
  const parsed = parseRut(rut)
  if (parsed === null) {
    throw new Error(`RUT invalido: no se puede canonicalizar "${rut}"`)
  }
  return `${parsed.cuerpo}-${parsed.dv}`
}
